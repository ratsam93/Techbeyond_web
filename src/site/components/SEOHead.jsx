import { useEffect } from "react";
import { buildSeoMeta } from "../seo/index.js";

function upsertMeta(name, content, attribute = "name") {
  const selector = `meta[${attribute}="${name}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function upsertJsonLd(schema) {
  let element = document.head.querySelector('script[data-techbeyond-schema="true"]');
  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.dataset.techbeyondSchema = "true";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(schema);
}

const SEOHead = ({ title, description, canonicalPath = "/", schema = null, seo = null }) => {
  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const computedSeo = {
      ...buildSeoMeta({ title, description, pathname: canonicalPath, image: seo?.image, noIndex: seo?.noIndex }),
      ...(seo || {}),
    };
    document.title = computedSeo.title;
    upsertMeta("description", computedSeo.description);
    upsertMeta("robots", computedSeo.robots);
    upsertMeta("og:title", computedSeo.og?.title || computedSeo.title, "property");
    upsertMeta("og:description", computedSeo.og?.description || computedSeo.description, "property");
    upsertMeta("og:type", computedSeo.og?.type || "website", "property");
    upsertMeta("og:url", computedSeo.og?.url || computedSeo.canonical, "property");
    upsertMeta("og:site_name", computedSeo.og?.siteName || "", "property");
    if (computedSeo.og?.image) {
      upsertMeta("og:image", computedSeo.og.image, "property");
    }
    upsertMeta("twitter:card", "summary_large_image", "name");
    upsertMeta("twitter:title", computedSeo.twitter?.title || computedSeo.title, "name");
    upsertMeta("twitter:description", computedSeo.twitter?.description || computedSeo.description, "name");
    if (computedSeo.twitter?.image) {
      upsertMeta("twitter:image", computedSeo.twitter.image, "name");
    }
    upsertLink("canonical", computedSeo.canonical);

    if (Array.isArray(schema)) {
      upsertJsonLd(schema);
    } else if (schema) {
      upsertJsonLd(schema);
    }

    return undefined;
  }, [canonicalPath, description, schema, seo, title]);

  return null;
};

export default SEOHead;
