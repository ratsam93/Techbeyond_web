import React from 'react';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';
import { site } from '../data/site';

export function TemplatesPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Templates"
        title="Reusable prompts for the most common team jobs."
        description="This page keeps the same visual structure but turns the library into a more detailed route."
        primaryCta={{ label: 'Browse pricing', to: '/pricing' }}
        secondaryCta={{ label: 'Read the blog', to: '/blog' }}
      />
      <Section title="Template library" description="Templates grouped by function and ready to adapt.">
        <div className="card-grid card-grid--2">
          {site.templates.map((item) => (
            <article key={item.title} className="template-card template-card--large">
              <p className="template-card__tag">{item.category}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
