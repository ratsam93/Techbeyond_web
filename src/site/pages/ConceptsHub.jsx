import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";

const concepts = [
  {
    route: "/concepts/service-editorial",
    label: "Service Concept 01",
    type: "Editorial Authority",
    title: "Service pages with premium editorial gravity.",
    copy:
      "Warm-light surfaces, restrained typography, strong pacing, and more persuasive narrative framing. Best for higher-ticket strategy, branding, and trust-heavy service offers.",
    chips: ["Warm neutral", "Editorial", "High trust", "Luxury tone"],
    glow: "linear-gradient(135deg, rgba(255, 208, 173, 0.22), transparent 42%, rgba(91, 66, 48, 0.18))",
    preview: "editorial",
  },
  {
    route: "/concepts/service-systems",
    label: "Service Concept 02",
    type: "Systems Interface",
    title: "Service pages that feel like growth infrastructure.",
    copy:
      "Sharper grid, dark technical framing, KPI-led modules, and a more operational feel. Best for SEO, CRM, paid media, funnel engineering, and performance services.",
    chips: ["Dark premium", "Systems", "Operational", "Scalable"],
    glow: "linear-gradient(135deg, rgba(91, 146, 255, 0.24), transparent 42%, rgba(81, 255, 216, 0.14))",
    preview: "systems",
  },
  {
    route: "/concepts/case-roi",
    label: "Case Study 01",
    type: "ROI Narrative",
    title: "Case studies that sell the business outcome fast.",
    copy:
      "Results are visible early, the structure is commercial, and the page is tuned for buyers who want to see intervention, metrics, and proof quickly.",
    chips: ["ROI first", "Buyer ready", "Commercial", "Proof heavy"],
    glow: "linear-gradient(135deg, rgba(120, 255, 201, 0.18), transparent 42%, rgba(84, 168, 255, 0.14))",
    preview: "roi",
  },
  {
    route: "/concepts/case-cinematic",
    label: "Case Study 02",
    type: "Cinematic Story",
    title: "Case studies with more atmosphere and premium pacing.",
    copy:
      "A slower and more memorable page style, with larger media moments, stronger storytelling, and more emotional visual rhythm around the transformation.",
    chips: ["Cinematic", "Visual", "Story-led", "Showcase"],
    glow: "linear-gradient(135deg, rgba(255, 180, 121, 0.22), transparent 40%, rgba(180, 112, 255, 0.15))",
    preview: "cinematic",
  },
];

const PreviewBody = ({ preview }) => {
  if (preview === "editorial") {
    return (
      <div className="tbx-card-preview">
        <div className="tbx-preview-strip" />
        <div className="tbx-preview-row">
          <div className="tbx-preview-panel">
            <strong>Hero</strong>
            <span>Build category authority with pages that read like a modern strategy publication.</span>
          </div>
          <div className="tbx-preview-sidebar">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="tbx-preview-story-grid">
          <div className="tbx-preview-story">
            <strong>Problem</strong>
            <p>Thin positioning, mixed signals, weak offer clarity.</p>
          </div>
          <div className="tbx-preview-story">
            <strong>Approach</strong>
            <p>Sharper narrative, stronger proof, fewer but more deliberate visual blocks.</p>
          </div>
        </div>
      </div>
    );
  }

  if (preview === "systems") {
    return (
      <div className="tbx-card-preview">
        <div className="tbx-preview-grid">
          <div className="tbx-preview-stat"><strong>42%</strong><span>Lead-response lift</span></div>
          <div className="tbx-preview-stat"><strong>3.1x</strong><span>Qualified pipeline</span></div>
          <div className="tbx-preview-stat"><strong>18d</strong><span>To stable launch</span></div>
        </div>
        <div className="tbx-preview-row">
          <div className="tbx-preview-panel">
            <strong>Workflow</strong>
            <span>Demand capture, routing, conversion, CRM, reporting.</span>
          </div>
          <div className="tbx-preview-panel">
            <strong>Modules</strong>
            <span>SEO, pages, automations, paid acquisition, dashboards.</span>
          </div>
        </div>
      </div>
    );
  }

  if (preview === "roi") {
    return (
      <div className="tbx-card-preview">
        <div className="tbx-preview-grid">
          <div className="tbx-preview-stat"><strong>+218%</strong><span>Organic traffic</span></div>
          <div className="tbx-preview-stat"><strong>+63%</strong><span>Lead quality</span></div>
          <div className="tbx-preview-stat"><strong>11 wks</strong><span>Implementation</span></div>
        </div>
        <div className="tbx-preview-quote">
          <strong>Result Summary</strong>
          <p>The page leads with impact first, then shows the system that created it.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tbx-card-preview">
      <div className="tbx-preview-media" />
      <div className="tbx-preview-timeline">
        <strong>Story Arc</strong>
        <p>Challenge, mood, intervention, rollout, and then the reveal of transformation.</p>
      </div>
    </div>
  );
};

const ConceptsHub = () => (
  <AppLayout>
    <SEOHead
      title="Techbeyond Design Concepts"
      description="Preview service-page and case-study design concepts for Techbeyond."
      canonicalPath="/concepts"
    />

    <div className="tbx-concepts-page">
      <section className="tbx-concepts-hero">
        <div className="tbx-concepts-shell">
          <AnimatedSection>
            <p className="sj-kicker">Design Concepts</p>
            <h1 className="sj-section-title" style={{ maxWidth: 980 }}>
              Four real page concepts you can judge visually before we build the site.
            </h1>
            <p className="sj-copy sj-section-copy" style={{ maxWidth: 760 }}>
              Two concepts are service-page directions. Two are case-study directions. These are visual mocks inside the React app, not just descriptions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="tbx-concepts-shell">
          <div className="tbx-concepts-grid">
            {concepts.map((concept, index) => (
              <AnimatedSection key={concept.route} delay={index * 70}>
                <article className="tbx-concept-card" style={{ "--tbx-card-glow": concept.glow }}>
                  <div className="tbx-concept-card-body">
                    <div className="tbx-concept-meta">
                      <span>{concept.label}</span>
                      <span>{concept.type}</span>
                    </div>
                    <h2>{concept.title}</h2>
                    <p>{concept.copy}</p>
                    <div className="tbx-chip-row">
                      {concept.chips.map((chip) => (
                        <span key={chip} className="tbx-chip">{chip}</span>
                      ))}
                    </div>
                    <PreviewBody preview={concept.preview} />
                    <div className="tbx-page-actions">
                      <Link to={concept.route} className="tbx-page-button">Open Concept</Link>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  </AppLayout>
);

export default ConceptsHub;
