import { Link, useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import BusinessPlanSection from "../components/BusinessPlanSection";
import FaqAccordion from "../components/FaqAccordion";
import SEOHead from "../components/SEOHead";
import {
  caseStudies,
  faqClusters,
  getServiceCategoryBySlug,
  getServicePageBySlug,
  insightPosts,
  industries,
} from "../data/content.js";
import { buildBreadcrumbSchema, buildSchemaPayload, buildServiceSchema } from "../seo/index.js";

const metricMap = {
  "linkedin-services": [
    { value: "4x", label: "more profile-to-call momentum" },
    { value: "37%", label: "stronger reply quality" },
    { value: "14d", label: "to deploy the first system layer" },
  ],
  "web-development": [
    { value: "2.6x", label: "better lead capture potential" },
    { value: "41%", label: "faster page flow" },
    { value: "21d", label: "to launch core experience" },
  ],
  "software-development": [
    { value: "3.2x", label: "more execution visibility" },
    { value: "48%", label: "lower manual process drag" },
    { value: "6w", label: "to stable first rollout" },
  ],
  ecommerce: [
    { value: "29%", label: "higher checkout confidence" },
    { value: "2.1x", label: "clearer merchandising" },
    { value: "18d", label: "to first optimization sprint" },
  ],
  "seo-geo-aeo": [
    { value: "214%", label: "traffic growth benchmark" },
    { value: "3.8x", label: "qualified search lift" },
    { value: "19d", label: "to launch core SEO system" },
  ],
  "paid-ads": [
    { value: "31%", label: "lower waste potential" },
    { value: "2.9x", label: "better lead-handshake flow" },
    { value: "12d", label: "to campaign alignment" },
  ],
  "social-media": [
    { value: "3x", label: "more narrative consistency" },
    { value: "26%", label: "higher content response" },
    { value: "10d", label: "to content engine setup" },
  ],
  branding: [
    { value: "2.4x", label: "clearer category recall" },
    { value: "18%", label: "higher landing-page trust" },
    { value: "16d", label: "to visual system rollout" },
  ],
  "video-production": [
    { value: "5x", label: "more content reuse potential" },
    { value: "22%", label: "better ad creative velocity" },
    { value: "7d", label: "to first cut delivery" },
  ],
  "mobile-apps": [
    { value: "2.7x", label: "clearer feature delivery" },
    { value: "34%", label: "better journey retention" },
    { value: "8w", label: "to MVP-grade release" },
  ],
  "crm-automation": [
    { value: "42%", label: "faster lead response" },
    { value: "85%", label: "less manual follow-up" },
    { value: "11d", label: "to first automation layer" },
  ],
  "support-ops": [
    { value: "38%", label: "faster issue routing" },
    { value: "2.1x", label: "better operational clarity" },
    { value: "9d", label: "to support system cleanup" },
  ],
};

const ServiceCategory = () => {
  const { slug = "" } = useParams();
  const category = getServiceCategoryBySlug(slug) || getServiceCategoryBySlug("seo-geo-aeo");
  const childPages = (category?.childSlugs || [])
    .map((item) => getServicePageBySlug(item))
    .filter(Boolean);
  const relatedCaseStudies = caseStudies.filter((item) => category?.relatedCaseStudySlugs?.includes(item.slug));
  const relatedInsights = insightPosts.filter((item) => category?.relatedInsightSlugs?.includes(item.slug));
  const relatedIndustries = industries.filter((item) => category?.relatedIndustrySlugs?.includes(item.slug));
  const faq = faqClusters.find((item) => item.categorySlug === category?.slug);
  const metrics = metricMap[category?.slug] || metricMap["seo-geo-aeo"];
  const executionAreas = category?.executionAreas || [];
  const canonicalPath = `/services/${category?.slug || "seo-geo-aeo"}`;

  const schema = buildSchemaPayload(
    buildBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Services", item: "/services" },
      { name: category?.title || "Service Category", item: canonicalPath },
    ]),
    buildServiceSchema({
      name: category?.title || "Service Category",
      description: category?.summary || "Techbeyond services",
      url: canonicalPath,
    }),
  );

  return (
    <AppLayout>
      <SEOHead
        title={`Techbeyond Solution | ${category?.title || "Service Category"}`}
        description={category?.summary || "Techbeyond services"}
        canonicalPath={canonicalPath}
        schema={schema}
      />

      <div className="tbx-concept-page">
        <section className="tbx-page-hero">
          <div className="tbx-concepts-shell">
            <AnimatedSection>
              <p className="sj-kicker">Service Category</p>
              <h1 className="sj-section-title" style={{ maxWidth: 980 }}>{category?.title}</h1>
              <p className="sj-copy sj-section-copy" style={{ maxWidth: 760 }}>
                {category?.summary}
              </p>
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
                      <p className="tbx-page-kicker">
                        {category?.isFlagship ? "Flagship Service" : "Execution Category"}
                      </p>
                      <h1>{category?.title}</h1>
                      <p>
                        This category shows the exact work areas inside {category?.title || "this service"} so buyers can see what gets planned, built, optimized, or supported in delivery.
                      </p>
                      <div className="tbx-page-actions">
                        <Link to="/pricing" className="tbx-page-button">View pricing</Link>
                        <Link to="/projects" className="tbx-page-button tbx-page-button-ghost">See related proof</Link>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={80}>
                    <div className="tbx-service-aside">
                      <div className="tbx-page-box">
                        <p className="tbx-page-kicker">What This Covers</p>
                        <ul>
                          <li>{childPages.length} clearly mapped execution tracks.</li>
                          <li>Each track leads to a dedicated page with scope and deliverables.</li>
                          <li>The focus is on what gets done, not broad planning language.</li>
                          <li><Link to="/pricing">Pricing now lives on its own route.</Link></li>
                        </ul>
                      </div>
                      <div className="tbx-page-box">
                        <p className="tbx-page-kicker">Signal Snapshot</p>
                        <div className="tbx-case-metrics">
                          {metrics.map((metric) => (
                            <div key={metric.label} className="tbx-case-metric">
                              <strong>{metric.value}</strong>
                              <span>{metric.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
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
                <AnimatedSection>
                  <div className="tbx-page-table">
                    <h2>All execution tracks in this category</h2>
                    {childPages.map((page) => (
                      <div key={page.slug} className="tbx-page-table-row">
                        <strong>{page.title}</strong>
                        <span>{page.summary}</span>
                        <Link to={`/services/${category.slug}/${page.slug}`}>Open page</Link>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              {executionAreas.length > 0 ? (
                <div className="tbx-page-section">
                  <AnimatedSection>
                    <div className="tbx-page-table">
                      <h2>What the team actually executes</h2>
                      {executionAreas.map((item, index) => (
                        <div key={item.title} className="tbx-page-table-row">
                          <strong>{String(index + 1).padStart(2, "0")}</strong>
                          <span>{item.title}</span>
                          <span>{item.detail}</span>
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>
              ) : null}

              <div className="tbx-page-section">
                <div className="tbx-page-grid tbx-page-grid-3">
                  <AnimatedSection>
                    <div className="tbx-page-box">
                      <h2>Relevant case studies</h2>
                        <ul>
                        {relatedCaseStudies.length > 0 ? relatedCaseStudies.map((item) => (
                          <li key={item.slug}>
                            <Link to="/projects">{item.title}</Link>
                          </li>
                        )) : <li>Mapped but awaiting expanded proof page set.</li>}
                        </ul>
                      </div>
                    </AnimatedSection>
                  <AnimatedSection delay={70}>
                    <div className="tbx-page-box">
                      <h2>Relevant insights</h2>
                        <ul>
                        {relatedInsights.length > 0 ? relatedInsights.map((item) => (
                          <li key={item.slug}>
                            <Link to="/blog">{item.title}</Link>
                          </li>
                        )) : <li>Additional insight pages can be connected here.</li>}
                        </ul>
                      </div>
                  </AnimatedSection>
                  <AnimatedSection delay={140}>
                    <div className="tbx-page-box">
                      <h2>Where this work is commonly used</h2>
                      <ul>
                        {relatedIndustries.length > 0 ? relatedIndustries.map((item) => (
                          <li key={item.slug}>{item.title}</li>
                        )) : <li>Cross-industry fit is supported in current data.</li>}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
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
                    <h2 className="h3 text-white mb-4">{faq.title}</h2>
                    <FaqAccordion items={faq.items} />
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="sj-section sj-section-tight">
          <div className="tbx-concepts-shell">
            <BusinessPlanSection
              title={`Need a business plan before ${category?.title?.toLowerCase() || "execution"}?`}
              copy={`If this category is part of a larger growth move and you still need the offer, budget, sequencing, or commercial roadmap clarified, we can scope the business plan first and then connect it to ${category?.title || "the delivery work"}.`}
            />
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default ServiceCategory;
