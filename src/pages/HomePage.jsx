import React from 'react';
import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';

export function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Prompt workflow platform"
        title="A better home for the prompts your team keeps rewriting."
        description="Techbeyond gives teams one place to draft, review, reuse, and ship prompts with cleaner structure and less noise."
        primaryCta={{ label: 'Explore features', to: '/features' }}
        secondaryCta={{ label: 'See pricing', to: '/pricing' }}
      />

      <section className="stat-strip">
        <div className="container stat-strip__grid">
          {site.stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Section
        id="features"
        eyebrow="Why teams switch"
        title="Structure, clarity, and speed in the same workflow."
        description="The site is organized to mirror a modern product landing flow: strong hero, credibility blocks, feature detail, social proof, and a final conversion section."
      >
        <div className="card-grid card-grid--4">
          {site.featureCards.map((card) => (
            <article key={card.title} className="feature-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="templates"
        eyebrow="How it works"
        title="From one draft to reusable assets."
        description="Create a prompt once, refine it with your team, then turn it into a repeatable template for the rest of the organization."
      >
        <div className="process">
          {['Draft', 'Review', 'Approve', 'Reuse'].map((step, index) => (
            <div key={step} className="process__step">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Templates"
        title="Common use cases, already packaged."
        description="A few high-frequency workflows that show how Techbeyond can be organized across departments."
      >
        <div className="card-grid card-grid--4">
          {site.templates.map((item) => (
            <article key={item.title} className="template-card">
              <p className="template-card__tag">{item.category}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <div className="section__footer">
          <Link className="button button--ghost" to="/templates">
            View all templates
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Proof"
        title="Teams want consistency more than more prompts."
        description="These short testimonials reinforce the product story without changing the meaning of the original marketing intent."
      >
        <div className="card-grid card-grid--2">
          {site.testimonials.map((item) => (
            <blockquote key={item.author} className="quote-card">
              <p>{item.quote}</p>
              <footer>{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section
        id="faq"
        eyebrow="FAQ"
        title="Questions teams usually ask first."
        description="Quick answers that keep the route structure and content flow clear for a landing-page style site."
      >
        <div className="faq-list">
          {site.faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <p className="eyebrow">Ready to start</p>
            <h2>Bring order to prompt work without changing your team’s process.</h2>
          </div>
          <Link className="button button--solid" to="/contact">
            Talk to Techbeyond
          </Link>
        </div>
      </section>
    </>
  );
}
