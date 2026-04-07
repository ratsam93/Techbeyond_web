import { createPasswordReset, sendPasswordResetEmail } from "../_lib/adminAuth.js";
import { allowMethods, sendJson } from "../_lib/http.js";

export default async function handler(request, response) {
  if (!allowMethods(request, response, ["POST"])) {
    return;
  }

  try {
    const { token, email } = await createPasswordReset();
    await sendPasswordResetEmail({ token, email });
    sendJson(response, 200, {
      ok: true,
      message: "A password reset link has been sent to the configured admin email.",
    });
  } catch (error) {
    sendJson(response, 400, { error: error.message || "Unable to start password reset." });
  }
}
