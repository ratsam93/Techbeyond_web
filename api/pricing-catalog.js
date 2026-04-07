import { getBearerToken, verifySessionToken } from "./_lib/adminAuth.js";
import { allowMethods, parseRequestBody, requireAdminSecret, sendJson } from "./_lib/http.js";
import { getStoredPricingState, saveStoredPricingState } from "./_lib/pricingStorage.js";

export default async function handler(request, response) {
  if (!allowMethods(request, response, ["GET", "POST"])) {
    return;
  }

  try {
    if (request.method === "GET") {
      const state = await getStoredPricingState();
      sendJson(response, 200, state);
      return;
    }

    const hasValidSession = Boolean(verifySessionToken(getBearerToken(request)));
    if (!hasValidSession && !requireAdminSecret(request, response)) {
      return;
    }

    const body = parseRequestBody(request);
    const items = Array.isArray(body.items) ? body.items : [];
    const homepagePlans = Array.isArray(body.homepagePlans) ? body.homepagePlans : [];
    const bookingSettings = body.bookingSettings && typeof body.bookingSettings === "object" ? body.bookingSettings : {};
    const savedState = await saveStoredPricingState({ items, homepagePlans, bookingSettings });
    sendJson(response, 200, savedState);
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Unable to process pricing catalog request." });
  }
}
