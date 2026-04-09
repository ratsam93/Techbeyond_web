import { Link, useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { getIndustryBySlug, getIndustrySolution, siteBrand } from "../data/content.js";

const IndustrySolution = () => {
  const { industrySlug, solutionSlug } = useParams();
  const industry = getIndustryBySlug(industrySlug);
  const solution = getIndustrySolution(industrySlug, solutionSlug);
  const title = solution ? solution[1] : "Solution";
  const industryName = industry?.title?.replace(" Digital Solutions", "") || "Industry";

  return (
    <AppLayout>
  <SEOHead title={`${siteBrand.name} | ${title}`} description={`${title} for ${industryName} businesses.`} canonicalPath={`/solutions/${industrySlug}/${solutionSlug}`} />

      <section className="tb-hero-fullscreen" style={{ minHeight: "50vh" }}>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <AnimatedSection>
      <Link to={`/solutions/${industrySlug}`} className="tb-chip tb-chip-cyan text-decoration-none mb-3 d-inline-flex">← {industryName}</Link>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="display-4 fw-bold text-white mb-4" style={{ maxWidth: 700 }}>{title}</h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p style={{ color: "var(--tb-text-soft)", maxWidth: 600, lineHeight: 1.7 }}>
              We help {industryName.toLowerCase()} businesses improve digital presence, lead generation, customer experience, and operational efficiency through tailored {title.toLowerCase()} solutions.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="d-flex gap-3 flex-wrap mt-3">
              <Link to="/contact" className="tb-btn tb-btn-primary tb-btn-lg tb-btn-icon-arrow">Request Proposal</Link>
              <Link to="/services" className="tb-btn tb-btn-outline tb-btn-lg">See All Services</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="tb-section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="row g-4">
            <div className="col-md-6">
              <AnimatedSection>
                <div className="tb-glass-strong rounded-4 p-4 h-100">
                  <p className="tb-eyebrow mb-3">Why {industryName} Needs This</p>
                  <ul className="tb-list-check">
                    <li>Increasing competition for digital attention in {industryName.toLowerCase()}</li>
                    <li>Need for specialized positioning and trust signals</li>
                    <li>Compliance and buyer journey complexity</li>
                    <li>Growing digital-first customer expectations</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
            <div className="col-md-6">
              <AnimatedSection delay={100}>
                <div className="tb-neo-elevated rounded-4 p-4 h-100">
                  <p className="tb-eyebrow mb-3">What We Deliver</p>
                  <ul className="tb-list-check">
                    <li>Industry-specific strategy and positioning</li>
                    <li>Custom design and content for your sector</li>
                    <li>Lead generation tailored to {industryName.toLowerCase()} buyers</li>
                    <li>Ongoing optimization and growth support</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="tb-section-sm">
        <div className="container">
          <AnimatedSection animation="tb-reveal-scale">
            <div className="tb-cta-section text-center position-relative">
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h2 className="h3 text-white mb-3">Let&apos;s build your {industryName.toLowerCase()} growth strategy.</h2>
                <Link to="/contact" className="tb-btn tb-btn-primary tb-btn-lg tb-btn-icon-arrow">Start Conversation</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </AppLayout>
  );
};

export default IndustrySolution;
