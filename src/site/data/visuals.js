const gallery = [
  "/assets/img/others/project-hero-img.webp",
  "/assets/img/others/project-details-hero.webp",
  "/assets/img/others/solution-img1.webp",
  "/assets/img/others/solution-img2.webp",
  "/assets/img/others/solution-img3.webp",
  "/assets/img/service/service-hero-image.webp",
];

export const pageVisuals = {
  about: gallery[0],
  contact: gallery[4],
  process: gallery[1],
  pricing: gallery[5],
  caseStudies: gallery[2],
  insights: gallery[1],
  industries: gallery[3],
};

const serviceVisuals = {
  "linkedin-services": gallery[2],
  "web-development": gallery[3],
  "software-development": gallery[5],
  ecommerce: gallery[4],
  "seo-geo-aeo": gallery[1],
  "paid-ads": gallery[0],
  "social-media": gallery[2],
  branding: gallery[4],
  "video-production": gallery[1],
  "mobile-apps": gallery[5],
  "crm-automation": gallery[0],
  "support-ops": gallery[3],
};

const industryVisuals = {
  healthcare: "/assets/img/others/industris-img1.webp",
  "real-estate": "/assets/img/others/industris-img2.webp",
  "retail-ecommerce": "/assets/img/others/industris-img3.webp",
  "saas-technology": "/assets/img/others/industris-img4.webp",
};

const insightVisuals = {
  LinkedIn: gallery[2],
  SEO: gallery[3],
  "Paid Ads": gallery[0],
  "Web Strategy": gallery[3],
  "E-commerce": gallery[4],
  Branding: gallery[0],
  Automation: gallery[5],
  "AI in Marketing": gallery[1],
  Conversion: gallery[4],
  "Agency Playbooks": gallery[0],
};

export function getServiceVisual(slug) {
  return serviceVisuals[slug] || gallery[0];
}

export function getIndustryVisual(slug) {
  return industryVisuals[slug] || pageVisuals.industries;
}

export function getInsightVisual(category) {
  return insightVisuals[category] || pageVisuals.insights;
}

export function getGalleryImage(index) {
  return gallery[index % gallery.length];
}
