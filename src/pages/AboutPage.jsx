import React from 'react';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';

export function AboutPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="About"
        title="A focused team building clearer prompt systems."
        description="The about page keeps the same visual language while explaining the brand in Techbeyond terms."
        primaryCta={{ label: 'Contact', to: '/contact' }}
        secondaryCta={{ label: 'Pricing', to: '/pricing' }}
      />
      <Section title="Why Techbeyond exists" description="We help teams avoid prompt sprawl, duplicated work, and inconsistent outputs.">
        <div className="prose">
          <p>
            Techbeyond is a productized workflow for teams that treat prompts like durable internal assets instead of
            throwaway text snippets.
          </p>
          <p>
            The result is a cleaner process, simpler collaboration, and a site architecture that supports direct
            conversions from any page.
          </p>
        </div>
      </Section>
    </>
  );
}
