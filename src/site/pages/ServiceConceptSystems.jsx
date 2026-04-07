import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";

const ServiceConceptSystems = () => (
  <AppLayout>
    <SEOHead title="Service Concept Systems" description="Systems-style service-page design concept for Techbeyond." canonicalPath="/concepts/service-systems" />
    <div className="tbx-concept-page">
      <section className="tbx-page-hero">
        <div className="tbx-concepts-shell">
          <AnimatedSection>
            <p className="sj-kicker">Service Concept 02</p>
            <h1 className="sj-section-title" style={{ maxWidth: 940 }}>A service page that looks like a growth operating system.</h1>
            <p className="sj-copy sj-section-copy" style={{ maxWidth: 780 }}>
              This is the strongest fit for Techbeyond overall. It makes services feel engineered, connected, and measurable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="tbx-concepts-shell">
          <div className="tbx-page-frame">
            <div className="tbx-page-section">
              <div className="tbx-page-grid tbx-page-grid-hero">
                <AnimatedSection>
                  <div className="tbx-service-hero">
                    <p className="tbx-page-kicker">SEO / GEO / AEO Systems</p>
                    <h1>Build a search layer that keeps feeding the pipeline.</h1>
                    <p>
                      Dark, modular, and KPI-led. This direction is built for service pages where the client should feel they are buying a system, not just a list of tasks.
                    </p>
                    <div className="tbx-page-statline">
                      <span>Technical SEO</span>
                      <span>Demand capture</span>
                      <span>AI visibility</span>
                      <span>Reporting</span>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={90}>
                  <div className="tbx-service-aside">
                    <div className="tbx-page-box">
                      <p className="tbx-page-kicker">Stack Snapshot</p>
                      <ul>
                        <li>Audit and intent mapping</li>
                        <li>Page architecture and content system</li>
                        <li>Tracking, attribution, and reporting</li>
                      </ul>
                    </div>
                    <div className="tbx-page-box">
                      <p className="tbx-page-kicker">Commercial Signal</p>
                      <div className="tbx-case-metrics">
                        <div className="tbx-case-metric"><strong>214%</strong><span>Traffic lift</span></div>
                        <div className="tbx-case-metric"><strong>3.8x</strong><span>MQL growth</span></div>
                        <div className="tbx-case-metric"><strong>19d</strong><span>To launch</span></div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            <div className="tbx-page-section">
              <AnimatedSection>
                <div className="tbx-service-band" />
              </AnimatedSection>
            </div>

            <div className="tbx-page-section">
              <div className="tbx-page-grid tbx-page-grid-3">
                <AnimatedSection>
                  <div className="tbx-page-box">
                    <h2>Modules</h2>
                    <p>Every section should look like a system component with inputs, outputs, and business effect.</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={60}>
                  <div className="tbx-page-box">
                    <h2>Page feel</h2>
                    <p>Sharper grid, stronger metrics, more operating-model language, less editorial softness.</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={120}>
                  <div className="tbx-page-box">
                    <h2>Best fit</h2>
                    <p>SEO, paid media, CRM automation, web funnels, software delivery, and performance services.</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            <div className="tbx-page-section">
              <AnimatedSection>
                <div className="tbx-page-table">
                  <h2>Why this is probably the default direction</h2>
                  <div className="tbx-page-table-row">
                    <strong>Brand fit</strong>
                    <span>Feels technical and premium</span>
                    <span>Closer to Techbeyond than a creative studio look</span>
                  </div>
                  <div className="tbx-page-table-row">
                    <strong>Scalability</strong>
                    <span>Works across many services</span>
                    <span>Easy to repeat without pages looking identical</span>
                  </div>
                  <div className="tbx-page-table-row">
                    <strong>Sales value</strong>
                    <span>Metrics and systems sell well</span>
                    <span>Good for buyers comparing vendors</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="tbx-page-footer-nav">
            <Link to="/concepts" className="tbx-page-button tbx-page-button-ghost">Back to all concepts</Link>
            <Link to="/concepts/case-roi" className="tbx-page-button tbx-page-button-ghost">See case-study concepts</Link>
          </div>
        </div>
      </section>
    </div>
  </AppLayout>
);

export default ServiceConceptSystems;
