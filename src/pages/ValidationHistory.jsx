import { useMemo, useState } from "react";
import UserNavbar from "../components/UserNavbar.jsx";
import "./ValidationHistory.css";

export default function ValidationHistory({
  historyItems = [],
  userName,
  onNavigate,
  onSignOut,
}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredItems = useMemo(() => {
    return historyItems.filter((item) => {
      const documentName = item.name || item.fileName || "";

      const matchesSearch = documentName
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || item.risk === filter;

      return matchesSearch && matchesFilter;
    });
  }, [historyItems, search, filter]);

  const totalValidations = historyItems.length;

  const averageScore =
    totalValidations > 0
      ? Math.round(
          historyItems.reduce(
            (total, item) => total + Number(item.score || 0),
            0
          ) / totalValidations
        )
      : 0;

  const lowRiskCount = historyItems.filter(
    (item) => item.risk === "Low risk"
  ).length;

  const attentionCount = historyItems.filter(
    (item) =>
      item.risk === "Medium risk" ||
      item.risk === "High risk"
  ).length;

  return (
    <div className="history-page">
      <UserNavbar
        activePage="history"
        userName={userName}
        onNavigate={onNavigate}
        onSignOut={onSignOut}
      />

      <main className="history-main">
        <div className="history-heading">
          <div>
            <p className="history-eyebrow">WORKSPACE ACTIVITY</p>
            <h1>Validation history</h1>
            <p>
              Review your previous document validations and compliance scores.
            </p>
          </div>

          <button
            type="button"
            className="history-primary-button"
            onClick={() => onNavigate("validate")}
          >
            New validation
          </button>
        </div>

        <section className="history-overview">
          <div>
            <strong>{totalValidations}</strong>
            <span>Total validations</span>
          </div>

          <div>
            <strong>{averageScore}</strong>
            <span>Average score</span>
          </div>

          <div>
            <strong className="history-green">
              {lowRiskCount}
            </strong>
            <span>Low-risk results</span>
          </div>

          <div>
            <strong className="history-orange">
              {attentionCount}
            </strong>
            <span>Needs attention</span>
          </div>
        </section>

        <section className="history-card">
          <div className="history-card-header">
            <div>
              <h2>Previous validations</h2>
              <p>
                {filteredItems.length}{" "}
                {filteredItems.length === 1 ? "result" : "results"} found
              </p>
            </div>

            <label className="history-search">
              <span aria-hidden="true">⌕</span>

              <input
                type="search"
                placeholder="Search documents..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
          </div>

          <div className="history-filters">
            {["All", "Low risk", "Medium risk", "High risk"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  className={filter === item ? "active" : ""}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div className="history-table-wrapper">
            {filteredItems.length > 0 ? (
              <table className="history-table">
                <thead>
                  <tr>
                    <th>Document</th>
                    <th>Type</th>
                    <th>Validated on</th>
                    <th>Score</th>
                    <th>Risk level</th>
                    <th>Status</th>
                    <th />
                  </tr>
                </thead>

                <tbody>
                  {filteredItems.map((item) => {
                    const documentName =
                      item.name || item.fileName || "Untitled document";

                    const score = Number(item.score || 0);

                    return (
                      <tr key={item.id}>
                        <td>
                          <span className="history-file-icon">
                            {item.type === "PDF" ? "PDF" : "FILE"}
                          </span>

                          <strong>{documentName}</strong>
                        </td>

                        <td>{item.documentType || item.type || "Document"}</td>

                        <td>
                          {item.date ||
                            item.validatedAt ||
                            "Not available"}
                        </td>

                        <td>
                          <span className="history-score">
                            {score}
                          </span>

                          <span className="history-score-total">
                            /100
                          </span>
                        </td>

                        <td>
                          <span
                            className={`history-risk ${
                              item.risk
                                ? item.risk
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")
                                : ""
                            }`}
                          >
                            {item.risk || "Not assessed"}
                          </span>
                        </td>

                        <td>
                          <span className="history-status">
                            {item.status || "Completed"}
                          </span>
                        </td>

                        <td>
                          <button
                            type="button"
                            className="history-view-button"
                            onClick={() =>
                              onNavigate("results", item)
                            }
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="history-empty">
                {historyItems.length === 0
                  ? "No validation history yet."
                  : "No validation records match your search."}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}