import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'

function ValidationHistory() {
  const [validations, setValidations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await api.get('/api/validate/history')
        setValidations(response.data.validations)
      } catch (err) {
        console.error('Failed to load history:', err)
        setError('Could not load your validations.')
      } finally {
        setLoading(false)
      }
    }

    fetchHistory()
  }, [])

  return (
    <main className="max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg font-medium text-white">Validations</h1>
        <Link
          to="/validate"
          className="text-sm border border-neutral-600 rounded-md px-4 py-2 bg-neutral-800 text-white hover:bg-neutral-700"
        >
          Upload document
        </Link>
      </div>

      {loading && <p className="text-sm text-gray-400">Loading...</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}

      {!loading && !error && validations.length === 0 && (
        <p className="text-sm text-gray-400">
          No validations yet. Upload a document to get started.
        </p>
      )}

      <div className="flex flex-col gap-2">
        {validations.map((v) => (
          <div
            key={v.validation_id}
            className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 flex justify-between items-center"
          >
            <span className="text-sm text-white">{v.title}</span>
            <span className="text-xs text-gray-400">{v.status}</span>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ValidationHistory