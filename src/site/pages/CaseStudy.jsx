import { Link, useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import BusinessPlanSection from "../components/BusinessPlanSection";
import SEOHead from "../components/SEOHead";
import { projects } from "../data/techbeyondContent.js";
import { servicePages } from "../data/content.js";

const serviceAliasMap = {
  "Product Strategy": "landing-page-design",
  "UX Systems": "conversion-focused-website-design",
  "Launch Support": "website-maintenance-services",
  "Mobile App Development": "mobile-apps",
  "Engagement UX": "ui-ux-design-mobile-apps",
  "Release Engineering": "app-store-launch-deployment",
  "AI Product Systems": "ai-software-development",
  "Workflow Automation": "workflow-automation",
  "CRM Enablement": "crm-setup-customization",
  "Website Systems": "react-website-development",
  "Search Visibility": "technical-seo",
};

const normalizeSlug = (value = "") =>
  value
    .toLowerCase()
    .replace(/%e2%80%99/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const findProject = (slug) =>
  projects.find((project) => {
    const aliases = [project.slug, ...(project.aliases || [])];
    return aliases.some((entry) => normalizeSlug(entry) === normalizeSlug(slug));
  });

const resolveRelatedServices = (project) =>
  (project.services || [])
    .map((serviceName) => serviceAliasMap[serviceName])
    .map((slug) => servicePages.find((item) => item.slug === slug))
    .filter(Boolean)
    .slice(0, 3);

const CaseStudy = () => {
  const { slug = "" } = useParams();
  const project = findProject(slug) || projects[0];
  const moreProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 3);
  const relatedServices = resolveRelatedServices(project);

  return (
    <AppLayout>
      <SEOHead title={project.title} description={project.summary} canonicalPath={`/projects/${project.slug}`} />

      <div className="tbx-concept-page">
        <section className="tbx-page-hero">
          <div className="tbx-concepts-shell">
            <AnimatedSection>
              <p className="sj-kicker">{project.industry}</p>
              <h1 className="sj-section-title" style={{ maxWidth: 980 }}>{project.title}</h1>
              <p className="sj-copy sj-section-copy" style={{ maxWidth: 780 }}>{project.summary}</p>
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
                      <p className="tbx-page-kicker">Outcome First</p>
                      <h1>{project.resultsTitle}</h1>
                      <p>{project.resultsLead}</p>
                      <div className="tbx-page-actions">
                        <Link to="/contact" className="tbx-page-button">Build a similar system</Link>
                        <Link to="/pricing" className="tbx-page-button tbx-page-button-ghost">View pricing</Link>
                        <Link to="/projects" className="tbx-page-button tbx-page-button-ghost">Back to all case studies</Link>
                      </div>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={90}>
                    <div className="tbx-case-gallery" style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.02)), url('${project.image}')` }}>
                      <p className="tbx-page-kicker">Project Snapshot</p>
                    </div>
                  </AnimatedSection>
                </div>
              </div>

              <div className="tbx-page-section">
                <AnimatedSection>
                  <div className="tbx-case-metrics">
                    {project.stats.slice(0, 3).map((stat) => (
                      <div key={`${project.slug}-${stat.label}`} className="tbx-case-metric">
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              {project.outcomes?.length ? (
                <div className="tbx-page-section">
                  <AnimatedSection>
                    <div className="tbx-page-box">
                      <h2>Key outcomes</h2>
                      <ul>
                        {project.outcomes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>
              ) : null}

              <div className="tbx-page-section">
                <div className="tbx-page-grid tbx-page-grid-2">
                  <AnimatedSection>
                    <div className="tbx-page-box">
                      <h2>The challenge</h2>
                      <p>{project.challenge}</p>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={70}>
                    <div className="tbx-page-box">
                      <h2>The approach</h2>
                      <p>{project.approachLead}</p>
                      <p>{project.approachBody}</p>
                    </div>
                  </AnimatedSection>
                </div>
              </div>

              {project.approachSteps?.length ? (
                <div className="tbx-page-section">
                  <AnimatedSection>
                    <div className="tbx-page-table">
                      <h2>Execution breakdown</h2>
                      {project.approachSteps.map((step, index) => (
                        <div key={step} className="tbx-page-table-row">
                          <strong>{String(index + 1).padStart(2, "0")}</strong>
                          <span>{step}</span>
                          <span>Delivered during the project rollout</span>
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>
              ) : null}

              {project.fullMetrics?.length ? (
                <div className="tbx-page-section">
                  <AnimatedSection>
                    <div className="tbx-page-table">
                      <h2>Before and after</h2>
                      {project.fullMetrics.map((metric) => (
                        <div key={metric.label} className="tbx-page-table-row">
                          <strong>{metric.label}</strong>
                          <span>{metric.before}</span>
                          <span>{metric.after}</span>
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>
              ) : null}

              <div className="tbx-page-section">
                <AnimatedSection>
                  <div className="tbx-page-table">
                    <h2>Project context</h2>
                    {project.timeline ? (
                      <div className="tbx-page-table-row">
                        <strong>Timeline</strong>
                        <span>{project.timeline}</span>
                        <span>Delivery period for the active build and rollout</span>
                      </div>
                    ) : null}
                    <div className="tbx-page-table-row">
                      <strong>Industry</strong>
                      <span>{project.industry}</span>
                      <span>Mapped from current Techbeyond content</span>
                    </div>
                    <div className="tbx-page-table-row">
                      <strong>Services</strong>
                      <span>{project.services.join(", ")}</span>
                      <span>Connected system used in this engagement</span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {relatedServices.length > 0 ? (
                <div className="tbx-page-section">
                  <AnimatedSection>
                    <div className="tbx-page-box">
                      <h2>Relevant services</h2>
                      <ul>
                        {relatedServices.map((service) => (
                          <li key={service.slug}>
                            <Link to={service.parentSlug ? `/services/${service.parentSlug}/${service.slug}` : `/services/${service.slug}`}>
                              {service.title}
                            </Link>
                            {" · "}
                            <Link to={`/pricing#service-${service.slug}`}>Pricing</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>
              ) : null}

              {project.testimonial ? (
                <div className="tbx-page-section">
                  <AnimatedSection>
                    <div className="tbx-page-note">
                      <h2>Client signal</h2>
                      <p>{project.testimonial.quote}</p>
                      <p><strong>{project.testimonial.name}</strong> · {project.testimonial.role}</p>
                    </div>
                  </AnimatedSection>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="sj-section sj-section-tight">
          <div className="tbx-concepts-shell">
            <AnimatedSection>
              <p className="sj-kicker">More Case Studies</p>
            </AnimatedSection>
            <div className="tbx-concepts-grid">
              {moreProjects.map((item, index) => (
                <AnimatedSection key={item.slug} delay={index * 70}>
                  <article className="tbx-concept-card">
                    <div className="tbx-concept-card-body">
                      <div className="tbx-concept-meta">
                        <span>{item.industry}</span>
                      </div>
                      <h2>{item.title}</h2>
                      <p>{item.summary}</p>
                      <div className="tbx-page-actions">
                        <Link to={`/projects/${item.slug}`} className="tbx-page-button">Open case study</Link>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="sj-section sj-section-tight">
          <div className="tbx-concepts-shell">
            <BusinessPlanSection
              eyebrow="Commercial Planning"
              title="Want this kind of result, but need the business plan first?"
              copy="If the business case, budget range, market angle, or execution priorities still need shaping, we can start by building the business plan and rollout logic before implementing the channel work."
            />
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default CaseStudy;
