import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { list, put } from "@vercel/blob";
import {
  defaultBookingSettings,
  defaultHomepagePricingPlans,
  defaultPricingCatalog,
  normalizeBookingSettings,
  normalizeHomepagePricingPlans,
  normalizePricingCatalog,
} from "../../src/shared/pricingCatalog.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCAL_STORAGE_DIR = path.resolve(__dirname, "..", "..", ".local-data");
const LOCAL_FILE_PATH = path.join(LOCAL_STORAGE_DIR, "pricing-catalog.json");
const BLOB_PATHNAME = "techbeyond/pricing-catalog.json";

const hasBlobToken = () => Boolean(process.env.BLOB_READ_WRITE_TOKEN);

const ensureLocalDir = async () => {
  await mkdir(LOCAL_STORAGE_DIR, { recursive: true });
};

const normalizePricingState = (payload = {}) => ({
  items: normalizePricingCatalog(payload.items || []),
  homepagePlans: normalizeHomepagePricingPlans(payload.homepagePlans || []),
  bookingSettings: normalizeBookingSettings(payload.bookingSettings || {}),
});

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

  const payload = await fetch(blob.url).then((response) => response.json());
  return normalizePricingState(payload);
};

const loadFromLocalFile = async () => {
  try {
    const raw = await readFile(LOCAL_FILE_PATH, "utf8");
    const payload = JSON.parse(raw);
    return normalizePricingState(payload);
  } catch {
    return null;
  }
};

export const getStoredPricingState = async () =>
  (hasBlobToken() ? await loadFromBlob() : await loadFromLocalFile()) || {
    items: defaultPricingCatalog,
    homepagePlans: defaultHomepagePricingPlans,
    bookingSettings: defaultBookingSettings,
  };

export const getStoredPricingCatalog = async () => (await getStoredPricingState()).items;

export const getStoredHomepagePricingPlans = async () => (await getStoredPricingState()).homepagePlans;

export const getStoredBookingSettings = async () => (await getStoredPricingState()).bookingSettings;

export const saveStoredPricingState = async ({ items = [], homepagePlans = [], bookingSettings = {} } = {}) => {
  const normalizedState = {
    items: normalizePricingCatalog(items),
    homepagePlans: normalizeHomepagePricingPlans(homepagePlans),
    bookingSettings: normalizeBookingSettings(bookingSettings),
  };
  const payload = JSON.stringify(
    {
      updatedAt: new Date().toISOString(),
      items: normalizedState.items,
      homepagePlans: normalizedState.homepagePlans,
      bookingSettings: normalizedState.bookingSettings,
    },
    null,
    2,
  );

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

  return normalizedState;
};

export const saveStoredPricingCatalog = async (items = []) => {
  const currentState = await getStoredPricingState();
  return (
    await saveStoredPricingState({
      items,
      homepagePlans: currentState.homepagePlans,
      bookingSettings: currentState.bookingSettings,
    })
  ).items;
};
