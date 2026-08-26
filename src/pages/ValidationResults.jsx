import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../lib/api'

function ValidationResults() {
  const { id } = useParams()
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await api.get(`/api/validate/${id}/results`)
        setResults(response.data)
      } catch (err) {
        console.error('Failed to load results:', err)
        setError('Could not load results for this document.')
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [id])

  if (loading) return <main className="max-w-2xl mx-auto p-6 text-sm text-gray-400">Loading results...</main>
  if (error) return <main className="max-w-2xl mx-auto p-6 text-sm text-red-500">{error}</main>
  if (!results) return null

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-lg font-medium text-white mb-1">{results.title}</h1>
      <p className="text-sm text-gray-400 mb-5">Checked against your knowledge base</p>

      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-neutral-900 rounded-lg p-4">
          <p className="text-xs text-gray-400 mb-1">Sections checked</p>
          <p className="text-2xl font-medium text-white">{results.overall_summary.total_sections}</p>
        </div>
        <div className="bg-neutral-900 rounded-lg p-4">
          <p className="text-xs text-gray-400 mb-1">Compliant</p>
          <p className="text-2xl font-medium text-green-500">{results.overall_summary.compliant_count}</p>
        </div>
        <div className="bg-neutral-900 rounded-lg p-4">
          <p className="text-xs text-gray-400 mb-1">Non-compliant</p>
          <p className="text-2xl font-medium text-red-500">{results.overall_summary.non_compliant_count}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {results.sections.map((section) => (
          <div
            key={section.section_id}
            className={`rounded-xl border p-4 ${
              section.compliant
                ? 'bg-green-950 border-green-800'
                : 'bg-red-950 border-red-800'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm font-medium text-white">{section.text}</p>
              <span
                className={`text-xs px-2.5 py-1 rounded-md shrink-0 ml-3 ${
                  section.compliant
                    ? 'bg-green-800 text-green-200'
                    : 'bg-red-800 text-red-200'
                }`}
              >
                {section.compliant ? 'Compliant' : 'Non-compliant'}
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-2">{section.reasoning}</p>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>Matched: {section.matched_kb_source}</span>
              <span>Confidence: {Math.round(section.confidence * 100)}%</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ValidationResults