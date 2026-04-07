import { useLocation } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { legalPages } from "../data/techbeyondContent.js";

const Legal = () => {
  const location = useLocation();
  const isPrivacy = location.pathname.includes("privacy");
  const page = isPrivacy ? legalPages.privacy : legalPages.terms;

  return (
    <AppLayout>
      <SEOHead title={page.title} description={page.description} canonicalPath={location.pathname} />

      <section className="sj-page-hero">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">LEGAL</p>
            <h1 className="sj-section-title">{page.title}</h1>
            <p className="sj-copy sj-section-copy">{page.description}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell sj-reading-shell">
          {page.sections.map((section, index) => (
            <AnimatedSection key={section.heading} delay={index * 40}>
              <section className="sj-reading-section">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </AppLayout>
  );
};

export default Legal;
