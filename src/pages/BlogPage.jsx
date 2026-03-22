import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';
import { site } from '../data/site';

export function BlogPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Blog"
        title="Practical notes on prompt workflows and team operations."
        description="A content route that supports the page linking pattern and gives the site more depth."
        primaryCta={{ label: 'Contact us', to: '/contact' }}
        secondaryCta={{ label: 'Templates', to: '/templates' }}
      />
      <Section title="Latest articles" description="Short reads that expand the same product narrative.">
        <div className="card-grid card-grid--3">
          {site.blogPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <p className="template-card__tag">Article</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link className="text-link" to={`/blog/${post.slug}`}>
                Read more
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
