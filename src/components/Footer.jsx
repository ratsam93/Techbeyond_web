import React from 'react';
import { Link } from 'react-router-dom';
import { site } from '../data/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link className="brand brand--footer" to="/">
            <span className="brand__mark">T</span>
            <span className="brand__text">{site.name}</span>
          </Link>
          <p>
            A focused workspace for teams that want better prompts, cleaner collaboration, and fewer repeated drafts.
          </p>
        </div>
        {site.footerColumns.map((column) => (
          <div key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>Built as a React recreation with rewritten copy.</span>
      </div>
    </footer>
  );
}
