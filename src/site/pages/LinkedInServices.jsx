import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import StatCounter from "../components/StatCounter";
import FaqAccordion from "../components/FaqAccordion";
import SEOHead from "../components/SEOHead";
import { getServicePageBySlug, servicePages, faqClusters, siteBrand } from "../data/content.js";

const linkedInPage = getServicePageBySlug("linkedin-services");
const linkedInServices = servicePages.filter(
  (page) => page.categorySlug === "linkedin-services" && page.slug !== "linkedin-services",
);
const linkedInFaq = faqClusters.find((f) => f.categorySlug === "linkedin-services");

const stats = [
  { end: 500, suffix: "+", label: "LinkedIn Profiles Optimized" },
  { end: 10000, suffix: "+", label: "Conversations Generated" },
  { end: 85, suffix: "%", label: "Connection Accept Rate" },
  { end: 3, suffix: "x", label: "Pipeline Growth Average" },
];

const LinkedInServices = () => (
  <AppLayout>
    <SEOHead
      title={`${siteBrand.name} | LinkedIn Growth Systems`}
      description="LinkedIn profile optimization, content strategy, outreach systems, and lead generation for founders and B2B teams."
      canonicalPath="/linkedin-services"
    />

    {/* ═══ HERO ═══ */}
    <section className="tb-hero-fullscreen" style={{ minHeight: "70vh" }}>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row g-5 align-items-center">
          <div className="col-lg-7">
            <AnimatedSection>
              <span className="tb-badge-glow mb-4 d-inline-block">★ Flagship Service</span>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="tb-display-huge text-white mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)" }}>
                LinkedIn growth systems that convert{" "}
                <span className="tb-serif tb-grad-text">authority into pipeline.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="lead mb-4" style={{ color: "var(--tb-text-soft)", maxWidth: 560, lineHeight: 1.7 }}>
                We design profile positioning, editorial systems, outreach flows, and lead handling so LinkedIn becomes a predictable sales channel — not a vanity metric.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/contact" className="tb-btn tb-btn-primary tb-btn-lg tb-btn-icon-arrow">
                  Book LinkedIn Growth Call
                </Link>
                <Link to="/case-studies" className="tb-btn tb-btn-outline tb-btn-lg">
                  See LinkedIn Case Studies
                </Link>
              </div>
            </AnimatedSection>
          </div>
          <div className="col-lg-5">
            <AnimatedSection animation="tb-reveal-scale" delay={400}>
              <div className="tb-glass-strong rounded-4 p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="tb-icon-box tb-icon-box-lg">
                    <i className="bi bi-linkedin" />
                  </div>
                  <h2 className="h5 text-white mb-0">The LinkedIn Growth Engine</h2>
                </div>
                <ul className="tb-list-check mb-0">
                  <li>Profile optimization that attracts your ICP</li>
                  <li>Content that builds authority and demand</li>
                  <li>Outreach that starts real conversations</li>
                  <li>Lead qualification and CRM integration</li>
                  <li>Appointment setting and pipeline tracking</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ STATS ═══ */}
    <section className="tb-section-accent">
      <div className="container">
        <div className="row g-4">
          {stats.map((s) => (
            <div className="col-6 col-md-3" key={s.label}>
              <StatCounter end={s.end} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SERVICE MODULES ═══ */}
    <section className="tb-section">
      <div className="container">
        <AnimatedSection>
          <p className="tb-eyebrow mb-2">LinkedIn Service Modules</p>
          <h2 className="display-6 tb-section-title text-white mb-5">
            Five integrated modules for <span className="tb-grad-text">LinkedIn revenue</span>
          </h2>
        </AnimatedSection>
        <div className="row g-4">
          {linkedInServices.map((item, i) => {
            const icons = ["bi-person-badge", "bi-pencil-square", "bi-envelope-paper", "bi-funnel", "bi-calendar-check"];
            return (
              <div className="col-md-6 col-lg-4" key={item.slug}>
                <AnimatedSection delay={i * 80}>
                  <Link to={`/services/linkedin-services/${item.slug}`} className="text-decoration-none">
                    <div className="tb-card h-100" style={{ minHeight: 240 }}>
                      <div className="tb-icon-box tb-icon-box-lg mb-3">
                        <i className={`bi ${icons[i] || "bi-linkedin"}`} />
                      </div>
                      <h3 className="h5 text-white mb-2">{item.title}</h3>
                      <p style={{ color: "var(--tb-text-soft)", fontSize: "0.92rem", lineHeight: 1.6 }}>{item.summary}</p>
                      <span className="tb-btn tb-btn-ghost tb-btn-sm tb-btn-icon-arrow mt-auto">Explore module</span>
                    </div>
                  </Link>
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ═══ HOW IT WORKS ═══ */}
    <section className="tb-section tb-section-dark tb-bg-dots">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <AnimatedSection animation="tb-reveal-left">
              <p className="tb-eyebrow mb-2">How It Works</p>
              <h2 className="display-6 tb-section-title text-white mb-3">
                From profile to <span className="tb-grad-text">pipeline in 90 days</span>
              </h2>
              <p style={{ color: "var(--tb-text-soft)", lineHeight: 1.7 }}>
                We don&apos;t just optimize your profile and walk away. We build an entire LinkedIn revenue system — profile, content, outreach, qualification, and booking — and manage it end-to-end.
              </p>
            </AnimatedSection>
          </div>
          <div className="col-lg-7">
            <AnimatedSection animation="tb-reveal-right" delay={150}>
              <div className="tb-timeline">
                {[
                  { num: "Week 1–2", title: "Profile Rebuild", desc: "We optimize your headline, about, experience, and featured sections to position you as the ICP's best choice." },
                  { num: "Week 2–4", title: "Content Engine", desc: "We launch your content system — narrative pillars, editorial calendar, and first batch of ghostwritten posts." },
                  { num: "Week 3–6", title: "Outreach Activation", desc: "We deploy multi-step outreach sequences — personalized connection requests, follow-ups, and CRM integration." },
                  { num: "Week 6–12", title: "Pipeline & Scale", desc: "We track conversations, book appointments, measure ROI, and scale the winning channels and messages." },
                ].map((step) => (
                  <div className="tb-timeline-step" key={step.num}>
                    <div className="tb-timeline-step-num">{step.num}</div>
                    <h4 className="h5 text-white mb-1">{step.title}</h4>
                    <p style={{ color: "var(--tb-text-soft)", fontSize: "0.9rem" }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ OUTCOMES ═══ */}
    {linkedInPage ? (
      <section className="tb-section">
        <div className="container">
          <AnimatedSection>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="tb-glass-strong rounded-4 p-4 h-100">
                  <p className="tb-eyebrow mb-3">Problems Solved</p>
                  <ul className="tb-list-check">
                    {linkedInPage.problems.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="tb-neo-elevated rounded-4 p-4 h-100">
                  <p className="tb-eyebrow mb-3">Deliverables</p>
                  <ul className="tb-list-check">
                    {linkedInPage.deliverables.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="tb-glass rounded-4 p-4 h-100">
                  <p className="tb-eyebrow mb-3">What You See</p>
                  <ul className="tb-list-check">
                    {linkedInPage.demoModules.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    ) : null}

    {/* ═══ FAQ ═══ */}
    {linkedInFaq ? (
      <section className="tb-section tb-section-dark">
        <div className="container" style={{ maxWidth: 800 }}>
          <AnimatedSection>
            <p className="tb-eyebrow mb-2 text-center">FAQs</p>
            <h2 className="h3 text-white text-center mb-4">LinkedIn Services FAQ</h2>
            <FaqAccordion items={linkedInFaq.items} />
          </AnimatedSection>
        </div>
      </section>
    ) : null}

    {/* ═══ CTA ═══ */}
    <section className="tb-section">
      <div className="container">
        <AnimatedSection animation="tb-reveal-scale">
          <div className="tb-cta-section text-center position-relative">
            <div className="position-relative" style={{ zIndex: 1 }}>
              <h2 className="display-5 tb-section-title text-white mb-3">
                Turn LinkedIn into your <span className="tb-grad-text">#1 pipeline channel.</span>
              </h2>
              <p className="mx-auto mb-4" style={{ color: "var(--tb-text-soft)", maxWidth: 560 }}>
                Book a call. We&apos;ll audit your current LinkedIn presence and show you exactly where the pipeline opportunity is.
              </p>
              <Link to="/contact" className="tb-btn tb-btn-primary tb-btn-lg tb-btn-icon-arrow">
                Book LinkedIn Audit Call
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </AppLayout>
);

export default LinkedInServices;
