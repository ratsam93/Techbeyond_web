import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { businessEndpoints } from "../data/endpoints.js";

const BusinessPlanSection = ({
  eyebrow = "Business Plan",
  title = "Need a business plan before execution?",
  copy = "If you need a practical business plan, GTM outline, or commercial roadmap before building, we can scope that separately and map the operating plan around your offer, channels, and budget.",
}) => (
  <AnimatedSection>
    <div className="tbx-page-frame">
      <div className="tbx-page-section">
        <div className="tbx-page-grid tbx-page-grid-hero">
          <div className="tbx-service-hero">
            <p className="tbx-page-kicker">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{copy}</p>
            <div className="tbx-page-actions">
              <Link to={businessEndpoints.contact.businessPlanRequest} className="tbx-page-button">
                Request business plan
              </Link>
              <a href={`mailto:${businessEndpoints.emails.businessPlans}`} className="tbx-page-button tbx-page-button-ghost">
                {businessEndpoints.emails.businessPlans}
              </a>
            </div>
          </div>

          <div className="tbx-service-aside">
            <div className="tbx-page-box">
              <p className="tbx-page-kicker">What this can include</p>
              <ul>
                <li>Offer and positioning model</li>
                <li>Channel and acquisition plan</li>
                <li>Revenue assumptions and execution roadmap</li>
                <li>90-day rollout priorities</li>
              </ul>
            </div>
            <div className="tbx-page-box">
              <p className="tbx-page-kicker">Current route</p>
              <p>Business-plan requests stay inside the same Techbeyond contact and booking flow used across the site.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default BusinessPlanSection;
