import { useState, useRef } from 'react'
import {api} from '../lib/api'
function ValidateUpload() {
  const [file, setFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef(null)

  const handleFileChange = (e) => {
    const selected = e.target.files[0]
    setFile(selected)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const dropped = e.dataTransfer.files[0]
    if (dropped) {
      setFile(dropped)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleRemove = () => {
    setFile(null)
  }

  const handleBrowseClick = () => {
    inputRef.current.click()
  }
  
 const handleUpload = async () => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('title', file.name)

  try {
    const response = await api.post('/api/validate', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    console.log('validation_id:', response.data.validation_id)
    console.log('status:', response.data.status)
  } catch (error) {
    console.error('Upload failed:', error)
  }
}
  return (
    <main className="max-w-lg mx-auto p-6">
      <h1 className="text-lg font-medium mb-1 text-white">Validate a document</h1>
      <p className="text-sm text-gray-400 mb-6">
        Upload a document to check it against your knowledge base.
      </p>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-xl px-6 py-10 text-center bg-neutral-900 ${
          isDragging ? 'border-blue-500' : 'border-neutral-700'
        }`}
      >
        <p className="text-sm mb-1 text-white">Drag and drop a file here</p>
        <p className="text-xs text-gray-500 mb-4">
          Supports PDF, DOCX, and scanned images
        </p>

        <button
          onClick={handleBrowseClick}
          className="text-sm border border-neutral-600 rounded-md px-4 py-2 bg-neutral-800 text-white hover:bg-neutral-700"
        >
          Browse files
        </button>

        <input
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />

        {file && (
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white">
            <span>{file.name}</span>
            <button
              onClick={handleRemove}
              className="text-gray-400 hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      <button
  onClick={handleUpload}
  disabled={!file}
  className="w-full bg-white text-black rounded-md py-2.5 text-sm mt-5 disabled:bg-neutral-700 disabled:text-neutral-400"
>
  Upload and validate
</button>
    </main>
  )
}

export default ValidateUpload