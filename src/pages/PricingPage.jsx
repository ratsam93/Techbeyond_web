import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';
import { site } from '../data/site';

export function PricingPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Pricing"
        title="Simple plans for teams of different sizes."
        description="A clear pricing page with the same conversion pattern: value, comparison, and a direct CTA."
        primaryCta={{ label: 'Book a demo', to: '/contact' }}
        secondaryCta={{ label: 'View features', to: '/features' }}
      />
      <Section title="Choose a plan" description="Straightforward tiers with a highlighted middle option.">
        <div className="card-grid card-grid--3">
          {site.pricing.map((plan) => (
            <article key={plan.name} className={`pricing-card ${plan.highlighted ? 'pricing-card--featured' : ''}`}>
              <p className="template-card__tag">{plan.name}</p>
              <h3>{plan.price}</h3>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link className="button button--ghost" to="/contact">
                Get started
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
