const gallery = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
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
  healthcare: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
  "real-estate": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
  "retail-ecommerce": "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
  "saas-technology": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
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
