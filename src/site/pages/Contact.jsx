import { Link, useSearchParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import BusinessPlanSection from "../components/BusinessPlanSection";
import SchedulerEmbed from "../components/SchedulerEmbed";
import SEOHead from "../components/SEOHead";
import { businessEndpoints } from "../data/endpoints.js";
import { contactCard } from "../data/techbeyondContent.js";
import { usePricingCatalog } from "../hooks/usePricingCatalog.js";

const getIntentLabel = (intent) => {
  if (intent === "business-plan") return "Business plan request";
  if (intent === "strategy-call") return "Strategy call";
  return "Project inquiry";
};

const getCalendlyUrl = (intent) => {
  if (intent === "business-plan") return businessEndpoints.booking.businessPlanUrl;
  return businessEndpoints.booking.strategyCallUrl;
};

const getSchedulerTitle = (intent) => {
  if (intent === "business-plan") return "Book a business-plan call";
  return "Book a strategy call";
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const { bookingSettings } = usePricingCatalog();
  const intent = searchParams.get("intent") || "project-inquiry";
  const calendlyUrl = intent === "business-plan" ? bookingSettings.businessPlanUrl : bookingSettings.strategyCallUrl;
  const selectedLabel = getIntentLabel(intent);

  return (
    <AppLayout>
      <SEOHead
        title="Contact"
        description="Share what Techbeyond Solution should help you improve across demand generation, websites, paid media, mobile apps, automation, or business planning."
        canonicalPath="/contact"
      />

      <section className="sj-page-hero">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">Contact</p>
            <h1 className="sj-section-title">Talk to Techbeyond Solution about the system you want to fix, build, or launch.</h1>
            <p className="sj-copy sj-section-copy">
              The contact route now stays simple: choose the right booking flow, share your project context, and use one email address for every public-facing inquiry.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="sj-shell">
          <AnimatedSection>
            <div className="tbx-page-frame">
              <div className="tbx-page-section">
                <div className="tbx-page-grid tbx-page-grid-hero">
                  <div className="tbx-service-hero">
                    <p className="tbx-page-kicker">Direct booking</p>
                    <h1>{getSchedulerTitle(intent)}</h1>
                    <p>
                      Current request type: {selectedLabel}. Use the direct booking embed below or move into pricing first if you want to choose a service before the call.
                    </p>
                    <div className="tbx-page-actions">
                      <Link to={businessEndpoints.contact.strategyCall} className="tbx-page-button">Strategy call</Link>
                      <Link to={businessEndpoints.contact.businessPlanRequest} className="tbx-page-button tbx-page-button-ghost">Business plan call</Link>
                      <Link to="/pricing" className="tbx-page-button tbx-page-button-ghost">View pricing</Link>
                    </div>
                  </div>

                  <div className="tbx-service-aside">
                    <div className="tbx-page-box">
                      <p className="tbx-page-kicker">Public email</p>
                      <ul>
                        <li><a href={`mailto:${businessEndpoints.emails.primary}`}>{businessEndpoints.emails.primary}</a></li>
                      </ul>
                    </div>
                    <div className="tbx-page-box">
                      <p className="tbx-page-kicker">What to include</p>
                      <ul>
                        <li>Your service requirement or launch goal.</li>
                        <li>The current bottleneck in demand, conversion, or delivery.</li>
                        <li>The fastest timeline you are working against.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tbx-page-section">
                <AnimatedSection delay={60}>
                  <div className="tbx-page-box">
                    <p className="tbx-page-kicker">Scheduler embed</p>
                    <SchedulerEmbed
                      title={getSchedulerTitle(intent)}
                      value={calendlyUrl || getCalendlyUrl(intent)}
                      className="sj-inline-calendar-frame"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section">
        <div className="sj-shell">
          <div className="sj-contact-grid">
            <AnimatedSection>
              <aside className="sj-contact-card sj-contact-panel">
                <div>
                  <p className="sj-card-kicker">{contactCard.title}</p>
                  <p className="sj-copy sj-copy-tight">{contactCard.subtitle}</p>
                </div>
                <Link to="/pricing" className="sj-button sj-button-light sj-button-block">
                  Open pricing catalog
                </Link>
              </aside>
            </AnimatedSection>

            <AnimatedSection delay={80}>
              <form className="sj-form-card" onSubmit={(event) => event.preventDefault()}>
                <div className="sj-form-grid">
                  <label>
                    <span>Full name</span>
                    <input type="text" placeholder="John Smith" />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" placeholder="info@techbeyondsolution.com" />
                  </label>
                  <label>
                    <span>Company name</span>
                    <input type="text" placeholder="Your company" />
                  </label>
                  <label>
                    <span>Budget</span>
                    <select defaultValue="Select budget range">
                      <option disabled>Select budget range</option>
                      <option>₹15K-₹30K</option>
                      <option>₹30K-₹75K</option>
                      <option>₹75K-₹1.5L</option>
                      <option>₹1.5L+</option>
                    </select>
                  </label>
                </div>

                <label className="sj-form-message">
                  <span>Message</span>
                  <textarea rows="7" placeholder="Tell us what you need help improving across demand, conversion, apps, websites, or automation." />
                </label>

                <label className="sj-form-message">
                  <span>Request type</span>
                  <select defaultValue={intent}>
                    <option value="project-inquiry">Project inquiry</option>
                    <option value="business-plan">Business plan request</option>
                    <option value="strategy-call">Strategy call</option>
                  </select>
                </label>

                <p className="sj-form-legal">
                  By submitting you agree to our <Link to="/terms">Terms</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.
                </p>

                <button type="submit" className="sj-button sj-button-light">
                  Submit inquiry
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="sj-shell">
          <BusinessPlanSection
            eyebrow="Business Plan Requests"
            title="Need Techbeyond Solution to shape the business plan first?"
            copy="Use this route if you need the GTM structure, rollout order, commercial framing, or execution roadmap before moving into the full build."
          />
        </div>
      </section>
    </AppLayout>
  );
};

export default Contact;
