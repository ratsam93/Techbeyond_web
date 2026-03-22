import React from 'react';
import { PageHero } from '../components/PageHero';

export function ContactPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Contact"
        title="Tell us what you need and we’ll map the right workflow."
        description="This route keeps the same landing-page conversion shape with a simple form and direct action."
        primaryCta={{ label: 'Email Techbeyond', href: 'mailto:hello@techbeyond.example' }}
        secondaryCta={{ label: 'Back home', to: '/' }}
      />
      <section className="section">
        <div className="container contact-grid">
          <form className="contact-form">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              What are you building?
              <textarea rows="6" placeholder="Tell us about the workflow, team size, and timeline." />
            </label>
            <button className="button button--solid" type="button">
              Send inquiry
            </button>
          </form>
          <div className="contact-aside">
            <div className="detail-card">
              <h3>What happens next</h3>
              <p>We review your note, confirm the fit, and respond with the simplest path forward.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
