import React from 'react';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';
import { site } from '../data/site';

export function FeaturesPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Features"
        title="Everything the core workflow needs, nothing that slows it down."
        description="A focused page that expands the same product story into concrete capabilities and page hierarchy."
        primaryCta={{ label: 'See templates', to: '/templates' }}
        secondaryCta={{ label: 'Contact sales', to: '/contact' }}
      />
      <Section title="Capability blocks" description="The same set of ideas presented with more detail.">
        <div className="card-grid card-grid--2">
          {site.featureCards.map((card) => (
            <article key={card.title} className="detail-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
