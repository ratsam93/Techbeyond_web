const articleAuthor = {
  name: "Techbeyond Research Desk",
  role: "Strategy, delivery, and growth systems",
};

const categoryLabelMap = {
  "artificial-intelligence": "AI Strategy",
  "app-development": "App Development",
  "business-outsourcing": "Delivery Strategy",
  "game-development": "Game Development",
  "popular-apps": "Product Breakdowns",
  "social-media": "Platform Strategy",
  "software-development": "Software Systems",
  "web-development": "Web Development",
};

const titleWordMap = {
  ai: "AI",
  ios: "iOS",
  api: "API",
  sdk: "SDK",
  crm: "CRM",
  seo: "SEO",
  geo: "GEO",
  aeo: "AEO",
  ux: "UX",
  ui: "UI",
  mvp: "MVP",
  saas: "SaaS",
  rfi: "RFI",
  firebase: "Firebase",
  gitlab: "GitLab",
  github: "GitHub",
  linkedin: "LinkedIn",
  reddit: "Reddit",
  uber: "Uber",
  spotify: "Spotify",
  zoom: "Zoom",
  slack: "Slack",
  tiktok: "TikTok",
  airbnb: "Airbnb",
  waze: "Waze",
  whatsapp: "WhatsApp",
  canva: "Canva",
  klover: "Klover",
  dave: "Dave",
  robinhood: "Robinhood",
  instacart: "Instacart",
  pinterest: "Pinterest",
  snapchat: "Snapchat",
  angularjs: "AngularJS",
  angular: "Angular",
  kotlin: "Kotlin",
  java: "Java",
  flask: "Flask",
  django: "Django",
  wordpress: "WordPress",
  godot: "Godot",
  unity: "Unity",
};

const categoryVisuals = {
  "AI Strategy": {
    heroes: [
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Artificial_intelligence_technology_symposium_in_B.S_Abdur_Rahman_Crescent_University.jpg",
      "https://live.staticflickr.com/5567/14696937320_c76e4b8646_b.jpg",
      "https://live.staticflickr.com/2284/2263161375_820c5a83c2_b.jpg",
      "https://live.staticflickr.com/8367/8497395824_085e58bce3_b.jpg",
      "https://live.staticflickr.com/3902/15126339686_0481de293c.jpg",
      "https://live.staticflickr.com/3284/2323236049_8d4bbc686e_b.jpg",
    ],
  },
  "App Development": {
    heroes: [
      "https://live.staticflickr.com/4423/36422475626_a30c804647.jpg",
      "https://live.staticflickr.com/1163/5148408065_49ce537223.jpg",
      "https://live.staticflickr.com/8209/8242697669_e53bc78bf5.jpg",
      "https://live.staticflickr.com/8312/8022462971_b56029201a_b.jpg",
      "https://live.staticflickr.com/7065/6937505229_533820a386_b.jpg",
      "https://live.staticflickr.com/4708/39593666341_4bdcdd510d_b.jpg",
      "https://live.staticflickr.com/4468/37271985530_26fcfe0ab3_b.jpg",
      "https://live.staticflickr.com/4580/25040901448_dd8f231fd3_b.jpg",
    ],
  },
  "Delivery Strategy": {
    heroes: [
      "https://live.staticflickr.com/1964/43972155510_f2e51b6b0b_b.jpg",
      "https://live.staticflickr.com/1927/45739276432_9f63372d99_b.jpg",
      "https://live.staticflickr.com/8733/16928440321_71f35c1734_b.jpg",
      "https://live.staticflickr.com/8109/8466032002_127e4899cf.jpg",
    ],
  },
  "Game Development": {
    heroes: [
      "https://live.staticflickr.com/8429/7728582220_9ae10c6505_b.jpg",
      "https://live.staticflickr.com/8649/15812993733_ba0519e11d_b.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Brianna_Wu_%28Video_Game_Developer%29_REF-105735.jpg",
      "https://live.staticflickr.com/5059/5457810773_3835c89ffd_b.jpg",
    ],
  },
  "Product Breakdowns": {
    heroes: [
      "https://live.staticflickr.com/4423/36422475626_a30c804647.jpg",
      "https://live.staticflickr.com/8312/8022462971_b56029201a_b.jpg",
      "https://live.staticflickr.com/7065/6937505229_533820a386_b.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Social_Media_Marketing_Strategy.jpg",
      "https://live.staticflickr.com/4061/4427892518_03d88ab9dc_b.jpg",
      "https://live.staticflickr.com/3267/3256031851_6d0a863f71.jpg",
    ],
  },
  "Platform Strategy": {
    heroes: [
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Social_Media_Marketing_Strategy.jpg",
      "https://live.staticflickr.com/7112/7420589920_ed630e8c3a_b.jpg",
      "https://live.staticflickr.com/4061/4427892518_03d88ab9dc_b.jpg",
      "https://live.staticflickr.com/8519/8497700128_e78a570468.jpg",
      "https://live.staticflickr.com/4146/4967974800_1bde79c6a5_b.jpg",
      "https://live.staticflickr.com/8109/8466032002_127e4899cf.jpg",
    ],
  },
  "Software Systems": {
    heroes: [
      "https://live.staticflickr.com/7213/6887025506_38362b2f59_b.jpg",
      "https://live.staticflickr.com/3541/3679964891_bd1ce18eed_b.jpg",
      "https://live.staticflickr.com/7180/6799663908_a9b32f952d_b.jpg",
      "https://live.staticflickr.com/3923/15204215650_f6cf50d027_b.jpg",
      "https://live.staticflickr.com/4877/31906693748_56c0d4e898_b.jpg",
      "https://live.staticflickr.com/3014/2907871023_ee95cc10a1_b.jpg",
    ],
  },
  "Web Development": {
    heroes: [
      "https://live.staticflickr.com/5803/21909339284_de3402470f_b.jpg",
      "https://live.staticflickr.com/5770/22344385088_3b948b0937_b.jpg",
      "https://live.staticflickr.com/701/22344134220_5dc7c9589e_b.jpg",
      "https://live.staticflickr.com/758/22518583822_fb4f9fefbf_b.jpg",
      "https://live.staticflickr.com/615/22518571782_f0cccc501a_b.jpg",
      "https://live.staticflickr.com/733/22518591062_58505a96de_b.jpg",
    ],
  },
};

