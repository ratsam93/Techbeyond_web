import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";

const ServiceConceptEditorial = () => (
  <AppLayout>
    <SEOHead title="Service Concept Editorial" description="Editorial service-page design concept for Techbeyond." canonicalPath="/concepts/service-editorial" />
    <div className="tbx-concept-page">
      <section className="tbx-page-hero">
        <div className="tbx-concepts-shell">
          <AnimatedSection>
            <p className="sj-kicker">Service Concept 01</p>
            <h1 className="sj-section-title" style={{ maxWidth: 900 }}>Editorial authority for premium service pages.</h1>
            <p className="sj-copy sj-section-copy" style={{ maxWidth: 760 }}>
              This direction is calmer, warmer, and more persuasive. It feels like a strategy studio rather than a generic marketing agency.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="tbx-concepts-shell">
          <div className="tbx-page-frame tbx-page-frame-light">
            <div className="tbx-page-section">
              <div className="tbx-page-grid tbx-page-grid-hero">
                <AnimatedSection>
                  <div className="tbx-service-hero">
                    <p className="tbx-page-kicker">LinkedIn Growth Systems</p>
                    <h1>Turn founder authority into a steady demand engine.</h1>
                    <p>
                      This page style sells with clarity and confidence. It is text-led, highly intentional, and designed for services where trust and positioning matter more than dashboard theatrics.
                    </p>
                    <div className="tbx-page-actions">
                      <span className="tbx-page-button">Book strategy call</span>
                      <span className="tbx-page-button tbx-page-button-ghost">View proof</span>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={80}>
                  <div className="tbx-service-aside">
                    <div>
                      <p className="tbx-page-kicker">Why this works</p>
                      <ul>
                        <li>Feels expensive and senior.</li>
                        <li>Ideal for conversion through trust.</li>
                        <li>Good for LinkedIn, branding, consulting, and positioning-heavy offers.</li>
                      </ul>
                    </div>
                    <div className="tbx-page-statline">
                      <span>Warm neutral palette</span>
                      <span>Big type</span>
                      <span>Minimal chrome</span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            <div className="tbx-page-section">
              <AnimatedSection>
                <div className="tbx-editorial-band" />
              </AnimatedSection>
            </div>

            <div className="tbx-page-section">
              <div className="tbx-page-grid tbx-page-grid-2">
                <AnimatedSection>
                  <div className="tbx-page-box">
                    <h2>The page rhythm</h2>
                    <p>
                      Long-form hero, clear argument, restrained proof blocks, fewer modules, stronger copy hierarchy. The experience should feel composed and expensive, not busy.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={80}>
                  <div className="tbx-page-box">
                    <h2>Best page types</h2>
                    <ul>
                      <li>Founder-led service pages</li>
                      <li>About page</li>
                      <li>High-ticket advisory offers</li>
                      <li>Brand and LinkedIn service detail pages</li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            <div className="tbx-page-section">
              <AnimatedSection>
                <div className="tbx-page-note">
                  <h2>Recommendation</h2>
                  <p>
                    Use this if you want Techbeyond to feel more boutique, more strategic, and more premium than performance-marketing agencies.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="tbx-page-footer-nav">
            <Link to="/concepts" className="tbx-page-button tbx-page-button-ghost">Back to all concepts</Link>
            <Link to="/concepts/service-systems" className="tbx-page-button tbx-page-button-ghost">Next service concept</Link>
          </div>
        </div>
      </section>
    </div>
  </AppLayout>
);

export default ServiceConceptEditorial;
