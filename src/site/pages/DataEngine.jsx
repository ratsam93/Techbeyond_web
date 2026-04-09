import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import {
  caseStudies,
  getServicePageBySlug,
  servicePages,
  siteBrand,
} from "../data/content.js";

const linkedInPage = getServicePageBySlug("linkedin-services");
const linkedInModules = servicePages.filter(
  (page) => page.categorySlug === "linkedin-services" && page.parentSlug === "linkedin-services",
);
const relatedCaseStudies = caseStudies.filter((study) => study.linkedServices.includes("linkedin-services"));

const DataEngine = () => (
  <AppLayout>
    <SEOHead
      title={`${siteBrand.name} | Data Engine`}
      description="Product-style page for Techbeyond's LinkedIn-led demand generation system."
      canonicalPath="/data-engine"
    />

    <section className="mi-section mi-section-hero">
      <div className="mi-shell">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <AnimatedSection animation="tb-reveal">
              <p className="mi-eyebrow mb-3">Data engine</p>
              <h1 className="mi-title mb-4">The LinkedIn system for trusted pipeline growth.</h1>
              <p className="mi-copy mb-4" style={{ maxWidth: 620 }}>
                {linkedInPage?.summary}
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="mi-btn mi-btn-primary text-decoration-none">
                  Get in touch
                </Link>
                <Link to="/services/linkedin-services" className="mi-btn mi-btn-secondary text-decoration-none">
                  View modules
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
                      <div className="mi-eyebrow mb-2">LinkedIn workflow</div>
                      <div className="mi-copy" style={{ fontSize: "0.95rem" }}>
                        Profile positioning, authority content, outbound systems, lead qualification, and appointment setting under one operating layer.
                      </div>
                    </div>
                    <div className="d-grid gap-3">
                      {(linkedInPage?.outcomes || []).slice(0, 3).map((outcome) => (
                        <div className="mi-screen-block" key={outcome}>
                          <div className="mi-copy" style={{ fontSize: "0.92rem" }}>{outcome}</div>
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
          <p className="mi-eyebrow mb-3">Complete system</p>
          <h2 className="mi-title-md mb-5">Five modules mapped into one execution layer.</h2>
        </AnimatedSection>

        <div className="mi-grid-3">
          {linkedInModules.map((module, index) => (
            <AnimatedSection key={module.slug} animation="tb-reveal" delay={index * 70}>
              <Link to={`/services/linkedin-services/${module.slug}`} className="mi-card text-decoration-none d-block">
                <div className="mi-card-media" />
                <div className="mi-card-body">
                  <span className="mi-chip mb-3">Module 0{index + 1}</span>
                  <h3 className="h4 mb-2 text-white">{module.title}</h3>
                  <p className="mi-copy mb-0" style={{ fontSize: "0.95rem" }}>{module.summary}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="mi-section">
      <div className="mi-shell">
        <div className="mi-grid-3">
          <AnimatedSection animation="tb-reveal">
            <div className="mi-panel p-4 h-100">
              <p className="mi-eyebrow mb-3">Problems solved</p>
              <div className="mi-list">
                {(linkedInPage?.problems || []).slice(0, 5).map((item) => (
                  <div key={item} className="mi-list-item">
                    <div className="mi-copy mb-0" style={{ fontSize: "0.95rem" }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="tb-reveal" delay={80}>
            <div className="mi-panel p-4 h-100">
              <p className="mi-eyebrow mb-3">Deliverables</p>
              <div className="mi-list">
                {(linkedInPage?.deliverables || []).slice(0, 5).map((item) => (
                  <div key={item} className="mi-list-item">
                    <div className="mi-copy mb-0" style={{ fontSize: "0.95rem" }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="tb-reveal" delay={160}>
            <div className="mi-panel p-4 h-100">
              <p className="mi-eyebrow mb-3">Ideal for</p>
              <div className="mi-list">
                {(linkedInPage?.idealFor || []).slice(0, 5).map((item) => (
                  <div key={item} className="mi-list-item">
                    <div className="mi-copy mb-0" style={{ fontSize: "0.95rem" }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="mi-section">
      <div className="mi-shell">
        <AnimatedSection animation="tb-reveal">
          <p className="mi-eyebrow mb-3">Case studies</p>
          <h2 className="mi-title-md mb-5">Proof from LinkedIn-led growth work.</h2>
        </AnimatedSection>

        <div className="mi-grid-2">
          {relatedCaseStudies.slice(0, 4).map((study, index) => (
            <AnimatedSection key={study.slug} animation="tb-reveal" delay={index * 80}>
              <Link to={`/case-studies/${study.slug}`} className="mi-product-card text-decoration-none d-block">
                <div className="mi-product-media" />
                <div className="mi-product-body">
                  <span className="mi-chip mb-3">{study.industry}</span>
                  <h3 className="h4 mb-2 text-white">{study.title}</h3>
                  <p className="mi-copy mb-0" style={{ fontSize: "0.95rem" }}>{study.resultSummary}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </AppLayout>
);

export default DataEngine;
