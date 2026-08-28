import { useRef, useState } from "react";
import UserNavbar from "../components/UserNavbar.jsx";
import "./ValidateUpload.css";

const regulations = [
  "GDPR",
  "Data Protection Act",
  "Contract Law",
  "Employment Law",
];

export default function ValidateUpload({ onNavigate, onSignOut }) {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [selectedLaws, setSelectedLaws] = useState(["GDPR"]);
  const [status, setStatus] = useState("idle");

  const selectFile = (selectedFile) => {
    if (!selectedFile) return;

    setFile(selectedFile);
    setStatus("idle");
  };

  const toggleLaw = (law) => {
    setSelectedLaws((currentLaws) =>
      currentLaws.includes(law)
        ? currentLaws.filter((item) => item !== law)
        : [...currentLaws, law],
    );
  };

  const startValidation = () => {
    if (!file || selectedLaws.length === 0) return;

    setStatus("validating");

    window.setTimeout(() => {
      setStatus("complete");
    }, 3000);
  };

  if (status === "validating") {
    return (
      <div className="validate-page">
        <UserNavbar
          activePage="validate"
          userName="Duann"
          onNavigate={onNavigate}
          onSignOut={onSignOut}
        />

        <main className="validation-loading-screen">
          <section className="validation-loading-card">
            <div
              className="validation-spinner"
              aria-label="Validation in progress"
            />

            <p className="validate-eyebrow">AI COMPLIANCE REVIEW</p>

            <h1>Analyzing your document</h1>

            <p>
              CLAW is reviewing your document against the selected laws and
              regulations. This may take a moment.
            </p>

            <div className="validation-progress">
              <span />
            </div>

            <div className="validation-loading-steps">
              <span className="complete">✓ Reading document</span>
              <span className="active">
                Analyzing compliance clauses
              </span>
              <span>Preparing validation results</span>
            </div>

            <button
              type="button"
              className="validation-cancel-button"
              onClick={() => setStatus("idle")}
            >
              Cancel validation
            </button>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="validate-page">
      <UserNavbar
        activePage="validate"
        userName="Duann"
        onNavigate={onNavigate}
        onSignOut={onSignOut}
      />

      <main className="validate-main">
        <p className="validate-breadcrumb">
          <button
            type="button"
            onClick={() => onNavigate("knowledge-base")}
          >
            Knowledge Base
          </button>
          <span>/</span>
          <span>Validate</span>
        </p>

        <section className="validate-heading">
          <div>
            <p className="validate-eyebrow">AI COMPLIANCE REVIEW</p>
            <h1>Validate a document</h1>
            <p>
              Upload a document and compare it against the regulations that
              matter to your business.
            </p>
          </div>
        </section>

        <section className="validate-layout">
          <div className="validate-card">
            <div className="validate-card-title">
              <span>01</span>
              <div>
                <h2>Choose your document</h2>
                <p>
                  Use a document from your device to begin validation.
                </p>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx,.txt"
              hidden
              onChange={(event) => selectFile(event.target.files?.[0])}
            />

            <button
              type="button"
              className={`validate-dropzone ${file ? "has-file" : ""}`}
              onClick={() => fileInputRef.current?.click()}
            >
              <span className="validate-upload-mark" aria-hidden="true">
                ↑
              </span>

              {file ? (
                <>
                  <strong>{file.name}</strong>
                  <small>
                    {Math.max(1, Math.round(file.size / 1024))} KB selected
                  </small>
                  <em>Choose another file</em>
                </>
              ) : (
                <>
                  <strong>Upload a document</strong>
                  <small>PDF, DOCX, or TXT up to 25 MB</small>
                  <em>Browse files</em>
                </>
              )}
            </button>
          </div>

          <div className="validate-card">
            <div className="validate-card-title">
              <span>02</span>
              <div>
                <h2>Select applicable laws</h2>
                <p>
                  Choose one or more references for the AI review.
                </p>
              </div>
            </div>

            <div className="validate-law-list">
              {regulations.map((law) => {
                const isSelected = selectedLaws.includes(law);

                return (
                  <label
                    key={law}
                    className={`validate-law ${
                      isSelected ? "selected" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleLaw(law)}
                    />

                    <span className="validate-checkbox">✓</span>
                    <span>{law}</span>
                  </label>
                );
              })}
            </div>

            <button
              type="button"
              className="validate-start-button"
              disabled={!file || selectedLaws.length === 0}
              onClick={startValidation}
            >
              Start validation
              <span aria-hidden="true">→</span>
            </button>

            {status === "complete" && (
              <div className="validate-success">
                <span>Validation complete. Results are ready to view.</span>

                <button
                  type="button"
                  onClick={() => onNavigate("results")}
                >
                  View results
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}