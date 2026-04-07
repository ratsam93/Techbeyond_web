import crypto from "node:crypto";
import { allowMethods, sendJson } from "../_lib/http.js";
import { calculatePricingAmount } from "../../src/shared/pricingCatalog.js";
import { getStoredPricingCatalog } from "../_lib/pricingStorage.js";

const authHeader = () =>
  `Basic ${Buffer.from(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`).toString("base64")}`;

export default async function handler(request, response) {
  if (!allowMethods(request, response, ["POST"])) {
    return;
  }

  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    sendJson(response, 500, { error: "Razorpay environment variables are not configured." });
    return;
  }

  try {
    const body = typeof request.body === "string" ? JSON.parse(request.body || "{}") : request.body || {};
    const { slug, quantity = 1, customer = {} } = body;
    const pricingItem = (await getStoredPricingCatalog()).find((item) => item.slug === slug);

    if (!pricingItem || !pricingItem.checkoutEnabled || pricingItem.pricingMode !== "instant") {
      sendJson(response, 400, { error: "This service is not available for direct checkout." });
      return;
    }

    const amount = calculatePricingAmount(pricingItem, quantity);
    const notes = {
      slug,
      quantity: String(quantity),
      customerName: customer.name || "",
      customerEmail: customer.email || "",
      customerPhone: customer.phone || "",
    };

    const receipt = `tb-${slug}-${crypto.randomBytes(4).toString("hex")}`;

    const orderResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: authHeader(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency: pricingItem.currency || "INR",
        receipt,
        notes,
      }),
    });

    const orderPayload = await orderResponse.json();
    if (!orderResponse.ok) {
      sendJson(response, orderResponse.status, { error: orderPayload?.error?.description || "Unable to create Razorpay order." });
      return;
    }

    sendJson(response, 200, {
      keyId: process.env.RAZORPAY_KEY_ID,
      order: orderPayload,
      pricingItem: {
        slug: pricingItem.slug,
        title: pricingItem.title,
        amount,
        currency: pricingItem.currency,
      },
    });
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Unable to initialize checkout." });
  }
}
