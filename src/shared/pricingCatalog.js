import { serviceCategories, servicePages } from "../site/data/content.js";
import { businessEndpoints } from "../site/data/endpoints.js";

const instantServiceDefaults = {
  "linkedin-profile-optimization": {
    basePrice: 14999,
    compareAtPrice: 19999,
    priceLabel: "Profile rebuild",
    summary: "A fixed-scope rewrite of your headline, about section, featured assets, and positioning.",
    slider: { enabled: false, min: 1, max: 1, step: 1, unitLabel: "package" },
  },
  "linkedin-content-strategy": {
    basePrice: 24999,
    compareAtPrice: 31999,
    priceLabel: "Monthly content sprint",
    summary: "LinkedIn content planning, post themes, and a short monthly production sprint for founder-led authority.",
    slider: { enabled: true, min: 1, max: 4, step: 1, unitLabel: "month" },
  },
  "linkedin-outreach-systems": {
    basePrice: 21999,
    compareAtPrice: 27999,
    priceLabel: "Outreach setup",
    summary: "A fixed-scope LinkedIn outreach system with sequence structure, messaging, and follow-up logic.",
    slider: { enabled: true, min: 1, max: 3, step: 1, unitLabel: "sequence pack" },
  },
  "technical-seo": {
    basePrice: 18999,
    compareAtPrice: 24999,
    priceLabel: "Technical SEO sprint",
    summary: "A focused technical SEO pass covering crawl health, metadata, page hygiene, and action priorities.",
    slider: { enabled: false, min: 1, max: 1, step: 1, unitLabel: "sprint" },
  },
  "seo-audits": {
    basePrice: 15999,
    compareAtPrice: 21999,
    priceLabel: "SEO audit",
    summary: "A structured search visibility audit with issue prioritization, action notes, and rollout guidance.",
    slider: { enabled: false, min: 1, max: 1, step: 1, unitLabel: "audit" },
  },
  "landing-page-design": {
    basePrice: 29999,
    compareAtPrice: 38999,
    priceLabel: "Landing page build",
    summary: "A single conversion-focused landing page with message structure, CTA flow, and launch-ready delivery.",
    slider: { enabled: true, min: 1, max: 3, step: 1, unitLabel: "page" },
  },
  "conversion-tracking-setup": {
    basePrice: 12999,
    compareAtPrice: 16999,
    priceLabel: "Tracking setup",
    summary: "Campaign and website conversion tracking setup for cleaner reporting and attribution.",
    slider: { enabled: false, min: 1, max: 1, step: 1, unitLabel: "setup" },
  },
  "crm-setup-customization": {
    basePrice: 21999,
    compareAtPrice: 28999,
    priceLabel: "CRM setup",
    summary: "Initial CRM field, pipeline, and workflow setup for sales and follow-up operations.",
    slider: { enabled: true, min: 1, max: 3, step: 1, unitLabel: "workspace" },
  },
  "whatsapp-automation": {
    basePrice: 17999,
    compareAtPrice: 23999,
    priceLabel: "WhatsApp automation",
    summary: "A simple WhatsApp automation layer for lead response, routing, and appointment prompts.",
    slider: { enabled: true, min: 1, max: 2, step: 1, unitLabel: "flow" },
  },
};

const featuredSlugs = new Set([
  "linkedin-profile-optimization",
  "linkedin-content-strategy",
  "landing-page-design",
  "technical-seo",
  "crm-setup-customization",
]);

export const defaultHomepagePricingPlans = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For teams fixing one growth or systems bottleneck fast",
    monthly: 1500,
    yearly: 1200,
    cta: "Start with a sprint",
    highlighted: false,
    badge: "",
    enabled: true,
    features: [
      "Discovery workshop and audit",
      "One focused delivery track",
      "Messaging and conversion recommendations",
      "Implementation roadmap",
      "30 days of follow-up support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For businesses that need channels, website, and follow-up aligned",
    monthly: 3200,
    yearly: 2560,
    cta: "Build the system",
    highlighted: true,
    badge: "popular",
    enabled: true,
    features: [
      "Multi-channel growth architecture",
      "Website or funnel optimization",
      "SEO, LinkedIn, or ads execution",
      "CRM and automation setup",
      "Ongoing reporting and iteration",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "For teams replacing scattered vendors with one coordinated partner",
    monthly: 5900,
    yearly: 4720,
    cta: "Plan the rollout",
    highlighted: false,
    badge: "",
    enabled: true,
    features: [
      "Cross-functional delivery squad",
      "Campaign and content operations",
      "Attribution, dashboards, and reporting",
      "Priority support and optimization",
      "Quarterly strategic planning",
    ],
  },
];