const categoryOccurrenceMap = new Map();

const getVisualSet = (category) => {
  const visualPack = categoryVisuals[category] || categoryVisuals["Software Systems"];
  const occurrence = categoryOccurrenceMap.get(category) || 0;
  categoryOccurrenceMap.set(category, occurrence + 1);

  const heroes = visualPack.heroes || [];
  const hero = heroes[occurrence % heroes.length];
  const inline = [
    heroes[(occurrence + 1) % heroes.length],
    heroes[(occurrence + 2) % heroes.length],
  ];

  return { hero, inline };
};

const categoryServiceMap = {
  "AI Strategy": {
    primaryKeyword: "AI software development services",
    secondaryKeywords: ["AI agent development", "workflow automation", "internal AI tools"],
    serviceSlugs: ["ai-software-development", "ai-agent-development"],
    projectSlugs: ["portfolio-case-11-ai-product-systems", "portfolio-case-15-ai-product-systems"],
    serviceLead: "AI software, automation, and internal tools",
  },
  "App Development": {
    primaryKeyword: "mobile app development services",
    secondaryKeywords: ["iOS app development", "Android app development", "MVP app development"],
    serviceSlugs: ["ios-app-development", "android-app-development"],
    projectSlugs: ["portfolio-case-02-commerce-experience", "portfolio-case-03-learning-platform"],
    serviceLead: "mobile app strategy, UX, and launch execution",
  },
  "Delivery Strategy": {
    primaryKeyword: "business systems and delivery strategy",
    secondaryKeywords: ["process design", "project scoping", "launch planning"],
    serviceSlugs: ["crm-setup-customization", "workflow-automation"],
    projectSlugs: ["portfolio-case-01-commerce-experience", "portfolio-case-13-crm-workflow-app"],
    serviceLead: "delivery planning, CRM structure, and operational clarity",
  },
  "Game Development": {
    primaryKeyword: "game app development planning",
    secondaryKeywords: ["mobile game scope", "engagement design", "launch sequencing"],
    serviceSlugs: ["mvp-app-development", "ui-ux-design-mobile-apps"],
    projectSlugs: ["portfolio-case-06-learning-platform", "portfolio-case-20-learning-platform"],
    serviceLead: "product scoping and launch-ready app execution",
  },
  "Product Breakdowns": {
    primaryKeyword: "product strategy and growth systems",
    secondaryKeywords: ["conversion systems", "mobile app product strategy", "monetization analysis"],
    serviceSlugs: ["landing-page-design", "linkedin-content-strategy"],
    projectSlugs: ["portfolio-case-05-property-platform", "portfolio-case-18-finance-product"],
    serviceLead: "positioning, product framing, and conversion planning",
  },
  "Platform Strategy": {
    primaryKeyword: "LinkedIn growth services",
    secondaryKeywords: ["content strategy", "audience growth", "platform conversion"],
    serviceSlugs: ["linkedin-content-strategy", "linkedin-outreach-systems"],
    projectSlugs: ["portfolio-case-07-workflow-platform", "portfolio-case-17-entertainment-app"],
    serviceLead: "LinkedIn-led growth and platform content systems",
  },
  "Software Systems": {
    primaryKeyword: "custom software development services",
    secondaryKeywords: ["API development", "SaaS product development", "system modernization"],
    serviceSlugs: ["saas-product-development", "api-development-integrations"],
    projectSlugs: ["portfolio-case-13-crm-workflow-app", "portfolio-case-19-mobility-platform"],
    serviceLead: "software architecture, APIs, and system modernization",
  },
  "Web Development": {
    primaryKeyword: "website development services",
    secondaryKeywords: ["landing page design", "technical SEO", "conversion-focused websites"],
    serviceSlugs: ["react-website-development", "technical-seo"],
    projectSlugs: ["portfolio-case-01-commerce-experience", "portfolio-case-05-property-platform"],
    serviceLead: "website delivery, technical SEO, and conversion design",
  },
};

