import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import BusinessPlanSection from "../components/BusinessPlanSection";
import FaqAccordion from "../components/FaqAccordion";
import SchedulerEmbed from "../components/SchedulerEmbed";
import SEOHead from "../components/SEOHead";
import StatCounter from "../components/StatCounter";
import { usePricingCatalog } from "../hooks/usePricingCatalog.js";
import {
  blogPosts,
  comparisonRows,
  contactCard,
  faqs,
  headlineMetrics,
  heroServices,
  hiddenCosts,
  processSteps,
  projects,
  services,
  siteBrand,
  testimonials,
  trustedLogos,
} from "../data/techbeyondContent.js";

const Home = () => {
  const [billing, setBilling] = useState("monthly");
  const [showStrategyCalendar, setShowStrategyCalendar] = useState(false);
  const strategyCalendarRef = useRef(null);
  const { homepagePlans, bookingSettings } = usePricingCatalog();
  const signatureLines = ["TECHBEYOND", "SOLUTIONS"];
  const plans = useMemo(
    () =>
      homepagePlans
        .filter((plan) => plan.enabled !== false)
        .map((plan) => ({
        ...plan,
        price: billing === "yearly" ? plan.yearly : plan.monthly,
        })),
    [billing, homepagePlans],
  );
  const marqueeLogos = [...trustedLogos, ...trustedLogos];

  useEffect(() => {
    if (showStrategyCalendar) {
      strategyCalendarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showStrategyCalendar]);

  return (
    <AppLayout>
      <SEOHead
        title="Techbeyond Solution | Build, market, and scale with one growth system"
        description={siteBrand.description}
        canonicalPath="/"
      />

      <section className="sj-hero">
        <div className="sj-shell">
          <div className="sj-hero-grid">
            <div>
              <AnimatedSection>
                <div className="sj-hero-services">
                  {heroServices.map((item) => (
                    <span key={item}>/ {item}</span>
                  ))}
                </div>
                <p className="sj-kicker">FULL-STACK DIGITAL GROWTH PARTNER</p>
                <h1 className="sj-hero-title">{siteBrand.tagline}</h1>
                <p className="sj-copy sj-hero-copy">{siteBrand.description}</p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={120}>
              <div className="sj-contact-card">
                <div>
                  <p className="sj-card-kicker">{contactCard.title}</p>
                  <p className="sj-copy sj-copy-tight">{contactCard.subtitle}</p>
                </div>
                <button
                  type="button"
                  className="sj-button sj-button-light sj-button-block"
                  onClick={() => setShowStrategyCalendar((current) => !current)}
                >
                  {showStrategyCalendar ? "Hide calendar" : contactCard.cta}
                </button>
                <Link to="/pricing" className="sj-button sj-button-outline sj-button-block">
                  View pricing first
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {showStrategyCalendar ? (
            <AnimatedSection delay={180}>
              <div ref={strategyCalendarRef} className="sj-inline-calendar">
                <div className="sj-inline-calendar-head">
                  <div>
                    <p className="sj-kicker">Strategy Call Calendar</p>
                    <h2 className="sj-section-title sj-section-title-sm">Book directly from the homepage.</h2>
                  </div>
                  <button
                    type="button"
                    className="sj-button sj-button-outline"
                    onClick={() => setShowStrategyCalendar(false)}
                  >
                    Close
                  </button>
                </div>

                {bookingSettings.strategyCallUrl ? (
                  <SchedulerEmbed
                    title="Book a strategy call"
                    value={bookingSettings.strategyCallUrl}
                    className="sj-inline-calendar-frame"
                  />
                ) : (
                  <div className="sj-inline-calendar-empty">
                    <p className="sj-copy">No strategy calendar URL is configured yet.</p>
                    <Link to="/admin/pricing" className="sj-button sj-button-light">
                      Open admin pricing
                    </Link>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ) : null}

          <AnimatedSection delay={220}>
            <div className="sj-logo-strip">
              <p className="sj-kicker">CORE CHANNELS INSIDE THE TECHBEYOND SOLUTION SYSTEM</p>
              <div className="sj-logo-marquee">
                <div className="sj-logo-track">
                  {marqueeLogos.map((logo, index) => (
                    <Link className="sj-logo-item" key={`${logo.label}-${index}`} to={logo.href}>
                      <img src={logo.image} alt={`${logo.label} capability`} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell">
          <AnimatedSection>
            <div className="sj-visual-band">
              <img
                src="https://framerusercontent.com/images/KmimP8fJf3KTg25QrfWgNhSOI.jpeg?width=2752&height=1536"
                alt="Atmospheric abstract landscape"
                className="sj-visual-image"
              />
              <div className="sj-visual-overlay">
                <div>
                  <p className="sj-kicker">The hidden cost of disconnected growth</p>
                  <h2 className="sj-section-title">Fix the handoffs before they become expensive.</h2>
                </div>
                <div className="sj-chip-cloud">
                  {hiddenCosts.map((item) => (
                    <span key={item} className="sj-float-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">OUR WORKS</p>
            <h2 className="sj-section-title">Case studies from growth and systems rebuilds.</h2>
            <p className="sj-copy sj-section-copy">
              Selected Techbeyond Solution work across websites, demand generation, CRM automation, and conversion architecture.
            </p>
          </AnimatedSection>

          <div className="sj-project-grid">
            {projects.slice(0, 6).map((project, index) => (
              <AnimatedSection key={project.slug} delay={index * 70}>
                <article className="sj-project-card">
                  <img src={project.image} alt={project.imageAlt} className="sj-project-image" />
                  <div className="sj-project-body">
                    <div className="sj-meta-row">
                      <span>{project.industry}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="sj-copy sj-copy-tight">{project.summary}</p>
                    <Link to={`/projects/${project.slug}`} className="sj-inline-link">
                      View Case Study
                    </Link>
                    <div className="sj-project-stats">
                      {project.stats.map((stat) => (
                        <div key={`${project.slug}-${stat.label}`}>
                          <strong>{stat.value}</strong>
                          <span>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={240}>
            <div className="sj-section-cta-row">
              <Link to="/projects" className="sj-button sj-button-outline">
                See All Case Studies
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">HOW IT WORKS</p>
            <h2 className="sj-section-title">A simple, structured approach to growth execution</h2>
            <p className="sj-copy sj-section-copy">
              We design the system first, then execute the pieces inside it so website, channels, and follow-up stop working against each other.
            </p>
          </AnimatedSection>

          <div className="sj-step-grid">
            {processSteps.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 80}>
                <div className="sj-step-card">
                  <div className="sj-step-icon">{index + 1}</div>
                  <h3>{item.step}</h3>
                  <p className="sj-copy sj-copy-tight">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">INTEGRATION</p>
            <h2 className="sj-section-title">Connected channels, not disconnected vendors</h2>
            <p className="sj-copy sj-section-copy">
              Your website, LinkedIn, search visibility, paid media, CRM, and reporting should reinforce the same commercial story. That is the layer we build.
            </p>
          </AnimatedSection>

            <div className="sj-logo-wall">
              {trustedLogos.map((logo) => (
                <Link key={logo.label} to={logo.href} className="sj-logo-wall-item">
                  <img src={logo.image} alt={`${logo.label} capability`} />
                </Link>
              ))}
            </div>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">SERVICES</p>
            <h2 className="sj-section-title">Services that move demand, conversion, and delivery together</h2>
            <p className="sj-copy sj-section-copy">
              Techbeyond Solution covers the front of the funnel and the systems behind it so growth does not break after the first lead arrives.
            </p>
          </AnimatedSection>

          <div className="sj-service-grid">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 70}>
                <article className="sj-service-card">
                  <div className="sj-service-copy">
                    <p className="sj-card-kicker">{service.number}</p>
                    <h3>{service.title}</h3>
                    <p className="sj-copy sj-copy-tight">{service.description}</p>
                    <ul className="sj-bullet-list">
                      {service.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                  <img src={service.image} alt={service.title} className="sj-service-image" />
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="sj-shell">
          <BusinessPlanSection
            title="Need the business plan before the execution layer?"
            copy="If you are still defining the market angle, offer structure, or 90-day rollout, we can start with a business-plan engagement before implementing the growth system."
          />
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">WHY US</p>
            <h2 className="sj-section-title">Why teams choose Techbeyond Solution over fragmented execution</h2>
            <p className="sj-copy sj-section-copy">
              Most vendors optimize one narrow channel. Techbeyond Solution aligns positioning, traffic, pages, follow-up, and reporting in one coordinated model.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="sj-comparison">
              <div className="sj-comparison-head">
                <span />
                <span>{siteBrand.name}</span>
                <span>Other Agencies</span>
                <span>Hire In House</span>
              </div>
              {comparisonRows.map((row) => (
                <div className="sj-comparison-row" key={row.label}>
                  <span>{row.label}</span>
                  <span>{row.us}</span>
                  <span>{row.agency}</span>
                  <span>{row.hire}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">TESTIMONIALS</p>
            <h2 className="sj-section-title">What changed after the system was rebuilt</h2>
          </AnimatedSection>

          <div className="sj-testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 70}>
                <article className="sj-testimonial-card">
                  <div className="sj-testimonial-top">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <p className="sj-quote">{testimonial.quote}</p>
                  <div className="sj-testimonial-meta">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="sj-shell">
          <div className="sj-metric-grid">
            {headlineMetrics.map((metric, index) => (
              <AnimatedSection key={metric.label} delay={index * 60}>
                <StatCounter end={metric.value} suffix={metric.suffix} label={metric.label} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">PRICING</p>
            <h2 className="sj-section-title">Engagement models for different stages of growth</h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="sj-pricing-toggle">
              <button
                type="button"
                className={billing === "monthly" ? "is-active" : ""}
                onClick={() => setBilling("monthly")}
              >
                Monthly
              </button>
              <button
                type="button"
                className={billing === "yearly" ? "is-active" : ""}
                onClick={() => setBilling("yearly")}
              >
                Yearly
              </button>
              <span>-20%</span>
            </div>
          </AnimatedSection>

          <div className="sj-pricing-grid">
            {plans.map((plan, index) => (
              <AnimatedSection key={plan.name} delay={index * 70}>
                <article className={`sj-plan-card${plan.highlighted ? " is-highlighted" : ""}`}>
                  <div className="sj-plan-head">
                    <div>
                      <p className="sj-plan-name">{plan.name}</p>
                      {plan.badge ? <span className="sj-plan-badge">{plan.badge}</span> : null}
                    </div>
                    <p className="sj-copy sj-copy-tight">{plan.tagline}</p>
                  </div>
                  <div className="sj-plan-price">
                    <strong>${plan.price}</strong>
                    <span>/mo</span>
                  </div>
                  <Link to="/contact" className={`sj-button ${plan.highlighted ? "sj-button-light" : "sj-button-outline"} sj-button-block`}>
                    {plan.cta}
                  </Link>
                  <ul className="sj-bullet-list sj-plan-list">
                    {plan.features.map((feature) => (
                      <li key={`${plan.name}-${feature}`}>{feature}</li>
                    ))}
                  </ul>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">BLOG</p>
            <h2 className="sj-section-title">Research, playbooks, and execution notes</h2>
          </AnimatedSection>

          <div className="sj-blog-grid">
            {blogPosts.slice(0, 3).map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 70}>
                <article className="sj-blog-card">
                  <img src={post.image} alt={post.title} className="sj-blog-image" />
                  <div className="sj-blog-body">
                    <div className="sj-meta-row">
                      <span>{post.category}</span>
                      <span>{post.primaryKeyword}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p className="sj-copy sj-copy-tight">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="sj-inline-link">
                      Read More
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={220}>
            <div className="sj-section-cta-row">
              <Link to="/blog" className="sj-button sj-button-outline">
                See More
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell">
          <div className="sj-faq-grid">
            <AnimatedSection>
              <div className="sj-faq-aside">
                <p className="sj-kicker">FAQ</p>
                <h2 className="sj-section-title">Questions teams ask before they scale</h2>
                <div className="sj-contact-card sj-contact-card-inline">
                  <div>
                    <p className="sj-card-kicker">{contactCard.title}</p>
                    <p className="sj-copy sj-copy-tight">{contactCard.subtitle}</p>
                  </div>
                  {contactCard.href.startsWith("/") ? (
                    <Link to={contactCard.href} className="sj-button sj-button-light sj-button-block">
                      {contactCard.cta}
                    </Link>
                  ) : (
                    <a href={contactCard.href} className="sj-button sj-button-light sj-button-block" target="_blank" rel="noreferrer">
                      {contactCard.cta}
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={80}>
              <div className="sj-faq-list">
                <FaqAccordion items={faqs} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="sj-home-signature-wrap">
        <div className="sj-shell">
          <AnimatedSection>
            <div className="sj-home-signature">
              <p className="sj-home-signature-kicker">Techbeyond Solution</p>
              <div className="sj-home-signature-aura" />
              <div className="sj-home-signature-glow" />
              <div className="sj-home-signature-lines" aria-label="TECHBEYOND SOLUTION" role="img">
                {signatureLines.map((line, lineIndex) => (
                  <div key={line} className="sj-home-signature-line">
                    {line.split("").map((character, characterIndex) => (
                      <span
                        key={`${line}-${characterIndex}`}
                        className="sj-home-signature-char"
                        style={{ "--char-index": lineIndex * 12 + characterIndex }}
                      >
                        {character}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </AppLayout>
  );
};

export default Home;
