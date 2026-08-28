import { useMemo, useState } from "react";
import UserNavbar from "../components/UserNavbar.jsx";
import "./ValidationHistory.css";

const historyItems = [
  {
    id: 1,
    name: "export_8306018686362875019.pdf",
    type: "Contract",
    date: "May 24, 2025 · 10:45 AM",
    score: 78,
    risk: "Medium risk",
    status: "Completed",
  },
  {
    id: 2,
    name: "GDPR_Compliance_Reg.docx",
    type: "Regulation",
    date: "May 23, 2025 · 03:20 PM",
    score: 94,
    risk: "Low risk",
    status: "Completed",
  },
  {
    id: 3,
    name: "Employee_Handbook_2024.txt",
    type: "Policy",
    date: "May 22, 2025 · 11:08 AM",
    score: 63,
    risk: "High risk",
    status: "Completed",
  },
  {
    id: 4,
    name: "Services_Agreement_Vendor.pdf",
    type: "Contract",
    date: "May 20, 2025 · 09:42 AM",
    score: 86,
    risk: "Low risk",
    status: "Completed",
  },
];

export default function ValidationHistory({ onNavigate, onSignOut }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredItems = useMemo(() => {
    return historyItems.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || item.risk === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <div className="history-page">
      <UserNavbar
        activePage="history"
        userName="Duann"
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
            <strong>{historyItems.length}</strong>
            <span>Total validations</span>
          </div>

          <div>
            <strong>80</strong>
            <span>Average score</span>
          </div>

          <div>
            <strong className="history-green">3</strong>
            <span>Low-risk results</span>
          </div>

          <div>
            <strong className="history-orange">1</strong>
            <span>Needs attention</span>
          </div>
        </section>

        <section className="history-card">
          <div className="history-card-header">
            <div>
              <h2>Previous validations</h2>
              <p>{filteredItems.length} results found</p>
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
              ),
            )}
          </div>

          <div className="history-table-wrapper">
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
                {filteredItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span className="history-file-icon">PDF</span>
                      <strong>{item.name}</strong>
                    </td>
                    <td>{item.type}</td>
                    <td>{item.date}</td>
                    <td>
                      <span className="history-score">
                        {item.score}
                      </span>
                      <span className="history-score-total">/100</span>
                    </td>
                    <td>
                      <span
                        className={`history-risk ${item.risk
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {item.risk}
                      </span>
                    </td>
                    <td>
                      <span className="history-status">
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="history-view-button"
                        onClick={() => onNavigate("results")}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredItems.length === 0 && (
              <div className="history-empty">
                No validation records match your search.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}