import { Link, useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { getInsightsByCategory, insightsCategories, siteBrand } from "../data/content.js";

const InsightCategory = () => {
  const { category } = useParams();
  const posts = getInsightsByCategory(category || "");
  const title = insightsCategories.find((c) => c.toLowerCase() === category?.toLowerCase()) || category || "Insights";

  return (
    <AppLayout>
      <SEOHead title={`${siteBrand.name} | ${title} Insights`} description={`Articles about ${title.toLowerCase()}`} canonicalPath={`/insights/category/${category}`} />

      <section className="tb-hero-fullscreen" style={{ minHeight: "40vh" }}>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <AnimatedSection>
            <Link to="/insights" className="tb-chip tb-chip-cyan text-decoration-none mb-3 d-inline-flex">← All Insights</Link>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="display-4 fw-bold text-white mb-4">{title} Insights</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="tb-section">
        <div className="container">
          <div className="row g-4">
            {posts.map((post, i) => (
              <div className="col-md-6 col-lg-4" key={post.slug}>
                <AnimatedSection delay={i * 60}>
                  <Link to={`/insights/${post.slug}`} className="text-decoration-none">
                    <div className="tb-card h-100">
                      <h2 className="h5 text-white mb-2">{post.title}</h2>
                      <p style={{ color: "var(--tb-text-soft)", fontSize: "0.92rem" }}>{post.excerpt}</p>
                      <span className="tb-btn tb-btn-ghost tb-btn-sm tb-btn-icon-arrow">Read</span>
                    </div>
                  </Link>
                </AnimatedSection>
              </div>
            ))}
            {posts.length === 0 ? (
              <div className="col-12 text-center">
                <p style={{ color: "var(--tb-text-muted)" }}>No insights found for this category.</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default InsightCategory;
