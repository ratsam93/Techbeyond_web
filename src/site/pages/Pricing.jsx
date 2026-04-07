import { useDeferredValue, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { usePricingCatalog } from "../hooks/usePricingCatalog.js";
import {
  calculatePricingAmount,
  formatPrice,
} from "../../shared/pricingCatalog.js";
import { getServiceCategoryBySlug } from "../data/content.js";

const RAZORPAY_SCRIPT_SRC = "https://checkout.razorpay.com/v1/checkout.js";
const GROUPS_PER_PAGE = 2;

const scriptCache = new Map();

const loadScript = (src) => {
  if (scriptCache.has(src)) {
    return scriptCache.get(src);
  }

  const promise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error("Unable to load the Razorpay checkout script."));
    document.body.appendChild(script);
  });

  scriptCache.set(src, promise);
  return promise;
};

const groupCatalogByCategory = (catalog) => {
  const groups = new Map();

  catalog.forEach((item) => {
    const groupKey = item.parentSlug || item.slug;
    if (!groups.has(groupKey)) {
      const category = getServiceCategoryBySlug(groupKey);
      groups.set(groupKey, {
        key: groupKey,
        title: category?.title || item.title,
        summary: category?.summary || item.summary,
        items: [],
      });
    }

    groups.get(groupKey).items.push(item);
  });

  return Array.from(groups.values()).sort((left, right) => left.title.localeCompare(right.title));
};

const renderStatusCopy = (status, serviceSlug) => {
  if (status === "success") {
    return {
      title: "Payment confirmed",
      body: `Your payment for ${serviceSlug || "the selected service"} has been verified. The Techbeyond team can use your submitted details to move into next steps.`,
      tone: "success",
    };
  }

  if (status === "cancelled") {
    return {
      title: "Checkout cancelled",
      body: "The payment window was closed before confirmation. You can edit the service quantity or buyer details and try again.",
      tone: "warning",
    };
  }

  if (status === "failed") {
    return {
      title: "Payment failed",
      body: "The payment could not be verified. No paid confirmation was stored. You can retry checkout or move to a quote-first flow.",
      tone: "danger",
    };
  }

  return null;
};

