import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { site } from '../data/site';

export function ArticlePage() {
  const { slug } = useParams();
  const article = site.blogPosts.find((post) => post.slug === slug) ?? site.blogPosts[0];

  return (
    <>
      <PageHero
        compact
        eyebrow="Article"
        title={article.title}
        description={article.excerpt}
        primaryCta={{ label: 'Back to blog', to: '/blog' }}
        secondaryCta={{ label: 'Contact', to: '/contact' }}
      />
      <section className="section">
        <div className="container prose">
          <p>
            Techbeyond uses a simple publishing pattern here: a headline, a summary, and a clear path back into the
            rest of the site.
          </p>
          <p>
            The exact wording is rewritten, but the intent stays the same. The article route proves the navigation
            system works beyond the landing pages.
          </p>
          <Link className="button button--ghost" to="/blog">
            Return to all articles
          </Link>
        </div>
      </section>
    </>
  );
}
