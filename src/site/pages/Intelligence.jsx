import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { industries, insightPosts, serviceCategories, siteBrand } from "../data/content.js";

const categories = serviceCategories.filter((item) => item.slug !== "linkedin-services");
const pillars = categories.slice(0, 3);

const Intelligence = () => (
  <AppLayout>
    <SEOHead
      title={`${siteBrand.name} | Intelligence`}
      description="Product-style page for Techbeyond's full-funnel digital growth intelligence layer."
      canonicalPath="/intelligence"
    />

    <section className="mi-section mi-section-hero">
      <div className="mi-shell">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <AnimatedSection animation="tb-reveal">
              <p className="mi-eyebrow mb-3">Intelligence</p>
              <h1 className="mi-title mb-4">The digital infrastructure behind visibility, conversion, and scale.</h1>
              <p className="mi-copy mb-4" style={{ maxWidth: 620 }}>
                Websites, SEO/GEO, paid media, automation, branding, and support operations organized into one intelligence platform so every digital surface reinforces the same business objective.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/solutions" className="mi-btn mi-btn-primary text-decoration-none">
                  Explore solutions
                </Link>
                <Link to="/research" className="mi-btn mi-btn-secondary text-decoration-none">
                  Research
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
                      <div className="mi-eyebrow mb-2">Intelligence layer</div>
                      <div className="mi-copy" style={{ fontSize: "0.95rem" }}>
                        Search visibility, conversion architecture, paid demand, workflow automation, and support continuity.
                      </div>
                    </div>
                    <div className="d-grid gap-3">
                      {pillars.map((pillar) => (
                        <div className="mi-screen-block" key={pillar.slug}>
                          <div className="mi-eyebrow mb-2">{pillar.title}</div>
                          <div className="mi-copy" style={{ fontSize: "0.92rem" }}>{pillar.childSlugs.length} modules</div>
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
          <p className="mi-eyebrow mb-3">Core pillars</p>
          <h2 className="mi-title-md mb-5">Service groups arranged like an operating platform.</h2>
        </AnimatedSection>

        <div className="mi-grid-3">
          {categories.slice(0, 6).map((category, index) => (
            <AnimatedSection key={category.slug} animation="tb-reveal" delay={index * 70}>
              <Link to={`/services/${category.slug}`} className="mi-card text-decoration-none d-block">
                <div className="mi-card-media" />
                <div className="mi-card-body">
                  <span className="mi-chip mb-3">{category.childSlugs.length} modules</span>
                  <h3 className="h5 mb-2 text-white">{category.title}</h3>
                  <p className="mi-copy mb-0" style={{ fontSize: "0.92rem" }}>{category.summary}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="mi-section">
      <div className="mi-shell">
        <div className="row g-5">
          <div className="col-lg-6">
            <AnimatedSection animation="tb-reveal">
              <p className="mi-eyebrow mb-3">Research</p>
              <h2 className="mi-title-md mb-4">Insights as an explanation layer for operators and founders.</h2>
            </AnimatedSection>

            <div className="mi-panel p-4">
              <div className="mi-list">
                {insightPosts.slice(0, 4).map((post, index) => (
                  <AnimatedSection key={post.slug} animation="tb-reveal" delay={index * 60}>
                    <Link to={`/research/${post.slug}`} className="mi-list-item text-decoration-none d-block">
                      <div className="mi-eyebrow mb-2">{post.category}</div>
                      <h3 className="h4 mb-2 text-white">{post.title}</h3>
                      <p className="mi-copy mb-0" style={{ fontSize: "0.95rem" }}>{post.excerpt}</p>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <AnimatedSection animation="tb-reveal" delay={120}>
              <p className="mi-eyebrow mb-3">Solutions</p>
              <h2 className="mi-title-md mb-4">Industry pathways for context-specific execution.</h2>
            </AnimatedSection>

            <div className="mi-panel p-4">
              <div className="mi-list">
                {industries.map((industry, index) => (
                  <AnimatedSection key={industry.slug} animation="tb-reveal" delay={index * 60}>
                    <Link to={`/solutions/${industry.slug}`} className="mi-list-item text-decoration-none d-block">
                      <div className="mi-eyebrow mb-2">{industry.childSolutions.length} solution modules</div>
                      <h3 className="h4 mb-2 text-white">{industry.title}</h3>
                      <p className="mi-copy mb-0" style={{ fontSize: "0.95rem" }}>{industry.summary}</p>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
);

export default Intelligence;
