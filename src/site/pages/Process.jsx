import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { siteBrand } from "../data/content.js";

const steps = [
  { num: "01", title: "Discovery", desc: "We understand your business, goals, audience, competitors, current digital assets, and growth bottlenecks. This phase includes audits, stakeholder interviews, and competitive analysis.", icon: "bi-search" },
  { num: "02", title: "Strategy", desc: "We define the right mix of channels, design direction, messaging, technology, and growth priorities. You get a clear roadmap before any build work begins.", icon: "bi-map" },
  { num: "03", title: "Design & Build", desc: "We create the assets — websites, campaigns, automations, creative, profiles — needed for launch. Every deliverable goes through QA and approval cycles.", icon: "bi-hammer" },
  { num: "04", title: "Launch & Deploy", desc: "We push live with quality checks, analytics setup, tracking pixels, and readiness for traffic and users. Launch is coordinated, not rushed.", icon: "bi-rocket-takeoff" },
  { num: "05", title: "Optimize & Scale", desc: "We monitor performance, improve results, test variations, and keep refining. Growth is continuous — we measure weekly and iterate monthly.", icon: "bi-graph-up-arrow" },
];

const Process = () => (
  <AppLayout>
    <SEOHead title={`${siteBrand.name} | Our Process`} description="A structured delivery approach so every project moves from idea to execution with clarity." canonicalPath="/process" />

    <section className="tb-hero-fullscreen" style={{ minHeight: "50vh" }}>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <AnimatedSection><p className="tb-eyebrow mb-3">Our Process</p></AnimatedSection>
        <AnimatedSection delay={100}>
          <h1 className="tb-display-huge text-white mb-4" style={{ maxWidth: 700 }}>
            From idea to <span className="tb-serif tb-grad-text">measurable growth.</span>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <p style={{ color: "var(--tb-text-soft)", maxWidth: 560, lineHeight: 1.7 }}>
            We follow a structured delivery approach so every project moves from discovery to execution to scale with transparency and accountability at every stage.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="tb-section">
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="tb-timeline" style={{ paddingLeft: "3rem" }}>
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 120}>
              <div className="tb-timeline-step">
                <div className="d-flex align-items-start gap-3">
                  <div className="tb-icon-box tb-icon-box-lg flex-shrink-0">
                    <i className={`bi ${step.icon}`} />
                  </div>
                  <div>
                    <div className="tb-timeline-step-num">{step.num}</div>
                    <h2 className="h4 text-white mb-2">{step.title}</h2>
                    <p style={{ color: "var(--tb-text-soft)", lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="tb-section-sm">
      <div className="container">
        <AnimatedSection animation="tb-reveal-scale">
          <div className="tb-cta-section text-center position-relative">
            <div className="position-relative" style={{ zIndex: 1 }}>
              <h2 className="display-5 tb-section-title text-white mb-3">Ready to start?</h2>
              <p className="mx-auto mb-4" style={{ color: "var(--tb-text-soft)", maxWidth: 480 }}>
                Discovery starts with a conversation. Tell us your goals and we&apos;ll map out the right approach.
              </p>
              <Link to="/contact" className="tb-btn tb-btn-primary tb-btn-lg tb-btn-icon-arrow">Book Discovery Call</Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </AppLayout>
);

export default Process;
