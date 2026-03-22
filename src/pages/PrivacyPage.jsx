import React from 'react';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';

export function PrivacyPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Privacy"
        title="Straightforward privacy terms."
        description="A lightweight legal page that preserves the routing and footer link structure."
      />
      <Section title="Privacy summary" description="Placeholder policy text for the recreated site.">
        <div className="prose">
          <p>Techbeyond only stores the information needed to operate the product and respond to inquiries.</p>
          <p>We do not sell personal data, and we keep access limited to the people who need it.</p>
        </div>
      </Section>
    </>
  );
}