export const defaultBookingSettings = {
  strategyCallUrl: businessEndpoints.booking.strategyCallUrl,
  businessPlanUrl: businessEndpoints.booking.businessPlanUrl,
};

const priceFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const summaryForPage = (page) =>
  page.summary ||
  page.deliverables?.[0] ||
  page.problems?.[0] ||
  `Delivery support for ${page.title}.`;

export const getPricingRouteForService = (item) =>
  item.parentSlug ? `/services/${item.parentSlug}/${item.slug}` : `/services/${item.slug}`;

export const buildDefaultPricingCatalog = () =>
  servicePages.map((page) => {
    const instantDefaults = instantServiceDefaults[page.slug];
    const isCategory = serviceCategories.some((category) => category.slug === page.slug);
    const pricingMode = instantDefaults ? "instant" : "quote";

    return {
      slug: page.slug,
      parentSlug: page.parentSlug,
      title: page.title,
      summary: instantDefaults?.summary || summaryForPage(page),
      pricingMode,
      currency: "INR",
      basePrice: instantDefaults?.basePrice || (isCategory ? 74999 : 39999),
      compareAtPrice: instantDefaults?.compareAtPrice || null,
      priceLabel: instantDefaults?.priceLabel || (isCategory ? "Starting engagement" : "Starting price"),
      slider: instantDefaults?.slider || { enabled: false, min: 1, max: 1, step: 1, unitLabel: "scope" },
      featured: featuredSlugs.has(page.slug),
      checkoutEnabled: Boolean(instantDefaults),
      enabled: true,
      categorySlug: page.categorySlug,
      servicePath: getPricingRouteForService(page),
    };
  });

export const defaultPricingCatalog = buildDefaultPricingCatalog();

export const pricingCatalogMap = new Map(defaultPricingCatalog.map((item) => [item.slug, item]));

export const getPricingItemBySlug = (slug) => pricingCatalogMap.get(slug) || null;

export const formatPrice = (amount) => priceFormatter.format(Number(amount || 0));

export const calculatePricingAmount = (item, quantity = 1) => {
  const safeQuantity = Number.isFinite(Number(quantity)) ? Number(quantity) : 1;
  return Number(item?.basePrice || 0) * Math.max(1, safeQuantity);
};

export const normalizePricingCatalog = (items = []) => {
  const defaults = new Map(defaultPricingCatalog.map((item) => [item.slug, item]));

  return defaultPricingCatalog.map((defaultItem) => {
    const incoming = items.find((item) => item.slug === defaultItem.slug) || {};
    const merged = {
      ...defaultItem,
      ...incoming,
      slider: {
        ...defaultItem.slider,
        ...(incoming.slider || {}),
      },
    };

    return {
      ...merged,
      servicePath: defaults.get(defaultItem.slug)?.servicePath || defaultItem.servicePath,
    };
  });
};

export const normalizeHomepagePricingPlans = (plans = []) =>
  defaultHomepagePricingPlans.map((defaultPlan) => {
    const incoming = plans.find((plan) => plan.id === defaultPlan.id) || {};
    return {
      ...defaultPlan,
      ...incoming,
      monthly: Number(incoming.monthly ?? defaultPlan.monthly),
      yearly: Number(incoming.yearly ?? defaultPlan.yearly),
      enabled: incoming.enabled ?? defaultPlan.enabled,
      highlighted: incoming.highlighted ?? defaultPlan.highlighted,
      badge: incoming.badge ?? defaultPlan.badge,
      features: Array.isArray(incoming.features) && incoming.features.length > 0 ? incoming.features : defaultPlan.features,
    };
  });

export const normalizeBookingSettings = (settings = {}) => ({
  strategyCallUrl: settings.strategyCallUrl || defaultBookingSettings.strategyCallUrl,
  businessPlanUrl: settings.businessPlanUrl || defaultBookingSettings.businessPlanUrl,
});
