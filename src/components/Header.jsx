import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { site } from '../data/site';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="brand" to="/">
          <span className="brand__mark">T</span>
          <span className="brand__text">{site.name}</span>
        </Link>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
          Menu
        </button>
        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link className="button button--solid header__cta" to="/contact">
          Book a demo
        </Link>
      </div>
    </header>
  );
}
