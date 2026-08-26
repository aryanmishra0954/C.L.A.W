import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ValidationHistory from './pages/ValidationHistory'
import ValidateUpload from './pages/ValidateUpload'
import ValidationResults from './pages/ValidationResults'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ValidationHistory />} />
        <Route path="/validate" element={<ValidateUpload />} />
        <Route path="/dashboard/validation/:id" element={<ValidationResults />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App