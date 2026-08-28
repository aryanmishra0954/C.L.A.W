import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../App'

const sections = [
  {
    title: 'Data collection & consent',
    detail:
      'The document clearly defines the categories of personal data collected and specifies the consent requirements.',
    score: '100%',
    status: 'Matched',
    tone: 'passed',
  },
  {
    title: 'Data retention',
    detail:
      'The stated retention period is not clearly supported by the applicable knowledge base and requires review.',
    score: '89%',
    status: 'Review',
    tone: 'review',
  },
  {
    title: 'User rights',
    detail:
      'User rights, access requests, correction mechanisms, and grievance procedures are aligned with the referenced regulations.',
    score: '97%',
    status: 'Matched',
    tone: 'passed',
  },
  {
    title: 'Data security obligations',
    detail:
      'Two security obligations require additional supporting references before the policy can be considered fully compliant.',
    score: '82%',
    status: 'Needs attention',
    tone: 'attention',
  },
]

function ValidationResults() {
  const navigate = useNavigate()
  const [expanded, setExpanded] = useState(1)
  const handleExportReport = () => {
  window.print()
}

  return (
    <section className="page-content results-page">

      <button
        className="back-link"
        type="button"
        onClick={() => navigate('/validate')}
      >
        <Icon name="arrow" size={16} /> Back to upload
      </button>

      <div className="result-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> VALIDATION COMPLETE
          </div>

          <h1>
            data-privacy-policy.pdf
            <span className="heading-period">.</span>
          </h1>

          <p className="page-subtitle">
            Checked against <strong>DPDP Act & Privacy Rules</strong> · just now
          </p>
        </div>

        <div className="result-actions">
          <button
            className="secondary-button"
            type="button"
            onClick={() => navigate('/validate')}
          >
            <Icon name="upload" size={16} /> Validate another
          </button>

          <button
            className="primary-button compact-button"
            type="button"
            onClick={handleExportReport}
          >
            <Icon name="command" size={16} /> Export report
          </button>
        </div>
      </div>

      <div className="result-overview">

        <div className="score-card panel">
          <div className="score-ring">
            <div>
              <strong>91.6</strong>
              <span>/ 100</span>
            </div>
          </div>

          <div>
            <p className="panel-kicker">OVERALL COMPLIANCE</p>
            <h2>Strong compliance</h2>
            <p>
              Document is largely compliant with a few clauses
              requiring human review.
            </p>
          </div>
        </div>

        <div className="overview-stat panel">
          <span className="stat-icon green">
            <Icon name="chart" size={18} />
          </span>

          <div>
            <strong>16 / 16</strong>
            <span>Sections processed</span>
          </div>

          <small>100%</small>
        </div>

        <div className="overview-stat panel">
          <span className="stat-icon purple">
            <Icon name="command" size={18} />
          </span>

          <div>
            <strong>03</strong>
            <span>Compliance signals</span>
          </div>

          <small>Low risk</small>
        </div>

      </div>

      <div className="result-grid">

        <div className="panel sections-panel">

          <div className="panel-topline">
            <div>
              <p className="panel-kicker">COMPLIANCE BREAKDOWN</p>
              <h2>Where the document stands</h2>
            </div>

            <span className="section-count">04 sections</span>
          </div>

          <div className="section-list">

            {sections.map((section, index) => (

              <div
                className={`section-item ${
                  expanded === index ? 'expanded' : ''
                }`}
                key={section.title}
              >

                <button
                  type="button"
                  onClick={() =>
                    setExpanded(
                      expanded === index ? -1 : index
                    )
                  }
                >

                  <span
                    className={`section-index ${section.tone}`}
                  >
                    0{index + 1}
                  </span>

                  <span className="section-copy">
                    <strong>{section.title}</strong>

                    <small>
                      {expanded === index
                        ? section.detail
                        : 'Click to inspect validation signals'}
                    </small>
                  </span>

                  <span className="section-score">
                    <strong>{section.score}</strong>

                    <span
                      className={`status-pill ${section.tone}`}
                    >
                      <span />
                      {section.status}
                    </span>
                  </span>

                  <span
                    className={`expand-icon ${
                      expanded === index ? 'open' : ''
                    }`}
                  >
                    +
                  </span>

                </button>

                {expanded === index && (
                  <div className="section-detail">
                    <span className="detail-marker" />

                    <span>
                      <strong>Signal:</strong>{' '}

                      {index === 1
                        ? 'The stated data retention period is not explicitly supported by the current legal knowledge base and requires verification.'
                        : index === 3
                        ? 'Security obligations are partially matched, but additional regulatory references are recommended.'
                        : 'No conflicting compliance requirements detected in this section.'}
                    </span>
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

        <div className="panel confidence-panel">

          <div className="panel-topline">
            <div>
              <p className="panel-kicker">
                COMPLIANCE CONFIDENCE
              </p>

              <h2>Signal mix</h2>
            </div>

            <span className="mini-live">
              <span /> AI ANALYSIS
            </span>
          </div>

          <div className="bar-chart">

            <div className="bar-row">
              <span>Compliant</span>

              <div className="bar-track">
                <i style={{ width: '82%' }} />
              </div>

              <strong>82%</strong>
            </div>

            <div className="bar-row">
              <span>Needs review</span>

              <div className="bar-track review-track">
                <i style={{ width: '13%' }} />
              </div>

              <strong>13%</strong>
            </div>

            <div className="bar-row">
              <span>Non-compliant</span>

              <div className="bar-track attention-track">
                <i style={{ width: '5%' }} />
              </div>

              <strong>5%</strong>
            </div>

          </div>

          <div className="confidence-foot">

            <span>
              <i className="legend-dot covered" />
              Compliant
            </span>

            <span>
              <i className="legend-dot review" />
              Review
            </span>

            <span>
              <i className="legend-dot attention" />
              Non-compliant
            </span>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ValidationResults