import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { getServicePageBySlug, serviceCategories, siteBrand } from "../data/content.js";

const Services = () => (
  <AppLayout>
    <SEOHead
      title={`${siteBrand.name} | Services`}
      description="Techbeyond services across LinkedIn, SEO, websites, paid media, automation, software, and support."
      canonicalPath="/services"
    />

    <div className="tbx-concept-page">
      <section className="tbx-page-hero">
        <div className="tbx-concepts-shell">
          <AnimatedSection>
            <p className="sj-kicker">Services</p>
            <h1 className="sj-section-title" style={{ maxWidth: 980 }}>Techbeyond services built as connected growth systems.</h1>
            <p className="sj-copy sj-section-copy" style={{ maxWidth: 760 }}>
              Every category below already maps to its own dedicated page and child-service set. The design direction now follows the systems concept you selected.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="tbx-concepts-shell">
          <div className="tbx-concepts-grid">
            {serviceCategories.map((category, index) => (
              <AnimatedSection key={category.slug} delay={index * 60}>
                <article className="tbx-concept-card">
                  <div className="tbx-concept-card-body">
                    <div className="tbx-concept-meta">
                      <span>{category.isFlagship ? "Flagship" : "Category"}</span>
                      <span>{category.childSlugs.length} modules</span>
                    </div>
                    <h2>{category.title}</h2>
                    <p>{category.summary}</p>
                    <div className="tbx-chip-row">
                      {category.childSlugs.slice(0, 4).map((slug) => (
                        <span key={slug} className="tbx-chip">
                          {getServicePageBySlug(slug)?.title || slug}
                        </span>
                      ))}
                    </div>
                    <div className="tbx-page-actions">
                      <Link to={`/services/${category.slug}`} className="tbx-page-button">Open category</Link>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  </AppLayout>
);

export default Services;
