import React from 'react';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';

export function TermsPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Terms"
        title="Plain-language terms of use."
        description="This page exists to complete the expected legal route set and footer linking."
      />
      <Section title="Terms summary" description="Short, readable terms aligned with the rest of the site.">
        <div className="prose">
          <p>Use Techbeyond responsibly and only for lawful work.</p>
          <p>We may update the service, the interface, and the content over time as the product evolves.</p>
        </div>
      </Section>
    </>
  );
}
