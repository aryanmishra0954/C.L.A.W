import UserNavbar from "../components/UserNavbar.jsx";
import "./ValidationResults.css";

export default function ValidationResults({ onNavigate, onSignOut }) {
  return (
    <div className="results-page">
      <UserNavbar
        activePage="validate"
        userName="Duann"
        onNavigate={onNavigate}
        onSignOut={onSignOut}
      />

      <main className="results-main">
        <p className="results-breadcrumb">
          <button type="button" onClick={() => onNavigate("validate")}>
            Validate
          </button>
          <span>/</span>
          Results
        </p>

        <section className="results-heading">
          <div>
            <p className="results-eyebrow">VALIDATION COMPLETE</p>
            <h1>Compliance validation results</h1>
            <p>
              Review the findings detected in your document and take action on
              potential compliance risks.
            </p>
          </div>

          <span className="results-ready">Analysis complete</span>
        </section>

        <section className="results-summary">
          <div className="results-score">
            <div className="results-score-circle">
              <strong>78</strong>
              <span>/100</span>
            </div>
            <div>
              <h2>Mostly compliant</h2>
              <p>3 issues require your attention.</p>
            </div>
          </div>

          <div className="results-summary-stat">
            <strong>12</strong>
            <span>Checks completed</span>
          </div>

          <div className="results-summary-stat warning">
            <strong>3</strong>
            <span>Potential risks</span>
          </div>

          <div className="results-summary-stat success">
            <strong>9</strong>
            <span>Passed checks</span>
          </div>
        </section>

        <section className="results-content">
          <div className="results-findings">
            <div className="results-section-heading">
              <div>
                <h2>Detected issues</h2>
                <p>Review each finding before finalizing this document.</p>
              </div>
              <span>3 findings</span>
            </div>

            <article className="results-finding high">
              <div className="finding-icon">!</div>
              <div>
                <div className="finding-title">
                  <h3>Missing data retention period</h3>
                  <span>High risk</span>
                </div>
                <p>
                  The document does not clearly define how long personal data
                  should be retained.
                </p>
                <small>Related regulation: GDPR</small>
              </div>
            </article>

            <article className="results-finding medium">
              <div className="finding-icon">!</div>
              <div>
                <div className="finding-title">
                  <h3>Unclear breach notification language</h3>
                  <span>Medium risk</span>
                </div>
                <p>
                  Notification responsibilities and response timelines are not
                  specific enough.
                </p>
                <small>Related regulation: Data Protection Act</small>
              </div>
            </article>

            <article className="results-finding low">
              <div className="finding-icon">!</div>
              <div>
                <div className="finding-title">
                  <h3>Third-party access needs clarification</h3>
                  <span>Low risk</span>
                </div>
                <p>
                  Add more detail about how external vendors may access
                  protected information.
                </p>
                <small>Related regulation: GDPR</small>
              </div>
            </article>
          </div>

          <aside className="results-side-card">
            <h2>Document details</h2>

            <dl>
              <div>
                <dt>Document</dt>
                <dd>export_8306018686362875019.pdf</dd>
              </div>
              <div>
                <dt>Validated on</dt>
                <dd>May 24, 2025 · 10:45 AM</dd>
              </div>
              <div>
                <dt>References</dt>
                <dd>GDPR, Data Protection Act</dd>
              </div>
              <div>
                <dt>Confidence</dt>
                <dd>94%</dd>
              </div>
            </dl>

            <div className="results-recommendation">
              <strong>Recommended next step</strong>
              <p>
                Update the three flagged clauses, then run validation again.
              </p>
            </div>
          </aside>
        </section>

        <div className="results-actions">
          <button
            type="button"
            className="results-primary-button"
            onClick={() => onNavigate("validate")}
          >
            Validate another document
          </button>

          <button
            type="button"
            className="results-secondary-button"
            onClick={() => onNavigate("history")}
          >
            View history
          </button>
        </div>
      </main>
    </div>
  );
}