/**
 * @typedef {Object} ServicePage
 * @property {string} slug
 * @property {string} title
 * @property {string} summary
 * @property {string} categorySlug
 * @property {string|null} parentSlug
 * @property {boolean} isFlagship
 * @property {boolean} isPlaceholder
 * @property {string[]} problems
 * @property {string[]} deliverables
 * @property {string[]} outcomes
 * @property {string[]} idealFor
 * @property {string[]} demoModules
 * @property {{ label: string, href: string }[]} links
 * @property {string} ctaLabel
 */

/**
 * @typedef {Object} ServiceCategory
 * @property {string} slug
 * @property {string} title
 * @property {string} summary
 * @property {boolean} isFlagship
 * @property {string[]} childSlugs
 * @property {string[]} relatedCaseStudySlugs
 * @property {string[]} faqSlugs
 * @property {string[]} relatedInsightSlugs
 * @property {string[]} relatedIndustrySlugs
 * @property {{ title: string, detail: string }[]} executionAreas
 */

/**
 * @typedef {Object} CaseStudy
 * @property {string} slug
 * @property {string} title
 * @property {string} category
 * @property {string} industry
 * @property {string} challenge
 * @property {string} solution
 * @property {string[]} outcomes
 * @property {string[]} linkedServices
 * @property {string} resultSummary
 */

