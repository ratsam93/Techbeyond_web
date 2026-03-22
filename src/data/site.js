export const site = {
  name: 'Techbeyond',
  primaryPath: '/',
  nav: [
    { label: 'Home', to: '/' },
    { label: 'Features', to: '/features' },
    { label: 'Templates', to: '/templates' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ],
  footerColumns: [
    {
      title: 'Product',
      links: [
        { label: 'Features', to: '/features' },
        { label: 'Templates', to: '/templates' },
        { label: 'Pricing', to: '/pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', to: '/about' },
        { label: 'Blog', to: '/blog' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', to: '/privacy' },
        { label: 'Terms', to: '/terms' },
      ],
    },
  ],
  stats: [
    { value: '120+', label: 'Prompt workflows shipped' },
    { value: '4.9/5', label: 'Average team satisfaction' },
    { value: '38%', label: 'Less time drafting prompts' },
  ],
  featureCards: [
    {
      title: 'Prompt library',
      text: 'Keep every approved prompt in one searchable workspace with tags, owners, and version history.',
    },
    {
      title: 'Team review',
      text: 'Assign collaborators, collect feedback, and lock down production-ready copies before launch.',
    },
    {
      title: 'Reusable templates',
      text: 'Turn winning prompts into templates for support, sales, marketing, and product teams.',
    },
    {
      title: 'Usage insights',
      text: 'See which prompts are used most and identify gaps before they turn into bottlenecks.',
    },
  ],
  templates: [
    {
      title: 'Campaign brief prompt',
      category: 'Marketing',
      description: 'Plan launch messaging, audience framing, and CTA variants in one pass.',
    },
    {
      title: 'Support reply prompt',
      category: 'Operations',
      description: 'Generate fast, empathetic responses while staying aligned to policy and tone.',
    },
    {
      title: 'Product discovery prompt',
      category: 'Product',
      description: 'Collect sharper insights from interviews, research notes, and feedback summaries.',
    },
    {
      title: 'Lead follow-up prompt',
      category: 'Sales',
      description: 'Write concise follow-up notes tailored to the lead source and conversation context.',
    },
  ],
  pricing: [
    {
      name: 'Starter',
      price: '$19',
      description: 'For small teams getting serious about repeatable prompt workflows.',
      features: ['Unlimited drafts', 'Shared libraries', 'Basic analytics'],
    },
    {
      name: 'Growth',
      price: '$49',
      description: 'For teams that need collaboration, governance, and scale.',
      features: ['Everything in Starter', 'Review flows', 'Advanced search', 'Usage reports'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For organizations that want security, onboarding, and tailored support.',
      features: ['SSO', 'Dedicated support', 'Custom controls'],
    },
  ],
  testimonials: [
    {
      quote: 'Techbeyond made our prompt process feel like a real product workflow instead of scattered notes.',
      author: 'Maya, Operations Lead',
    },
    {
      quote: 'We cut review time dramatically because everyone works from the same prompt source of truth.',
      author: 'Arjun, Product Manager',
    },
  ],
  faqs: [
    {
      question: 'What does Techbeyond do?',
      answer: 'It helps teams create, organize, and reuse prompts without losing consistency or control.',
    },
    {
      question: 'Can we use it across departments?',
      answer: 'Yes. The workflow is built for marketing, support, product, and sales teams.',
    },
    {
      question: 'Does it work on mobile?',
      answer: 'The site and layout are fully responsive, with navigation and cards adapting cleanly to smaller screens.',
    },
  ],
  blogPosts: [
    {
      slug: 'prompt-ops-for-growing-teams',
      title: 'Prompt ops for growing teams',
      excerpt: 'How to keep prompt quality high when multiple teams need the same output standards.',
    },
    {
      slug: 'building-a-reusable-prompt-library',
      title: 'Building a reusable prompt library',
      excerpt: 'A practical structure for turning one-off prompts into durable team assets.',
    },
    {
      slug: 'reviewing-prompts-before-production',
      title: 'Reviewing prompts before production',
      excerpt: 'A lightweight process for approvals, versioning, and safe handoff.',
    },
  ],
};
