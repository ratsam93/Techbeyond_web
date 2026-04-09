import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";

const CaseConceptROI = () => (
  <AppLayout>
    <SEOHead title="Case Study Concept ROI" description="ROI-first case-study design concept for Techbeyond." canonicalPath="/concepts/case-roi" />
    <div className="tbx-concept-page">
      <section className="tbx-page-hero">
        <div className="tbx-concepts-shell">
          <AnimatedSection>
            <p className="sj-kicker">Case Study Concept 01</p>
            <h1 className="sj-section-title" style={{ maxWidth: 900 }}>Lead with the result, then prove the system behind it.</h1>
            <p className="sj-copy sj-section-copy" style={{ maxWidth: 770 }}>
              This concept is commercial and buyer-facing. It is the strongest option if case studies should help close deals, not just look impressive.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="tbx-concepts-shell">
          <div className="tbx-page-frame">
            <div className="tbx-page-section">
              <div className="tbx-case-grid">
                <AnimatedSection>
                  <div className="tbx-case-narrative">
                    <p className="tbx-page-kicker">B2B Services / SEO + LinkedIn</p>
                    <h1>How Techbeyond turned a quiet website into a qualified pipeline channel.</h1>
                    <p>
                      This page style reveals the commercial win immediately, then walks the reader through challenge, system, rollout, and metrics with very little friction.
                    </p>
                    <div className="tbx-page-actions">
                      <span className="tbx-page-button">Book a similar strategy</span>
                      <span className="tbx-page-button tbx-page-button-ghost">See service page match</span>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={90}>
                  <div className="tbx-case-gallery">
                    <p className="tbx-page-kicker">Visual Proof Panel</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            <div className="tbx-page-section">
              <AnimatedSection>
                <div className="tbx-case-metrics">
                  <div className="tbx-case-metric"><strong>+172%</strong><span>Qualified lead lift</span></div>
                  <div className="tbx-case-metric"><strong>+218%</strong><span>Organic traffic growth</span></div>
                  <div className="tbx-case-metric"><strong>42%</strong><span>Faster response time</span></div>
                </div>
              </AnimatedSection>
            </div>

            <div className="tbx-page-section">
              <div className="tbx-page-grid tbx-page-grid-2">
                <AnimatedSection>
                  <div className="tbx-page-box">
                    <h2>Why it works</h2>
                    <ul>
                      <li>Shows business impact before reading fatigue sets in.</li>
                      <li>Ideal for sales and proposal support.</li>
                      <li>Lets you reuse the same structure across many case studies.</li>
                    </ul>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={90}>
                  <div className="tbx-page-box">
                    <h2>Best pair</h2>
                    <p>
                      Pair this with the Systems Interface service-page direction. They reinforce each other well and make the brand look coherent.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          <div className="tbx-page-footer-nav">
            <Link to="/concepts" className="tbx-page-button tbx-page-button-ghost">Back to all concepts</Link>
            <Link to="/concepts/case-cinematic" className="tbx-page-button tbx-page-button-ghost">Next case-study concept</Link>
          </div>
        </div>
      </section>
    </div>
  </AppLayout>
);

export default CaseConceptROI;
