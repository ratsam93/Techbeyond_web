import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { siteBrand } from "../data/content.js";
import { getSitemapGroups } from "../data/routes.js";

const Sitemap = () => {
  const groups = getSitemapGroups();

  return (
    <AppLayout>
      <SEOHead
        title={`${siteBrand.name} | Sitemap`}
        description="Browse the full public Techbeyond site map."
        canonicalPath="/sitemap"
      />

      <section className="tb-hero-fullscreen" style={{ minHeight: "36vh" }}>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <AnimatedSection>
            <p className="tb-eyebrow mb-3">Sitemap</p>
            <h1 className="tb-display-huge mb-3" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
              Browse the full public site.
            </h1>
            <p style={{ color: "var(--tb-text-soft)", maxWidth: 620 }}>
              Every major page family, route group, and content pathway available in the Techbeyond rebuild.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="tb-section">
        <div className="container">
          <div className="row g-4">
            {groups.map((group, index) => (
              <div className="col-lg-6" key={group.title}>
                <AnimatedSection delay={index * 60}>
                  <div className="tb-card-glow h-100">
                    <p className="tb-eyebrow mb-3">{group.title}</p>
                    <ul className="list-unstyled mb-0">
                      {group.links.map((link) => (
                        <li key={`${group.title}-${link.href}`} className="mb-2">
                          <Link to={link.href} className="text-decoration-none">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Sitemap;
