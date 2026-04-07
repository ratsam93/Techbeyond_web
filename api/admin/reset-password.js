import { createSessionToken, resetAdminPassword } from "../_lib/adminAuth.js";
import { allowMethods, parseRequestBody, sendJson } from "../_lib/http.js";

export default async function handler(request, response) {
  if (!allowMethods(request, response, ["POST"])) {
    return;
  }

  try {
    const body = parseRequestBody(request);
    const token = String(body.token || "");
    const password = String(body.password || "");

    if (password.length < 10) {
      sendJson(response, 400, { error: "Use a password with at least 10 characters." });
      return;
    }

    const adminState = await resetAdminPassword({ token, password });
    const sessionToken = createSessionToken(adminState.username);

    sendJson(response, 200, {
      ok: true,
      token: sessionToken,
      username: adminState.username,
    });
  } catch (error) {
    sendJson(response, 400, { error: error.message || "Unable to reset the password." });
  }
}
