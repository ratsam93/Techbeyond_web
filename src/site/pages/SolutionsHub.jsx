import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { industries, siteBrand } from "../data/content.js";

const SolutionsHub = () => (
  <AppLayout>
    <SEOHead
      title={`${siteBrand.name} | Solutions`}
      description="Industry-specific solution surfaces built from Techbeyond's current service architecture."
      canonicalPath="/solutions"
    />

    <section className="mi-section mi-section-hero">
      <div className="mi-shell">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <AnimatedSection animation="tb-reveal">
              <p className="mi-eyebrow mb-3">Solutions</p>
              <h1 className="mi-title mb-4">The same system, adapted by industry and buying context.</h1>
              <p className="mi-copy mb-4" style={{ maxWidth: 620 }}>
                Rather than presenting generic services alone, the solutions layer shows how Techbeyond&apos;s current delivery stack changes across healthcare, real estate, retail, e-commerce, and SaaS environments.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="mi-btn mi-btn-primary text-decoration-none">
                  Get in touch
                </Link>
                <Link to="/services" className="mi-btn mi-btn-secondary text-decoration-none">
                  View services
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <div className="col-lg-6">
            <AnimatedSection animation="tb-reveal" delay={120}>
              <div className="mi-visual-shell">
                <div className="mi-screen">
                  <div className="mi-screen-bar">
                    <span className="mi-screen-dot" />
                    <span className="mi-screen-dot" />
                    <span className="mi-screen-dot" />
                  </div>
                  <div className="mi-screen-grid">
                    <div className="mi-screen-block mi-screen-block-tall">
                      <div className="mi-eyebrow mb-2">Solution architecture</div>
                      <div className="mi-copy" style={{ fontSize: "0.95rem" }}>
                        Industry entry points connect to service architecture, case studies, insights, and implementation paths.
                      </div>
                    </div>
                    <div className="d-grid gap-3">
                      {industries.map((industry) => (
                        <div key={industry.slug} className="mi-screen-block">
                          <div className="mi-eyebrow mb-2">{industry.title}</div>
                          <div className="mi-copy" style={{ fontSize: "0.92rem" }}>{industry.childSolutions.length} pathways</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    <section className="mi-section">
      <div className="mi-shell">
        <AnimatedSection animation="tb-reveal">
          <p className="mi-eyebrow mb-3">Industry tracks</p>
          <h2 className="mi-title-md mb-5">Choose the path closest to your market and sales motion.</h2>
        </AnimatedSection>

        <div className="mi-grid-2">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.slug} animation="tb-reveal" delay={index * 70}>
              <Link to={`/solutions/${industry.slug}`} className="mi-product-card text-decoration-none d-block">
                <div className="mi-product-media" />
                <div className="mi-product-body">
                  <span className="mi-chip mb-3">{industry.childSolutions.length} solution modules</span>
                  <h3 className="h3 mb-2 text-white">{industry.title}</h3>
                  <p className="mi-copy mb-3" style={{ fontSize: "0.95rem" }}>{industry.summary}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {industry.childSolutions.slice(0, 3).map(([, title]) => (
                      <span key={title} className="mi-chip">{title}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </AppLayout>
);

export default SolutionsHub;
