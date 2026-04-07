import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";

const NotFound = () => (
  <AppLayout>
    <SEOHead title="404" description="The page you are looking for does not exist." canonicalPath="/404" />

    <section className="sj-page-hero sj-center-hero">
      <div className="sj-shell">
        <AnimatedSection>
          <p className="sj-kicker">404</p>
          <h1 className="sj-section-title">This page could not be found.</h1>
          <p className="sj-copy sj-section-copy">
            The route does not exist or has moved. Return to the homepage and continue from there.
          </p>
          <div className="sj-center-actions">
            <Link to="/" className="sj-button sj-button-light">
              Back Home
            </Link>
            <Link to="/contact" className="sj-button sj-button-outline">
              Contact
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </AppLayout>
);

export default NotFound;
