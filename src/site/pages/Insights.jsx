import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { blogPosts } from "../data/techbeyondContent.js";

const Insights = () => (
  <AppLayout>
    <SEOHead
      title="Blog"
      description="Techbeyond Solution research, playbooks, and field notes on LinkedIn, SEO, websites, paid media, and automation."
      canonicalPath="/blog"
    />

    <section className="sj-page-hero">
      <div className="sj-shell">
        <AnimatedSection>
          <p className="sj-kicker">BLOG</p>
          <h1 className="sj-section-title">Research, playbooks, and growth-system thinking</h1>
          <p className="sj-copy sj-section-copy">
            Practical notes from Techbeyond Solution on LinkedIn demand generation, search visibility, website structure, paid media, and operational follow-through.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="sj-section">
      <div className="sj-shell">
        <div className="sj-blog-grid">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 55}>
              <article className="sj-blog-card">
                <Link to={`/blog/${post.slug}`} className="sj-blog-image-link" aria-label={`Read ${post.title}`}>
                  <img src={post.image} alt={post.title} className="sj-blog-image" />
                </Link>
                <div className="sj-blog-body">
                  <div className="sj-meta-row">
                    <span>{post.category}</span>
                    <span>{post.primaryKeyword}</span>
                  </div>
                  <h3>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="sj-copy sj-copy-tight">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="sj-inline-link">
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

export default Insights;
