import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../App'

function ValidateUpload() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [knowledgeBase, setKnowledgeBase] = useState('Product documentation')
  const [isValidating, setIsValidating] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const acceptFile = (file) => {
    if (!file) return
    setSelectedFile(file)
  }

  const handleFileChange = (event) => {
    acceptFile(event.target.files?.[0])
  }

  const handleValidate = () => {
    if (!selectedFile || isValidating) return
    setIsValidating(true)
    window.setTimeout(() => navigate('/validateResult'), 850)
  }

  return (
    <section className="page-content upload-page">
      <div className="page-heading">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> VALIDATION WORKSPACE</div>
          <h1>Validate a document<span className="heading-period">.</span></h1>
          <p className="page-subtitle">Upload a document and check it against your trusted knowledge base.</p>
        </div>
        <div className="heading-status">
          <span className="status-dot" />
          All systems operational
        </div>
      </div>

      <div className="upload-layout">
        <div className="upload-main">
          <div className="panel upload-panel">
            <div className="panel-topline">
              <div>
                <p className="panel-kicker">01 / DOCUMENT</p>
                <h2>Bring in a file to validate</h2>
              </div>
              <span className="step-number">01</span>
            </div>

            <button
              className={`drop-zone ${dragActive ? 'drag-active' : ''} ${selectedFile ? 'has-file' : ''}`}
              type="button"
              onClick={() => fileInputRef.current?.click()}
              onDragEnter={(event) => { event.preventDefault(); setDragActive(true) }}
              onDragOver={(event) => event.preventDefault()}
              onDragLeave={() => setDragActive(false)}
              onDrop={(event) => {
                event.preventDefault()
                setDragActive(false)
                acceptFile(event.dataTransfer.files?.[0])
              }}
            >
              <input
                ref={fileInputRef}
                className="visually-hidden"
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
              />
              {selectedFile ? (
                <>
                  <div className="file-icon"><Icon name="command" size={24} /></div>
                  <strong>{selectedFile.name}</strong>
                  <span>{formatFileSize(selectedFile.size)} · Ready for validation</span>
                  <span className="change-file">Choose a different file</span>
                </>
              ) : (
                <>
                  <div className="upload-icon"><Icon name="upload" size={25} /></div>
                  <strong>Drop your document here</strong>
                  <span>or click to browse from your computer</span>
                  <small>PDF, DOCX or TXT  25 MB max</small>
                </>
              )}
            </button>

            <div className="format-row">
              <span><Icon name="command" size={15} /> Text extraction is handled locally</span>
            
            </div>
          </div>

          <div className="panel kb-panel">
            <div className="panel-topline">
              <div>
                <p className="panel-kicker">02 / KNOWLEDGE BASE</p>
                <h2>Choose what to validate against</h2>
              </div>
              <span className="step-number">02</span>
            </div>
            <label className="select-label" htmlFor="knowledge-base">Active knowledge base</label>
            <div className="select-wrap">
              <select id="knowledge-base" value={knowledgeBase} onChange={(event) => setKnowledgeBase(event.target.value)}>
                <option>Product documentation</option>
                <option>Support playbook</option>
                <option>Security &amp; compliance</option>
              </select>
              <span className="select-chevron">⌄</span>
            </div>
            <div className="kb-meta">
              <span className="kb-avatar">PD</span>
              <div><strong>{knowledgeBase}</strong><span>124 documents · updated 12 min ago</span></div>
              <span className="ready-pill"><span className="status-dot" /> Ready</span>
            </div>
          </div>

          <div className="upload-actions">
            <button className="secondary-button" type="button" onClick={() => navigate('/history')}>
              <Icon name="history" size={17} /> View validation history
            </button>
            <button className="primary-button" type="button" disabled={!selectedFile || isValidating} onClick={handleValidate}>
              {isValidating ? <><span className="button-spinner" /> Preparing validation…</> : <>Start validation <Icon name="arrow" size={17} /></>}
            </button>
          </div>
        </div>

      
              </div>
    </section>
  )
}

function formatFileSize(bytes = 0) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default ValidateUpload