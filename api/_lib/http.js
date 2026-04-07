export const sendJson = (response, status, payload) => {
  response.status(status).json(payload);
};

export const allowMethods = (request, response, methods) => {
  if (!methods.includes(request.method)) {
    sendJson(response, 405, { error: "Method not allowed" });
    return false;
  }

  return true;
};

export const getAdminSecret = (request) =>
  request.headers["x-admin-secret"] || request.headers["X-Admin-Secret"] || "";

export const requireAdminSecret = (request, response) => {
  const configuredSecret = process.env.PRICING_ADMIN_SECRET;
  const providedSecret = String(getAdminSecret(request) || "");

  if (!configuredSecret || providedSecret !== configuredSecret) {
    sendJson(response, 401, { error: "Unauthorized" });
    return false;
  }

  return true;
};

export const parseRequestBody = (request) => {
  if (typeof request.body === "string") {
    return JSON.parse(request.body || "{}");
  }
  return request.body || {};
};
