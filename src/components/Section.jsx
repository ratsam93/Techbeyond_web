import React from 'react';

export function Section({ eyebrow, title, description, children, className = '', id }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container">
        <div className="section__heading">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {title ? <h2>{title}</h2> : null}
          {description ? <p className="section__description">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
