import { useCallback, useEffect, useMemo, useState } from "react";
import {
  defaultBookingSettings,
  defaultHomepagePricingPlans,
  defaultPricingCatalog,
  normalizeBookingSettings,
  normalizeHomepagePricingPlans,
  normalizePricingCatalog,
} from "../../shared/pricingCatalog.js";

const PRICING_API = "/api/pricing-catalog";

const parseJson = async (response) => {
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(payload?.error || "Request failed");
  }
  return payload;
};

export const usePricingCatalog = () => {
  const [catalog, setCatalog] = useState(defaultPricingCatalog);
  const [homepagePlans, setHomepagePlans] = useState(defaultHomepagePricingPlans);
  const [bookingSettings, setBookingSettings] = useState(defaultBookingSettings);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCatalog = useCallback(async () => {
    setLoading(true);
    try {
      const payload = await fetch(PRICING_API, {
        headers: { Accept: "application/json" },
      }).then(parseJson);
      setCatalog(normalizePricingCatalog(payload.items || []));
      setHomepagePlans(normalizeHomepagePricingPlans(payload.homepagePlans || []));
      setBookingSettings(normalizeBookingSettings(payload.bookingSettings || {}));
      setError("");
    } catch (fetchError) {
      setCatalog(defaultPricingCatalog);
      setHomepagePlans(defaultHomepagePricingPlans);
      setBookingSettings(defaultBookingSettings);
      setError(fetchError.message || "Unable to load live pricing data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCatalog();
  }, [loadCatalog]);

  const catalogMap = useMemo(
    () => new Map(catalog.map((item) => [item.slug, item])),
    [catalog],
  );

  return {
    catalog,
    catalogMap,
    homepagePlans,
    bookingSettings,
    loading,
    error,
    reloadCatalog: loadCatalog,
    setCatalog,
    setHomepagePlans,
    setBookingSettings,
  };
};

export const savePricingCatalog = async ({ adminSecret, authToken, items, homepagePlans, bookingSettings }) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`;
  }

  if (adminSecret) {
    headers["x-admin-secret"] = adminSecret;
  }

  const payload = await fetch(PRICING_API, {
    method: "POST",
    headers,
    body: JSON.stringify({ items, homepagePlans, bookingSettings }),
  }).then(parseJson);

  return {
    items: normalizePricingCatalog(payload.items || []),
    homepagePlans: normalizeHomepagePricingPlans(payload.homepagePlans || []),
    bookingSettings: normalizeBookingSettings(payload.bookingSettings || {}),
  };
};
