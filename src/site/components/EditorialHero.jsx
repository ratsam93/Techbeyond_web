import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const EditorialHero = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  chips = [],
  actions = [],
}) => (
  <section className="container pt-4 pb-5">
    <div className="tb-editorial-hero">
      <img className="tb-editorial-image" src={image} alt={imageAlt || title} />
      <div className="tb-editorial-overlay">
        <div className="container py-4 py-lg-5">
          <div className="row justify-content-between align-items-end g-4">
            <div className="col-lg-8">
              {eyebrow ? (
                <AnimatedSection>
                  <p className="tb-eyebrow mb-2">{eyebrow}</p>
                </AnimatedSection>
              ) : null}
              <AnimatedSection delay={100}>
                <h1 className="display-4 fw-bold text-white" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  {title}
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p className="lead mt-3 mb-0" style={{ color: "var(--tb-text-soft)", maxWidth: 600, lineHeight: 1.7 }}>
                  {description}
                </p>
              </AnimatedSection>
              {chips.length > 0 ? (
                <AnimatedSection delay={300}>
                  <div className="d-flex flex-wrap gap-2 mt-4">
                    {chips.map((chip) => (
                      <span key={chip} className="tb-chip">
                        {chip}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              ) : null}
            </div>
            {actions.length > 0 ? (
              <div className="col-lg-4">
                <AnimatedSection delay={400}>
                  <div className="tb-glass-strong rounded-4 p-3 p-lg-4">
                    <div className="d-grid gap-2">
                      {actions.map((action) => (
                        <Link
                          key={`${action.href}-${action.label}`}
                          to={action.href}
                          className={`tb-btn ${action.variant === "light" ? "tb-btn-primary" : "tb-btn-outline"}`}
                        >
                          {action.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EditorialHero;
