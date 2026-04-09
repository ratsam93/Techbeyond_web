import { siteBrand } from "../data/techbeyondContent.js";

function toAbsolutePath(pathname) {
  if (!pathname) {
    return siteBrand.url;
  }

  if (pathname.startsWith("http://") || pathname.startsWith("https://")) {
    return pathname;
  }

  return `${siteBrand.url}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function buildTitle(pageTitle, suffix = siteBrand.name) {
  if (!pageTitle) {
    return suffix;
  }

  return pageTitle.includes(suffix) ? pageTitle : `${pageTitle} | ${suffix}`;
}

export function buildMetaDescription(description, fallback = siteBrand.description) {
  return (description || fallback).trim();
}

export function buildCanonical(pathname) {
  return toAbsolutePath(pathname);
}

export function buildOpenGraph({ title, description, url, image, type = "website" }) {
  return {
    type,
    title: title || siteBrand.name,
    description: buildMetaDescription(description),
    url: buildCanonical(url || "/"),
    siteName: siteBrand.name,
    image: image ? toAbsolutePath(image) : undefined,
  };
}

export function buildTwitterCard({ title, description, image, card = "summary_large_image" }) {
  return {
    card,
    title: title || siteBrand.name,
    description: buildMetaDescription(description),
    image: image ? toAbsolutePath(image) : undefined,
  };
}

export function buildSeoMeta({ title, description, pathname, image, noIndex = false }) {
  return {
    title: buildTitle(title),
    description: buildMetaDescription(description),
    canonical: buildCanonical(pathname),
    og: buildOpenGraph({ title, description, url: pathname, image }),
    twitter: buildTwitterCard({ title, description, image }),
    robots: noIndex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  };
}

export function buildOrganizationSchema({ url = siteBrand.url, sameAs = [] } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteBrand.name,
    url,
    description: siteBrand.description,
    sameAs,
  };
}

export function buildWebsiteSchema({ url = siteBrand.url, searchUrl } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteBrand.name,
    url,
    potentialAction: searchUrl
      ? {
          "@type": "SearchAction",
          target: searchUrl,
          "query-input": "required name=search_term_string",
        }
      : undefined,
  };
}

export function buildServiceSchema({
  name,
  description,
  url,
  provider = siteBrand.name,
  areaServed = "Global",
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: buildCanonical(url || "/"),
    provider: {
      "@type": "Organization",
      name: provider,
      url: siteBrand.url,
    },
    areaServed,
  };
}

export function buildProfessionalServiceSchema({
  name,
  description,
  url,
  areaServed = "Global",
  sameAs = [],
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description,
    url: buildCanonical(url || "/"),
    areaServed,
    sameAs,
  };
}

export function buildBreadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildCanonical(item.item),
    })),
  };
}

export function buildSchemaPayload(...schemas) {
  return schemas.filter(Boolean);
}
