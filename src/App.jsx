import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import { VIEWS } from './constants/views'

import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import KBUpload from './pages/KBUpload'
import KBList from './pages/KBList'
import ValidateUpload from './pages/ValidateUpload'
import ValidationResults from './pages/ValidationResults'
import ValidationHistory from './pages/ValidationHistory'

import './App.css'

// App.jsx is the master state router: it holds which "page" is active
// and swaps between them. No URL changes — navigation is done by
// calling setView(VIEWS.SOMETHING) from a page via the navigate prop.
function App() {
  const [view, setView] = useState(VIEWS.LANDING)

  const navigate = (nextView) => setView(nextView)

  const renderView = () => {
    switch (view) {
      case VIEWS.LANDING:
        return <LandingPage navigate={navigate} />
      case VIEWS.AUTH:
        return <AuthPage navigate={navigate} />
      case VIEWS.KB_UPLOAD:
        return <KBUpload navigate={navigate} />
      case VIEWS.KB_LIST:
        return <KBList navigate={navigate} />
      case VIEWS.VALIDATE_UPLOAD:
        return <ValidateUpload navigate={navigate} />
      case VIEWS.VALIDATION_RESULTS:
        return <ValidationResults navigate={navigate} />
      case VIEWS.VALIDATION_HISTORY:
        return <ValidationHistory navigate={navigate} />
      default:
        return <LandingPage navigate={navigate} />
    }
  }

  return (
    <AuthProvider>
      <div className="app-shell">{renderView()}</div>
    </AuthProvider>
  )
}

export default App
