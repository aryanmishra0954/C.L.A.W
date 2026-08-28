import { useMemo, useState } from "react";
import UserNavbar from "../components/UserNavbar.jsx";
import "./KBList.css";

const documents = [
  {
    name: "NDA_Acme_Corp_v2.pdf",
    type: "Contract",
    uploaded: "May 24, 2025",
    status: "Ready",
  },
  {
    name: "GDPR_Compliance_Reg.docx",
    type: "Regulation",
    uploaded: "May 24, 2025",
    status: "Ready",
  },
  {
    name: "Employee_Handbook_2024.txt",
    type: "Policy",
    uploaded: "May 23, 2025",
    status: "Processing",
  },
  {
    name: "Services_Agreement_Vendor.pdf",
    type: "Contract",
    uploaded: "May 23, 2025",
    status: "Failed",
  },
];

export default function KBList({ onNavigate, onSignOut }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredDocuments = useMemo(() => {
    return documents.filter((document) => {
      const matchesSearch = document.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || document.type === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <div className="kb-list-page">
      <UserNavbar
        activePage="knowledge-base"
        userName="Duann"
        onNavigate={onNavigate}
        onSignOut={onSignOut}
      />

      <main className="kb-list-main">
        <div className="kb-list-heading">
          <div>
            <p className="kb-list-breadcrumb">Knowledge Base</p>
            <h1>Your knowledge base</h1>
            <p>
              Manage the documents CLAW uses for compliance validation.
            </p>
          </div>

          <button
            type="button"
            className="kb-list-upload-button"
            onClick={() => onNavigate("upload")}
          >
            + Upload document
          </button>
        </div>

        <section className="kb-list-toolbar">
          <label className="kb-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search documents..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <div className="kb-filter-buttons" aria-label="Document filters">
            {["All", "Contract", "Regulation", "Policy"].map((item) => (
              <button
                key={item}
                type="button"
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="kb-list-card">
          <div className="kb-list-card-header">
            <div>
              <h2>Documents</h2>
              <span>{filteredDocuments.length} documents</span>
            </div>

            <button
              type="button"
              onClick={() => onNavigate("upload")}
            >
              Upload new
            </button>
          </div>

          <div className="kb-list-table-wrapper">
            <table className="kb-list-table">
              <thead>
                <tr>
                  <th>Document name</th>
                  <th>Type</th>
                  <th>Uploaded</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredDocuments.map((document) => (
                  <tr key={document.name}>
                    <td>
                      <span className="kb-list-file-icon">PDF</span>
                      <strong>{document.name}</strong>
                    </td>
                    <td>{document.type}</td>
                    <td>{document.uploaded}</td>
                    <td>
                      <span
                        className={`kb-list-status ${document.status.toLowerCase()}`}
                      >
                        {document.status}
                      </span>
                    </td>
                    <td>
                      <div className="kb-list-actions">
                        <button type="button">Open</button>
                        <button type="button">•••</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredDocuments.length === 0 && (
              <div className="kb-list-empty">
                No documents match your search.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}