const Pricing = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { catalog, loading, error } = usePricingCatalog();
  const deferredCatalog = useDeferredValue(catalog);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "", company: "" });
  const [quantities, setQuantities] = useState({});
  const [busySlug, setBusySlug] = useState("");
  const [checkoutError, setCheckoutError] = useState("");
  const [catalogPage, setCatalogPage] = useState(0);

  const featuredItems = useMemo(
    () => deferredCatalog.filter((item) => item.featured && item.enabled),
    [deferredCatalog],
  );

  const groupedCatalog = useMemo(() => groupCatalogByCategory(deferredCatalog.filter((item) => item.enabled)), [deferredCatalog]);
  const totalCatalogPages = Math.max(1, Math.ceil(groupedCatalog.length / GROUPS_PER_PAGE));
  const visibleCatalogGroups = useMemo(
    () => groupedCatalog.slice(catalogPage * GROUPS_PER_PAGE, (catalogPage + 1) * GROUPS_PER_PAGE),
    [catalogPage, groupedCatalog],
  );
  const statusBanner = renderStatusCopy(searchParams.get("status"), searchParams.get("service"));

  const getQuantity = (item) => quantities[item.slug] || item.slider?.min || 1;

  const handleBuyerChange = (field, value) => {
    setBuyer((current) => ({ ...current, [field]: value }));
  };

  const updateQuantity = (slug, value) => {
    setQuantities((current) => ({ ...current, [slug]: Number(value) }));
  };

  const handleCheckout = async (item) => {
    if (!buyer.name.trim() || !buyer.email.trim()) {
      setCheckoutError("Buyer name and email are required before payment.");
      return;
    }

    try {
      setCheckoutError("");
      setBusySlug(item.slug);
      await loadScript(RAZORPAY_SCRIPT_SRC);

      const quantity = getQuantity(item);
      const orderPayload = await fetch("/api/checkout/razorpay-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: item.slug,
          quantity,
          customer: buyer,
        }),
      }).then(async (response) => {
        const payload = await response.json().catch(() => null);
        if (!response.ok) {
          throw new Error(payload?.error || "Unable to initialize the checkout.");
        }
        return payload;
      });

      const razorpay = new window.Razorpay({
        key: orderPayload.keyId,
        amount: orderPayload.order.amount,
        currency: orderPayload.order.currency,
        name: "Techbeyond",
        description: item.title,
        order_id: orderPayload.order.id,
        prefill: {
          name: buyer.name,
          email: buyer.email,
          contact: buyer.phone,
        },
        notes: {
          serviceSlug: item.slug,
          company: buyer.company || "",
        },
        theme: {
          color: "#111111",
        },
        modal: {
          ondismiss: () => {
            navigate(`/pricing?status=cancelled&service=${item.slug}`);
          },
        },
        handler: async (responsePayload) => {
          const verification = await fetch("/api/checkout/razorpay-verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              slug: item.slug,
              quantity,
              customer: buyer,
              razorpayOrderId: responsePayload.razorpay_order_id,
              razorpayPaymentId: responsePayload.razorpay_payment_id,
              razorpaySignature: responsePayload.razorpay_signature,
            }),
          }).then(async (response) => {
            const payload = await response.json().catch(() => null);
            if (!response.ok) {
              throw new Error(payload?.error || "Unable to verify the payment.");
            }
            return payload;
          });

          if (verification.verified) {
            navigate(`/pricing?status=success&service=${item.slug}&payment=${verification.record.id}`);
          }
        },
      });

      razorpay.open();
    } catch (requestError) {
      setCheckoutError(requestError.message || "Checkout could not be completed.");
      navigate(`/pricing?status=failed&service=${item.slug}`);
    } finally {
      setBusySlug("");
    }
  };

  return (
    <AppLayout>
      <SEOHead
        title="Techbeyond | Pricing"
        description="Live Techbeyond pricing for instant-pay services, quote-first engagements, and scope-based delivery planning."
        canonicalPath="/pricing"
      />

      <section className="sj-page-hero">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">Pricing</p>
            <h1 className="sj-section-title">Choose the service, set the scope, and pay from the website.</h1>
            <p className="sj-copy sj-section-copy">
              Techbeyond now runs a hybrid pricing flow: simpler delivery tracks can be purchased directly, while larger systems stay on a quote-first path.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="sj-shell">
          {statusBanner ? (
            <AnimatedSection>
              <div className={`tbx-status-banner is-${statusBanner.tone}`}>
                <strong>{statusBanner.title}</strong>
                <p>{statusBanner.body}</p>
              </div>
            </AnimatedSection>
          ) : null}

          {checkoutError ? (
            <AnimatedSection>
              <div className="tbx-status-banner is-danger">
                <strong>Checkout issue</strong>
                <p>{checkoutError}</p>
              </div>
            </AnimatedSection>
          ) : null}

          {error ? (
            <AnimatedSection>
              <div className="tbx-status-banner is-warning">
                <strong>Live pricing fallback</strong>
                <p>{error} Default pricing is being shown until the Vercel pricing store responds again.</p>
              </div>
            </AnimatedSection>
          ) : null}

          <div className="tbx-page-frame">
            <div className="tbx-page-section">
              <AnimatedSection>
                <div className="tbx-page-grid tbx-page-grid-hero">
                  <div className="tbx-service-hero">
                    <p className="tbx-page-kicker">Buyer details</p>
                    <h2>Enter the checkout details once.</h2>
                    <p>
                      These details are used across all instant-pay cards. Quote-only services still send you into the service page or contact flow.
                    </p>
                  </div>
                  <div className="tbx-page-box">
                    <div className="sj-form-grid">
                      <label>
                        <span>Full name</span>
                        <input value={buyer.name} onChange={(event) => handleBuyerChange("name", event.target.value)} placeholder="Your name" />
                      </label>
                      <label>
                        <span>Email</span>
                        <input value={buyer.email} onChange={(event) => handleBuyerChange("email", event.target.value)} placeholder="info@techbeyond.com" />
                      </label>
                      <label>
                        <span>Phone</span>
                        <input value={buyer.phone} onChange={(event) => handleBuyerChange("phone", event.target.value)} placeholder="+91" />
                      </label>
                      <label>
                        <span>Company</span>
                        <input value={buyer.company} onChange={(event) => handleBuyerChange("company", event.target.value)} placeholder="Your company" />
                      </label>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">Featured Pricing</p>
            <h2 className="sj-section-title sj-section-title-sm">Quick-start services with the clearest checkout path.</h2>
          </AnimatedSection>
          <div className="tbx-pricing-grid">
            {featuredItems.map((item, index) => {
              const quantity = getQuantity(item);
              const total = calculatePricingAmount(item, quantity);
              const isInstant = item.pricingMode === "instant" && item.checkoutEnabled;

              return (
                <AnimatedSection key={item.slug} delay={index * 60}>
                  <article className={`tbx-pricing-card ${item.featured ? "is-featured" : ""}`}>
                    <div className="tbx-pricing-card-head">
                      <div>
                        <p className="tbx-page-kicker">{isInstant ? "Instant checkout" : "Quote-first"}</p>
                        <h3>{item.title}</h3>
                      </div>
                      {item.compareAtPrice ? <span className="tbx-pricing-badge">save against ad-hoc scope</span> : null}
                    </div>
                    <p className="sj-copy sj-copy-tight">{item.summary}</p>
                    <div className="tbx-pricing-price">
                      <strong>{formatPrice(total)}</strong>
                      <span>{item.priceLabel}</span>
                    </div>

                    {item.slider?.enabled ? (
                      <label className="tbx-slider-field">
                        <span>{item.slider.unitLabel}</span>
                        <input
                          type="range"
                          min={item.slider.min}
                          max={item.slider.max}
                          step={item.slider.step}
                          value={quantity}
                          onChange={(event) => updateQuantity(item.slug, event.target.value)}
                        />
                        <strong>{quantity} {item.slider.unitLabel}{quantity > 1 ? "s" : ""}</strong>
                      </label>
                    ) : null}

                    <div className="tbx-pricing-actions">
                      <Link to={item.servicePath} className="sj-button sj-button-outline">View service</Link>
                      {isInstant ? (
                        <button
                          type="button"
                          className="sj-button sj-button-light"
                          disabled={busySlug === item.slug || loading}
                          onClick={() => handleCheckout(item)}
                        >
                          {busySlug === item.slug ? "Opening..." : "Pay Now"}
                        </button>
                      ) : (
                        <Link to={`/contact?intent=project-inquiry&service=${item.slug}`} className="sj-button sj-button-light">
                          Get Quote
                        </Link>
                      )}
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">Full Pricing Catalog</p>
            <h2 className="sj-section-title sj-section-title-sm">Every live service, grouped by delivery category.</h2>
            <p className="sj-copy sj-copy-tight">
              The catalog is split across pages so each block stays readable instead of stacking every service into one long section.
            </p>
          </AnimatedSection>

          <div className="tbx-pricing-groups">
            {visibleCatalogGroups.map((group, index) => (
              <AnimatedSection key={group.key} delay={index * 40}>
                <section className="tbx-pricing-group">
                  <div className="tbx-pricing-group-head">
                    <div>
                      <p className="tbx-page-kicker">{group.items.length} services</p>
                      <h3>{group.title}</h3>
                    </div>
                    <p className="sj-copy sj-copy-tight">{group.summary}</p>
                  </div>
                  <div className="tbx-pricing-list">
                    {group.items.map((item) => {
                      const isInstant = item.pricingMode === "instant" && item.checkoutEnabled;
                      return (
                        <article id={`service-${item.slug}`} key={item.slug} className="tbx-pricing-list-item">
                          <div>
                            <h4>{item.title}</h4>
                            <p>{item.summary}</p>
                          </div>
                          <div className="tbx-pricing-list-meta">
                            <strong>{formatPrice(item.basePrice)}</strong>
                            <span>{item.priceLabel}</span>
                          </div>
                          <div className="tbx-pricing-list-actions">
                            <Link to={item.servicePath} className="sj-inline-link">
                              View service
                            </Link>
                            {isInstant ? (
                              <button type="button" className="sj-button sj-button-light" onClick={() => handleCheckout(item)} disabled={busySlug === item.slug || loading}>
                                {busySlug === item.slug ? "Opening..." : "Buy Now"}
                              </button>
                            ) : (
                              <Link to={`/contact?intent=project-inquiry&service=${item.slug}`} className="sj-button sj-button-outline">
                                Get Quote
                              </Link>
                            )}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              </AnimatedSection>
            ))}
          </div>

          {totalCatalogPages > 1 ? (
            <AnimatedSection>
              <div className="tbx-pagination">
                <button
                  type="button"
                  className="sj-button sj-button-outline"
                  onClick={() => setCatalogPage((current) => Math.max(0, current - 1))}
                  disabled={catalogPage === 0}
                >
                  Previous
                </button>
                <span>
                  Page {catalogPage + 1} of {totalCatalogPages}
                </span>
                <button
                  type="button"
                  className="sj-button sj-button-light"
                  onClick={() => setCatalogPage((current) => Math.min(totalCatalogPages - 1, current + 1))}
                  disabled={catalogPage === totalCatalogPages - 1}
                >
                  Next
                </button>
              </div>
            </AnimatedSection>
          ) : null}
        </div>
      </section>

    </AppLayout>
  );
};

export default Pricing;
