import { useMemo, useState } from "react";
import UserNavbar from "../components/UserNavbar.jsx";
import "./KBList.css";

export default function KBList({
  documents = [],
  userName = "",
  onNavigate,
  onSignOut,
  loading = false,
  error = "",
  onOpenDocument,
  onDocumentAction,
}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredDocuments = useMemo(() => {
    return documents.filter((document) => {
      const documentName = document.name || "";
      const documentType = document.type || "";

      const matchesSearch = documentName
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || documentType === filter;

      return matchesSearch && matchesFilter;
    });
  }, [documents, search, filter]);

  return (
    <div className="kb-list-page">
      <UserNavbar
        activePage="knowledge-base"
        userName={userName}
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
            onClick={() => onNavigate?.("upload")}
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

          <div
            className="kb-filter-buttons"
            aria-label="Document filters"
          >
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

              {!loading && !error && (
                <span>
                  {filteredDocuments.length}{" "}
                  {filteredDocuments.length === 1
                    ? "document"
                    : "documents"}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => onNavigate?.("upload")}
            >
              Upload new
            </button>
          </div>

          <div className="kb-list-table-wrapper">
            {loading ? (
              <div className="kb-list-empty">
                Loading documents...
              </div>
            ) : error ? (
              <div className="kb-list-empty">
                {error}
              </div>
            ) : filteredDocuments.length === 0 ? (
              <div className="kb-list-empty">
                {search || filter !== "All"
                  ? "No documents match your search."
                  : "No documents have been uploaded yet."}
              </div>
            ) : (
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
                  {filteredDocuments.map((document) => {
                    const documentId =
                      document.id || document._id || document.name;

                    const fileType =
                      document.fileType ||
                      document.extension ||
                      "FILE";

                    const status =
                      document.status || "Unknown";

                    return (
                      <tr key={documentId}>
                        <td>
                          <span className="kb-list-file-icon">
                            {String(fileType)
                              .replace(".", "")
                              .slice(0, 4)
                              .toUpperCase()}
                          </span>

                          <strong>
                            {document.name || "Untitled document"}
                          </strong>
                        </td>

                        <td>
                          {document.type || "—"}
                        </td>

                        <td>
                          {document.uploaded || "—"}
                        </td>

                        <td>
                          <span
                            className={`kb-list-status ${String(
                              status
                            ).toLowerCase()}`}
                          >
                            {status}
                          </span>
                        </td>

                        <td>
                          <div className="kb-list-actions">
                            <button
                              type="button"
                              onClick={() =>
                                onOpenDocument?.(document)
                              }
                            >
                              Open
                            </button>

                            <button
                              type="button"
                              aria-label={`Actions for ${
                                document.name || "document"
                              }`}
                              onClick={() =>
                                onDocumentAction?.(document)
                              }
                            >
                              •••
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
