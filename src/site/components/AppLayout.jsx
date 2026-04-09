import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { contactCard, navigation, siteBrand } from "../data/techbeyondContent.js";
import { businessEndpoints } from "../data/endpoints.js";

const footerGroups = [
  {
    title: "Navigation",
    links: navigation,
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

const whatsappLink = "https://api.whatsapp.com/send/?phone=918877214277&text=Hello&type=phone_number&app_absent=0";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const content = children ?? <Outlet />;
  const isInternalContact = contactCard.href.startsWith("/");

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const contactButton = isInternalContact ? (
    <Link to={contactCard.href} className="sj-button sj-button-light">
      {contactCard.cta}
    </Link>
  ) : (
    <a href={contactCard.href} className="sj-button sj-button-light" rel="noreferrer" target="_blank">
      {contactCard.cta}
    </a>
  );

  const mobileContactButton = isInternalContact ? (
    <Link to={contactCard.href} className="sj-button sj-button-light sj-button-block">
      {contactCard.cta}
    </Link>
  ) : (
    <a href={contactCard.href} className="sj-button sj-button-light sj-button-block" rel="noreferrer" target="_blank">
      {contactCard.cta}
    </a>
  );

  return (
    <div className="sj-page">
      <header className={`sj-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="sj-shell">
          <div className="sj-header-bar">
            <Link to="/" className="sj-brand" aria-label={siteBrand.name}>
              <img src={siteBrand.wordmark} alt={siteBrand.name} />
            </Link>

            <nav className="sj-nav sj-desktop-only">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) => `sj-nav-link${isActive ? " is-active" : ""}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="sj-desktop-only">{contactButton}</div>

            <button
              type="button"
              className="sj-menu-button sj-mobile-only"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`sj-mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="sj-mobile-panel">
          <div className="sj-mobile-top">
            <img src={siteBrand.wordmark} alt={siteBrand.name} />
            <button type="button" className="sj-mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <i className="bi bi-x-lg" />
            </button>
          </div>

          <div className="sj-mobile-links">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className="sj-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {mobileContactButton}
        </div>
      </div>

      <main className="sj-main">{content}</main>

      <footer className="sj-footer">
        <div className="sj-shell">
          <section className="sj-footer-cta">
            <div>
              <p className="sj-kicker">LET&apos;S GET STARTED</p>
              <h2 className="sj-section-title">Ready to build a cleaner growth system?</h2>
              <p className="sj-copy">
                Tell us where demand, conversion, or follow-up is breaking. We&apos;ll show you how Techbeyond Solution would restructure it.
              </p>
            </div>
            <Link to="/pricing" className="sj-button sj-button-light">
              View pricing
            </Link>
          </section>

          <section className="sj-footer-main">
            <div className="sj-footer-brand">
              <img src={siteBrand.wordmark} alt={siteBrand.name} className="sj-footer-wordmark" />
              <h3 className="sj-footer-tagline">{siteBrand.tagline}</h3>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="sj-footer-heading">{group.title}</p>
                <div className="sj-footer-links">
                  {group.links.map((item) => (
                    <Link key={`${group.title}-${item.href}`} to={item.href} className="sj-footer-link">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <p className="sj-footer-heading">contact</p>
              <div className="sj-footer-meta">
                <span>email</span>
                <a href={`mailto:${businessEndpoints.emails.primary}`}>{businessEndpoints.emails.primary}</a>
              </div>
              <div className="sj-footer-meta">
                <span>location</span>
                <p>Sector 2 Noida 201301, Uttar Pradesh, India</p>
              </div>
              <div className="sj-newsletter">
                <p className="sj-footer-heading">need a faster route?</p>
                <Link to="/pricing" className="sj-button sj-button-light sj-button-block">
                  Choose a service
                </Link>
              </div>
            </div>
          </section>

          <div className="sj-footer-bottom">
            <span>{"\u00A9"} 2026 {siteBrand.name}. All rights reserved.</span>
            <span>Growth architecture, delivery, and optimization.</span>
          </div>
        </div>
      </footer>
      <a
        href={whatsappLink}
        className="sj-whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat with Techbeyond Solution"
      >
        <i className="bi bi-whatsapp" />
      </a>
    </div>
  );
};

export default AppLayout;
