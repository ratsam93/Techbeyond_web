import { Link, useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { getIndustryBySlug, siteBrand } from "../data/content.js";

const Industry = () => {
  const { industrySlug } = useParams();
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return <AppLayout><div className="container py-5"><h1 className="text-white">Industry not found</h1></div></AppLayout>;

  return (
    <AppLayout>
      <SEOHead title={`${siteBrand.name} | ${industry.title}`} description={industry.summary} canonicalPath={`/solutions/${industrySlug}`} />

      <section className="tb-hero-fullscreen" style={{ minHeight: "50vh" }}>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <AnimatedSection><p className="tb-eyebrow mb-3">Industry</p></AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="display-4 fw-bold text-white mb-4" style={{ maxWidth: 700 }}>{industry.title}</h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p style={{ color: "var(--tb-text-soft)", maxWidth: 560, lineHeight: 1.7 }}>{industry.summary}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="tb-section">
        <div className="container">
          <AnimatedSection>
            <p className="tb-eyebrow mb-2">Solutions</p>
            <h2 className="h3 text-white mb-4">How we help {industry.title.replace(" Digital Solutions", "").toLowerCase()} businesses grow</h2>
          </AnimatedSection>
          <div className="row g-3">
            {industry.childSolutions.map(([slug, title], i) => (
              <div className="col-md-6 col-lg-4" key={slug}>
                <AnimatedSection delay={i * 80}>
                  <Link to={`/solutions/${industrySlug}/${slug}`} className="text-decoration-none">
                    <div className="tb-card h-100">
                      <h3 className="h5 text-white mb-2">{title}</h3>
                      <p style={{ color: "var(--tb-text-soft)", fontSize: "0.9rem" }}>
                        Tailored {title.toLowerCase()} solutions for {industry.title.replace(" Digital Solutions", "").toLowerCase()} businesses.
                      </p>
                      <span className="tb-btn tb-btn-ghost tb-btn-sm tb-btn-icon-arrow">Explore</span>
                    </div>
                  </Link>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tb-section-sm">
        <div className="container">
          <AnimatedSection animation="tb-reveal-scale">
            <div className="tb-cta-section text-center position-relative">
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h2 className="h3 text-white mb-3">Need {industry.title.replace(" Digital Solutions", "").toLowerCase()} growth solutions?</h2>
                <Link to="/contact" className="tb-btn tb-btn-primary tb-btn-lg tb-btn-icon-arrow">Talk to Our Team</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </AppLayout>
  );
};

export default Industry;