const slugOverrides = {
  "how-linkedin-monetizes": {
    primaryKeyword: "LinkedIn growth services",
    secondaryKeywords: ["LinkedIn lead generation", "LinkedIn monetization", "LinkedIn content strategy"],
    serviceSlugs: ["linkedin-lead-generation", "linkedin-content-strategy"],
  },
  "top-frameworks-and-tools-for-ai-agent-development": {
    primaryKeyword: "AI agent development",
    secondaryKeywords: ["LLM integrations", "workflow automation", "internal AI tools"],
    serviceSlugs: ["ai-agent-development", "llm-integration-services"],
  },
  "ios-app-development-trends": {
    primaryKeyword: "iOS app development services",
    secondaryKeywords: ["mobile app development services", "app testing QA", "product onboarding"],
    serviceSlugs: ["ios-app-development", "app-testing-qa"],
  },
  "modern-web-design-trends": {
    primaryKeyword: "website redesign services",
    secondaryKeywords: ["conversion-focused website design", "landing page design", "technical SEO"],
    serviceSlugs: ["website-redesign-services", "conversion-focused-website-design"],
  },
  "how-to-build-an-ai-agent": {
    primaryKeyword: "how to build an AI agent",
    secondaryKeywords: ["AI software development services", "AI workflow automation", "internal AI tools"],
    serviceSlugs: ["ai-agent-development", "ai-workflow-automation"],
  },
};

