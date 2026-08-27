import React from 'react';
import { FileText, Trash2, CheckCircle2, Clock } from 'lucide-react';

export default function KBList({ documents = [], onDelete }) {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif",
        background: '#ffffff',
        border: '1px solid #d2d0ce',
        boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '16px 24px',
          borderBottom: '1px solid #edebe9',
          background: '#faf9f8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1b1b1b', margin: 0 }}>
            Active Knowledge Base
          </h3>
          <p style={{ fontSize: 12, color: '#605e5c', margin: '2px 0 0' }}>
            Documents currently used for compliance RAG
          </p>
        </div>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: '#0078d4',
            background: '#eff6fc',
            border: '1px solid #c7e0f4',
            padding: '3px 10px',
          }}
        >
          {documents.length} {documents.length === 1 ? 'Document' : 'Documents'}
        </span>
      </div>

      {/* List */}
      <div>
        {documents.length === 0 ? (
          <div
            style={{
              padding: '48px 24px',
              textAlign: 'center',
              color: '#a19f9d',
              fontSize: 13,
            }}
          >
            No documents uploaded yet. Add a document above to get started.
          </div>
        ) : (
          documents.map((doc, index) => (
            <div
              key={doc.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 24px',
                borderBottom: index < documents.length - 1 ? '1px solid #edebe9' : 'none',
                transition: 'background 0.1s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#faf9f8'}
              onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
            >
              {/* File info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div
                  style={{
                    padding: 8,
                    background: '#eff6fc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FileText size={20} color="#0078d4" />
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: '#1b1b1b', margin: 0 }}>
                    {doc.name}
                  </p>
                  <p style={{ fontSize: 12, color: '#a19f9d', margin: '2px 0 0' }}>
                    Uploaded {doc.date}
                  </p>
                </div>
              </div>

              {/* Status + Delete */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                {doc.status === 'Active' ? (
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#107c10',
                      background: '#dff6dd',
                      border: '1px solid #bad80a',
                      padding: '3px 10px',
                    }}
                  >
                    <CheckCircle2 size={13} />
                    Active
                  </span>
                ) : (
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#8a4b00',
                      background: '#fff4ce',
                      border: '1px solid #f7c948',
                      padding: '3px 10px',
                    }}
                  >
                    <Clock size={13} />
                    Processing
                  </span>
                )}

                <button
                  onClick={() => onDelete && onDelete(doc.id)}
                  title="Delete document"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 6,
                    color: '#a19f9d',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#c50f1f'}
                  onMouseLeave={e => e.currentTarget.style.color = '#a19f9d'}
                >
                  <Trash2 size={17} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}