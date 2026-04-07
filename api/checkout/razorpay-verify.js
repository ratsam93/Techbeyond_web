import crypto from "node:crypto";
import { allowMethods, sendJson } from "../_lib/http.js";
import { storePaymentRecord } from "../_lib/paymentStorage.js";
import { calculatePricingAmount } from "../../src/shared/pricingCatalog.js";
import { getStoredPricingCatalog } from "../_lib/pricingStorage.js";

export default async function handler(request, response) {
  if (!allowMethods(request, response, ["POST"])) {
    return;
  }

  if (!process.env.RAZORPAY_KEY_SECRET) {
    sendJson(response, 500, { error: "Razorpay verification secret is not configured." });
    return;
  }

  try {
    const body = typeof request.body === "string" ? JSON.parse(request.body || "{}") : request.body || {};
    const {
      slug,
      quantity = 1,
      customer = {},
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    } = body;
    const pricingItem = (await getStoredPricingCatalog()).find((item) => item.slug === slug);

    if (!pricingItem) {
      sendJson(response, 400, { error: "Unknown service." });
      return;
    }

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpayOrderId}|${razorpayPaymentId}`)
      .digest("hex");

    const isValid = expectedSignature === razorpaySignature;

    const record = {
      id: razorpayPaymentId || crypto.randomUUID(),
      status: isValid ? "paid" : "failed",
      slug,
      title: pricingItem.title,
      amount: calculatePricingAmount(pricingItem, quantity),
      currency: pricingItem.currency || "INR",
      quantity,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      customer: {
        name: customer.name || "",
        email: customer.email || "",
        phone: customer.phone || "",
      },
      createdAt: new Date().toISOString(),
    };

    await storePaymentRecord(record);

    if (!isValid) {
      sendJson(response, 400, { error: "Payment signature verification failed." });
      return;
    }

    sendJson(response, 200, {
      verified: true,
      record: {
        id: record.id,
        status: record.status,
        slug: record.slug,
        title: record.title,
        amount: record.amount,
        currency: record.currency,
      },
    });
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Unable to verify payment." });
  }
}
