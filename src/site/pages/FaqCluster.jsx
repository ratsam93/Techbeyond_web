import { Link, useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import FaqAccordion from "../components/FaqAccordion";
import SEOHead from "../components/SEOHead";
import { getFaqClusterBySlug, siteBrand } from "../data/content.js";

const FaqCluster = () => {
  const { slug } = useParams();
  const cluster = getFaqClusterBySlug(slug);
  if (!cluster) return <AppLayout><div className="container py-5"><h1 className="text-white">FAQ not found</h1></div></AppLayout>;

  return (
    <AppLayout>
      <SEOHead title={`${siteBrand.name} | ${cluster.title}`} description={`Common questions about ${cluster.title.toLowerCase()}`} canonicalPath={`/faqs/${slug}`} />

      <section className="tb-hero-fullscreen" style={{ minHeight: "40vh" }}>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <AnimatedSection><p className="tb-eyebrow mb-3">FAQs</p></AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="display-4 fw-bold text-white mb-4">{cluster.title}</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="tb-section">
        <div className="container" style={{ maxWidth: 800 }}>
          <AnimatedSection>
            <FaqAccordion items={cluster.items} />
          </AnimatedSection>
        </div>
      </section>

      <section className="tb-section-sm">
        <div className="container">
          <AnimatedSection animation="tb-reveal-scale">
            <div className="tb-cta-section text-center position-relative">
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h2 className="h3 text-white mb-3">Have more questions?</h2>
                <Link to="/contact" className="tb-btn tb-btn-primary tb-btn-lg tb-btn-icon-arrow">Talk to Us</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </AppLayout>
  );
};

export default FaqCluster;
