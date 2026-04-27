import { Link, useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { getServicePageBySlug } from "../data/content.js";
import { blogPosts, projects } from "../data/techbeyondContent.js";

const InsightPost = () => {
  const { slug = "" } = useParams();
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const relatedPosts = post.relatedPostSlugs
    .map((relatedSlug) => blogPosts.find((item) => item.slug === relatedSlug))
    .filter(Boolean);
  const relatedServices = post.relatedServiceSlugs
    .map((relatedSlug) => getServicePageBySlug(relatedSlug))
    .filter(Boolean);
  const relatedProjects = post.relatedProjectSlugs
    .map((relatedSlug) => projects.find((item) => item.slug === relatedSlug))
    .filter(Boolean);

  return (
    <AppLayout>
      <SEOHead
        title={post.seoTitle || post.title}
        description={post.metaDescription || post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        seo={{ image: post.heroImage }}
      />

      <section className="sj-page-hero">
        <div className="sj-shell">
          <AnimatedSection>
            <div className="sj-meta-row">
              <span>{post.category}</span>
              <span>{post.primaryKeyword}</span>
            </div>
            <h1 className="sj-section-title">{post.title}</h1>
            <p className="sj-copy sj-section-copy" style={{ maxWidth: "52rem" }}>{post.featureSummary}</p>
            <div className="sj-author-row">
              <div className="sj-author-avatar">{post.author.name.charAt(0)}</div>
              <div>
                <strong>{post.author.name}</strong>
                <span>{post.author.role}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell">
          <AnimatedSection>
            <article className="sj-showcase-card">
              <img src={post.heroImage} alt={post.heroImageAlt} className="sj-showcase-image" />
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell sj-reading-shell">
          {post.sections.map((section, index) => (
            <AnimatedSection key={`${post.slug}-${section.heading}`} delay={index * 35}>
              <section className="sj-reading-section">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="sj-reading-list">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {post.inlineImages[index % post.inlineImages.length] && index < 2 ? (
                  <figure className="tbx-inline-figure">
                    <img
                      src={post.inlineImages[index % post.inlineImages.length].src}
                      alt={post.inlineImages[index % post.inlineImages.length].alt}
                      className="tbx-inline-image"
                    />
                  </figure>
                ) : null}
              </section>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="sj-shell">
          <div className="tbx-page-grid tbx-page-grid-3">
            <AnimatedSection>
              <div className="tbx-page-box">
                <h2>Related services</h2>
                <ul>
                  {relatedServices.map((service) => (
                    <li key={service.slug}>
                      <Link to={service.parentSlug ? `/services/${service.parentSlug}/${service.slug}` : `/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={70}>
              <div className="tbx-page-box">
                <h2>Relevant case studies</h2>
                <ul>
                  {relatedProjects.map((project) => (
                    <li key={project.slug}>
                      <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={140}>
              <div className="tbx-page-box">
                <h2>Recommended next step</h2>
                <ul>
                  {relatedServices.slice(0, 1).map((service) => (
                    <li key={`${service.slug}-pricing`}>
                      <Link to={`/pricing#service-${service.slug}`}>View pricing for {service.title}</Link>
                    </li>
                  ))}
                  <li><Link to="/pricing">Open full pricing catalog</Link></li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">Read these next</p>
            <h2 className="sj-section-title">Related blog posts</h2>
          </AnimatedSection>

          <div className="sj-blog-grid">
            {relatedPosts.map((item, index) => (
              <AnimatedSection key={item.slug} delay={index * 70}>
                <article className="sj-blog-card">
                  <Link to={`/blog/${item.slug}`} className="sj-blog-image-link" aria-label={`Read ${item.title}`}>
                    <img src={item.image} alt={item.title} className="sj-blog-image" />
                  </Link>
                  <div className="sj-blog-body">
                    <div className="sj-meta-row">
                      <span>{item.category}</span>
                      <span>{item.primaryKeyword}</span>
                    </div>
                    <h3>
                      <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p className="sj-copy sj-copy-tight">{item.excerpt}</p>
                    <Link to={`/blog/${item.slug}`} className="sj-inline-link">
                      Read More
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default InsightPost;
