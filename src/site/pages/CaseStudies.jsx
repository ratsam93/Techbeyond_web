import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { projects } from "../data/techbeyondContent.js";

const CaseStudies = () => (
  <AppLayout>
    <SEOHead
      title="Techbeyond | Case Studies"
      description="Proof-led Techbeyond case studies showing traffic, lead quality, websites, automation, and growth execution."
      canonicalPath="/projects"
    />

    <div className="tbx-concept-page">
      <section className="tbx-page-hero">
        <div className="tbx-concepts-shell">
          <AnimatedSection>
            <p className="sj-kicker">Case Studies</p>
            <h1 className="sj-section-title" style={{ maxWidth: 980 }}>Proof from live demand, conversion, and systems work.</h1>
            <p className="sj-copy sj-section-copy" style={{ maxWidth: 760 }}>
              This listing now leans into the ROI-first case-study design: fast outcomes, clear context, and direct access to the full detail pages.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="tbx-concepts-shell">
          <div className="tbx-concepts-grid">
            {projects.map((project, index) => (
              <AnimatedSection key={project.slug} delay={index * 70}>
                <article className="tbx-concept-card">
                  <div className="tbx-concept-card-body">
                    <div className="tbx-concept-meta">
                      <span>{project.industry}</span>
                    </div>
                    <h2>{project.title}</h2>
                    <p>{project.summary}</p>
                    <div className="tbx-preview-grid">
                      {project.stats.slice(0, 3).map((stat) => (
                        <div key={`${project.slug}-${stat.label}`} className="tbx-preview-stat">
                          <strong>{stat.value}</strong>
                          <span>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="tbx-page-actions">
                      <Link to={`/projects/${project.slug}`} className="tbx-page-button">View case study</Link>
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

export default CaseStudies;
