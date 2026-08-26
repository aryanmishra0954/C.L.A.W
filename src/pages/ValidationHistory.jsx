import { Link } from 'react-router-dom'

function ValidationHistory() {
  return (
    <div>
      <h1>Validation History</h1>
      <Link to="/validate">Upload a document</Link>
    </div>
  )
}

export default ValidationHistory