import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import BusinessPlanSection from "../components/BusinessPlanSection";
import SEOHead from "../components/SEOHead";
import StatCounter from "../components/StatCounter";
import { aboutOverview, headlineMetrics, teamMembers } from "../data/techbeyondContent.js";

const About = () => (
  <AppLayout>
    <SEOHead title="About" description={aboutOverview.description} canonicalPath="/about" />

    <section className="sj-page-hero">
      <div className="sj-shell">
        <AnimatedSection>
          <p className="sj-kicker">{aboutOverview.eyebrow}</p>
          <h1 className="sj-section-title">{aboutOverview.title}</h1>
          <p className="sj-copy sj-section-copy">{aboutOverview.description}</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="sj-section">
      <div className="sj-shell">
        <div className="sj-about-grid">
          <AnimatedSection>
            <article className="sj-showcase-card">
              <img
                src="/assets/img/others/project-hero-img.webp"
                alt="Automation systems"
                className="sj-showcase-image"
              />
            </article>
          </AnimatedSection>

          <AnimatedSection delay={90}>
            <article className="sj-story-card">
          <p className="sj-kicker">OUR APPROACH</p>
              <h2 className="sj-section-title sj-section-title-sm">{aboutOverview.approachTitle}</h2>
              <p className="sj-copy sj-copy-tight">{aboutOverview.approachBody}</p>
              <ul className="sj-bullet-list">
                {aboutOverview.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="sj-section">
      <div className="sj-shell">
        <div className="sj-about-grid">
          <AnimatedSection>
            <article className="sj-story-card">
          <p className="sj-kicker">THE RESULTS</p>
              <h2 className="sj-section-title sj-section-title-sm">{aboutOverview.resultTitle}</h2>
              <p className="sj-copy sj-copy-tight">{aboutOverview.resultBody}</p>
              <div className="sj-inline-stats">
                {aboutOverview.resultStats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={90}>
            <div className="sj-principle-grid">
              {aboutOverview.principles.map((item) => (
                <article key={item.title} className="sj-principle-card">
                  <h3>{item.title}</h3>
                  <p className="sj-copy sj-copy-tight">{item.body}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
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
          <article className="sj-quote-panel">
            <p className="sj-quote-panel-copy">{aboutOverview.quote}</p>
            <div className="sj-testimonial-meta">
              <strong>{aboutOverview.quoteName}</strong>
              <span>{aboutOverview.quoteRole}</span>
            </div>
          </article>
        </AnimatedSection>
      </div>
    </section>

    <section className="sj-section">
      <div className="sj-shell">
        <AnimatedSection>
          <p className="sj-kicker">CORE DISCIPLINES</p>
          <h2 className="sj-section-title">How Techbeyond Solution is structured behind the work</h2>
          <p className="sj-copy sj-section-copy">
            Each discipline exists to keep strategy, production, optimization, and follow-up connected instead of split across disconnected vendors.
          </p>
        </AnimatedSection>

        <div className="sj-team-grid">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 50}>
              <article className="sj-team-card">
                <img src={member.image} alt={member.name} />
                <div className="sj-team-body">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="sj-section sj-section-tight">
      <div className="sj-shell">
        <BusinessPlanSection
          eyebrow="Planning Work"
          title="Some companies need the commercial plan before the build."
          copy="For founder teams and businesses still shaping the offer, GTM route, or execution order, we can start with a dedicated business-plan scope before moving into delivery."
        />
      </div>
    </section>
  </AppLayout>
);

export default About;
