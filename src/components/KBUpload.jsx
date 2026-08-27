import React, { useState } from 'react';
import { UploadCloud, FileText, X, Loader2 } from 'lucide-react';

export default function KBUpload({ onUploadComplete }) {
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
    if (!file) return alert('Please select a document.');
    setIsUploading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFile(null);
      if (onUploadComplete) onUploadComplete();
    } catch {
      alert('Upload failed.');
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
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

        {/* Left: Info */}
        <div style={{ padding: '36px 40px', borderRight: '1px solid #edebe9' }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#0078d4', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
            Knowledge Base
          </p>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#1b1b1b', margin: '0 0 12px', lineHeight: 1.25 }}>
            Build the Knowledge Base
          </h2>
          <p style={{ fontSize: 14, color: '#605e5c', lineHeight: 1.6, margin: '0 0 24px' }}>
            Upload statutory laws, corporate bylaws, or regulatory guidelines. CLAW uses these documents as the source of truth to validate contracts and flag non-compliance risks.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Supported formats: PDF, DOCX',
              'Maximum file size: 25 MB',
              'Automatic vector embedding via Azure',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: '#0078d4', flexShrink: 0,
                }} />
                <span style={{ fontSize: 13, color: '#605e5c' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Upload */}
        <div style={{ padding: '36px 40px', background: '#faf9f8', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Drop zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              style={{
                border: `2px dashed ${isDragging ? '#0078d4' : '#c8c6c4'}`,
                background: isDragging ? '#eff6fc' : '#ffffff',
                padding: '28px 20px',
                transition: 'all 0.15s ease',
                cursor: 'pointer',
              }}
            >
              {file ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <FileText size={28} color="#0078d4" />
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: '#1b1b1b', margin: 0 }}>{file.name}</p>
                      <p style={{ fontSize: 12, color: '#605e5c', margin: '2px 0 0' }}>Ready to upload</p>
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
                <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', gap: 8 }}>
                  <UploadCloud size={32} color="#0078d4" />
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#1b1b1b' }}>
                    Click to browse or drag file here
                  </span>
                  <span style={{ fontSize: 12, color: '#605e5c' }}>PDF or DOCX, up to 25 MB</span>
                  <input type="file" accept=".pdf,.docx" style={{ display: 'none' }} onChange={handleFileSelect} />
                </label>
              )}
            </div>

            {/* Submit button */}
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
                  Processing…
                </>
              ) : (
                'Upload Document'
              )}
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}