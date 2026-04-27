import { siteBrand as legacyBrand } from "./content.js";
import { portfolioProjects } from "./portfolio.js";

const brandEmail = "info@techbeyondsolution.com";
<<<<<<< HEAD
const svgDataUri = (svg) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const brandWordmark = "/assets/img/logo/techbeyond-full-logo.webp";

=======
const brandWordmark = "https://media.licdn.com/dms/image/v2/C560BAQEV0RZ1ggfhsg/company-logo_200_200/company-logo_200_200/0/1673270026877/techbeyond_solution_logo?e=1777507200&v=beta&t=UgijWfq7jMXEnEFpnz-QFzVDCC5W4GftuHr1rQeEqrw";
const svgDataUri = (svg) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

>>>>>>> 94c8f7223cd50d50acd1cef9dd998d9c614ea3db
const labelLogo = (label) =>
  svgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" width="260" height="70" viewBox="0 0 260 70" fill="none">
  <rect width="260" height="70" rx="18" fill="#111111"/>
  <text x="130" y="43" text-anchor="middle" fill="#8F8A81" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" letter-spacing="1.8">${label}</text>
</svg>
`);

const serviceImages = [
  "/assets/img/service/service-hero-image.webp",
  "/assets/img/service/service7-img1.webp",
  "/assets/img/service/service7-img2.webp",
  "/assets/img/service/service7-img3.webp",
];

export const siteBrand = {
  name: "Techbeyond Solution",
  url: legacyBrand.url,
  email: brandEmail,
<<<<<<< HEAD
  phone: "+91 88772 14277",
  phoneHref: "https://api.whatsapp.com/send/?phone=918877214277&text=Hello",
=======
  phone: "Strategy calls by appointment",
>>>>>>> 94c8f7223cd50d50acd1cef9dd998d9c614ea3db
  tagline: "Build. Market. Scale.",
  description:
    "Techbeyond Solution helps businesses generate pipeline and improve execution through LinkedIn-led growth, SEO, websites, paid media, automation, and creative systems.",
  wordmark: brandWordmark,
  social: legacyBrand.social,
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const heroServices = [
  "LinkedIn Growth",
  "SEO / GEO / AEO",
  "Website Development",
  "AI Software",
  "Mobile Apps",
];

export const trustedLogos = [
  {
    label: "LinkedIn",
    image: labelLogo("LINKEDIN"),
    href: "/services/linkedin-services",
  },
  {
    label: "SEO / GEO",
    image: labelLogo("SEO / GEO"),
    href: "/services/seo-geo-aeo",
  },
  {
    label: "Web Systems",
    image: labelLogo("WEB SYSTEMS"),
    href: "/services/web-development",
  },
  {
    label: "Paid Media",
    image: labelLogo("PAID MEDIA"),
    href: "/services/performance-marketing",
  },
  {
    label: "Automation",
    image: labelLogo("AUTOMATION"),
    href: "/services/crm-automation",
  },
  {
    label: "Creative",
    image: labelLogo("CREATIVE"),
    href: "/services/branding",
  },
];

export const hiddenCosts = [
  "Scattered vendors",
  "Weak demand capture",
  "Slow follow-up",
  "Broken attribution",
  "Manual ops drag",
];

export const processSteps = [
  {
    step: "1. Clarify the growth goal",
    description:
      "We map the offer, customer journey, channel mix, and the friction holding back pipeline or delivery.",
  },
  {
    step: "2. Build the conversion system",
    description:
      "We align website structure, messaging, acquisition channels, creative, and automation into one operating layer.",
  },
  {
    step: "3. Optimize what compounds",
    description:
      "Once live, we tighten conversion, speed up follow-up, improve reporting, and keep the system moving with your business.",
  },
];

export const services = [
  {
    number: "/ 01",
    title: "Website Development Systems",
    description: "Commercial websites built across React, Framer, WordPress, and modern codebases with conversion and SEO structure baked in.",
    bullets: [
      "React, WordPress, and Framer website delivery",
      "Website rebuilds, redesigns, and codebase cleanup",
      "Landing pages, service architecture, and conversion paths",
      "Performance, mobile, and SEO-ready implementation",
    ],
    image: serviceImages[0],
  },
  {
    number: "/ 02",
    title: "AI Software & Automation",
    description: "Custom AI agents, copilots, and workflow automations connected to the systems your team already uses so repetitive work, support load, and execution delays actually drop.",
    bullets: [
      "Custom AI agents and automations for ops, support, and sales",
      "LLM integrations, internal copilots, and decision-support tooling",
      "Workflow routing, dashboards, and API-connected actions",
      "Production-minded AI builds instead of throwaway demos",
    ],
    image: serviceImages[1],
  },
  {
    number: "/ 03",
    title: "Mobile App Development",
    description: "Mobile products designed for clear onboarding, polished iOS and Android execution, and launch-ready delivery backed by the right backend and admin systems.",
    bullets: [
      "Native iOS, Android, and cross-platform app delivery",
      "Onboarding, activation, and retention-focused product flows",
      "Backend systems, APIs, and operational admin tooling",
      "QA, store submission, and post-launch iteration support",
    ],
    image: serviceImages[2],
  },
  {
    number: "/ 04",
    title: "Demand Capture & Growth Systems",
    description: "SEO, paid media, CRM automation, and follow-through systems designed to turn attention into qualified pipeline.",
    bullets: [
      "SEO / GEO / AEO visibility systems",
      "Google, Meta, and LinkedIn campaigns",
      "Lead routing and nurture automation",
      "WhatsApp, CRM, and reporting workflows",
      "Visibility dashboards for decision-making",
    ],
    image: serviceImages[3],
  },
];

export const comparisonRows = [
  {
    label: "Operating model",
    us: "One connected growth system",
    agency: "Isolated campaign execution",
    hire: "Slow to assemble internally",
  },
  {
    label: "Strategy to execution",
    us: "Same team owns both",
    agency: "Often split across vendors",
    hire: "Depends on internal bandwidth",
  },
  {
    label: "Channel coordination",
    us: "Website, SEO, LinkedIn, ads, CRM aligned",
    agency: "Usually one channel deep",
    hire: "Requires multiple specialists",
  },
  {
    label: "Measurement",
    us: "Reporting tied to pipeline and conversion",
    agency: "Traffic or vanity metrics first",
    hire: "Takes time to instrument well",
  },
  {
    label: "Speed to launch",
    us: "Weeks with a defined rollout",
    agency: "Often slower across handoffs",
    hire: "Hiring and ramp time required",
  },
];

export const testimonials = portfolioProjects.slice(0, 3).map((study) => ({
  quote: study.testimonial?.quote || study.resultsLead,
  name: study.testimonial?.name || study.title,
  role: study.industry,
  image: study.image,
}));

export const headlineMetrics = [
  { value: 4, suffix: "x", label: "more demo requests" },
  { value: 210, suffix: "%", label: "organic traffic growth" },
  { value: 85, suffix: "%", label: "less follow-up time" },
  { value: 18, suffix: "Cr", label: "pipeline influenced" },
];

export const pricingPlans = [
  {
    name: "Starter",
    tagline: "For teams fixing one growth or systems bottleneck fast",
    monthly: 1500,
    yearly: 1200,
    cta: "Start with a sprint",
    features: [
      "Discovery workshop and audit",
      "One focused delivery track",
      "Messaging and conversion recommendations",
      "Implementation roadmap",
      "30 days of follow-up support",
    ],
  },
  {
    name: "Growth",
    tagline: "For businesses that need channels, website, and follow-up aligned",
    monthly: 3200,
    yearly: 2560,
    cta: "Build the system",
    highlighted: true,
    badge: "popular",
    features: [
      "Multi-channel growth architecture",
      "Website or funnel optimization",
      "SEO, LinkedIn, or ads execution",
      "CRM and automation setup",
      "Ongoing reporting and iteration",
    ],
  },
  {
    name: "Scale",
    tagline: "For teams replacing scattered vendors with one coordinated partner",
    monthly: 5900,
    yearly: 4720,
    cta: "Plan the rollout",
    features: [
      "Cross-functional delivery squad",
      "Campaign and content operations",
      "Attribution, dashboards, and reporting",
      "Priority support and optimization",
      "Quarterly strategic planning",
    ],
  },
];

export const faqs = [
  {
    q: "What does Techbeyond Solution actually help with?",
    a: "Techbeyond Solution combines LinkedIn, SEO, websites, paid media, automation, and creative execution so your demand generation and conversion systems work together.",
  },
  {
    q: "Do you only work on marketing?",
    a: "No. We also work on the systems behind growth: lead routing, CRM setup, nurture automation, reporting, website structure, and post-lead follow-through.",
  },
  {
    q: "Can you work with our current tools and team?",
    a: "Yes. Most engagements improve the stack you already have instead of forcing a rebuild. We connect websites, CRMs, ad platforms, content workflows, and sales motion around the same goal.",
  },
  {
    q: "Which businesses are the best fit?",
    a: "We work best with service businesses, B2B teams, D2C brands, SaaS companies, and operators who need clearer positioning, better demand capture, and more consistent execution.",
  },
  {
    q: "Do you handle both strategy and implementation?",
    a: "Yes. We do not stop at audits or decks. Strategy, production, optimization, and systems implementation are part of the same delivery loop.",
  },
  {
    q: "What happens after launch?",
    a: "We keep tightening what compounds: messaging, conversion paths, reporting, CRM workflows, creative iteration, and channel performance.",
  },
];

export const projects = portfolioProjects;

export const aboutOverview = {
  eyebrow: "ABOUT TECHBEYOND SOLUTION",
  title: "A growth partner built around systems, not isolated services.",
  description:
    "Techbeyond Solution brings strategy, creative, websites, acquisition, and automation together so businesses do not have to manage separate agencies for every part of growth.",
  approachTitle: "One coordinated layer across traffic, conversion, and operations.",
  approachBody:
    "The work is designed around how pipeline actually moves: positioning, landing experience, demand capture, follow-up, reporting, and iteration. That is why the system holds after launch.",
  focus: [
    "LinkedIn-led authority and outreach",
    "SEO, GEO, and answer-engine content architecture",
    "Websites, funnels, ads, and CRM automation",
  ],
  resultTitle: "Built for measurable movement, not presentation decks.",
  resultBody:
    "Across B2B, real estate, finance, and product-led businesses, the same pattern repeats: clearer message, faster follow-up, better reporting, and stronger conversion from the traffic already being generated.",
  quote:
    "We do not sell isolated tactics. We build growth systems that connect demand, messaging, conversion, and follow-through.",
  quoteName: "Techbeyond Solution",
  quoteRole: "Integrated growth partner",
  resultStats: [
    { value: "4x", label: "pipeline movement on strong engagements" },
    { value: "85%", label: "less manual follow-up in automation projects" },
  ],
  principles: [
    {
      title: "Clarity before scale",
      body: "We fix message, offer, and conversion logic before adding more traffic.",
    },
    {
      title: "Systems over isolated wins",
      body: "Channels, website, and follow-up have to work together or performance breaks later.",
    },
    {
      title: "Execution with accountability",
      body: "The same team that defines the strategy is responsible for implementing it.",
    },
    {
      title: "Compounding improvement",
      body: "Every release is designed to improve measurement, speed, and future iteration.",
    },
  ],
};

export const teamMembers = [
  {
    name: "LinkedIn & Authority",
    role: "Positioning, content systems, outreach, and appointment flow",
<<<<<<< HEAD
    image: "/team/indian-corporate-1.webp",
=======
    image: "/team/indian-corporate-1.jpg",
>>>>>>> 94c8f7223cd50d50acd1cef9dd998d9c614ea3db
  },
  {
    name: "SEO & Demand Capture",
    role: "Technical SEO, GEO, answer-engine content, and traffic intent",
<<<<<<< HEAD
    image: "/team/indian-corporate-2.webp",
=======
    image: "/team/indian-corporate-2.jpg",
>>>>>>> 94c8f7223cd50d50acd1cef9dd998d9c614ea3db
  },
  {
    name: "Web & Funnel Engineering",
    role: "Sites, landing pages, conversion flow, and performance tuning",
<<<<<<< HEAD
    image: "/team/indian-corporate-3.webp",
=======
    image: "/team/indian-corporate-3.jpg",
>>>>>>> 94c8f7223cd50d50acd1cef9dd998d9c614ea3db
  },
  {
    name: "Paid Media & Creative",
    role: "Campaign structure, creative direction, and optimization loops",
<<<<<<< HEAD
    image: "/team/indian-corporate-4.webp",
=======
    image: "/team/indian-corporate-4.jpg",
>>>>>>> 94c8f7223cd50d50acd1cef9dd998d9c614ea3db
  },
  {
    name: "CRM & Automation",
    role: "Lead routing, nurture sequences, WhatsApp, and reporting systems",
<<<<<<< HEAD
    image: "/team/indian-corporate-5.webp",
=======
    image: "/team/indian-corporate-5.jpg",
>>>>>>> 94c8f7223cd50d50acd1cef9dd998d9c614ea3db
  },
  {
    name: "Delivery & Optimization",
    role: "QA, reporting, iteration, and keeping the machine moving",
<<<<<<< HEAD
    image: "/team/indian-corporate-6.webp",
=======
    image: "/team/indian-corporate-6.jpg",
>>>>>>> 94c8f7223cd50d50acd1cef9dd998d9c614ea3db
  },
];

export const contactCard = {
  title: "Book a strategy call",
  subtitle: "LinkedIn, SEO, websites, paid media, and automation",
  cta: "Start your project",
  href: "/contact?intent=strategy-call",
};

export { blogPosts } from "./blogPosts.js";

export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    description: "How Techbeyond Solution collects, uses, and safeguards information submitted through the website.",
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "We may collect contact details, company information, project requirements, and any information you submit through consultation forms.",
          "We also use standard analytics and performance data to understand how the website is being used.",
        ],
      },
      {
        heading: "How we use information",
        paragraphs: [
          "Submitted information is used to respond to inquiries, scope projects, deliver services, and improve the website experience.",
          "We do not sell personal information. We only share it with service providers where necessary to operate the business.",
        ],
      },
      {
        heading: "Data protection",
        paragraphs: [
          "We use reasonable technical and organizational safeguards to protect information submitted through the site.",
          "No online environment is completely risk free, so sensitive information should only be shared when required for project scoping.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "You may request access, correction, or deletion of your information by contacting us directly.",
          "If you subscribe to updates, you can opt out at any time.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms",
    description: "Terms governing the use of the Techbeyond Solution website and initial project inquiries.",
    sections: [
      {
        heading: "Use of the website",
        paragraphs: [
          "This website is provided for informational purposes and initial commercial inquiry.",
          "You agree not to misuse the site, interfere with its operation, or submit false or unlawful information through any form.",
        ],
      },
      {
        heading: "Service discussions",
        paragraphs: [
          "Strategy calls, pricing references, and case-study examples do not by themselves create a binding services agreement.",
          "Any paid engagement is governed by a separate proposal, scope, or contract agreed between both parties.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "All site content, layout, copy, and media remain protected by applicable intellectual property laws unless otherwise stated.",
          "You may not republish or reproduce the materials without permission except where the law allows.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "The website and its content are provided on an as-is basis without guarantees of uninterrupted access or error-free performance.",
          "To the fullest extent permitted by law, Techbeyond Solution is not liable for indirect or consequential losses arising from the use of the site.",
        ],
      },
    ],
  },
};

