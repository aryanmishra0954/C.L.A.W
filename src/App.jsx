import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import ValidationHistory from './pages/ValidationHistory'
import ValidateUpload from './pages/ValidateUpload'
import ValidationResults from './pages/ValidationResults'

const icons = {
  upload: (
    <>
      <path d="M12 16V4" />
      <path d="m7 9 5-5 5 5" />
      <path d="M5 20h14" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 15 3-4 3 2 4-6" />
    </>
  ),
  history: (
    <>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  command: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
}

export function Icon({ name, size = 18, strokeWidth = 1.8 }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {icons[name]}
    </svg>
  )
}



function AppNavigation() {
  const location = useLocation()
  const isResults = location.pathname.includes('result')

  return (
    <header className="topbar">
      <NavLink className="brand" to="/validate" aria-label="C.L.A.W. home">

        <span className="brand-name">CLAW</span>
        <span className="brand-divider" />
        <span className="brand-context">Compliance validation</span>
      </NavLink>

      <nav className="main-nav" aria-label="Primary navigation">
        <NavLink className={({ isActive }) => `nav-link ${isActive && !isResults ? 'active' : ''}`} to="/validate">
          <Icon name="upload" size={17} />
          <span>Validate upload</span>
        </NavLink>
        <NavLink className={({ isActive }) => `nav-link ${isActive || isResults ? 'active' : ''}`} to="/validateResult">
          <Icon name="chart" size={17} />
          <span>Results</span>
        </NavLink>
        <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/history">
          <Icon name="history" size={17} />
          <span>History</span>
        </NavLink>
      </nav>

      <div className="topbar-meta">
       
        <span className="environment-label"></span>
        <span className="avatar">User</span>
      </div>
    </header>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <AppNavigation />
        <main className="page-frame">
          <Routes>
            <Route path="/" element={<ValidationHistory />} />
            <Route path="/history" element={<ValidationHistory />} />
            <Route path="/validate" element={<ValidateUpload />} />
            <Route path="/validateResult" element={<ValidationResults />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <span><Icon name="command" size={14} /> C.L.A.W.</span>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App