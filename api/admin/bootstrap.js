import { getAdminBootstrap } from "../_lib/adminAuth.js";
import { allowMethods, sendJson } from "../_lib/http.js";

export default async function handler(request, response) {
  if (!allowMethods(request, response, ["GET"])) {
    return;
  }

  try {
    const payload = await getAdminBootstrap();
    sendJson(response, 200, payload);
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Unable to load admin settings." });
  }
}