export const siteBrand = {
  name: "Techbeyond",
  tagline: "LinkedIn-led growth and digital systems for modern businesses",
  url: "https://techbeyond.in",
  description:
    "Techbeyond helps founders and businesses generate pipeline through LinkedIn, SEO, GEO, web development, paid media, automation, and creative systems.",
  social: {
    linkedin: "https://linkedin.com/",
    instagram: "https://www.instagram.com/Techbeyond.io/",
    x: "https://twitter.com/",
  },
};

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "LinkedIn Services", href: "/linkedin-services" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries/healthcare" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = [
  { label: "Pricing", href: "/pricing" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

const deepServiceMap = {
  "linkedin-services": [
    ["linkedin-profile-optimization", "LinkedIn Profile Optimization"],
    ["linkedin-content-strategy", "LinkedIn Content Strategy & Management"],
    ["linkedin-outreach-systems", "LinkedIn Outreach Systems"],
    ["linkedin-lead-generation", "LinkedIn Lead Generation"],
    ["linkedin-appointment-setting", "LinkedIn Appointment Setting"],
  ],
  "web-development": [
    ["corporate-website-development", "Corporate Website Development"],
    ["react-website-development", "React Website Development"],
    ["framer-website-development", "Framer Website Development"],
    ["wordpress-website-development", "WordPress Website Development"],
    ["website-codebase-rebuilds", "Website Codebase Rebuilds"],
    ["landing-page-design", "Landing Page Design"],
    ["custom-web-application-development", "Custom Web Application Development"],
    ["website-redesign-services", "Website Redesign Services"],
    ["website-maintenance-services", "Website Maintenance Services"],
    ["speed-optimization-services", "Speed Optimization Services"],
    ["conversion-focused-website-design", "Conversion-Focused Website Design"],
  ],
  "software-development": [
    ["ai-software-development", "AI Software Development"],
    ["ai-agent-development", "AI Agent Development"],
    ["llm-integration-services", "LLM Integration Services"],
    ["ai-workflow-automation", "AI Workflow Automation"],
    ["internal-ai-tools", "Internal AI Tools"],
    ["ai-chatbot-copilot-development", "AI Chatbot & Copilot Development"],
    ["saas-product-development", "SaaS Product Development"],
    ["api-development-integrations", "API Development & Integrations"],
    ["mvp-software-development", "MVP Software Development"],
    ["software-modernization", "Software Modernization"],
    ["software-maintenance-support", "Software Maintenance & Support"],
  ],
  ecommerce: [
    ["shopify-development", "Shopify Development"],
    ["woocommerce-development", "WooCommerce Development"],
    ["custom-ecommerce-development", "Custom E-commerce Development"],
    ["ecommerce-ui-ux-design", "E-commerce UI/UX Design"],
    ["product-page-optimization", "Product Page Optimization"],
    ["checkout-optimization", "Checkout Optimization"],
    ["store-migration-services", "Store Migration Services"],
    ["marketplace-integration-services", "Marketplace Integration Services"],
    ["ecommerce-maintenance-support", "E-commerce Maintenance & Support"],
    ["conversion-optimization-for-stores", "Conversion Optimization for Stores"],
  ],
  "seo-geo-aeo": [
    ["technical-seo", "Technical SEO"],
    ["on-page-seo", "On-Page SEO"],
    ["local-seo", "Local SEO"],
    ["ecommerce-seo", "E-commerce SEO"],
    ["seo-content-strategy", "SEO Content Strategy"],
    ["seo-audits", "SEO Audits"],
    ["keyword-research-services", "Keyword Research Services"],
    ["authority-building", "Link Building / Authority Building"],
    ["seo-for-service-businesses", "SEO for Service Businesses"],
    ["seo-for-startups", "SEO for Startups"],
  ],
  "paid-ads": [
    ["google-ads-management", "Google Ads Management"],
    ["meta-ads-management", "Meta Ads Management"],
    ["instagram-ads-management", "Instagram Ads Management"],
    ["linkedin-ads-management", "LinkedIn Ads Management"],
    ["youtube-ads-management", "YouTube Ads Management"],
    ["lead-generation-campaigns", "Lead Generation Campaigns"],
    ["ecommerce-performance-marketing", "E-commerce Performance Marketing"],
    ["landing-page-alignment-services", "Landing Page Alignment Services"],
    ["retargeting-campaign-services", "Retargeting Campaign Services"],
    ["conversion-tracking-setup", "Conversion Tracking Setup"],
  ],
  "social-media": [
    ["social-media-strategy", "Social Media Strategy"],
    ["social-media-management", "Social Media Management"],
    ["instagram-marketing", "Instagram Marketing"],
    ["linkedin-marketing", "LinkedIn Marketing"],
    ["facebook-marketing", "Facebook Marketing"],
    ["content-calendar-planning", "Content Calendar Planning"],
    ["reel-strategy", "Reel Strategy & Short Video Strategy"],
    ["community-management", "Community Management"],
    ["paid-social-campaign-support", "Paid Social Campaign Support"],
    ["social-media-creative-design", "Social Media Creative Design"],
  ],
  branding: [
    ["logo-design", "Logo Design"],
    ["brand-identity-design", "Brand Identity Design"],
    ["marketing-collateral-design", "Marketing Collateral Design"],
    ["social-media-creative-design-brand", "Social Media Creative Design"],
    ["ad-creative-design", "Ad Creative Design"],
    ["pitch-deck-design", "Pitch Deck Design"],
    ["brochure-catalogue-design", "Brochure & Catalogue Design"],
    ["packaging-design", "Packaging Design"],
    ["website-visual-design-support", "Website Visual Design Support"],
    ["rebranding-services", "Rebranding Services"],
  ],
  "video-production": [
    ["short-form-video-editing", "Short-Form Video Editing"],
    ["ad-video-editing", "Ad Video Editing"],
    ["explainer-video-editing", "Explainer Video Editing"],
    ["social-media-video-production", "Social Media Video Production"],
    ["motion-graphics-support", "Motion Graphics Support"],
    ["product-demo-videos", "Product Demo Videos"],
    ["brand-story-videos", "Brand Story Videos"],
    ["reels-shorts-editing", "Reels & Shorts Editing"],
    ["video-repurposing-services", "Video Repurposing Services"],
    ["campaign-video-creatives", "Campaign Video Creatives"],
  ],
  "mobile-apps": [
    ["android-app-development", "Android App Development"],
    ["ios-app-development", "iOS App Development"],
    ["hybrid-app-development", "Hybrid App Development"],
    ["ui-ux-design-mobile-apps", "UI/UX Design for Mobile Apps"],
    ["backend-api-development-for-apps", "Backend & API Development for Apps"],
    ["mvp-app-development", "MVP App Development"],
    ["enterprise-app-development", "Enterprise App Development"],
    ["app-maintenance-support", "App Maintenance & Support"],
    ["app-testing-qa", "App Testing & QA"],
    ["app-store-launch-deployment", "App Store Launch & Deployment"],
  ],
  "crm-automation": [
    ["crm-setup-customization", "CRM Setup & Customization"],
    ["sales-funnel-automation", "Sales Funnel Automation"],
    ["lead-capture-automation", "Lead Capture Automation"],
    ["whatsapp-automation", "WhatsApp Automation"],
    ["email-automation", "Email Automation"],
    ["chatbot-development", "Chatbot Development"],
    ["workflow-automation", "Workflow Automation"],
    ["lead-qualification-systems", "Lead Qualification Systems"],
    ["appointment-booking-automation", "Appointment Booking Automation"],
    ["customer-support-automation", "Customer Support Automation"],
  ],
  "support-ops": [
    ["website-maintenance", "Website Maintenance"],
    ["app-maintenance", "App Maintenance"],
    ["software-support", "Software Support"],
    ["technical-troubleshooting", "Technical Troubleshooting"],
    ["uptime-monitoring-support", "Uptime & Monitoring Support"],
    ["feature-enhancement-support", "Feature Enhancement Support"],
    ["bug-fixing-retainers", "Bug Fixing Retainers"],
    ["customer-support-operations", "Customer Support Operations"],
    ["knowledge-base-helpcenter-setup", "Knowledge Base / Help Centre Setup"],
    ["service-desk-support-solutions", "Service Desk Support Solutions"],
  ],
};

const categoryMeta = [
  ["linkedin-services", "LinkedIn Services", true],
  ["web-development", "Website Development", false],
  ["software-development", "AI Software Development", false],
  ["ecommerce", "E-commerce Development", false],
  ["seo-geo-aeo", "SEO, GEO & AEO Services", false],
  ["paid-ads", "Performance Marketing / Paid Ads", false],
  ["social-media", "Social Media Marketing", false],
  ["branding", "Branding & Graphic Design", false],
  ["video-production", "Video Editing & Creative Production", false],
  ["mobile-apps", "Mobile App Development", false],
  ["crm-automation", "CRM, Automation & Chatbot Solutions", false],
  ["support-ops", "Maintenance & Customer Support Solutions", false],
];

const categoryExecutionMap = {
  "linkedin-services": [
    { title: "Profile positioning", detail: "Rewrite profiles, headlines, featured sections, and proof blocks so the account looks commercially clear instead of resume-led." },
    { title: "Content production", detail: "Plan content pillars, write posts, shape carousels, and align the narrative with demand generation and authority building." },
    { title: "Outbound workflows", detail: "Build outreach sequences, connection request logic, follow-up cadence, and CRM handoff for qualified replies." },
    { title: "Lead qualification", detail: "Connect conversations to booking, routing, or CRM stages so LinkedIn activity turns into a usable pipeline." },
    { title: "Reporting and iteration", detail: "Review profile views, acceptance rates, reply quality, booked calls, and content performance to improve the next cycle." },
  ],
  "web-development": [
    { title: "Information architecture", detail: "Plan site structure, page hierarchy, navigation, and service layout so visitors can find the right path quickly and search engines can understand the site." },
    { title: "Design and frontend build", detail: "Design and build websites in React, Framer, WordPress, or custom stacks with responsive layouts, conversion paths, and component consistency." },
    { title: "Performance and accessibility", detail: "Improve speed, mobile behavior, form flow, and accessibility before launch instead of treating them as optional cleanup." },
    { title: "SEO and tracking readiness", detail: "Set up crawlable structure, metadata, schema, analytics, and event tracking so the site is ready for search and campaign measurement." },
    { title: "QA, launch, and iteration", detail: "Test forms, pages, devices, redirects, and key journeys, then support launch fixes and post-launch optimization." },
  ],
  "software-development": [
    { title: "Business use-case scoping", detail: "Define the workflow, user role, and business decision the AI software needs to support so the build solves a real operational problem." },
    { title: "Data and integration layer", detail: "Connect the AI layer to the right data sources, APIs, and internal systems because integration quality drives output quality." },
    { title: "Evaluation and safety checks", detail: "Test the application before release using quality, safety, or custom evaluation data instead of shipping unverified behavior." },
    { title: "Deployment and monitoring", detail: "Set up release logic, performance tracking, and incident handling so the AI application can be observed and improved after launch." },
    { title: "Governance and iteration", detail: "Handle access, data integrity, review loops, and continuous updates so the AI system stays useful as the business changes." },
  ],
  ecommerce: [
    { title: "Store architecture", detail: "Plan catalog structure, navigation, collection flow, and page templates so shoppers can move from discovery to checkout without friction." },
    { title: "Product and merchandising execution", detail: "Build or refine product pages, media, pricing blocks, reviews, and trust elements that affect add-to-cart behavior." },
    { title: "Checkout and conversion work", detail: "Reduce checkout friction, improve mobile purchase flow, and add recovery logic for cart abandonment and repeat visits." },
    { title: "Platform and integration setup", detail: "Handle Shopify, WooCommerce, marketplace, payment, shipping, CRM, and operational integrations needed for real commerce delivery." },
    { title: "Campaign and retention support", detail: "Connect store changes to paid traffic, email flows, remarketing, and post-purchase retention work so revenue compounds after launch." },
  ],
  "seo-geo-aeo": [
    { title: "Crawlability and indexing fixes", detail: "Audit robots rules, sitemap coverage, indexation problems, internal links, and page discoverability so important URLs can rank." },
    { title: "Mobile and page-quality checks", detail: "Ensure the mobile version carries the same core content, metadata, and media quality because Google indexes primarily from mobile." },
    { title: "On-page and content structure", detail: "Improve headings, service-page logic, answer-oriented content, entity clarity, and topical coverage so pages are understandable to both people and search systems." },
    { title: "Schema and search presentation", detail: "Add and validate structured data, then check the implementation with tools like Rich Results Test so the markup is not just present but usable." },
    { title: "Measurement and iteration", detail: "Track rankings, impressions, clicks, crawl health, and content performance so SEO work keeps improving instead of stopping at the audit." },
  ],
  "paid-ads": [
    { title: "Campaign architecture", detail: "Structure accounts, campaign groups, audiences, geography, and intent buckets so budget is organized around commercial goals." },
    { title: "Creative and landing alignment", detail: "Match ad messaging to landing-page promises, offers, forms, and page experience to reduce wasted spend." },
    { title: "Tracking and attribution", detail: "Set up conversion tracking, event mapping, UTMs, and CRM connection so spend can be judged on qualified outcomes." },
    { title: "Optimization cycles", detail: "Review search terms, placements, frequency, CPL, quality, and ROAS to keep cutting waste and improving signal." },
    { title: "Reporting and budget control", detail: "Translate campaign data into budget decisions, scaling rules, and clearer visibility for the commercial team." },
  ],
  "social-media": [
    { title: "Channel strategy", detail: "Define the role of each platform, posting cadence, content mix, and growth objective so social activity is not random." },
    { title: "Content production", detail: "Create posts, reels, carousels, captions, and campaign variants that fit each platform instead of copying one format everywhere." },
    { title: "Brand consistency", detail: "Keep visual direction, offer framing, and messaging consistent so the channel actually strengthens trust." },
    { title: "Community and response flow", detail: "Handle comments, DMs, replies, and handoff paths so social engagement can support lead generation or customer support." },
    { title: "Performance review", detail: "Track reach, saves, shares, watch time, clicks, and downstream inquiries to shape the next content cycle." },
  ],
  branding: [
    { title: "Positioning inputs", detail: "Clarify what the brand needs to communicate before making visual choices so design is tied to market intent." },
    { title: "Identity system", detail: "Build logo use, typography, color, layout rules, and supporting assets so the brand can be applied consistently." },
    { title: "Commercial applications", detail: "Apply the identity to websites, ads, decks, social content, and collateral where the brand actually gets judged." },
    { title: "Guidelines and handoff", detail: "Document usage rules and file systems so internal teams and vendors can execute consistently later." },
    { title: "Refresh and extension work", detail: "Support rebrands, rollout updates, and campaign-specific visual extensions once the core system is live." },
  ],
  "video-production": [
    { title: "Concept and scripting", detail: "Shape the narrative, hooks, messaging, and shot intent before editing begins so the video has a commercial purpose." },
    { title: "Editing and motion", detail: "Edit long-form, short-form, ad, or campaign video with pacing, graphics, captions, and structure that fit the channel." },
    { title: "Format adaptation", detail: "Prepare platform-specific versions for reels, ads, explainers, YouTube, or sales use instead of exporting one generic cut." },
    { title: "Creative reuse", detail: "Repurpose raw footage into multiple assets so the production effort delivers more than one output." },
    { title: "Performance-informed iteration", detail: "Use view-through, retention, click, and campaign feedback to improve the next edit cycle." },
  ],
  "mobile-apps": [
    { title: "Product and journey planning", detail: "Define user flows, onboarding, retention logic, and key app behavior before moving into screens and code." },
    { title: "Platform-specific delivery", detail: "Build Android, iOS, or hybrid apps with the right balance of platform standards, speed, and future maintainability." },
    { title: "Backend and API support", detail: "Plan auth, data flow, syncing, notifications, and infrastructure so the app is supported by a stable backend layer." },
    { title: "Quality and release readiness", detail: "Test workflows, state handling, devices, store requirements, and launch assets because app quality is judged at release." },
    { title: "Post-launch improvement", detail: "Use onboarding, activation, crash, and retention data to improve the product after it ships." },
  ],
  "crm-automation": [
    { title: "Pipeline and stage design", detail: "Map how leads, contacts, and deals actually move through the business before setting up the automation layer." },
    { title: "Routing and follow-up logic", detail: "Build automations for assignment, reminders, nurture sequences, and task creation so response time improves." },
    { title: "Channel integration", detail: "Connect forms, WhatsApp, email, ads, booking, and support flows into the CRM instead of leaving them disconnected." },
    { title: "Visibility and reporting", detail: "Create dashboards for lead source, conversion quality, response speed, and revenue pipeline so the CRM is actually useful." },
    { title: "Operational cleanup", detail: "Handle deduplication, field logic, permissions, and user workflows so the CRM can keep working after implementation." },
  ],
  "support-ops": [
    { title: "Maintenance execution", detail: "Handle updates, bug fixes, compatibility checks, and operational improvements across websites, apps, or internal tools." },
    { title: "Issue diagnosis", detail: "Investigate recurring technical and workflow problems down to the actual root cause rather than patching symptoms." },
    { title: "Monitoring and escalation", detail: "Set up uptime checks, alerts, response paths, and internal handoffs so problems are seen early and handled properly." },
    { title: "Support workflow setup", detail: "Define queues, helpdesk flow, macros, escalation rules, and self-serve assets where customer support is involved." },
    { title: "Visibility and service reporting", detail: "Track issue volume, response time, recurring failure areas, and delivery quality so support work becomes more predictable." },
  ],
};

export const insightsCategories = [
  "LinkedIn",
  "SEO",
  "Paid Ads",
  "Web Strategy",
  "E-commerce",
  "Branding",
  "Automation",
  "AI in Marketing",
  "Conversion",
  "Agency Playbooks",
];

export const insightPosts = [
  { slug: "linkedin-authority-engine", title: "LinkedIn Authority Engine for Founders", category: "LinkedIn", excerpt: "How to combine profile, content, and outreach for predictable B2B conversations.", linkedServiceSlugs: ["linkedin-services", "linkedin-content-strategy"], linkedCaseStudySlugs: ["founder-linkedin-pipeline"] },
  { slug: "linkedin-outreach-framework", title: "LinkedIn Outreach Framework That Converts", category: "LinkedIn", excerpt: "A messaging and follow-up model for higher reply quality.", linkedServiceSlugs: ["linkedin-outreach-systems"], linkedCaseStudySlugs: ["b2b-lead-engine"] },
  { slug: "geo-aeo-service-pages", title: "GEO and AEO Structure for Service Websites", category: "SEO", excerpt: "How to write service pages so AI systems can cite them.", linkedServiceSlugs: ["seo-geo-aeo"], linkedCaseStudySlugs: ["search-visibility-growth"] },
  { slug: "technical-seo-checklist-agency-sites", title: "Technical SEO Checklist for Agency Sites", category: "SEO", excerpt: "Core crawl and index fixes that affect visibility.", linkedServiceSlugs: ["technical-seo"], linkedCaseStudySlugs: ["search-visibility-growth"] },
  { slug: "landing-page-message-match", title: "Landing Page Message Match for Paid Campaigns", category: "Paid Ads", excerpt: "Lower CPL by aligning ad promise to page structure.", linkedServiceSlugs: ["paid-ads"], linkedCaseStudySlugs: ["paid-media-roi"] },
  { slug: "multi-channel-attribution-basics", title: "Multi-Channel Attribution Basics for Growth Teams", category: "Paid Ads", excerpt: "How to avoid false optimization from poor tracking.", linkedServiceSlugs: ["conversion-tracking-setup"], linkedCaseStudySlugs: ["paid-media-roi"] },
  { slug: "website-hierarchy-for-conversion", title: "Website Hierarchy for Conversion and SEO", category: "Web Strategy", excerpt: "A practical architecture model for service businesses.", linkedServiceSlugs: ["web-development"], linkedCaseStudySlugs: ["conversion-website-rebuild"] },
  { slug: "ecommerce-checkout-dropoff-fixes", title: "E-commerce Checkout Drop-Off Fixes", category: "E-commerce", excerpt: "Top fixes to improve completion rate.", linkedServiceSlugs: ["checkout-optimization"], linkedCaseStudySlugs: ["conversion-website-rebuild"] },
  { slug: "brand-systems-for-growth", title: "Brand Systems That Support Performance Marketing", category: "Branding", excerpt: "Why visual consistency improves campaign economics.", linkedServiceSlugs: ["branding"], linkedCaseStudySlugs: ["founder-brand-growth"] },
  { slug: "automation-sop-for-lead-routing", title: "Lead Routing Automation SOP", category: "Automation", excerpt: "A repeatable process to reduce response-time loss.", linkedServiceSlugs: ["crm-automation"], linkedCaseStudySlugs: ["b2b-lead-engine"] },
  { slug: "ai-assistants-for-agency-ops", title: "AI Assistants for Agency and Sales Ops", category: "AI in Marketing", excerpt: "Where chatbots and voice agents actually create ROI.", linkedServiceSlugs: ["chatbot-development"], linkedCaseStudySlugs: ["b2b-lead-engine"] },
  { slug: "cro-basics-for-service-funnels", title: "CRO Basics for Service Funnels", category: "Conversion", excerpt: "Simple funnel checkpoints to increase booked calls.", linkedServiceSlugs: ["landing-page-design"], linkedCaseStudySlugs: ["conversion-website-rebuild"] },
];

export const industries = [
  {
    slug: "healthcare",
    title: "Healthcare Digital Solutions",
    summary: "Patient acquisition, trust-focused UX, and compliant growth systems.",
    childSolutions: [
      ["healthcare-website-development", "Healthcare Website Development"],
      ["healthcare-seo", "Healthcare SEO"],
      ["healthcare-lead-generation-ads", "Healthcare Lead Generation Ads"],
      ["patient-app-development", "Patient App Development"],
      ["healthcare-branding", "Branding for Healthcare Businesses"],
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate Digital Solutions",
    summary: "Lead funnels, project pages, and paid traffic systems for property businesses.",
    childSolutions: [
      ["real-estate-website-development", "Real Estate Website Development"],
      ["real-estate-seo", "Real Estate SEO"],
      ["real-estate-lead-ads", "Real Estate Lead Ads"],
      ["broker-crm-automation", "Broker CRM & Automation"],
      ["property-video-creative", "Property Video Creative"],
    ],
  },
  {
    slug: "retail-ecommerce",
    title: "Retail & E-commerce Digital Solutions",
    summary: "Commerce UX, product-led growth, and retention systems.",
    childSolutions: [
      ["retail-storefront-optimization", "Retail Storefront Optimization"],
      ["ecommerce-seo-industry", "E-commerce SEO"],
      ["catalog-performance-ads", "Catalog Performance Ads"],
      ["conversion-checkout-optimization-industry", "Conversion & Checkout Optimization"],
      ["retail-retention-automation", "Retail Retention Automation"],
    ],
  },
  {
    slug: "saas-technology",
    title: "SaaS & Technology Digital Solutions",
    summary: "Pipeline systems for product marketing, demos, and conversion.",
    childSolutions: [
      ["saas-positioning-site-architecture", "SaaS Positioning & Site Architecture"],
      ["saas-content-seo", "SaaS Content & SEO"],
      ["saas-demand-generation-ads", "SaaS Demand Generation Ads"],
      ["product-led-onboarding-funnels", "Product-Led Onboarding Funnels"],
      ["saas-sales-automation", "SaaS Sales Automation"],
    ],
  },
];

export const caseStudies = [
  {
    slug: "founder-linkedin-pipeline",
    title: "Founder LinkedIn Pipeline",
    category: "Case Study",
    industry: "B2B Services",
    challenge: "A B2B consulting founder was posting on LinkedIn sporadically with no strategy. Their profile read like a resume, content got zero engagement, and despite having a strong service offering, LinkedIn generated exactly zero leads per month. They were spending 5+ hours per week on LinkedIn with nothing to show for it.",
    solution: "We rebuilt the founder's entire LinkedIn presence from the ground up. We rewrote their profile as a conversion asset — new headline, about section, and featured content. We designed a 4-pillar content strategy with ghostwritten posts 4x/week, built a 5-step outreach sequence targeting CFOs in mid-market companies, and integrated CRM routing so every reply went into a qualification pipeline with automated follow-ups.",
    outcomes: ["4.2x increase in profile views", "38% connection acceptance rate", "22 qualified conversations/month", "8 booked calls/week avg", "First client closed within 3 weeks"],
    linkedServices: ["linkedin-services", "linkedin-content-strategy", "linkedin-outreach-systems"],
    resultSummary: "LinkedIn became the founder's #1 pipeline channel, generating 22+ qualified conversations per month within 60 days.",
    metrics: [
      { label: "Profile Views", before: "120/week", after: "500+/week" },
      { label: "Connection Rate", before: "12%", after: "38%" },
      { label: "Monthly Leads", before: "0", after: "22" },
      { label: "Booked Calls/Week", before: "1-2", after: "8" },
    ],
    timeline: "8 weeks",
    approach: [
      "Profile audit and complete rewrite for ICP targeting",
      "Content pillar design — 4 themes mapped to buyer journey stages",
      "Ghostwriting 16 posts/month in founder's authentic voice",
      "5-step outreach sequence with personalized openers",
      "CRM integration with HubSpot for lead routing",
      "Weekly analytics review and content iteration",
    ],
    testimonial: { quote: "For the first time, LinkedIn feels like a real business channel. We went from zero to 8 calls a week without spending a rupee on ads.", author: "Founder, B2B Consulting Firm" },
  },
  {
    slug: "b2b-lead-engine",
    title: "B2B Lead Engine",
    category: "Case Study",
    industry: "B2B Lead Gen",
    challenge: "A growing digital agency was relying entirely on referrals and had no structured lead generation system. When referrals slowed down, revenue became unpredictable. They had a basic website with no conversion path, no CRM, and their LinkedIn presence was dormant. They needed a multi-channel lead engine that could generate a predictable pipeline.",
    solution: "We built a complete inbound-outbound lead engine. We redesigned their website with conversion-focused pages and clear CTAs. We set up LinkedIn outreach targeting marketing directors at mid-market companies. We implemented HubSpot CRM from scratch — stages, automation, follow-up sequences, and lead scoring. Every channel fed into one unified pipeline with automated handoffs between marketing and sales.",
    outcomes: ["3x increase in monthly qualified leads", "Response time reduced from 48hrs to 2hrs", "42% improvement in lead-to-meeting rate", "Revenue pipeline up 180%", "Fully automated follow-up system"],
    linkedServices: ["linkedin-services", "crm-automation", "web-development"],
    resultSummary: "A unified lead engine across LinkedIn, website, and CRM generated 3x more qualified leads with automated follow-up.",
    metrics: [
      { label: "Monthly Leads", before: "8-12", after: "35+" },
      { label: "Response Time", before: "48 hours", after: "< 2 hours" },
      { label: "Lead-to-Meeting", before: "18%", after: "42%" },
      { label: "Revenue Pipeline", before: "Baseline", after: "+180%" },
    ],
    timeline: "12 weeks",
    approach: [
      "Website audit and conversion-focused redesign",
      "CRM architecture — pipeline stages, lead scoring, automation",
      "LinkedIn outreach system setup with ICP targeting",
      "Landing page creation for key service offerings",
      "Email nurture sequences for leads not ready to buy",
      "Weekly reporting dashboard and pipeline reviews",
    ],
    testimonial: { quote: "We went from hoping for referrals to having a machine that generates qualified meetings every week. The CRM alone saved us 10 hours per week.", author: "CEO, Digital Agency" },
  },
  {
    slug: "search-visibility-growth",
    title: "Search Visibility Growth",
    category: "Case Study",
    industry: "Professional Services",
    challenge: "A professional services firm had invested significantly in their website but it was virtually invisible in search. They ranked on page 3+ for their primary service keywords, their site had no schema markup, Google couldn't properly crawl half their pages, and AI answer engines like ChatGPT and Perplexity never mentioned them despite being a market leader.",
    solution: "We ran a comprehensive technical SEO audit and fixed 127 issues — broken canonical tags, missing meta descriptions, poor internal linking, and crawl traps. We restructured their content architecture around entity-first principles for GEO/AEO, added FAQ and Service schema markup, rebuilt their service pages with answer-oriented copy, and created a content hub strategy targeting high-intent queries.",
    outcomes: ["156% increase in organic traffic", "Page 1 rankings for 12 target keywords", "Featured in AI answer results", "40% more organic form submissions", "Domain authority improved by 18 points"],
    linkedServices: ["seo-geo-aeo", "web-development"],
    resultSummary: "Organic traffic grew 156% and the firm appeared in AI answer results for the first time after a full SEO/GEO restructure.",
    metrics: [
      { label: "Organic Traffic", before: "2,400/mo", after: "6,150/mo" },
      { label: "Page 1 Keywords", before: "3", after: "15" },
      { label: "Organic Leads", before: "12/mo", after: "34/mo" },
      { label: "Domain Authority", before: "28", after: "46" },
    ],
    timeline: "16 weeks",
    approach: [
      "Full technical SEO audit — 127 issues identified and fixed",
      "Content architecture redesign with entity-first approach",
      "Schema markup implementation (FAQ, Service, Organization)",
      "Service page rewrites optimized for AI answer engines",
      "Internal linking strategy and pillar-cluster model",
      "Monthly performance tracking and content iteration",
    ],
    testimonial: { quote: "We went from being invisible online to ranking on page 1 for our most important keywords. The AI visibility was a bonus we didn't even expect.", author: "Managing Partner, Advisory Firm" },
  },
  {
    slug: "conversion-website-rebuild",
    title: "Conversion Website Rebuild",
    category: "Case Study",
    industry: "Professional Services",
    challenge: "A law firm's website was getting 3,000+ visitors per month but converting less than 0.5% into enquiries. The site had no clear messaging hierarchy, buried CTAs, no trust signals above the fold, and a contact form that asked 14 questions. Visitors landed, got confused, and left. The firm was spending ₹2L/month on Google Ads driving traffic to a page that leaked leads.",
    solution: "We redesigned the site from messaging-first principles. New headline framework, clear value proposition above the fold, trust signals (client logos, case results, testimonials) placed strategically, a simplified 4-field contact form, and dedicated landing pages for each practice area. We implemented exit-intent popups, a sticky CTA bar, and a WhatsApp chat widget for mobile visitors.",
    outcomes: ["Conversion rate from 0.5% to 3.2%", "540% more enquiries from same traffic", "Cost per lead dropped by 62%", "Average time-on-site increased 45%", "Mobile conversion up 4x"],
    linkedServices: ["web-development", "branding"],
    resultSummary: "The rebuilt website converted 6x more visitors into leads, dropping cost per lead by 62% without increasing ad spend.",
    metrics: [
      { label: "Conversion Rate", before: "0.5%", after: "3.2%" },
      { label: "Monthly Enquiries", before: "15", after: "96" },
      { label: "Cost Per Lead", before: "₹13,333", after: "₹5,066" },
      { label: "Avg Time on Site", before: "1m 20s", after: "2m 55s" },
    ],
    timeline: "6 weeks",
    approach: [
      "Conversion audit — heatmaps, scroll depth, form analytics",
      "Messaging hierarchy redesign with clear value proposition",
      "Trust signal strategy — testimonials, case results, client logos",
      "Form simplification from 14 fields to 4 fields",
      "Practice area landing pages for paid traffic",
      "Mobile UX optimization with WhatsApp CTA and sticky bar",
    ],
    testimonial: { quote: "Same traffic, 6x more leads. The redesign paid for itself in the first month.", author: "Partner, Law Firm" },
  },
  {
    slug: "paid-media-roi",
    title: "Paid Media ROI Transformation",
    category: "Case Study",
    industry: "Lead Generation",
    challenge: "A real estate developer was spending ₹5L/month on Google and Meta ads but couldn't tell which campaigns were working. Landing pages had no message-match with ad copy, tracking was broken (no conversion pixels, GA4 misconfigured), and the sales team complained about low-quality leads. Cost per qualified lead was ₹3,200 — well above their target of ₹1,500.",
    solution: "We rebuilt the entire paid media stack. New campaign-specific landing pages with headline-to-ad matching, proper conversion tracking setup (GA4, Meta Pixel, Google Ads conversions), UTM taxonomy, CRM integration for closed-loop reporting, ad creative testing (6 variants per campaign), and negative keyword optimization. We also built a custom reporting dashboard so the team could see real CPL by campaign in real-time.",
    outcomes: ["Cost per lead reduced by 58%", "Lead quality score improved 3x", "ROAS improved from 1.8x to 4.2x", "Attribution clarity across all channels", "₹12L in pipeline from first 90 days"],
    linkedServices: ["paid-ads", "landing-page-design"],
    resultSummary: "Rebuilt paid media stack reduced CPL by 58% and improved ROAS from 1.8x to 4.2x within 90 days.",
    metrics: [
      { label: "Cost Per Lead", before: "₹3,200", after: "₹1,350" },
      { label: "ROAS", before: "1.8x", after: "4.2x" },
      { label: "Lead Quality Score", before: "2.1/10", after: "6.8/10" },
      { label: "Pipeline (90 days)", before: "₹4L", after: "₹12L" },
    ],
    timeline: "10 weeks",
    approach: [
      "Full tracking audit — GA4, Meta Pixel, conversion tags",
      "UTM taxonomy design for campaign attribution",
      "Campaign-specific landing pages with message-match",
      "Ad creative testing — 6 variants per campaign",
      "CRM integration for closed-loop lead reporting",
      "Custom real-time reporting dashboard",
    ],
    testimonial: { quote: "For the first time we can actually see which rupee is making us money. CPL dropped from ₹3,200 to ₹1,350 without reducing spend.", author: "Marketing Head, Real Estate Developer" },
  },
  {
    slug: "founder-brand-growth",
    title: "Founder Brand Growth System",
    category: "Case Study",
    industry: "Personal Brand",
    challenge: "A fintech founder had deep domain expertise but zero online presence. No personal brand, inconsistent visual identity, and content scattered across platforms in different tones. They wanted to establish thought leadership to attract investors, talent, and enterprise clients — but had no content system, no design language, and no time to manage social channels.",
    solution: "We built a complete founder brand system: brand identity guidelines, social templates, a content engine producing 12 LinkedIn posts + 4 Instagram reels + 2 YouTube shorts per month, and a video editing pipeline for converting long-form talks into social clips. Everything was managed end-to-end — the founder spent only 2 hours/month on brand activities.",
    outcomes: ["LinkedIn followers grew from 800 to 12,000", "3 speaking invitations from content", "Featured in 2 industry publications", "Brand consistency across 4 platforms", "2 enterprise deals attributed to brand"],
    linkedServices: ["social-media", "video-production", "branding"],
    resultSummary: "The founder went from zero social presence to 12K LinkedIn followers and 2 enterprise deals directly from brand visibility.",
    metrics: [
      { label: "LinkedIn Followers", before: "800", after: "12,000" },
      { label: "Monthly Content", before: "2 posts", after: "18 pieces" },
      { label: "Speaking Invites", before: "0", after: "3" },
      { label: "Brand Deals", before: "0", after: "2 enterprise" },
    ],
    timeline: "16 weeks",
    approach: [
      "Brand identity design — logo system, colors, typography",
      "Social template library for LinkedIn, Instagram, YouTube",
      "Content calendar with 18 pieces/month across platforms",
      "Video editing pipeline — long-form to social clips",
      "Engagement strategy and community management",
      "Monthly brand performance review",
    ],
    testimonial: { quote: "I went from being unknown online to getting invited to speak at conferences. Two of our biggest clients found us through my LinkedIn content.", author: "Founder, Fintech Startup" },
  },
  {
    slug: "product-launch-platform",
    title: "Product Launch Platform",
    category: "Case Study",
    industry: "Software / SaaS",
    challenge: "A SaaS startup had built an MVP but had no launch-ready digital infrastructure. No marketing website, no onboarding flow, no analytics, and the product UI needed significant UX improvements before going to market. They had 6 weeks until their planned launch date and needed everything built simultaneously.",
    solution: "We ran a parallel-track delivery: a marketing website with clear positioning and demo booking flow, product UI/UX improvements for onboarding, analytics integration (Mixpanel + GA4), and a launch communication system with email sequences and social content. We also built an internal admin dashboard for the team to monitor signups and usage.",
    outcomes: ["Launched on time in 6 weeks", "342 signups in first 30 days", "Onboarding completion rate: 78%", "Product-qualified leads: 45", "Admin dashboard monitoring in real-time"],
    linkedServices: ["software-development", "mobile-apps"],
    resultSummary: "The product launched on time with 342 signups in 30 days and 78% onboarding completion from a fully integrated digital platform.",
    metrics: [
      { label: "Time to Launch", before: "No plan", after: "6 weeks" },
      { label: "Day-30 Signups", before: "N/A", after: "342" },
      { label: "Onboarding Rate", before: "~30%", after: "78%" },
      { label: "Product Leads", before: "0", after: "45 PQLs" },
    ],
    timeline: "6 weeks",
    approach: [
      "Marketing website design and development",
      "Product UX audit and onboarding flow redesign",
      "Analytics integration — Mixpanel, GA4, event tracking",
      "Admin dashboard for signup and usage monitoring",
      "Email onboarding sequence (7-day drip)",
      "Launch day social content and comms plan",
    ],
    testimonial: { quote: "They delivered a marketing site, product UX fixes, and analytics setup — all in 6 weeks. We hit 342 signups in our first month.", author: "CTO, SaaS Startup" },
  },
  {
    slug: "ecommerce-revenue-growth",
    title: "E-commerce Revenue Growth",
    category: "Case Study",
    industry: "E-commerce / Retail",
    challenge: "A fashion D2C brand had a Shopify store doing ₹8L/month in revenue but was stuck. Cart abandonment was 82%, mobile checkout was clunky, product pages lacked urgency, and their retargeting ads were sending people back to the same pages that didn't convert. They needed a conversion-focused overhaul without migrating platforms.",
    solution: "We optimized the existing Shopify store end-to-end: redesigned product pages with urgency triggers and social proof, simplified the 5-step checkout to 2 steps, added exit-intent offers, built a cart abandonment email sequence (3-email series), optimized mobile UX, and restructured retargeting ads to drive traffic to improved collection pages with better messaging.",
    outcomes: ["Revenue grew from ₹8L to ₹19L/month", "Cart abandonment dropped from 82% to 54%", "Checkout completion up 67%", "Retargeting ROAS improved 2.4x", "Average order value up 22%"],
    linkedServices: ["ecommerce", "paid-ads", "crm-automation"],
    resultSummary: "Store revenue grew from ₹8L to ₹19L/month through checkout optimization, cart recovery, and retargeting improvements.",
    metrics: [
      { label: "Monthly Revenue", before: "₹8L", after: "₹19L" },
      { label: "Cart Abandonment", before: "82%", after: "54%" },
      { label: "Checkout Rate", before: "18%", after: "46%" },
      { label: "AOV", before: "₹1,850", after: "₹2,260" },
    ],
    timeline: "8 weeks",
    approach: [
      "Checkout UX audit and 2-step simplification",
      "Product page redesign with urgency and social proof",
      "3-email cart abandonment recovery sequence",
      "Mobile UX optimization for thumb-friendly checkout",
      "Retargeting campaign restructure with new creatives",
      "A/B testing on product pages and cart flow",
    ],
    testimonial: { quote: "Our revenue more than doubled in 2 months. The checkout fix alone recovered ₹3L/month in abandoned carts.", author: "Founder, D2C Fashion Brand" },
  },
  {
    slug: "healthcare-patient-acquisition",
    title: "Healthcare Patient Acquisition",
    category: "Case Study",
    industry: "Healthcare",
    challenge: "A multi-specialty hospital chain was spending heavily on print and traditional advertising but had no digital patient acquisition system. Their website was a static brochure, they had no Google My Business optimization, no appointment booking flow, and competitors were outranking them for 'hospital near me' type searches in every location.",
    solution: "We built a digital patient acquisition system: new website with department-specific landing pages and online booking, Google Business Profile optimization for all 4 locations, local SEO strategy targeting high-intent medical queries, Google Ads campaigns for emergency and specialist search terms, and a WhatsApp-based appointment confirmation system integrated with their hospital management software.",
    outcomes: ["Online appointments grew 340%", "Local search visibility up for all locations", "Cost per patient acquisition: ₹180", "Website traffic increased 280%", "WhatsApp booking rate: 68%"],
    linkedServices: ["web-development", "seo-geo-aeo", "paid-ads"],
    resultSummary: "Online patient appointments grew 340% with a cost per acquisition of just ₹180 through localized digital acquisition.",
    metrics: [
      { label: "Online Appointments", before: "45/mo", after: "198/mo" },
      { label: "Cost Per Acquisition", before: "₹750", after: "₹180" },
      { label: "Local Pack Ranking", before: "Not visible", after: "Top 3" },
      { label: "Website Traffic", before: "3,200/mo", after: "12,100/mo" },
    ],
    timeline: "12 weeks",
    approach: [
      "Website redesign with department landing pages",
      "Online appointment booking system integration",
      "Google Business Profile optimization for 4 locations",
      "Local SEO strategy — medical keyword targeting",
      "Google Ads campaigns for high-intent medical searches",
      "WhatsApp booking confirmation system",
    ],
    testimonial: { quote: "We went from barely having a website to getting 198 online appointments a month. The WhatsApp integration was a game-changer for our patients.", author: "COO, Multi-specialty Hospital Chain" },
  },
  {
    slug: "saas-demand-generation",
    title: "SaaS Demand Generation System",
    category: "Case Study",
    industry: "SaaS / Technology",
    challenge: "A B2B SaaS company had a strong product but was struggling to fill the top of their funnel. Their website didn't clearly communicate the product's value, organic traffic was negligible, they had no content strategy, and outbound efforts were scattered. Sales reps were doing their own prospecting instead of closing deals.",
    solution: "We built an end-to-end demand generation system: product positioning and website redesign with clear use-case messaging, SEO content strategy targeting comparison and solution-aware keywords, LinkedIn thought leadership program for the founding team, automated email nurture sequences, and a demo booking flow optimized for conversion with calendar integration.",
    outcomes: ["Demo requests up 4.5x", "Organic traffic grew 210%", "Sales cycle shortened by 35%", "Content driving 40% of pipeline", "MQL-to-SQL rate improved to 28%"],
    linkedServices: ["web-development", "seo-geo-aeo", "linkedin-services"],
    resultSummary: "Demo requests increased 4.5x and sales cycle shortened 35% through integrated demand generation across content, LinkedIn, and SEO.",
    metrics: [
      { label: "Demo Requests", before: "12/mo", after: "54/mo" },
      { label: "Organic Traffic", before: "1,800/mo", after: "5,580/mo" },
      { label: "Sales Cycle", before: "62 days", after: "40 days" },
      { label: "MQL-to-SQL Rate", before: "11%", after: "28%" },
    ],
    timeline: "14 weeks",
    approach: [
      "Product positioning workshop and messaging framework",
      "Website redesign with use-case specific landing pages",
      "SEO content strategy — comparison and buying-intent keywords",
      "LinkedIn thought leadership for founding team",
      "Email nurture sequences for different buyer stages",
      "Demo booking flow optimization with calendar integration",
    ],
    testimonial: { quote: "Our pipeline went from unpredictable to overflowing. The content strategy alone is driving 40% of our qualified pipeline now.", author: "VP Marketing, B2B SaaS" },
  },
  {
    slug: "real-estate-lead-funnel",
    title: "Real Estate Lead Funnel",
    category: "Case Study",
    industry: "Real Estate",
    challenge: "A premium real estate developer launching a ₹200Cr residential project needed a digital lead generation system. Traditional brokers and newspaper ads were generating low-quality, high-volume leads. They needed qualified buyers — people with genuine intent and budget — not tire-kickers. Their previous digital agency had generated 2,000 leads but only 8 site visits.",
    solution: "We built a qualified lead funnel: premium project microsite with virtual tour integration, Google and Meta campaigns with income and interest-based targeting, landing pages with qualification questions baked into the form, a WhatsApp bot for instant follow-up and brochure delivery, and a CRM system that auto-scored leads based on budget, timeline, and engagement level.",
    outcomes: ["Cost per qualified lead: ₹420", "Site visit rate improved from 0.4% to 8.2%", "82 site visits in first 60 days", "12 bookings from digital leads", "Pipeline value: ₹18Cr"],
    linkedServices: ["web-development", "paid-ads", "crm-automation"],
    resultSummary: "Generated 82 qualified site visits and 12 bookings worth ₹18Cr in pipeline within 60 days through a conversion-focused lead funnel.",
    metrics: [
      { label: "Qualified CPL", before: "₹2,100", after: "₹420" },
      { label: "Site Visit Rate", before: "0.4%", after: "8.2%" },
      { label: "Site Visits (60 days)", before: "8", after: "82" },
      { label: "Pipeline Value", before: "₹1.5Cr", after: "₹18Cr" },
    ],
    timeline: "8 weeks",
    approach: [
      "Premium project microsite with virtual tour",
      "Qualification-first form design (budget + timeline questions)",
      "Google and Meta campaigns with interest/income targeting",
      "WhatsApp bot for instant brochure delivery and follow-up",
      "CRM with auto lead scoring and sales alerts",
      "Weekly lead quality review and campaign optimization",
    ],
    testimonial: { quote: "8 site visits from 2,000 leads with the last agency. 82 visits from 1,000 leads with Techbeyond. Quality changes everything.", author: "Director, Real Estate Development Co." },
  },
  {
    slug: "crm-automation-overhaul",
    title: "CRM & Automation Overhaul",
    category: "Case Study",
    industry: "Financial Services",
    challenge: "A financial advisory firm had 3,000+ contacts in spreadsheets, no email automation, manual follow-ups that took 15 hours per week, and no visibility into their sales pipeline. Leads were slipping through the cracks — they estimated losing ₹40L+ in potential revenue from poor follow-up alone.",
    solution: "We migrated everything to HubSpot CRM with custom pipeline stages, built automated email sequences for lead nurture (7 sequences for different buyer stages), set up WhatsApp integration for instant responses, created a client onboarding automation workflow, and built a custom reporting dashboard showing pipeline value, conversion rates, and team performance in real-time.",
    outcomes: ["Follow-up time reduced by 85%", "Pipeline visibility from zero to real-time", "Revenue recovered: ₹28L in first quarter", "Client onboarding time cut by 60%", "Team saved 12 hours/week on manual tasks"],
    linkedServices: ["crm-automation", "web-development"],
    resultSummary: "CRM implementation recovered ₹28L in lost revenue in the first quarter and reduced follow-up time by 85%.",
    metrics: [
      { label: "Follow-up Time", before: "48+ hours", after: "< 2 hours" },
      { label: "Manual Work", before: "15 hrs/week", after: "3 hrs/week" },
      { label: "Revenue Recovered", before: "Lost leads", after: "₹28L in Q1" },
      { label: "Pipeline Visibility", before: "None", after: "Real-time" },
    ],
    timeline: "6 weeks",
    approach: [
      "Data audit and migration from spreadsheets to HubSpot",
      "Custom pipeline stages matching their sales process",
      "7 automated email nurture sequences",
      "WhatsApp integration for instant lead response",
      "Client onboarding automation workflow",
      "Custom reporting dashboard build",
    ],
    testimonial: { quote: "We were literally losing money because we couldn't follow up properly. The CRM paid for itself in the first 3 weeks.", author: "Director, Financial Advisory Firm" },
  },
  {
    slug: "social-media-brand-launch",
    title: "Social Media Brand Launch",
    category: "Case Study",
    industry: "Lifestyle / D2C",
    challenge: "A premium wellness brand was launching in a crowded market with no social presence. They needed to establish credibility, build a community, and drive initial sales — all organically. Budget for paid ads was minimal (₹50K/month), so every rupee needed to work harder through compelling organic content and community building.",
    solution: "We built their social presence from scratch across Instagram and LinkedIn. We designed a visual brand identity for social, created a content calendar with 20 posts/month (mix of educational, lifestyle, UGC-style, and product), developed a reel strategy with trending-audio hooks, set up influencer seeding with 15 micro-influencers, and ran a launch campaign with a giveaway mechanic that generated email signups.",
    outcomes: ["0 to 8,500 Instagram followers in 90 days", "Average reel views: 45,000", "Email list grew to 2,200 from social", "First month revenue: ₹4.2L (70% from social)", "Community engagement rate: 6.8%"],
    linkedServices: ["social-media", "branding", "video-production"],
    resultSummary: "Built a 8,500-follower Instagram presence from zero in 90 days, driving 70% of first-month revenue through organic social.",
    metrics: [
      { label: "Instagram Followers", before: "0", after: "8,500" },
      { label: "Avg Reel Views", before: "N/A", after: "45,000" },
      { label: "Email Signups", before: "0", after: "2,200" },
      { label: "Social Revenue", before: "₹0", after: "₹2.9L/mo" },
    ],
    timeline: "12 weeks",
    approach: [
      "Visual brand identity for social channels",
      "Content calendar — 20 posts/month across formats",
      "Reel strategy with trending audio hooks",
      "Micro-influencer seeding program (15 creators)",
      "Launch giveaway campaign with email capture",
      "Community management and engagement strategy",
    ],
    testimonial: { quote: "We launched with zero audience and hit ₹4.2L in our first month. 70% came from Instagram alone. The reel strategy was brilliant.", author: "Co-founder, Wellness Brand" },
  },
  {
    slug: "mobile-app-mvp",
    title: "Mobile App MVP Launch",
    category: "Case Study",
    industry: "Logistics / Operations",
    challenge: "A logistics company was managing driver assignments, delivery tracking, and customer updates through phone calls and WhatsApp groups. This caused constant miscommunication, delayed deliveries, and zero data visibility. They needed a mobile app for drivers and a web dashboard for operations — both built within a tight 10-week budget.",
    solution: "We designed and built a cross-platform mobile app (React Native) for drivers with real-time location tracking, delivery status updates, and photo proof of delivery. For the operations team, we built a web dashboard with live fleet tracking, assignment management, route optimization suggestions, and automated customer notifications via SMS and WhatsApp.",
    outcomes: ["Delivery time reduced by 28%", "Customer complaints dropped 65%", "Operations team saved 4 hours/day", "Real-time visibility across 120 drivers", "Customer satisfaction score: 4.6/5"],
    linkedServices: ["mobile-apps", "software-development"],
    resultSummary: "Custom mobile app reduced delivery time by 28% and customer complaints by 65% with real-time fleet visibility across 120 drivers.",
    metrics: [
      { label: "Delivery Time", before: "45 min avg", after: "32 min avg" },
      { label: "Customer Complaints", before: "23/week", after: "8/week" },
      { label: "Ops Team Time", before: "8 hrs/day", after: "4 hrs/day" },
      { label: "Customer Rating", before: "3.2/5", after: "4.6/5" },
    ],
    timeline: "10 weeks",
    approach: [
      "Requirements workshop and user journey mapping",
      "UI/UX design for driver app and operations dashboard",
      "React Native cross-platform mobile app development",
      "Web dashboard with real-time fleet tracking",
      "SMS/WhatsApp notification automation",
      "Beta testing with 20 drivers before full rollout",
    ],
    testimonial: { quote: "We went from chaos on WhatsApp groups to a professional app that 120 drivers use daily. Deliveries are faster and customers are happier.", author: "Operations Manager, Logistics Company" },
  },
  {
    slug: "video-content-system",
    title: "Video Content Production System",
    category: "Case Study",
    industry: "Education / EdTech",
    challenge: "An online education platform was producing one YouTube video per month, shot poorly on a phone with no editing or thumbnails. Their competitors were publishing 8-12 videos/month with professional editing. They had the subject matter expertise and raw footage but no production system to turn it into engaging educational content at scale.",
    solution: "We built a complete video content production system: professional editing workflow for long-form YouTube videos (8-12 per month), short-form cuts for Instagram Reels and YouTube Shorts, custom thumbnail design, SEO-optimized titles and descriptions, content repurposing into blog posts and social carousels, and a performance dashboard tracking watch time, CTR, and subscriber growth.",
    outcomes: ["Video output: 1/month to 10/month", "YouTube subscribers: 2K to 18K", "Average watch time up 340%", "Short-form content driving 40% of new subs", "Course signups from YouTube grew 5x"],
    linkedServices: ["video-production", "social-media"],
    resultSummary: "Video production scaled from 1 to 10 videos/month, growing YouTube subscribers from 2K to 18K and course signups 5x.",
    metrics: [
      { label: "Videos/Month", before: "1", after: "10" },
      { label: "YouTube Subscribers", before: "2,000", after: "18,000" },
      { label: "Avg Watch Time", before: "1m 40s", after: "7m 20s" },
      { label: "Course Signups", before: "8/mo", after: "42/mo" },
    ],
    timeline: "12 weeks",
    approach: [
      "Content calendar and topic research pipeline",
      "Professional editing workflow — raw to published in 72 hours",
      "Short-form content strategy for Reels and Shorts",
      "Custom thumbnail design system",
      "SEO optimization for titles, descriptions, and tags",
      "Monthly performance review and content iteration",
    ],
    testimonial: { quote: "We had the expertise but no production system. Techbeyond turned our one monthly video into a content machine. 18K subscribers and counting.", author: "Founder, EdTech Platform" },
  },
  {
    slug: "react-b2b-website-replatform",
    title: "React B2B Website Replatform",
    category: "Case Study",
    industry: "B2B Technology",
    challenge: "A B2B technology company had outgrown a patchy marketing site assembled over years. The codebase was slow, pages were inconsistent, the CMS editing experience was fragile, and campaign teams could not launch new pages without developer bottlenecks. They needed a faster React-based website that could support SEO, paid traffic, and product storytelling without another rewrite six months later.",
    solution: "We replatformed the site into a modern React codebase with reusable page sections, cleaner information architecture, fast-loading landing templates, and a component system the internal team could scale. We also rebuilt core conversion paths, fixed tracking gaps, and tightened page hierarchy so the website could support both demand generation and sales enablement.",
    outcomes: ["Page-speed score improved to 92+", "Landing page launch time reduced by 70%", "Demo conversion rate increased 2.4x", "Bounce rate reduced by 34%", "Internal team gained reusable page system"],
    linkedServices: ["web-development", "react-website-development", "website-codebase-rebuilds"],
    resultSummary: "A React replatform turned a fragile legacy site into a fast, modular demand-generation website that launched pages faster and converted more demos.",
    metrics: [
      { label: "Page Speed Score", before: "54", after: "92" },
      { label: "Page Launch Time", before: "5-7 days", after: "1-2 days" },
      { label: "Demo Conversion", before: "1.1%", after: "2.7%" },
      { label: "Bounce Rate", before: "68%", after: "45%" },
    ],
    timeline: "9 weeks",
    approach: [
      "React component system and modular page architecture",
      "Conversion-path redesign for demo and contact flows",
      "Technical cleanup for performance and SEO readiness",
      "Reusable campaign landing page framework",
      "Analytics and event tracking rebuild",
      "Content migration with editorial QA",
    ],
    testimonial: { quote: "The rebuild gave us a real growth website, not just a prettier frontend. Marketing can launch faster and sales finally trusts the site.", author: "Head of Marketing, B2B Tech Company" },
  },
  {
    slug: "wordpress-lead-gen-overhaul",
    title: "WordPress Lead Generation Overhaul",
    category: "Case Study",
    industry: "Professional Services",
    challenge: "A consulting firm was locked into an aging WordPress website with plugin sprawl, slow performance, and unclear service messaging. Traffic existed, but pages were not ranking consistently and the site was converting poorly on mobile. The team wanted to keep WordPress for publishing speed while making the website commercially stronger.",
    solution: "We rebuilt the WordPress experience around cleaner templates, lighter plugin usage, faster page delivery, and clearer service page positioning. We simplified navigation, rebuilt the enquiry flow, created location-aware landing pages, and aligned SEO structure with the firm's actual high-intent service offers.",
    outcomes: ["Organic leads increased 3.1x", "Mobile conversion improved 2.8x", "Core Web Vitals passed on key pages", "Publishing workflow became simpler", "Service-page engagement increased 46%"],
    linkedServices: ["web-development", "wordpress-website-development", "seo-geo-aeo"],
    resultSummary: "The WordPress overhaul preserved easy publishing while turning the website into a faster and much stronger lead-generation asset.",
    metrics: [
      { label: "Organic Leads", before: "11/mo", after: "34/mo" },
      { label: "Mobile Conversion", before: "0.7%", after: "2.0%" },
      { label: "Avg Load Time", before: "5.8s", after: "1.9s" },
      { label: "Service Page Engagement", before: "1m 05s", after: "1m 35s" },
    ],
    timeline: "7 weeks",
    approach: [
      "WordPress theme cleanup and template rebuild",
      "Plugin rationalization and performance optimization",
      "Service-page messaging and hierarchy rewrite",
      "Mobile-first lead-capture flow redesign",
      "Location and service SEO structure improvements",
      "Editorial handoff for internal publishing team",
    ],
    testimonial: { quote: "We kept WordPress, but everything else changed. The site is faster, easier to manage, and finally generates the right kind of enquiries.", author: "Managing Director, Consulting Firm" },
  },
  {
    slug: "framer-launch-site-system",
    title: "Framer Launch Site System",
    category: "Case Study",
    industry: "Startup / Product Launch",
    challenge: "A product team needed a polished launch website in under three weeks for an investor-backed launch. They needed speed, design flexibility, and fast iterations while still protecting the message and lead-capture flow. Their previous no-code attempts looked generic and had no clear path to conversion.",
    solution: "We built a Framer-based launch site with strong narrative sections, polished motion, crisp value communication, and integrated call-booking and lead forms. We created reusable visual sections for product updates, social proof, and pricing teasers so the launch team could iterate fast without degrading the experience.",
    outcomes: ["Launch site shipped in 17 days", "Investor/demo requests increased 3x during launch", "Page engagement up 52%", "Internal edits became same-day", "Launch campaign achieved clean message-match across ads and site"],
    linkedServices: ["web-development", "framer-website-development", "landing-page-design"],
    resultSummary: "A Framer launch system helped the team ship fast, preserve design quality, and turn launch traffic into significantly more investor and demo requests.",
    metrics: [
      { label: "Time to Launch", before: "No stable site", after: "17 days" },
      { label: "Demo Requests", before: "9", after: "27" },
      { label: "Page Engagement", before: "1m 12s", after: "1m 49s" },
      { label: "Edit Turnaround", before: "2-3 days", after: "Same day" },
    ],
    timeline: "17 days",
    approach: [
      "Launch-message workshop and page narrative planning",
      "Framer build with reusable content blocks",
      "Motion direction and visual polish for credibility",
      "Lead capture and call-booking integration",
      "Landing-page alignment for launch campaigns",
      "Fast iteration support through launch week",
    ],
    testimonial: { quote: "We needed speed without looking rushed. The Framer build gave us both and helped our launch traffic actually convert.", author: "Founder, SaaS Product Team" },
  },
  {
    slug: "ios-wellness-app-launch",
    title: "iOS Wellness App Launch",
    category: "Case Study",
    industry: "Health & Wellness",
    challenge: "A wellness startup needed an iOS app that felt premium from day one, but their prototype had poor onboarding, unclear subscription messaging, and no usable analytics. They were preparing for an App Store launch and needed the product, activation flow, and operational backend aligned quickly.",
    solution: "We redesigned the iOS onboarding journey, rebuilt core app screens around retention cues, added subscription-ready UX, instrumented analytics, and connected the app to a lightweight admin backend for content updates and support. We also prepared the App Store launch assets and release checklist.",
    outcomes: ["Onboarding completion increased to 81%", "Trial-to-paid conversion improved 2.1x", "App Store launch shipped on schedule", "Support queries reduced by 39%", "Retention improved across week 1"],
    linkedServices: ["mobile-apps", "ios-app-development", "software-development"],
    resultSummary: "The iOS launch paired product polish with better activation, lifting onboarding and subscription conversion while reducing support load.",
    metrics: [
      { label: "Onboarding Completion", before: "38%", after: "81%" },
      { label: "Trial-to-Paid", before: "6%", after: "13%" },
      { label: "Week-1 Retention", before: "24%", after: "41%" },
      { label: "Support Queries", before: "41/mo", after: "25/mo" },
    ],
    timeline: "8 weeks",
    approach: [
      "iOS UX audit and onboarding redesign",
      "Activation-focused product screen improvements",
      "Subscription and monetization UX refinement",
      "Analytics instrumentation and event tracking",
      "Admin backend and content update flow",
      "App Store launch prep and review support",
    ],
    testimonial: { quote: "The launch felt like a real product launch, not a rushed MVP push. The onboarding and conversion numbers changed immediately.", author: "Co-founder, Wellness App" },
  },
  {
    slug: "android-field-ops-platform",
    title: "Android Field Operations Platform",
    category: "Case Study",
    industry: "Field Services",
    challenge: "A field services business was coordinating technicians with calls, spreadsheets, and messaging apps. Android devices were the standard in the field, but there was no unified app for job dispatch, proof of completion, or status updates. Delays, repeat visits, and poor reporting were constant issues.",
    solution: "We built an Android-first field operations app with dispatch visibility, job status tracking, offline-safe updates, image upload proof, and technician notes. The platform synced with a central operations dashboard so supervisors could monitor live work, flag delays, and close the loop faster with customers.",
    outcomes: ["Job completion time reduced by 31%", "Repeat-visit rate reduced 27%", "Supervisor reporting time cut by 60%", "Technician adoption reached 93%", "Customer update speed improved materially"],
    linkedServices: ["mobile-apps", "android-app-development", "software-development"],
    resultSummary: "An Android-first field operations platform reduced completion time, improved reporting, and gave supervisors real-time visibility into active jobs.",
    metrics: [
      { label: "Completion Time", before: "3.2 days", after: "2.2 days" },
      { label: "Repeat Visits", before: "18%", after: "13%" },
      { label: "Reporting Time", before: "10 hrs/week", after: "4 hrs/week" },
      { label: "Technician Adoption", before: "No system", after: "93%" },
    ],
    timeline: "10 weeks",
    approach: [
      "Android-first field workflow mapping",
      "Offline-capable job-status architecture",
      "Photo proof and note capture flows",
      "Supervisor dashboard for live monitoring",
      "Operational reporting and alert setup",
      "Rollout support with field-team training",
    ],
    testimonial: { quote: "The Android app replaced the chaos of calls and WhatsApp threads. Our field team adopted it quickly because it solved real daily friction.", author: "Operations Director, Field Services Company" },
  },
  {
    slug: "ai-sales-copilot-rollout",
    title: "AI Sales Copilot Rollout",
    category: "Case Study",
    industry: "B2B Sales",
    challenge: "A mid-market sales team had strong CRM data but weak execution discipline. Reps were inconsistent in follow-up, managers had little visibility into account progress, and too much time went into manual research before calls. They wanted AI support that improved execution without disrupting the sales process.",
    solution: "We built an AI sales copilot layer that summarized accounts, suggested next actions, generated call prep prompts, and drafted follow-up messages inside the operating workflow. We connected the copilot to CRM activity and pipeline data so suggestions reflected real account context instead of generic AI output.",
    outcomes: ["Prep time reduced by 64%", "Follow-up speed improved 3.4x", "Pipeline hygiene improved materially", "Manager visibility increased", "Rep adoption reached 78% in the first month"],
    linkedServices: ["software-development", "ai-software-development", "ai-chatbot-copilot-development", "crm-automation"],
    resultSummary: "The AI sales copilot reduced prep time and sped up follow-up dramatically by grounding suggestions in real CRM and pipeline context.",
    metrics: [
      { label: "Prep Time", before: "25 min/account", after: "9 min/account" },
      { label: "Follow-up Speed", before: "31 hrs", after: "9 hrs" },
      { label: "Rep Adoption", before: "0%", after: "78%" },
      { label: "Pipeline Hygiene", before: "Low", after: "Consistent" },
    ],
    timeline: "7 weeks",
    approach: [
      "Sales workflow audit and copilot use-case mapping",
      "CRM-connected AI context layer design",
      "Account-summary and next-step recommendation flows",
      "Follow-up drafting and review workflow",
      "Manager reporting for usage and execution quality",
      "Rollout playbook and rep enablement",
    ],
    testimonial: { quote: "This was the first AI rollout our reps actually kept using. It saved time because it understood the account context.", author: "VP Sales, B2B Services Company" },
  },
  {
    slug: "ai-support-automation-hub",
    title: "AI Support Automation Hub",
    category: "Case Study",
    industry: "SaaS Support",
    challenge: "A SaaS business had a growing support volume, a thin support team, and no effective self-serve layer. Response time was slipping, repeated queries were wasting hours, and leadership wanted AI automation without hurting customer experience or escalations.",
    solution: "We built an AI support automation hub combining a structured knowledge layer, triage logic, self-serve answer flows, and escalation routing for complex tickets. The system handled repetitive customer questions, summarized context for human agents, and improved handoff quality so support became faster without losing quality control.",
    outcomes: ["First-response time reduced by 71%", "Repetitive tickets deflected by 43%", "Agent handling time reduced 36%", "Escalation quality improved", "Customer CSAT remained stable during scale-up"],
    linkedServices: ["software-development", "ai-workflow-automation", "internal-ai-tools", "crm-automation"],
    resultSummary: "An AI-powered support hub reduced first-response time and deflected repetitive tickets while improving escalation quality for human agents.",
    metrics: [
      { label: "First Response Time", before: "11 hrs", after: "3.2 hrs" },
      { label: "Ticket Deflection", before: "0%", after: "43%" },
      { label: "Agent Handling Time", before: "18 min", after: "11.5 min" },
      { label: "CSAT", before: "4.4/5", after: "4.4/5" },
    ],
    timeline: "9 weeks",
    approach: [
      "Support query audit and automation opportunity mapping",
      "Knowledge-base structuring for answer reliability",
      "AI triage and self-serve answer experience design",
      "Escalation routing with context summarization",
      "Agent workflow improvements and QA loops",
      "Reporting for deflection, response time, and escalation quality",
    ],
    testimonial: { quote: "The AI layer didn’t just answer tickets. It made our support team sharper by removing repetitive load and improving escalations.", author: "Head of Customer Success, SaaS Company" },
  },
  {
    slug: "internal-ai-ops-console",
    title: "Internal AI Operations Console",
    category: "Case Study",
    industry: "Operations / Services",
    challenge: "A multi-entity services company had fragmented internal processes across reporting, scheduling, lead allocation, and project updates. Managers were spending too much time stitching together data from spreadsheets, chats, and multiple tools. Leadership wanted an internal AI-assisted control layer that reduced operational drag.",
    solution: "We designed and shipped an internal AI operations console that unified live task visibility, summarized operational issues, highlighted delayed actions, and generated manager-ready views of the business. The console combined workflow automation, internal tools, and AI summarization so leadership could move faster with cleaner signal.",
    outcomes: ["Operational review time reduced 58%", "Missed follow-ups reduced sharply", "Cross-team visibility improved", "Management reporting moved from reactive to proactive", "Internal ops drag reduced materially"],
    linkedServices: ["software-development", "internal-ai-tools", "ai-software-development", "ai-workflow-automation"],
    resultSummary: "The internal AI operations console cut review time, reduced missed actions, and gave leadership a clearer live view of the business.",
    metrics: [
      { label: "Review Time", before: "7 hrs/week", after: "3 hrs/week" },
      { label: "Missed Follow-ups", before: "Frequent", after: "Rare" },
      { label: "Reporting Lag", before: "2-3 days", after: "Same day" },
      { label: "Ops Visibility", before: "Fragmented", after: "Unified" },
    ],
    timeline: "11 weeks",
    approach: [
      "Internal workflow and reporting audit",
      "Operations console architecture and dashboard planning",
      "AI summarization layer for manager visibility",
      "Workflow automation for recurring actions",
      "Role-based views for department heads",
      "Operational QA and rollout support",
    ],
    testimonial: { quote: "Leadership meetings changed because we finally had one place to see what mattered. The AI summaries cut through a lot of operational noise.", author: "COO, Services Group" },
  },
];

export const faqClusters = [
  { slug: "linkedin-faq", title: "LinkedIn Services FAQ", categorySlug: "linkedin-services", items: [
    { q: "How long until LinkedIn starts generating leads?", a: "Most teams see measurable engagement improvements within weeks when profile, content, and outreach are aligned." },
    { q: "Do you write content and run outreach both?", a: "Yes. We handle positioning, content themes, and outreach workflows as one system." },
    { q: "Can this integrate with CRM?", a: "Yes. LinkedIn response flow can route directly into CRM pipelines and follow-up automation." },
  ]},
  { slug: "web-faq", title: "Web Development FAQ", categorySlug: "web-development", items: [
    { q: "Do you build websites in React, WordPress, and Framer?", a: "Yes. We build and rebuild websites across React codebases, WordPress, Framer, and custom stacks depending on the commercial and operational need." },
    { q: "Will the site be SEO-ready?", a: "Yes. We implement technical and structure-level SEO readiness during build." },
    { q: "Can you redesign or rebuild existing sites?", a: "Yes. We handle redesigns, migrations, codebase rebuilds, and conversion-focused upgrades for existing websites." },
  ]},
  { slug: "seo-faq", title: "SEO / GEO / AEO FAQ", categorySlug: "seo-geo-aeo", items: [
    { q: "Do you handle technical SEO and content together?", a: "Yes. We combine technical fixes with answer-first content architecture." },
    { q: "What is GEO and AEO?", a: "It is optimization for AI answer engines and generative search experiences." },
    { q: "Do you provide audits?", a: "Yes. We provide structured audits and execution plans." },
  ]},
  { slug: "ads-faq", title: "Paid Ads FAQ", categorySlug: "paid-ads", items: [
    { q: "Which platforms do you manage?", a: "Google, Meta, LinkedIn, Instagram, and YouTube campaigns based on target audience fit." },
    { q: "Do you optimize landing pages too?", a: "Yes. Ad performance depends on message-match and page conversion flow." },
    { q: "How do you track performance?", a: "We set up tracking and report against lead and conversion metrics." },
  ]},
  { slug: "social-faq", title: "Social Media FAQ", categorySlug: "social-media", items: [
    { q: "Do you create monthly content plans?", a: "Yes. Content calendar planning is part of the delivery model." },
    { q: "Do you support reels and short-form?", a: "Yes. We include short-form frameworks and production support." },
    { q: "Can social connect to lead generation?", a: "Yes. Social can feed funnels, ads, and conversion paths." },
  ]},
  { slug: "branding-faq", title: "Branding FAQ", categorySlug: "branding", items: [
    { q: "Do you build full brand systems?", a: "Yes. We provide identity, visual rules, and growth-ready collateral." },
    { q: "Can branding support ads and website?", a: "Yes. We align assets across web, paid, and social channels." },
    { q: "Do you offer rebranding?", a: "Yes. Repositioning and visual refresh workflows are available." },
  ]},
  { slug: "video-faq", title: "Video Production FAQ", categorySlug: "video-production", items: [
    { q: "What formats do you edit?", a: "Short-form, ad videos, explainer edits, and campaign-ready variants." },
    { q: "Can you repurpose long videos?", a: "Yes. We convert long content into short platform-ready cuts." },
    { q: "Do you support founder-led content?", a: "Yes. Founder video systems are a core offer." },
  ]},
  { slug: "mobile-faq", title: "Mobile App FAQ", categorySlug: "mobile-apps", items: [
    { q: "Native or hybrid apps?", a: "We support Android, iOS, and cross-platform builds based on goals." },
    { q: "Do you build admin panels?", a: "Yes. We include backend and admin controls where needed." },
    { q: "Do you support launch and maintenance?", a: "Yes. Launch and post-launch support are included." },
  ]},
  { slug: "automation-faq", title: "CRM & Automation FAQ", categorySlug: "crm-automation", items: [
    { q: "Can you set up CRM from scratch?", a: "Yes. We design stages, automations, and lead routing." },
    { q: "Do you support WhatsApp and email automation?", a: "Yes. We implement multi-channel follow-up automation." },
    { q: "Can chatbots connect to CRM?", a: "Yes. Conversation flows can push structured data to CRM pipelines." },
  ]},
  { slug: "support-faq", title: "Support Operations FAQ", categorySlug: "support-ops", items: [
    { q: "Do you offer maintenance retainers?", a: "Yes. We provide maintenance and enhancement retainer models." },
    { q: "Can you setup helpdesk workflows?", a: "Yes. We can setup service desk and escalation models." },
    { q: "Do you provide reporting?", a: "Yes. We include support and operational visibility dashboards." },
  ]},
  { slug: "software-faq", title: "AI Software Development FAQ", categorySlug: "software-development", items: [
    { q: "Do you build AI software, agents, and copilots?", a: "Yes. We build AI software layers including agents, copilots, internal AI tools, LLM integrations, workflow automation, and productized AI systems." },
    { q: "Can AI software connect to our current stack?", a: "Yes. We connect CRM, support tools, internal workflows, APIs, and operational systems into the AI layer wherever relevant." },
    { q: "Do you support MVP launches for AI products?", a: "Yes. AI product scoping, prototype validation, MVP build, rollout support, and post-launch iteration are all supported." },
  ]},
  { slug: "ecommerce-faq", title: "E-commerce FAQ", categorySlug: "ecommerce", items: [
    { q: "Do you work with Shopify and WooCommerce?", a: "Yes. Both platform-based and custom commerce builds are supported." },
    { q: "Can you optimize checkout flow?", a: "Yes. Checkout optimization is a dedicated service track." },
    { q: "Do you support migration?", a: "Yes. We support store migration and post-launch optimization." },
  ]},
];

/**
 * @type {ServiceCategory[]}
 */
export const serviceCategories = categoryMeta.map(([slug, title, isFlagship]) => {
  const childSlugs = (deepServiceMap[slug] || []).map((item) => item[0]);
  const relatedCaseStudySlugs = caseStudies
    .filter((item) => item.linkedServices.includes(slug))
    .slice(0, 4)
    .map((item) => item.slug);
  const relatedInsightSlugs = insightPosts
    .filter((item) => item.linkedServiceSlugs.includes(slug))
    .slice(0, 2)
    .map((item) => item.slug);
  const relatedIndustrySlugs = industries.slice(0, 2).map((item) => item.slug);
  return {
    slug,
    title,
    summary: `${title} delivery designed for measurable pipeline, conversion, and retention outcomes.`,
    isFlagship,
    childSlugs,
    executionAreas: categoryExecutionMap[slug] || [],
    relatedCaseStudySlugs,
    faqSlugs: faqClusters.filter((f) => f.categorySlug === slug).map((f) => f.slug),
    relatedInsightSlugs,
    relatedIndustrySlugs,
  };
});

/**
 * @type {ServicePage[]}
 */
export const servicePages = [];

serviceCategories.forEach((category) => {
  servicePages.push({
    slug: category.slug,
    title: category.title,
    summary: category.summary,
    categorySlug: category.slug,
    parentSlug: null,
    isFlagship: category.isFlagship,
    isPlaceholder: false,
    problems: [
      `${category.title} work is split across too many vendors or freelancers`,
      "Execution is happening, but the output is inconsistent or hard to measure",
      "Teams need clearer ownership from build through launch and optimization",
    ],
    deliverables: [
      `Clear scope across the main ${category.title.toLowerCase()} workstreams`,
      "Build, launch, tracking, and optimization support",
      "A delivery structure that the internal team can actually use after handoff",
    ],
    outcomes: [
      "Clearer execution and less rework",
      "Stronger commercial output from the work being shipped",
      "More consistent quality across the delivery cycle",
    ],
    idealFor: [
      "Founder-led businesses",
      "Growth-stage companies",
      "Service and B2B teams",
    ],
    demoModules: [
      "Sample process workflow",
      "Execution module map",
      "Reporting structure",
    ],
    links: [
      { label: "Case studies", href: "/case-studies" },
      { label: "Insights", href: "/insights" },
    ],
    ctaLabel: "Talk to our team",
  });

  (deepServiceMap[category.slug] || []).forEach(([childSlug, childTitle]) => {
    servicePages.push({
      slug: childSlug,
      title: childTitle,
      summary: `${childTitle} scoped around the actual work involved, from setup and implementation to launch support and iteration.`,
      categorySlug: category.slug,
      parentSlug: category.slug,
      isFlagship: category.isFlagship,
      isPlaceholder: true,
      problems: [
        `${childTitle} is being handled loosely with no clear scope`,
        "The work is either too generic or too disconnected from the commercial goal",
        "Teams need clearer execution steps and post-launch ownership",
      ],
      deliverables: [
        `Implementation scope for ${childTitle}`,
        "Setup, build, QA, and launch support",
        "Iteration based on performance, usability, or operational feedback",
      ],
      outcomes: [
        "Clearer execution for the team and buyer",
        "Better output quality once the work is live",
        "Less guesswork in what gets delivered",
      ],
      idealFor: [
        "Startups and SMEs",
        "Growth-focused teams",
        "Multi-channel businesses",
      ],
      demoModules: [
        "Typical task breakdown",
        "Execution checklist",
        "Launch and iteration view",
      ],
      links: [
        { label: "Parent service", href: `/services/${category.slug}` },
        { label: "Contact", href: "/contact" },
      ],
      ctaLabel: "Request implementation plan",
    });
  });
});

export const seoPages = [
  {
    key: "home",
    path: "/",
    title: "Techbeyond | LinkedIn-Led Growth and Digital Systems",
    description: siteBrand.description,
    canonical: `${siteBrand.url}/`,
  },
  {
    key: "linkedin-services",
    path: "/linkedin-services",
    title: "LinkedIn Services | Techbeyond",
    description:
      "LinkedIn profile optimization, content strategy, outreach systems, and lead generation for founders and B2B teams.",
    canonical: `${siteBrand.url}/linkedin-services`,
  },
  {
    key: "services",
    path: "/services",
    title: "Services | Techbeyond",
    description:
      "Explore services across LinkedIn, web development, SEO/GEO, paid ads, branding, automation, and apps.",
    canonical: `${siteBrand.url}/services`,
  },
  {
    key: "case-studies",
    path: "/case-studies",
    title: "Case Studies | Techbeyond",
    description:
      "Selected growth stories showing pipeline, conversion, and execution outcomes.",
    canonical: `${siteBrand.url}/case-studies`,
  },
  {
    key: "insights",
    path: "/insights",
    title: "Insights | Techbeyond",
    description:
      "Insights on LinkedIn growth, SEO/GEO, paid media, conversion, and automation systems.",
    canonical: `${siteBrand.url}/insights`,
  },
];

export function getServiceCategoryBySlug(slug) {
  return serviceCategories.find((item) => item.slug === slug) || null;
}

export function getServicePageBySlug(slug) {
  return servicePages.find((item) => item.slug === slug) || null;
}

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((item) => item.slug === slug) || null;
}

export function getSeoPageByKey(key) {
  return seoPages.find((item) => item.key === key) || null;
}

export function getFlagshipServiceCategory() {
  return serviceCategories.find((item) => item.isFlagship) || null;
}

export function getAllServiceRoutes() {
  return servicePages.map((item) => ({
    slug: item.slug,
    href: item.parentSlug ? `/services/${item.parentSlug}/${item.slug}` : `/services/${item.slug}`,
  }));
}

export function getIndustryBySlug(slug) {
  return industries.find((item) => item.slug === slug) || null;
}

export function getIndustrySolution(industrySlug, solutionSlug) {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return null;
  return industry.childSolutions.find((item) => item[0] === solutionSlug) || null;
}

export function getInsightsByCategory(category) {
  return insightPosts.filter((item) => item.category.toLowerCase() === category.toLowerCase());
}

export function getInsightBySlug(slug) {
  return insightPosts.find((item) => item.slug === slug) || null;
}

export function getFaqClusterBySlug(slug) {
  return faqClusters.find((item) => item.slug === slug) || null;
}
