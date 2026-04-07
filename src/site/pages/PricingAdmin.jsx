import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { savePricingCatalog, usePricingCatalog } from "../hooks/usePricingCatalog.js";
import { serviceCategories } from "../data/content.js";

const ADMIN_TOKEN_KEY = "tb-pricing-admin-token";
const ADMIN_USERNAME_KEY = "tb-pricing-admin-username";

const groupCatalog = (catalog) => {
  const groups = new Map();

  catalog.forEach((item) => {
    const groupKey = item.parentSlug || item.slug;
    const category = serviceCategories.find((entry) => entry.slug === groupKey);
    const group = groups.get(groupKey) || {
      key: groupKey,
      title: category?.title || item.title,
      items: [],
    };

    group.items.push(item);
    groups.set(groupKey, group);
  });

  return Array.from(groups.values());
};

const parseJson = async (response) => {
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(payload?.error || "Request failed.");
  }
  return payload;
};

const serializeFeatureList = (features = []) => features.join("\n");

const parseFeatureList = (value = "") =>
  value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

const getSaveStatusTone = (status = "") => {
  const normalized = status.toLowerCase();
  return normalized.includes("saved") || normalized.includes("signed in") || normalized.includes("reset complete")
    ? "is-success"
    : "is-warning";
};

const PricingAdmin = () => {
  const [searchParams] = useSearchParams();
  const { catalog, homepagePlans, bookingSettings, loading, error, reloadCatalog } = usePricingCatalog();
  const [draftCatalog, setDraftCatalog] = useState([]);
  const [draftHomepagePlans, setDraftHomepagePlans] = useState([]);
  const [draftBookingSettings, setDraftBookingSettings] = useState(bookingSettings);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);
  const [bootstrap, setBootstrap] = useState({
    configured: false,
    usernameHint: "admin",
    recoveryEmailMasked: "",
    emailEnabled: false,
  });
  const [authToken, setAuthToken] = useState("");
  const [authUser, setAuthUser] = useState("");
  const [authForm, setAuthForm] = useState({ username: "", password: "" });
  const [resetPassword, setResetPassword] = useState("");
  const [resetPasswordConfirm, setResetPasswordConfirm] = useState("");
  const [authBusy, setAuthBusy] = useState(false);

  const resetToken = searchParams.get("reset") || "";

  useEffect(() => {
    setDraftCatalog(catalog);
  }, [catalog]);

  useEffect(() => {
    setDraftHomepagePlans(homepagePlans);
  }, [homepagePlans]);

  useEffect(() => {
    setDraftBookingSettings(bookingSettings);
  }, [bookingSettings]);

  useEffect(() => {
    const storedToken = window.localStorage.getItem(ADMIN_TOKEN_KEY) || "";
    const storedUser = window.localStorage.getItem(ADMIN_USERNAME_KEY) || "";
    setAuthToken(storedToken);
    setAuthUser(storedUser);
    setAuthForm((current) => ({
      ...current,
      username: storedUser || current.username,
    }));
  }, []);

  useEffect(() => {
    fetch("/api/admin/bootstrap")
      .then(parseJson)
      .then((payload) => setBootstrap(payload))
      .catch((bootstrapError) => {
        setStatus(bootstrapError.message || "Unable to load admin setup.");
      });
  }, []);

  const groupedCatalog = useMemo(() => groupCatalog(draftCatalog), [draftCatalog]);
  const isAuthenticated = Boolean(authToken);

  const updateItem = (slug, updater) => {
    setDraftCatalog((current) =>
      current.map((item) => (item.slug === slug ? updater(item) : item)),
    );
  };

  const updateHomepagePlan = (id, updater) => {
    setDraftHomepagePlans((current) =>
      current.map((plan) => (plan.id === id ? updater(plan) : plan)),
    );
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus("");

    try {
      const savedState = await savePricingCatalog({
        authToken,
        items: draftCatalog,
        homepagePlans: draftHomepagePlans,
        bookingSettings: draftBookingSettings,
      });
      setDraftCatalog(savedState.items);
      setDraftHomepagePlans(savedState.homepagePlans);
      setDraftBookingSettings(savedState.bookingSettings);
      setStatus("Pricing catalog saved.");
      await reloadCatalog();
    } catch (saveError) {
      setStatus(saveError.message || "Pricing catalog could not be saved.");
    } finally {
      setSaving(false);
    }
  };

  const handleLogin = async () => {
    setAuthBusy(true);
    setStatus("");

    try {
      const payload = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authForm),
      }).then(parseJson);

      setAuthToken(payload.token);
      setAuthUser(payload.username);
      window.localStorage.setItem(ADMIN_TOKEN_KEY, payload.token);
      window.localStorage.setItem(ADMIN_USERNAME_KEY, payload.username);
      setStatus("Admin session started.");
    } catch (loginError) {
      setStatus(loginError.message || "Unable to sign in.");
    } finally {
      setAuthBusy(false);
    }
  };

  const handleLogout = () => {
    setAuthToken("");
    setAuthUser("");
    window.localStorage.removeItem(ADMIN_TOKEN_KEY);
    window.localStorage.removeItem(ADMIN_USERNAME_KEY);
    setStatus("Admin session cleared.");
  };

  const handleRequestReset = async () => {
    setAuthBusy(true);
    setStatus("");

    try {
      const payload = await fetch("/api/admin/request-reset", {
        method: "POST",
      }).then(parseJson);
      setStatus(payload.message || "Password reset link sent.");
    } catch (requestError) {
      setStatus(requestError.message || "Unable to request password reset.");
    } finally {
      setAuthBusy(false);
    }
  };

  const handleResetPassword = async () => {
    setAuthBusy(true);
    setStatus("");

    try {
      if (!resetPassword || resetPassword.length < 10) {
        throw new Error("Use a password with at least 10 characters.");
      }

      if (resetPassword !== resetPasswordConfirm) {
        throw new Error("The password confirmation does not match.");
      }

      const payload = await fetch("/api/admin/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: resetToken,
          password: resetPassword,
        }),
      }).then(parseJson);

      setAuthToken(payload.token);
      setAuthUser(payload.username);
      window.localStorage.setItem(ADMIN_TOKEN_KEY, payload.token);
      window.localStorage.setItem(ADMIN_USERNAME_KEY, payload.username);
      setStatus("Password reset complete. You are now signed in.");
    } catch (resetError) {
      setStatus(resetError.message || "Unable to reset password.");
    } finally {
      setAuthBusy(false);
    }
  };

  return (
    <AppLayout>
      <SEOHead
        title="Techbeyond | Pricing Admin"
        description="Internal Techbeyond pricing controls for service pricing, checkout mode, and card settings."
        canonicalPath="/admin/pricing"
        seo={{ noIndex: true }}
      />

      <section className="sj-page-hero">
        <div className="sj-shell">
          <AnimatedSection>
            <p className="sj-kicker">Internal Pricing Admin</p>
            <h1 className="sj-section-title">Manage pricing from a protected admin link with login and recovery.</h1>
            <p className="sj-copy sj-section-copy">
              This page now uses a real admin session flow. Sign in to edit the live pricing catalog, or request a password reset through the configured admin email.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="sj-section sj-section-tight">
        <div className="sj-shell">
          <AnimatedSection>
            <div className="tbx-page-frame">
              <div className="tbx-page-section">
                {!isAuthenticated ? (
                  <div className="tbx-admin-auth-grid">
                    <div className="tbx-page-box">
                      <p className="tbx-page-kicker">Admin login</p>
                      <h2>{resetToken ? "Reset password" : "Sign in to pricing admin"}</h2>
                      <p>
                        Username: <strong>{bootstrap.usernameHint || "admin"}</strong>
                        {bootstrap.recoveryEmailMasked ? ` · Recovery email: ${bootstrap.recoveryEmailMasked}` : ""}
                      </p>

                      {resetToken ? (
                        <div className="tbx-admin-auth-form">
                          <label>
                            <span>New password</span>
                            <input
                              type="password"
                              value={resetPassword}
                              onChange={(event) => setResetPassword(event.target.value)}
                              placeholder="At least 10 characters"
                            />
                          </label>
                          <label>
                            <span>Confirm password</span>
                            <input
                              type="password"
                              value={resetPasswordConfirm}
                              onChange={(event) => setResetPasswordConfirm(event.target.value)}
                              placeholder="Repeat the new password"
                            />
                          </label>
                          <button type="button" className="sj-button sj-button-light" onClick={handleResetPassword} disabled={authBusy}>
                            {authBusy ? "Resetting..." : "Reset password"}
                          </button>
                        </div>
                      ) : (
                        <div className="tbx-admin-auth-form">
                          <label>
                            <span>Username</span>
                            <input
                              value={authForm.username}
                              onChange={(event) => setAuthForm((current) => ({ ...current, username: event.target.value }))}
                              placeholder="Admin username"
                            />
                          </label>
                          <label>
                            <span>Password</span>
                            <input
                              type="password"
                              value={authForm.password}
                              onChange={(event) => setAuthForm((current) => ({ ...current, password: event.target.value }))}
                              placeholder="Admin password"
                            />
                          </label>
                          <div className="tbx-admin-toolbar-actions">
                            <button type="button" className="sj-button sj-button-light" onClick={handleLogin} disabled={authBusy}>
                              {authBusy ? "Signing in..." : "Sign in"}
                            </button>
                            <button type="button" className="sj-button sj-button-outline" onClick={handleRequestReset} disabled={authBusy || !bootstrap.emailEnabled}>
                              Send reset email
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="tbx-page-box">
                      <p className="tbx-page-kicker">Setup notes</p>
                      <ul>
                        <li>Admin login route: `/admin/pricing`</li>
                        <li>Username comes from `ADMIN_USERNAME`</li>
                        <li>Password comes from `ADMIN_PASSWORD` on first bootstrap, then stored securely in the app data store</li>
                        <li>Recovery email comes from `ADMIN_EMAIL`</li>
                        <li>Reset email delivery uses `RESEND_API_KEY` and `RESEND_FROM_EMAIL`</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="tbx-admin-toolbar">
                    <div className="tbx-page-box">
                      <p className="tbx-page-kicker">Signed in</p>
                      <h2>{authUser}</h2>
                      <p>The pricing editor is unlocked for this browser session.</p>
                    </div>
                    <div className="tbx-admin-toolbar-actions">
                      <button type="button" className="sj-button sj-button-outline" onClick={reloadCatalog} disabled={loading}>
                        Refresh live data
                      </button>
                      <button type="button" className="sj-button sj-button-outline" onClick={handleLogout}>
                        Log out
                      </button>
                      <button type="button" className="sj-button sj-button-light" onClick={handleSave} disabled={saving}>
                        {saving ? "Saving..." : "Save pricing catalog"}
                      </button>
                    </div>
                  </div>
                )}

                {error ? (
                  <div className="tbx-status-banner is-warning">
                    <strong>Live pricing warning</strong>
                    <p>{error}</p>
                  </div>
                ) : null}

                {status ? (
                  <div className={`tbx-status-banner ${getSaveStatusTone(status)}`}>
                    <strong>Admin status</strong>
                    <p>{status}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {isAuthenticated ? (
        <section className="sj-section">
          <div className="sj-shell">
            <div className="tbx-admin-groups">
              <AnimatedSection>
                <section className="tbx-admin-group">
                  <div className="tbx-pricing-group-head">
                    <div>
                      <p className="tbx-page-kicker">Booking embed control</p>
                      <h3>Scheduler links</h3>
                    </div>
                  </div>

                  <div className="tbx-admin-list">
                    <article className="tbx-admin-card">
                      <div className="tbx-admin-grid">
                        <label>
                          <span>Strategy call calendar URL</span>
                          <input
                            value={draftBookingSettings.strategyCallUrl || ""}
                            onChange={(event) =>
                              setDraftBookingSettings((current) => ({
                                ...current,
                                strategyCallUrl: event.target.value,
                              }))
                            }
                            placeholder="https://calendly.com/your-link/strategy-call"
                          />
                        </label>
                        <label>
                          <span>Business plan calendar URL</span>
                          <input
                            value={draftBookingSettings.businessPlanUrl || ""}
                            onChange={(event) =>
                              setDraftBookingSettings((current) => ({
                                ...current,
                                businessPlanUrl: event.target.value,
                              }))
                            }
                            placeholder="https://calendly.com/your-link/business-plan"
                          />
                        </label>
                      </div>
                      <p>
                        The homepage strategy-call button and the booking iframe use these links. Update them here and save once.
                      </p>
                    </article>
                  </div>
                </section>
              </AnimatedSection>

              <AnimatedSection>
                <section className="tbx-admin-group">
                  <div className="tbx-pricing-group-head">
                    <div>
                      <p className="tbx-page-kicker">{draftHomepagePlans.length} plans</p>
                      <h3>Homepage pricing plans</h3>
                    </div>
                  </div>

                  <div className="tbx-admin-list">
                    {draftHomepagePlans.map((plan) => (
                      <article key={plan.id} className="tbx-admin-card">
                        <div className="tbx-admin-card-head">
                          <div>
                            <strong>{plan.id}</strong>
                            <p>Homepage pricing card</p>
                          </div>
                          <div className="tbx-admin-inline-switches">
                            <label>
                              <input
                                type="checkbox"
                                checked={plan.highlighted}
                                onChange={(event) =>
                                  updateHomepagePlan(plan.id, (current) => ({
                                    ...current,
                                    highlighted: event.target.checked,
                                  }))
                                }
                              />
                              <span>Highlighted</span>
                            </label>
                            <label>
                              <input
                                type="checkbox"
                                checked={plan.enabled}
                                onChange={(event) =>
                                  updateHomepagePlan(plan.id, (current) => ({
                                    ...current,
                                    enabled: event.target.checked,
                                  }))
                                }
                              />
                              <span>Enabled</span>
                            </label>
                          </div>
                        </div>

                        <div className="tbx-admin-grid">
                          <label>
                            <span>Name</span>
                            <input
                              value={plan.name}
                              onChange={(event) =>
                                updateHomepagePlan(plan.id, (current) => ({
                                  ...current,
                                  name: event.target.value,
                                }))
                              }
                            />
                          </label>
                          <label>
                            <span>Monthly price</span>
                            <input
                              type="number"
                              value={plan.monthly}
                              onChange={(event) =>
                                updateHomepagePlan(plan.id, (current) => ({
                                  ...current,
                                  monthly: Number(event.target.value || 0),
                                }))
                              }
                            />
                          </label>
                          <label>
                            <span>Yearly price</span>
                            <input
                              type="number"
                              value={plan.yearly}
                              onChange={(event) =>
                                updateHomepagePlan(plan.id, (current) => ({
                                  ...current,
                                  yearly: Number(event.target.value || 0),
                                }))
                              }
                            />
                          </label>
                          <label>
                            <span>CTA label</span>
                            <input
                              value={plan.cta}
                              onChange={(event) =>
                                updateHomepagePlan(plan.id, (current) => ({
                                  ...current,
                                  cta: event.target.value,
                                }))
                              }
                            />
                          </label>
                          <label>
                            <span>Badge</span>
                            <input
                              value={plan.badge || ""}
                              onChange={(event) =>
                                updateHomepagePlan(plan.id, (current) => ({
                                  ...current,
                                  badge: event.target.value,
                                }))
                              }
                            />
                          </label>
                        </div>

                        <label className="tbx-admin-textarea">
                          <span>Tagline</span>
                          <textarea
                            rows="3"
                            value={plan.tagline}
                            onChange={(event) =>
                              updateHomepagePlan(plan.id, (current) => ({
                                ...current,
                                tagline: event.target.value,
                              }))
                            }
                          />
                        </label>

                        <label className="tbx-admin-textarea">
                          <span>Features</span>
                          <textarea
                            rows="6"
                            value={serializeFeatureList(plan.features)}
                            onChange={(event) =>
                              updateHomepagePlan(plan.id, (current) => ({
                                ...current,
                                features: parseFeatureList(event.target.value),
                              }))
                            }
                          />
                        </label>
                      </article>
                    ))}
                  </div>
                </section>
              </AnimatedSection>

              {groupedCatalog.map((group, groupIndex) => (
                <AnimatedSection key={group.key} delay={groupIndex * 30}>
                  <section className="tbx-admin-group">
                    <div className="tbx-pricing-group-head">
                      <div>
                        <p className="tbx-page-kicker">{group.items.length} entries</p>
                        <h3>{group.title}</h3>
                      </div>
                    </div>

                    <div className="tbx-admin-list">
                      {group.items.map((item) => (
                        <article key={item.slug} className="tbx-admin-card">
                          <div className="tbx-admin-card-head">
                            <div>
                              <strong>{item.slug}</strong>
                              <p>{item.servicePath}</p>
                            </div>
                            <div className="tbx-admin-inline-switches">
                              <label>
                                <input
                                  type="checkbox"
                                  checked={item.featured}
                                  onChange={(event) =>
                                    updateItem(item.slug, (current) => ({ ...current, featured: event.target.checked }))
                                  }
                                />
                                <span>Featured</span>
                              </label>
                              <label>
                                <input
                                  type="checkbox"
                                  checked={item.enabled}
                                  onChange={(event) =>
                                    updateItem(item.slug, (current) => ({ ...current, enabled: event.target.checked }))
                                  }
                                />
                                <span>Enabled</span>
                              </label>
                              <label>
                                <input
                                  type="checkbox"
                                  checked={item.checkoutEnabled}
                                  onChange={(event) =>
                                    updateItem(item.slug, (current) => ({ ...current, checkoutEnabled: event.target.checked }))
                                  }
                                />
                                <span>Checkout</span>
                              </label>
                            </div>
                          </div>

                          <div className="tbx-admin-grid">
                            <label>
                              <span>Title</span>
                              <input
                                value={item.title}
                                onChange={(event) => updateItem(item.slug, (current) => ({ ...current, title: event.target.value }))}
                              />
                            </label>
                            <label>
                              <span>Pricing mode</span>
                              <select
                                value={item.pricingMode}
                                onChange={(event) =>
                                  updateItem(item.slug, (current) => ({ ...current, pricingMode: event.target.value }))
                                }
                              >
                                <option value="instant">instant</option>
                                <option value="quote">quote</option>
                              </select>
                            </label>
                            <label>
                              <span>Base price</span>
                              <input
                                type="number"
                                value={item.basePrice}
                                onChange={(event) =>
                                  updateItem(item.slug, (current) => ({ ...current, basePrice: Number(event.target.value || 0) }))
                                }
                              />
                            </label>
                            <label>
                              <span>Compare price</span>
                              <input
                                type="number"
                                value={item.compareAtPrice || ""}
                                onChange={(event) =>
                                  updateItem(item.slug, (current) => ({
                                    ...current,
                                    compareAtPrice: event.target.value ? Number(event.target.value) : null,
                                  }))
                                }
                              />
                            </label>
                            <label>
                              <span>Price label</span>
                              <input
                                value={item.priceLabel}
                                onChange={(event) => updateItem(item.slug, (current) => ({ ...current, priceLabel: event.target.value }))}
                              />
                            </label>
                            <label>
                              <span>Currency</span>
                              <input
                                value={item.currency}
                                onChange={(event) => updateItem(item.slug, (current) => ({ ...current, currency: event.target.value }))}
                              />
                            </label>
                          </div>

                          <label className="tbx-admin-textarea">
                            <span>Summary</span>
                            <textarea
                              rows="4"
                              value={item.summary}
                              onChange={(event) => updateItem(item.slug, (current) => ({ ...current, summary: event.target.value }))}
                            />
                          </label>

                          <div className="tbx-admin-grid tbx-admin-grid-slider">
                            <label className="tbx-admin-checkbox">
                              <input
                                type="checkbox"
                                checked={item.slider?.enabled}
                                onChange={(event) =>
                                  updateItem(item.slug, (current) => ({
                                    ...current,
                                    slider: { ...current.slider, enabled: event.target.checked },
                                  }))
                                }
                              />
                              <span>Slider enabled</span>
                            </label>
                            <label>
                              <span>Slider min</span>
                              <input
                                type="number"
                                value={item.slider?.min}
                                onChange={(event) =>
                                  updateItem(item.slug, (current) => ({
                                    ...current,
                                    slider: { ...current.slider, min: Number(event.target.value || 1) },
                                  }))
                                }
                              />
                            </label>
                            <label>
                              <span>Slider max</span>
                              <input
                                type="number"
                                value={item.slider?.max}
                                onChange={(event) =>
                                  updateItem(item.slug, (current) => ({
                                    ...current,
                                    slider: { ...current.slider, max: Number(event.target.value || 1) },
                                  }))
                                }
                              />
                            </label>
                            <label>
                              <span>Slider step</span>
                              <input
                                type="number"
                                value={item.slider?.step}
                                onChange={(event) =>
                                  updateItem(item.slug, (current) => ({
                                    ...current,
                                    slider: { ...current.slider, step: Number(event.target.value || 1) },
                                  }))
                                }
                              />
                            </label>
                            <label>
                              <span>Unit label</span>
                              <input
                                value={item.slider?.unitLabel}
                                onChange={(event) =>
                                  updateItem(item.slug, (current) => ({
                                    ...current,
                                    slider: { ...current.slider, unitLabel: event.target.value },
                                  }))
                                }
                              />
                            </label>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </AppLayout>
  );
};

export default PricingAdmin;
