import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { list, put } from "@vercel/blob";
import { sendJson } from "./http.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCAL_STORAGE_DIR = path.resolve(__dirname, "..", "..", ".local-data");
const LOCAL_FILE_PATH = path.join(LOCAL_STORAGE_DIR, "admin-auth.json");
const BLOB_PATHNAME = "techbeyond/admin-auth.json";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12;
const RESET_TTL_MS = 1000 * 60 * 30;

const hasBlobToken = () => Boolean(process.env.BLOB_READ_WRITE_TOKEN);

const ensureLocalDir = async () => {
  await mkdir(LOCAL_STORAGE_DIR, { recursive: true });
};

const sha256 = (value) => createHash("sha256").update(String(value)).digest("hex");

const base64UrlEncode = (value) => Buffer.from(value).toString("base64url");
const base64UrlDecode = (value) => Buffer.from(value, "base64url").toString("utf8");

const signValue = (value) =>
  createHmac("sha256", String(process.env.ADMIN_SESSION_SECRET || process.env.PRICING_ADMIN_SECRET || "techbeyond-admin-session"))
    .update(value)
    .digest("hex");

const safeEqual = (left, right) => {
  const leftBuffer = Buffer.from(String(left));
  const rightBuffer = Buffer.from(String(right));
  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }
  return timingSafeEqual(leftBuffer, rightBuffer);
};

const defaultState = () => ({
  username: process.env.ADMIN_USERNAME || "admin",
  email: process.env.ADMIN_EMAIL || process.env.RESEND_FROM_EMAIL || "",
  passwordHash: process.env.ADMIN_PASSWORD ? sha256(process.env.ADMIN_PASSWORD) : "",
  reset: null,
  updatedAt: new Date().toISOString(),
});

const normalizeState = (state = {}) => {
  const defaults = defaultState();
  return {
    username: state.username || defaults.username,
    email: state.email || defaults.email,
    passwordHash: state.passwordHash || defaults.passwordHash,
    reset: state.reset || null,
    updatedAt: state.updatedAt || defaults.updatedAt,
  };
};

const loadFromBlob = async () => {
  const result = await list({
    token: process.env.BLOB_READ_WRITE_TOKEN,
    prefix: BLOB_PATHNAME,
    limit: 1,
  });

  const blob = result.blobs?.[0];
  if (!blob?.url) {
    return null;
  }

  return fetch(blob.url).then((response) => response.json());
};

const loadFromLocalFile = async () => {
  try {
    const raw = await readFile(LOCAL_FILE_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const saveState = async (state) => {
  const payload = JSON.stringify(normalizeState(state), null, 2);

  if (hasBlobToken()) {
    await put(BLOB_PATHNAME, payload, {
      access: "public",
      addRandomSuffix: false,
      token: process.env.BLOB_READ_WRITE_TOKEN,
      contentType: "application/json",
    });
  } else {
    await ensureLocalDir();
    await writeFile(LOCAL_FILE_PATH, payload, "utf8");
  }
};

export const getAdminState = async () => {
  const storedState = hasBlobToken() ? await loadFromBlob() : await loadFromLocalFile();
  const state = normalizeState(storedState || {});

  if (!storedState && state.passwordHash) {
    await saveState(state);
  }

  return state;
};

export const getAdminBootstrap = async () => {
  const state = await getAdminState();
  return {
    configured: Boolean(state.passwordHash && state.email && state.username),
    usernameHint: state.username,
    recoveryEmailMasked: state.email ? `${state.email.slice(0, 2)}***${state.email.slice(state.email.indexOf("@"))}` : "",
    emailEnabled: Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL),
  };
};

export const authenticateAdmin = async ({ username, password }) => {
  const state = await getAdminState();
  if (!state.passwordHash) {
    throw new Error("Admin credentials are not configured.");
  }

  const validUsername = safeEqual(state.username, username);
  const validPassword = safeEqual(state.passwordHash, sha256(password));

  if (!validUsername || !validPassword) {
    throw new Error("Invalid username or password.");
  }

  return state;
};

export const createSessionToken = (username) => {
  const payload = {
    username,
    exp: Date.now() + SESSION_TTL_MS,
  };
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = signValue(encodedPayload);
  return `${encodedPayload}.${signature}`;
};

export const verifySessionToken = (token) => {
  const [encodedPayload, signature] = String(token || "").split(".");
  if (!encodedPayload || !signature) {
    return null;
  }

  if (!safeEqual(signValue(encodedPayload), signature)) {
    return null;
  }

  try {
    const payload = JSON.parse(base64UrlDecode(encodedPayload));
    if (!payload?.username || !payload?.exp || payload.exp < Date.now()) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
};

export const getBearerToken = (request) => {
  const authorization = request.headers.authorization || request.headers.Authorization || "";
  if (!authorization.startsWith("Bearer ")) {
    return "";
  }
  return authorization.slice("Bearer ".length).trim();
};

export const requireAdminSession = (request, response) => {
  const session = verifySessionToken(getBearerToken(request));
  if (!session) {
    sendJson(response, 401, { error: "Admin session required." });
    return false;
  }
  return true;
};

export const createPasswordReset = async () => {
  const state = await getAdminState();
  if (!state.email) {
    throw new Error("Admin recovery email is not configured.");
  }

  const token = randomBytes(24).toString("hex");
  const nextState = {
    ...state,
    reset: {
      tokenHash: sha256(token),
      expiresAt: Date.now() + RESET_TTL_MS,
    },
    updatedAt: new Date().toISOString(),
  };

  await saveState(nextState);
  return {
    token,
    email: state.email,
  };
};

export const resetAdminPassword = async ({ token, password }) => {
  const state = await getAdminState();
  const reset = state.reset;

  if (!reset?.tokenHash || !reset?.expiresAt) {
    throw new Error("No active password reset request was found.");
  }

  if (reset.expiresAt < Date.now()) {
    throw new Error("The password reset link has expired.");
  }

  if (!safeEqual(reset.tokenHash, sha256(token))) {
    throw new Error("The password reset token is invalid.");
  }

  const nextState = {
    ...state,
    passwordHash: sha256(password),
    reset: null,
    updatedAt: new Date().toISOString(),
  };

  await saveState(nextState);
  return nextState;
};

export const sendPasswordResetEmail = async ({ token, email }) => {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    throw new Error("Recovery email is not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL.");
  }

  const appBaseUrl = process.env.APP_BASE_URL || "http://localhost:5173";
  const resetUrl = `${appBaseUrl.replace(/\/$/, "")}/pricing-admin?reset=${encodeURIComponent(token)}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL,
      to: [email],
      subject: "Techbeyond pricing admin password reset",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>Reset your Techbeyond pricing admin password</h2>
          <p>A password reset was requested for the pricing admin.</p>
          <p><a href="${resetUrl}">Reset password</a></p>
          <p>This link expires in 30 minutes.</p>
        </div>
      `,
    }),
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(payload?.message || "Unable to send the reset email.");
  }

  return payload;
};
