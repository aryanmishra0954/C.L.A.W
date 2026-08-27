import React, { useState } from 'react';
import { UploadCloud, FileText, X, ShieldCheck, Loader2 } from 'lucide-react';

export default function Validate_Upload({ onValidationStart }) {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e) => { e.preventDefault(); setIsDragging(false); };
  const handleDrop = (e) => {
    e.preventDefault(); setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]);
  };
  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert('Please select a document to validate.');
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setFile(null);
      if (onValidationStart) onValidationStart();
    } catch {
      alert('Failed to start validation process.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif",
        background: '#ffffff',
        border: '1px solid #d2d0ce',
        boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
        maxWidth: 560,
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '28px 32px 24px',
          borderBottom: '1px solid #edebe9',
          background: '#faf9f8',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <div
          style={{
            padding: 10,
            background: '#eff6fc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ShieldCheck size={22} color="#0078d4" />
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#0078d4', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 4px' }}>
            Document Validation
          </p>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#1b1b1b', margin: 0, lineHeight: 1.2 }}>
            Run Compliance Check
          </h2>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <p style={{ fontSize: 13, color: '#605e5c', margin: 0, lineHeight: 1.6 }}>
          Upload a contract or corporate document to check for compliance against the Knowledge Base.
        </p>

        {/* Drop zone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{
            border: `2px dashed ${isDragging ? '#0078d4' : '#c8c6c4'}`,
            background: isDragging ? '#eff6fc' : '#faf9f8',
            padding: '32px 20px',
            transition: 'all 0.15s ease',
            cursor: 'pointer',
            textAlign: 'center',
          }}
        >
          {file ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <FileText size={28} color="#0078d4" />
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: '#1b1b1b', margin: 0 }}>{file.name}</p>
                  <p style={{ fontSize: 12, color: '#605e5c', margin: '2px 0 0' }}>Ready to validate</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setFile(null)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: 6, color: '#605e5c', display: 'flex',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#c50f1f'}
                onMouseLeave={e => e.currentTarget.style.color = '#605e5c'}
              >
                <X size={18} />
              </button>
            </div>
          ) : (
            <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', gap: 10 }}>
              <UploadCloud size={32} color="#0078d4" />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#1b1b1b' }}>
                Click to browse or drag file here
              </span>
              <span style={{ fontSize: 12, color: '#605e5c' }}>PDF or DOCX, up to 25 MB</span>
              <input type="file" accept=".pdf,.docx" style={{ display: 'none' }} onChange={handleFileSelect} />
            </label>
          )}
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={!file || isUploading}
          style={{
            width: '100%',
            padding: '10px 20px',
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "'Segoe UI', sans-serif",
            border: 'none',
            cursor: !file || isUploading ? 'not-allowed' : 'pointer',
            background: !file || isUploading ? '#c8c6c4' : '#0078d4',
            color: !file || isUploading ? '#a19f9d' : '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            transition: 'background 0.15s ease',
          }}
          onMouseEnter={e => { if (file && !isUploading) e.currentTarget.style.background = '#106ebe'; }}
          onMouseLeave={e => { if (file && !isUploading) e.currentTarget.style.background = '#0078d4'; }}
        >
          {isUploading ? (
            <>
              <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
              Running Compliance Check…
            </>
          ) : (
            <>
              <ShieldCheck size={16} />
              Run Compliance Check
            </>
          )}
        </button>
      </div>
    </div>
  );
}