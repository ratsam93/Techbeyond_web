import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";

const CaseConceptCinematic = () => (
  <AppLayout>
    <SEOHead title="Case Study Concept Cinematic" description="Cinematic case-study design concept for Techbeyond." canonicalPath="/concepts/case-cinematic" />
    <div className="tbx-concept-page">
      <section className="tbx-page-hero">
        <div className="tbx-concepts-shell">
          <AnimatedSection>
            <p className="sj-kicker">Case Study Concept 02</p>
            <h1 className="sj-section-title" style={{ maxWidth: 920 }}>A more visual case-study page with slower, premium pacing.</h1>
            <p className="sj-copy sj-section-copy" style={{ maxWidth: 760 }}>
              This direction is less aggressive commercially. It makes the work feel more memorable, more crafted, and more presentation-led.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="tbx-concepts-shell">
          <div className="tbx-page-frame tbx-page-frame-light">
            <div className="tbx-page-section">
              <div className="tbx-case-grid">
                <AnimatedSection>
                  <div className="tbx-case-narrative">
                    <p className="tbx-page-kicker">Transformation Story</p>
                    <h1>From scattered presence to a sharper brand and cleaner demand flow.</h1>
                    <p>
                      This page feels closer to a visual portfolio. It works when you want the client to feel the change, not only measure it.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={90}>
                  <div className="tbx-case-gallery tbx-case-gallery-cinematic">
                    <p className="tbx-page-kicker">Full-bleed Story Image</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            <div className="tbx-page-section">
              <div className="tbx-page-grid tbx-page-grid-2">
                <AnimatedSection>
                  <div className="tbx-page-box">
                    <h2>What changes visually</h2>
                    <p>
                      Bigger imagery, fewer boxes, more breathing room, less dashboard language, more emotional transition between sections.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={90}>
                  <div className="tbx-page-box">
                    <h2>Best use</h2>
                    <ul>
                      <li>Homepage featured projects</li>
                      <li>Branding and web-design case studies</li>
                      <li>High-end showcase work</li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            <div className="tbx-page-section">
              <AnimatedSection>
                <div className="tbx-page-note">
                  <h2>Important tradeoff</h2>
                  <p>
                    This looks better for showcase work, but it is weaker than the ROI-first concept if the goal is to help close service deals quickly.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="tbx-page-footer-nav">
            <Link to="/concepts" className="tbx-page-button tbx-page-button-ghost">Back to all concepts</Link>
            <Link to="/concepts/case-roi" className="tbx-page-button tbx-page-button-ghost">Back to ROI concept</Link>
          </div>
        </div>
      </section>
    </div>
  </AppLayout>
);

export default CaseConceptCinematic;
