import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="hero hero--compact">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">404</p>
          <h1>That page does not exist.</h1>
          <p className="hero__description">Use the navigation to return to the built routes.</p>
          <div className="hero__actions">
            <Link className="button button--solid" to="/">
              Go home
            </Link>
            <Link className="button button--ghost" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
