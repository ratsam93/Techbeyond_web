import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../site/pages/Home";
import CaseStudies from "../site/pages/CaseStudies";
import CaseStudy from "../site/pages/CaseStudy";
import About from "../site/pages/About";
import Contact from "../site/pages/Contact";
import Insights from "../site/pages/Insights";
import InsightPost from "../site/pages/InsightPost";
import Legal from "../site/pages/Legal";
import NotFound from "../site/pages/NotFound";
import Services from "../site/pages/Services";
import ServiceCategory from "../site/pages/ServiceCategory";
import ServiceChild from "../site/pages/ServiceChild";
import ConceptsHub from "../site/pages/ConceptsHub";
import ServiceConceptEditorial from "../site/pages/ServiceConceptEditorial";
import ServiceConceptSystems from "../site/pages/ServiceConceptSystems";
import CaseConceptROI from "../site/pages/CaseConceptROI";
import CaseConceptCinematic from "../site/pages/CaseConceptCinematic";
import Pricing from "../site/pages/Pricing";
import PricingAdmin from "../site/pages/PricingAdmin";

const blogRedirect = <Navigate to="/blog" replace />;
const homeRedirect = <Navigate to="/" replace />;

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/projects", element: <CaseStudies /> },
  { path: "/projects/:slug", element: <CaseStudy /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Insights /> },
  { path: "/blog/:slug", element: <InsightPost /> },
  { path: "/contact", element: <Contact /> },
  { path: "/concepts", element: <ConceptsHub /> },
  { path: "/concepts/service-editorial", element: <ServiceConceptEditorial /> },
  { path: "/concepts/service-systems", element: <ServiceConceptSystems /> },
  { path: "/concepts/case-roi", element: <CaseConceptROI /> },
  { path: "/concepts/case-cinematic", element: <CaseConceptCinematic /> },
  { path: "/404", element: <NotFound /> },
  { path: "/privacy-policy", element: <Legal /> },
  { path: "/terms", element: <Legal /> },
  { path: "/terms-and-condition", element: <Legal /> },
  { path: "/case-studies", element: <CaseStudies /> },
  { path: "/case-studies/:slug", element: <CaseStudy /> },
  { path: "/research", element: <Insights /> },
  { path: "/research/:slug", element: <InsightPost /> },
  { path: "/insights", element: <Insights /> },
  { path: "/insights/:slug", element: <InsightPost /> },
  { path: "/research/category/:category", element: blogRedirect },
  { path: "/insights/category/:category", element: blogRedirect },
  { path: "/data-engine", element: <Navigate to="/services/linkedin-services" replace /> },
  { path: "/linkedin-services", element: <Navigate to="/services/linkedin-services" replace /> },
  { path: "/intelligence", element: homeRedirect },
  { path: "/solutions", element: homeRedirect },
  { path: "/solutions/:industrySlug", element: homeRedirect },
  { path: "/solutions/:industrySlug/:solutionSlug", element: homeRedirect },
  { path: "/industries/:industrySlug", element: homeRedirect },
  { path: "/industries/:industrySlug/:solutionSlug", element: homeRedirect },
  { path: "/services", element: <Services /> },
  { path: "/services/:slug", element: <ServiceCategory /> },
  { path: "/services/:parentSlug/:childSlug", element: <ServiceChild /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/pricing-admin", element: <PricingAdmin /> },
  { path: "/admin/pricing", element: <PricingAdmin /> },
  { path: "/process", element: homeRedirect },
  { path: "/faqs/:slug", element: homeRedirect },
  { path: "/sitemap", element: homeRedirect },
  { path: "*", element: <NotFound /> },
]);
