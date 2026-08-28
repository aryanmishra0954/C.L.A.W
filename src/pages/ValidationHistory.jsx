import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../App'

const runs = [
  {
    name: 'employment-agreement.pdf',
    base: 'Labour Laws & Regulations',
    date: 'Today, 11:42 AM',
    score: '96.4%',
    status: 'Passed',
    tone: 'passed',
    sections: '18 / 18',
  },
  {
    name: 'privacy-policy-v2.docx',
    base: 'DPDP Act, 2023',
    date: 'Today, 10:26 AM',
    score: '88.1%',
    status: 'Review',
    tone: 'review',
    sections: '14 / 16',
  },
  {
    name: 'vendor-contract.pdf',
    base: 'Indian Contract Act',
    date: 'Today, 09:04 AM',
    score: '100%',
    status: 'Passed',
    tone: 'passed',
    sections: '11 / 11',
  },
  {
    name: 'data-processing-agreement.pdf',
    base: 'Data Protection & Privacy',
    date: 'Yesterday, 04:26 PM',
    score: '91.6%',
    status: 'Passed',
    tone: 'passed',
    sections: '16 / 16',
  },
  {
    name: 'information-security-policy.pdf',
    base: 'IT & Cybersecurity Rules',
    date: 'Yesterday, 01:03 PM',
    score: '72.8%',
    status: 'Needs attention',
    tone: 'attention',
    sections: '9 / 13',
  },
  {
    name: 'employee-handbook.docx',
    base: 'Labour & Employment Rules',
    date: 'Aug 25, 03:18 PM',
    score: '84.7%',
    status: 'Review',
    tone: 'review',
    sections: '13 / 15',
  },
]

function ValidationHistory() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('All runs')

  const filteredRuns = filter === 'All runs' ? runs : runs.filter((run) => run.status === filter)

  return (
    <section className="page-content history-page">
      <div className="page-heading">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> ACTIVITY LOG</div>
          <h1>Validation history<span className="heading-period">.</span></h1>
          <p className="page-subtitle">A clear trail of every document checked by the validation engine.</p>
        </div>
        <button className="primary-button compact-button" type="button" onClick={() => navigate('/validate')}>
          <Icon name="upload" size={16} /> New validation
        </button>
      </div>

      <div className="metric-grid">
        <Metric label="Total validations" value="24" change="+8 this week" />
        <Metric label="Average alignment" value="91.7%" change="+4.2% vs last week" />
        <Metric label="Needs attention" value="03" change="2 fewer than yesterday" warning />
      </div>

      <div className="history-toolbar">
        <div className="filter-tabs" role="tablist" aria-label="Filter validation history">
          {['All runs', 'Passed', 'Review', 'Needs attention'].map((item) => (
            <button key={item} className={filter === item ? 'selected' : ''} type="button" onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <span className="results-count">{filteredRuns.length} of {runs.length} runs</span>
      </div>

      <div className="panel history-panel">
        <div className="history-table-head"><span>Document</span><span>Knowledge base</span><span>Run date</span><span>Alignment</span><span>Status</span><span /></div>
        {filteredRuns.map((run) => (
          <button className="history-row" type="button" key={run.name} onClick={() => navigate('/validateResult')}>
            <span className="document-cell"><span className={`document-badge ${run.tone}`}><Icon name="command" size={16} /></span><span><strong>{run.name}</strong><small>{run.sections} sections matched</small></span></span>
            <span className="muted-cell">{run.base}</span>
            <span className="muted-cell">{run.date}</span>
            <span className="score-cell">{run.score}</span>
            <span><span className={`status-pill ${run.tone}`}><span />{run.status}</span></span>
            <span className="row-arrow"><Icon name="arrow" size={16} /></span>
          </button>
        ))}
        {filteredRuns.length === 0 && <div className="empty-history">No validations match this filter.</div>}
        <div className="table-foot"><span>Showing local demo data</span><span>Last synced just now</span></div>
      </div>
    </section>
  )
}

function Metric({ label, value, change, warning = false }) {
  return <div className="metric-card"><span>{label}</span><strong className={warning ? 'warning-text' : ''}>{value}</strong><small>{change}</small></div>
}

export default ValidationHistory