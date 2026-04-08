import { Link, useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import BusinessPlanSection from "../components/BusinessPlanSection";
import FaqAccordion from "../components/FaqAccordion";
import SEOHead from "../components/SEOHead";
import { blogPosts, projects } from "../data/techbeyondContent.js";
import { getEnrichedContent } from "../data/enrichedContent.js";
import { faqClusters, getServiceCategoryBySlug, getServicePageBySlug, servicePages } from "../data/content.js";
import { buildBreadcrumbSchema, buildSchemaPayload, buildServiceSchema } from "../seo/index.js";
import { usePricingCatalog } from "../hooks/usePricingCatalog.js";

const describeFeature = (feature = "", pageTitle = "", categoryTitle = "") => {
  const lower = feature.toLowerCase();

  if (lower.includes("architecture")) {
    return `Plan the delivery structure, technical approach, and scope boundaries for ${pageTitle || "the service"} before implementation starts.`;
  }
  if (lower.includes("ui") || lower.includes("ux") || lower.includes("design")) {
    return `Translate the workflow into usable screens, layouts, and interaction choices that support the actual commercial or operational goal.`;
  }
  if (lower.includes("offline")) {
    return "Handle state, sync, and fallback behavior so the product still works reliably when connectivity or environment conditions are weak.";
  }
  if (lower.includes("notification")) {
    return "Configure trigger logic, timing, and delivery behavior so alerts, reminders, or status messages support the user journey instead of interrupting it.";
  }
  if (lower.includes("analytics") || lower.includes("tracking")) {
    return "Instrument the key events, conversions, and usage signals needed to understand what users do after launch.";
  }
  if (lower.includes("seo") || lower.includes("schema")) {
    return "Implement the structural search work required for crawlability, metadata quality, answer visibility, and search presentation.";
  }
  if (lower.includes("content")) {
    return "Produce and structure the content needed for the page, platform, or channel so the message is clear and commercially usable.";
  }
  if (lower.includes("copy")) {
    return "Write or refine the commercial copy so visitors understand the offer, trust the proof, and know what action to take next.";
  }
  if (lower.includes("crm")) {
    return "Connect captured data, lead stages, and response workflows into the CRM so the team can follow through properly.";
  }
  if (lower.includes("automation") || lower.includes("workflow")) {
    return "Build the task logic, triggers, and handoffs needed to reduce repetitive manual work in delivery or operations.";
  }
  if (lower.includes("integration") || lower.includes("api")) {
    return "Connect the service to the relevant backend, data source, or third-party system so the feature works inside the real stack.";
  }
  if (lower.includes("testing") || lower.includes("qa")) {
    return "Check critical journeys, edge cases, and release quality before launch so issues are found before users hit them.";
  }
  if (lower.includes("launch") || lower.includes("deployment") || lower.includes("submission")) {
    return "Prepare the release process, required assets, and final checks so the work can go live cleanly and be monitored after launch.";
  }
  if (lower.includes("performance") || lower.includes("speed")) {
    return "Reduce bottlenecks in load time, runtime behavior, or page responsiveness so the experience performs properly on real devices.";
  }
  if (lower.includes("security") || lower.includes("auth")) {
    return "Set access, protection, and handling rules needed to keep the implementation safe and production-ready.";
  }
  if (lower.includes("dashboard") || lower.includes("reporting")) {
    return "Create visibility for operators or decision-makers so the work can be measured and acted on after rollout.";
  }
  if (lower.includes("store") || lower.includes("app store") || lower.includes("play store")) {
    return "Prepare listing, compliance, and release material needed to publish and support the app on the correct store.";
  }
  if (lower.includes("brand")) {
    return "Apply the visual and verbal identity consistently so the output looks intentional across pages, assets, and campaigns.";
  }

  return `Execute ${feature.toLowerCase()} as a real delivery task inside ${categoryTitle || "the service scope"}, with setup, implementation, and launch-readiness covered by the team.`;
};

const ServiceChild = () => {
  const { parentSlug = "", childSlug = "" } = useParams();
  const page = getServicePageBySlug(childSlug) || getServicePageBySlug("technical-seo");
  const parent = getServiceCategoryBySlug(parentSlug || page?.parentSlug || "") || getServiceCategoryBySlug("seo-geo-aeo");
  const enriched = getEnrichedContent(childSlug || "") || {};
  const siblings = servicePages.filter((item) => item.parentSlug === parent?.slug && item.slug !== page?.slug);
  const faq = faqClusters.find((item) => item.categorySlug === parent?.slug);
  const { catalogMap } = usePricingCatalog();
  const pricingItem = catalogMap.get(page?.slug || "");
  const relatedProjects = projects.slice(0, 3);
  const relatedInsights = blogPosts
    .filter((item) => item.relatedServiceSlugs?.includes(page?.slug) || item.relatedServiceSlugs?.includes(parent?.slug))
    .slice(0, 3);

  const heroDesc = enriched.heroDesc || page?.summary || "Service detail";
  const problems = enriched.problems || page?.problems || [];
  const deliverables = enriched.deliverables || page?.deliverables || [];
  const outcomes = enriched.outcomes || page?.outcomes || [];
  const idealFor = enriched.idealFor || page?.idealFor || [];
  const demoModules = enriched.demoModules || page?.demoModules || [];
  const features = enriched.features || [];
  const useCases = enriched.useCases || [];
  const featureRows = features.map((feature) => ({
    title: feature,
    detail: describeFeature(feature, page?.title || "", parent?.title || ""),
  }));
  const canonicalPath = `/services/${parent?.slug || "services"}/${page?.slug || "service"}`;

  const schema = buildSchemaPayload(
    buildBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Services", item: "/services" },
      { name: parent?.title || "Category", item: `/services/${parent?.slug || ""}` },
      { name: page?.title || "Service", item: canonicalPath },
    ]),
    buildServiceSchema({
      name: page?.title || "Service",
      description: heroDesc,
      url: canonicalPath,
    }),
  );

  return (
    <AppLayout>
      <SEOHead
        title={`Techbeyond Solution | ${page?.title || "Service"}`}
        description={heroDesc}
        canonicalPath={canonicalPath}
        schema={schema}
      />

      <div className="tbx-concept-page">
        <section className="tbx-page-hero">
          <div className="tbx-concepts-shell">
            <AnimatedSection>
              <p className="sj-kicker">{parent?.title}</p>
              <h1 className="sj-section-title" style={{ maxWidth: 980 }}>{page?.title}</h1>
              <p className="sj-copy sj-section-copy" style={{ maxWidth: 760 }}>{heroDesc}</p>
            </AnimatedSection>
          </div>
        </section>

        <section className="sj-section sj-section-tight">
          <div className="tbx-concepts-shell">
            <div className="tbx-page-frame">
              <div className="tbx-page-section">
                <div className="tbx-page-grid tbx-page-grid-hero">
                  <AnimatedSection>
                    <div className="tbx-service-hero">
                      <p className="tbx-page-kicker">Service Detail</p>
                      <h1>{page?.title}</h1>
                      <p>
                        This page explains what the team actually works on in {page?.title || "this service"}: the problems it solves, what gets delivered, and where it is usually used.
                      </p>
                      <div className="tbx-page-actions">
                        <Link
                          to={pricingItem?.pricingMode === "instant" ? `/pricing#service-${page?.slug}` : `/contact?intent=project-inquiry&service=${page?.slug}`}
                          className="tbx-page-button"
                        >
                          {pricingItem?.pricingMode === "instant" ? "Buy now" : "Get quote"}
                        </Link>
                        <Link to={`/pricing#service-${page?.slug}`} className="tbx-page-button tbx-page-button-ghost">View pricing</Link>
                        <Link to={`/services/${parent?.slug || ""}`} className="tbx-page-button tbx-page-button-ghost">Back to category</Link>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={80}>
                    <div className="tbx-service-aside">
                      <div className="tbx-page-box">
                        <p className="tbx-page-kicker">Ideal For</p>
                        <ul>
                          {idealFor.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                      <div className="tbx-page-box">
                        <p className="tbx-page-kicker">Typical Work Areas</p>
                        <ul>
                          {demoModules.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                      {pricingItem ? (
                        <div className="tbx-page-box">
                          <p className="tbx-page-kicker">Pricing path</p>
                          <ul>
                            <li>{pricingItem.pricingMode === "instant" ? "Instant checkout available" : "Quote-first service"}</li>
                            <li><Link to={`/pricing#service-${page?.slug}`}>Open this service in pricing</Link></li>
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </AnimatedSection>
                </div>
              </div>

              <div className="tbx-page-section">
                <AnimatedSection>
                  <div className="tbx-service-band" />
                </AnimatedSection>
              </div>

              <div className="tbx-page-section">
                <div className="tbx-page-grid tbx-page-grid-2">
                  <AnimatedSection>
                    <div className="tbx-page-box">
                      <h2>Problems this fixes</h2>
                      <ul>
                        {problems.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={70}>
                    <div className="tbx-page-box">
                      <h2>What you receive</h2>
                      <ul>
                        {deliverables.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>
              </div>

              {featureRows.length > 0 ? (
                <div className="tbx-page-section">
                  <AnimatedSection>
                    <div className="tbx-page-table">
                      <h2>What the team actually executes</h2>
                      {featureRows.map((feature, index) => (
                        <div key={feature.title} className="tbx-page-table-row">
                          <strong>{String(index + 1).padStart(2, "0")}</strong>
                          <span>{feature.title}</span>
                          <span>{feature.detail}</span>
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>
              ) : null}

              <div className="tbx-page-section">
                <div className="tbx-page-grid tbx-page-grid-2">
                  <AnimatedSection>
                    <div className="tbx-page-box">
                      <h2>Expected outcomes</h2>
                      <ul>
                        {outcomes.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  </AnimatedSection>
                  {useCases.length > 0 ? (
                    <AnimatedSection delay={70}>
                      <div className="tbx-page-box">
                        <h2>Common use cases</h2>
                        <ul>
                          {useCases.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                    </AnimatedSection>
                  ) : null}
                </div>
              </div>

              {(relatedProjects.length > 0 || relatedInsights.length > 0) ? (
                <div className="tbx-page-section">
                  <div className="tbx-page-grid tbx-page-grid-2">
                    {relatedProjects.length > 0 ? (
                      <AnimatedSection>
                        <div className="tbx-page-box">
                          <h2>Relevant proof</h2>
                          <ul>
                            {relatedProjects.map((item) => (
                              <li key={item.slug}>
                                <Link to={`/projects/${item.slug}`}>{item.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </AnimatedSection>
                    ) : null}
                    {relatedInsights.length > 0 ? (
                      <AnimatedSection delay={70}>
                        <div className="tbx-page-box">
                          <h2>Related insights</h2>
                          <ul>
                            {relatedInsights.map((item) => (
                              <li key={item.slug}>
                                <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </AnimatedSection>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {faq ? (
          <section className="sj-section">
            <div className="tbx-concepts-shell">
              <div className="tbx-page-frame">
                <div className="tbx-page-section">
                  <AnimatedSection>
                    <p className="sj-kicker">FAQs</p>
                    <h2 className="h3 text-white mb-4">Common questions about {page?.title}</h2>
                    <FaqAccordion items={faq.items} />
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {siblings.length > 0 ? (
          <section className="sj-section sj-section-tight">
            <div className="tbx-concepts-shell">
              <div className="tbx-page-frame">
                <div className="tbx-page-section">
                  <AnimatedSection>
                    <p className="sj-kicker">Related Modules</p>
                    <div className="tbx-page-footer-nav">
                      {siblings.slice(0, 8).map((item) => (
                        <Link key={item.slug} to={`/services/${parent?.slug}/${item.slug}`} className="tbx-page-button tbx-page-button-ghost">
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="sj-section sj-section-tight">
          <div className="tbx-concepts-shell">
            <BusinessPlanSection
              title={`Need the business plan before ${page?.title?.toLowerCase() || "this service"}?`}
              copy={`If you are not yet ready to execute ${page?.title || "this service"} and need the commercial model, funnel priorities, or rollout order first, we can turn that into a separate business-plan engagement.`}
            />
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default ServiceChild;
