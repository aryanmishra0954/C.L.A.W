import { useRef, useState } from "react";
import UserNavbar from "../components/UserNavbar.jsx";
import "./KBUpload.css";

const recentUploads = [
  {
    name: "NDA_Acme_Corp_v2.pdf",
    type: "Contract",
    date: "May 24, 2025 · 10:30 AM",
    status: "Processing...",
    statusClass: "processing",
  },
  {
    name: "GDPR_Compliance_Reg.docx",
    type: "Regulation",
    date: "May 24, 2025 · 09:15 AM",
    status: "Ready",
    statusClass: "ready",
  },
  {
    name: "Employee_Handbook_2024.txt",
    type: "Policy",
    date: "May 23, 2025 · 04:42 PM",
    status: "Ready",
    statusClass: "ready",
  },
  {
    name: "Services_Agreement_Vendor.pdf",
    type: "Contract",
    date: "May 23, 2025 · 11:05 AM",
    status: "Failed",
    statusClass: "failed",
  },
];

export default function KBUpload({ onNavigate, onSignOut }) {
  const fileInputRef = useRef(null);
  const [documentType, setDocumentType] = useState("Contract");
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFile = (file) => {
    if (!file) return;
    setSelectedFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    handleFile(event.dataTransfer.files?.[0]);
  };

  return (
    <div className="kb-upload-page">
      <UserNavbar
        activePage="knowledge-base"
        userName="Duann"
        onNavigate={onNavigate}
        onSignOut={onSignOut}
      />

      <main className="kb-upload-main">
        <div className="kb-upload-breadcrumb">
          <button type="button" onClick={() => onNavigate("knowledge-base")}>
            Knowledge Base
          </button>
          <span>/</span>
          <span>Upload</span>
        </div>

        <section className="kb-upload-heading">
          <h1>Add documents to your knowledge base</h1>
          <p>
            Upload your documents, leverage the power of AI, and get accurate
            compliance insights — faster, safer, and smarter.
          </p>
        </section>

        <section className="kb-upload-grid">
          <div className="kb-upload-left">
            <div
              className={`kb-dropzone ${isDragging ? "is-dragging" : ""}`}
              onDragOver={(event) => {
                event.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.txt"
                hidden
                onChange={(event) => handleFile(event.target.files?.[0])}
              />

              <div className="kb-upload-icon" aria-hidden="true">
                ↑
              </div>

              {selectedFile ? (
  <>
                <h2>{selectedFile.name}</h2>

                <p>
                  {Math.max(1, Math.round(selectedFile.size / 1024))} KB selected
                </p>

                <div className="kb-selected-actions">
                  <button
                    type="button"
                    className="kb-upload-primary"
                    onClick={() => setUploadStatus("uploaded")}
                  >
                    Upload document
                  </button>

                  <button
                    type="button"
                    className="kb-upload-secondary"
                    onClick={() => {
                      setSelectedFile(null);
                      setUploadStatus("");
                    }}
                  >
                    Choose another file
                  </button>
                </div>

                {uploadStatus === "uploaded" && (
                  <p className="kb-upload-success">
                    Document uploaded successfully.
                  </p>
                )}
              </>
            ) : (
              <>
                <h2>
                  Drop your files here or{" "}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    browse
                  </button>
                </h2>

                <p>PDF, DOCX, TXT up to 25 MB</p>

                <button
                  type="button"
                  className="kb-upload-primary"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Browse files
                </button>
              </>
            )}
            </div>

            <div className="kb-document-types">
              <h2>Document type</h2>

              <div className="kb-type-options">
                {["Contract", "Regulation", "Policy"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`kb-type-option ${
                      documentType === type ? "selected" : ""
                    }`}
                    onClick={() => setDocumentType(type)}
                  >
                    <span className="kb-file-icon" aria-hidden="true">
                      ▤
                    </span>
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="kb-upload-sidebar">
            <div className="kb-checklist-card">
              <h2>Before you upload</h2>

              <ul>
                <li>
                  <span>✓</span>
                  Clear document (no blur/glare)
                </li>
                <li>
                  <span>✓</span>
                  Supported format (.pdf, .docx, .txt)
                </li>
                <li>
                  <span>✓</span>
                  No password protection
                </li>
              </ul>
            </div>

            <div className="kb-document-illustration" aria-hidden="true">
              <div className="kb-paper kb-paper-back" />
              <div className="kb-paper kb-paper-middle" />
              <div className="kb-paper kb-paper-front">
                <strong>CONTRACT</strong>
                <i />
                <i />
                <i />
                <i />
                <i />
                <span>✓</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="kb-recent-section">
          <div className="kb-section-header">
            <h2>Recent uploads</h2>
            <button type="button" onClick={() => onNavigate("knowledge-base")}>
              View all uploads →
            </button>
          </div>

          <div className="kb-table-wrapper">
            <table className="kb-upload-table">
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>Document Type</th>
                  <th>Uploaded On</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentUploads.map((upload) => (
                  <tr key={upload.name}>
                    <td>
                      <span className="kb-pdf-icon">PDF</span>
                      {upload.name}
                    </td>
                    <td>{upload.type}</td>
                    <td>{upload.date}</td>
                    <td>
                      <span className={`kb-status ${upload.statusClass}`}>
                        {upload.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}