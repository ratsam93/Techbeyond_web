import {
  caseStudies,
  faqClusters,
  footerNavigation,
  industries,
  insightPosts,
  primaryNavigation,
  serviceCategories,
  servicePages,
} from "./content.js";

export const topLevelRoutes = [
  { label: "Home", href: "/" },
  { label: "Data Engine", href: "/data-engine" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Research", href: "/research" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Company", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerRouteGroups = [
  {
    title: "Platform",
    links: [
      { label: "Data Engine", href: "/data-engine" },
      { label: "Intelligence", href: "/intelligence" },
      { label: "Solutions", href: "/solutions" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Research Hub", href: "/research" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [...footerNavigation, { label: "Sitemap", href: "/sitemap" }],
  },
];

export function getSitemapGroups() {
  return [
    {
      title: "Primary Pages",
      links: topLevelRoutes,
    },
    {
      title: "Service Categories",
      links: serviceCategories.map((category) => ({
        label: category.title,
        href: category.slug === "linkedin-services" ? "/data-engine" : `/services/${category.slug}`,
      })),
    },
    {
      title: "Service Modules",
      links: servicePages
        .filter((item) => item.parentSlug)
        .slice(0, 32)
        .map((item) => ({
          label: item.title,
          href: `/services/${item.parentSlug}/${item.slug}`,
        })),
    },
    {
      title: "Industry Solutions",
      links: industries.flatMap((industry) => [
        { label: industry.title, href: `/solutions/${industry.slug}` },
        ...industry.childSolutions.slice(0, 4).map(([solutionSlug, title]) => ({
          label: title,
          href: `/solutions/${industry.slug}/${solutionSlug}`,
        })),
      ]),
    },
    {
      title: "Research",
      links: [
        ...new Map(
          insightPosts.map((post) => [
            post.category,
            {
              label: `${post.category} Research`,
              href: `/research/category/${post.category.toLowerCase()}`,
            },
          ]),
        ).values(),
        ...insightPosts.slice(0, 12).map((post) => ({
          label: post.title,
          href: `/research/${post.slug}`,
        })),
      ],
    },
    {
      title: "Proof & Support",
      links: [
        ...caseStudies.map((study) => ({
          label: study.title,
          href: `/case-studies/${study.slug}`,
        })),
        ...faqClusters.slice(0, 8).map((faq) => ({
          label: faq.title,
          href: `/faqs/${faq.slug}`,
        })),
      ],
    },
  ];
}

export const legacyAliases = primaryNavigation;
