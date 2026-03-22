import React from 'react';
import { Link } from 'react-router-dom';

export function PageHero({ eyebrow, title, description, primaryCta, secondaryCta, compact = false }) {
  const renderAction = (cta, className) => {
    if (!cta) {
      return null;
    }

    if (cta.href) {
      return (
        <a className={className} href={cta.href}>
          {cta.label}
        </a>
      );
    }

    return (
      <Link className={className} to={cta.to}>
        {cta.label}
      </Link>
    );
  };

  return (
    <section className={`hero ${compact ? 'hero--compact' : ''}`}>
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="hero__description">{description}</p>
          <div className="hero__actions">
            {renderAction(primaryCta, 'button button--solid')}
            {renderAction(secondaryCta, 'button button--ghost')}
          </div>
        </div>
        <div className="hero__panel">
          <div className="glass-card">
            <div className="glass-card__top">
              <span className="glass-card__pill">Live workspace</span>
              <span className="glass-card__status">Synced</span>
            </div>
            <div className="mock-stack">
              <div className="mock-card mock-card--accent">Prompt strategy</div>
              <div className="mock-card">Review notes</div>
              <div className="mock-card">Version history</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