const toTitle = (slug) =>
  slug
    .split("-")
    .map((part) => titleWordMap[part] || `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");

const buildExcerpt = (title, primaryKeyword, serviceLead) =>
  `${title} becomes more useful when it is translated into ${serviceLead}. This guide connects the topic to ${primaryKeyword}, scope decisions, and what operators should prioritize before launch.`;

const buildMetaDescription = (title, primaryKeyword, secondaryKeywords) =>
  `${title} explained through ${primaryKeyword}, ${secondaryKeywords.slice(0, 2).join(", ")}, delivery planning, and the Techbeyond view of growth systems.`;

const buildParagraph = (sentences) => sentences.join(" ");

const buildLongFormSections = ({ title, primaryKeyword, secondaryKeywords, serviceLead }) => [
  {
    heading: `Why ${title} deserves a systems view`,
    paragraphs: [
      buildParagraph([
        `${title} is often treated as a narrow topic, but operators usually feel its impact somewhere else first: in customer acquisition, onboarding quality, handoff speed, reporting visibility, or the cost of fixing a weak first release.`,
        `That is why Techbeyond approaches subjects like this through a systems lens instead of a trend lens. The goal is to understand what the topic changes in the commercial engine, what assumptions it breaks, and how it influences the work that follows once a team has to move from interest into implementation.`,
        `When the conversation is framed that way, ${primaryKeyword} stops being a vague label and starts becoming a practical decision about scope, timing, responsibilities, and where value actually appears.`,
      ]),
      buildParagraph([
        `There is also a difference between understanding a topic intellectually and using it well inside a real business. Teams can read the right articles, copy the right language, and still struggle because no one has clarified the intended user journey, the constraints around the build, or the operating model required after launch.`,
        `A better approach is to connect ${title.toLowerCase()} to the parts of the business that already matter: pipeline quality, product retention, sales confidence, publishing cadence, or operational speed. Once that link is explicit, the work behind ${secondaryKeywords[0]} or ${secondaryKeywords[1]} becomes easier to prioritize and much easier to measure.`,
      ]),
    ],
  },
  {
    heading: "Product, UX, and delivery implications",
    paragraphs: [
      buildParagraph([
        `One of the fastest ways to weaken a promising initiative is to treat product thinking, UX choices, and delivery logic as separate conversations. In practice, they are tightly connected. A product decision changes the onboarding path. An onboarding path changes support load. Support load changes operational cost. Operational cost changes the economics of the offer.`,
        `${title} should therefore be evaluated at the level of the end-to-end user journey. What is the first promise being made? What proof supports it? What action should happen next? What does the user need to understand before they commit? Teams that can answer those questions usually make better decisions about build order, feature priority, and launch readiness.`,
      ]),
      buildParagraph([
        `This is exactly where ${serviceLead} becomes useful. A strong delivery team does not just implement the visible interface. It also resolves the hidden architecture of the experience: where content belongs, where qualification happens, which moments need automation, what should be measured, and what should not be overbuilt too early.`,
        `That discipline matters whether the topic is a product breakdown, an app-development question, or a software-systems comparison. Good work creates a cleaner path for users and a clearer operating model for the business. Weak work usually creates complexity that shows up one sprint later.`,
      ]),
    ],
    bullets: [
      "Clarify the core user action before expanding scope.",
      "Design proof and trust signals before traffic scaling starts.",
      "Connect delivery choices to analytics, support, and follow-up.",
      "Treat launch as the start of optimization, not the end of work.",
    ],
  },
  {
    heading: "Technical and operational choices that shape the result",
    paragraphs: [
      buildParagraph([
        `A surprising number of commercial problems are really technical and operational problems wearing a different label. Pages fail to convert because information hierarchy is weak. Outreach underperforms because routing and follow-up are inconsistent. Product usage feels thin because the operating rhythm after release was never designed.`,
        `That is why the technical conversation around ${title.toLowerCase()} should include maintainability, data flow, QA discipline, release confidence, and how the work will be supported after it goes live. Those are not secondary details. They determine whether the initial promise turns into a stable system or a fragile one.`,
      ]),
      buildParagraph([
        `In practical terms, this means teams need to define the stack, the handoffs, and the source-of-truth points early. It also means understanding where ${secondaryKeywords[0]} belongs, how ${secondaryKeywords[1]} affects the implementation path, and whether the current environment can support the intended launch without forcing a rebuild two weeks later.`,
        `When the technical layer is planned proportionally, the business gets speed without sacrificing clarity. When it is ignored, even a strong idea can stall under preventable operational drag.`,
      ]),
    ],
  },
  {
    heading: "SEO, content, and conversion lessons from the topic",
    paragraphs: [
      buildParagraph([
        `A strong article on ${title.toLowerCase()} should do more than explain. It should help the reader make a decision, and that means the page itself has to be structured for search, scanning, and action. Clear headings, direct language, and a visible path into the relevant service layer all matter.`,
        `That is where website structure, answer-oriented formatting, and internal linking become commercially important. If the topic attracts the right search intent but the page does not connect that intent to a next step, the content may create attention without creating movement. Techbeyond treats content as a routing layer inside the wider growth system, not as an isolated publishing exercise.`,
      ]),
      buildParagraph([
        `This is especially important for pages connected to ${primaryKeyword}. Search visibility does not help much if the page cannot pass the visitor into a relevant service, case study, or pricing path. The right structure gives the reader a way to deepen intent: read the explanation, explore the service, inspect the proof, and then move into a quote or direct purchase where appropriate.`,
        `That is why the combination of content architecture, service alignment, and internal linking usually outperforms content volume alone.`,
      ]),
    ],
  },
  {
    heading: "How to scope the work if you are building now",
    paragraphs: [
      buildParagraph([
        `If a team is moving from research into execution, the best next step is rarely to build everything the topic appears to touch. The best next step is to reduce the problem into the smallest version that can still prove commercial value. That principle applies whether the work is a new landing page, a mobile app feature, a CRM flow, or an AI-enabled internal tool.`,
        `For ${title.toLowerCase()}, that usually means identifying the narrowest release that can support one meaningful outcome: better lead quality, faster decision-making, a clearer onboarding path, or a better first proof point for the buyer. Once that is defined, the implementation can be sequenced around dependencies instead of opinions.`,
      ]),
      buildParagraph([
        `A disciplined scoping process also protects speed. Teams that clarify success criteria, buyer intent, and operational ownership early usually launch faster because fewer assumptions survive into development. They also create a better base for secondary work such as ${secondaryKeywords.join(", ")} because the first layer is solid enough to build on.`,
        `That is the logic behind the Techbeyond approach: tighten scope, connect the topic to a real operating goal, launch the first useful version, and then expand with evidence instead of guesswork.`,
      ]),
    ],
    bullets: [
      "Define the commercial outcome before deciding the feature list.",
      "Keep release one narrow enough to support QA and iteration.",
      "Map the downstream operational owners before launch.",
      "Use service pages, proof pages, and pricing paths to turn attention into action.",
    ],
  },
  {
    heading: "How Techbeyond would turn the topic into delivery",
    paragraphs: [
      buildParagraph([
        `The Techbeyond way to handle ${title.toLowerCase()} starts with alignment. We would clarify the audience, the actual business pressure behind the topic, the pages or workflows it has to strengthen, and the adjacent systems that need to move with it. That usually includes website structure, follow-up logic, reporting, and the conversion path that sits closest to the intended action.`,
        `From there, the work would be shaped into the right delivery track. In some cases that means ${serviceLead}. In others it means connecting the topic to a direct website or app build, a CRM and automation layer, or a pricing and proof architecture that helps the buyer move faster with less friction.`,
      ]),
      buildParagraph([
        `The important point is that the topic never stays abstract. It gets translated into execution choices, internal links, pricing logic, and a stronger system around the offer. That is how ${primaryKeyword} becomes useful. It moves from theory into an operating layer that can actually support growth.`,
        `When that translation is done well, the topic stops behaving like content for its own sake. It becomes a commercially productive page inside the site, a route into the relevant service, and a clearer signal for the people already looking for help.`,
      ]),
    ],
  },
];

const blogIdeas = [
  { id: 1, category: "popular-apps", slug: "how-dropbox-makes-money" },
  { id: 2, category: "popular-apps", slug: "how-reddit-earns-revenue" },
  { id: 3, category: "app-development", slug: "why-onboarding-makes-or-breaks-a-dating-apps-success" },
  { id: 4, category: "popular-apps", slug: "how-robinhood-monetizes" },
  { id: 5, category: "popular-apps", slug: "what-is-the-best-hotel-booking-app" },
  { id: 6, category: "popular-apps", slug: "apps-for-couples" },
  { id: 7, category: "app-development", slug: "how-the-mobile-app-development-process-works" },
  { id: 8, category: "artificial-intelligence", slug: "top-frameworks-and-tools-for-ai-agent-development" },
  { id: 9, category: "artificial-intelligence", slug: "ai-agents-in-creative-workflows" },
  { id: 10, category: "artificial-intelligence", slug: "ai-agents-interaction" },
  { id: 11, category: "artificial-intelligence", slug: "ai-agents-in-real-estate" },
  { id: 12, category: "game-development", slug: "how-to-make-a-mobile-game" },
  { id: 13, category: "game-development", slug: "godot-vs-unity" },
  { id: 14, category: "web-development", slug: "angular-vs-angularjs" },
  { id: 15, category: "app-development", slug: "rapid-application-development" },
  { id: 16, category: "app-development", slug: "how-to-make-a-fintech-app" },
  { id: 17, category: "app-development", slug: "app-code-validation" },
  { id: 18, category: "software-development", slug: "what-is-a-tech-stack" },
  { id: 19, category: "business-outsourcing", slug: "rfi-meaning" },
  { id: 20, category: "app-development", slug: "dating-app-design-tips" },
  { id: 21, category: "app-development", slug: "app-idea-validation" },
  { id: 22, category: "popular-apps", slug: "how-uber-makes-money" },
  { id: 23, category: "business-outsourcing", slug: "best-apps-for-small-business" },
  { id: 24, category: "popular-apps", slug: "how-spotify-makes-money" },
  { id: 25, category: "business-outsourcing", slug: "mobile-business-ideas" },
  { id: 26, category: "popular-apps", slug: "apps-like-klover" },
  { id: 27, category: "popular-apps", slug: "how-instacart-makes-money" },
  { id: 28, category: "artificial-intelligence", slug: "how-to-build-an-ai-agent" },
  { id: 29, category: "app-development", slug: "hire-app-developers" },
  { id: 30, category: "app-development", slug: "hard-launch-meaning" },
  { id: 31, category: "popular-apps", slug: "how-pinterest-generates-profits" },
  { id: 32, category: "popular-apps", slug: "how-linkedin-monetizes" },
  { id: 33, category: "popular-apps", slug: "how-zoom-makes-money" },
  { id: 34, category: "artificial-intelligence", slug: "ai-agents-in-enterprise" },
  { id: 35, category: "app-development", slug: "app-analytics-tools-to-track-performance" },
  { id: 36, category: "web-development", slug: "web-application-development" },
  { id: 37, category: "software-development", slug: "off-the-shelf-software-vs-custom-solutions" },
  { id: 38, category: "social-media", slug: "how-snapchat-makes-money" },
  { id: 39, category: "software-development", slug: "gitlab-vs-github" },
  { id: 40, category: "app-development", slug: "kotlin-vs-java" },
  { id: 41, category: "popular-apps", slug: "best-cash-advance-apps" },
  { id: 42, category: "web-development", slug: "flask-vs-django" },
  { id: 43, category: "app-development", slug: "ios-app-development-trends" },
  { id: 44, category: "popular-apps", slug: "leading-android-photo-editing-apps" },
  { id: 45, category: "popular-apps", slug: "apps-like-spotify" },
  { id: 46, category: "web-development", slug: "modern-web-design-trends" },
  { id: 47, category: "software-development", slug: "api-vs-sdk" },
  { id: 48, category: "software-development", slug: "development-models" },
  { id: 49, category: "app-development", slug: "what-is-digital-secure" },
  { id: 50, category: "popular-apps", slug: "free-language-learning-apps" },
  { id: 51, category: "popular-apps", slug: "best-ios-productivity-apps" },
  { id: 52, category: "popular-apps", slug: "how-instagram-earns" },
  { id: 53, category: "app-development", slug: "growing-industries-2024-25" },
  { id: 54, category: "software-development", slug: "what-is-enterprise-software" },
  { id: 55, category: "popular-apps", slug: "how-slack-makes-money" },
];

const basePosts = blogIdeas.map((item) => {
  const category = categoryLabelMap[item.category] || "Insights";
  const defaults = categoryServiceMap[category] || categoryServiceMap["Software Systems"];
  const overrides = slugOverrides[item.slug] || {};
  const title = toTitle(item.slug);
  const visualPack = getVisualSet(category);
  const primaryKeyword = overrides.primaryKeyword || defaults.primaryKeyword;
  const secondaryKeywords = overrides.secondaryKeywords || defaults.secondaryKeywords;
  const relatedServiceSlugs = overrides.serviceSlugs || defaults.serviceSlugs;
  const relatedProjectSlugs = defaults.projectSlugs;
  const sections = buildLongFormSections({
    title,
    primaryKeyword,
    secondaryKeywords,
    serviceLead: defaults.serviceLead,
  });

  return {
    slug: item.slug,
    category,
    title,
    excerpt: buildExcerpt(title, primaryKeyword, defaults.serviceLead),
    image: visualPack.hero,
    heroImage: visualPack.hero,
    heroImageAlt: `${title} strategy illustration`,
    inlineImages: visualPack.inline.map((imageUrl, visualIndex) => ({
      src: imageUrl,
      alt: `${title} supporting visual ${visualIndex + 1}`,
    })),
    author: articleAuthor,
    primaryKeyword,
    secondaryKeywords,
    seoTitle: `${title} | ${primaryKeyword}`,
    metaDescription: buildMetaDescription(title, primaryKeyword, secondaryKeywords),
    relatedServiceSlugs,
    relatedProjectSlugs,
    relatedPostSlugs: [],
    wordRange: "1200-1400",
    sections,
    featureSummary: `This article connects ${title.toLowerCase()} to ${defaults.serviceLead}, ${primaryKeyword}, and the website, automation, or launch decisions that matter after the idea phase.`,
  };
});

export const blogPosts = basePosts.map((post) => {
  const siblingPosts = basePosts
    .filter((candidate) => candidate.slug !== post.slug && candidate.category === post.category)
    .slice(0, 3)
    .map((candidate) => candidate.slug);

  return {
    ...post,
    relatedPostSlugs: siblingPosts,
  };
});
