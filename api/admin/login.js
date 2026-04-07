import { authenticateAdmin, createSessionToken } from "../_lib/adminAuth.js";
import { allowMethods, parseRequestBody, sendJson } from "../_lib/http.js";

export default async function handler(request, response) {
  if (!allowMethods(request, response, ["POST"])) {
    return;
  }

  try {
    const body = parseRequestBody(request);
    const username = String(body.username || "").trim();
    const password = String(body.password || "");

    await authenticateAdmin({ username, password });
    const token = createSessionToken(username);

    sendJson(response, 200, {
      token,
      username,
    });
  } catch (error) {
    sendJson(response, 401, { error: error.message || "Unable to authenticate admin." });
  }
}
