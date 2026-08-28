import { useState } from "react";
import Logo from "./Logo.jsx";
import "./UserNavbar.css";

export default function UserNavbar({
  activePage = "knowledge-base",
  userName = "Duann",
  onNavigate = () => {},
  onSignOut = () => {},
}) {
  const [profileOpen, setProfileOpen] = useState(false);

  const links = [
    { label: "Knowledge Base", page: "knowledge-base" },
    { label: "Validate", page: "validate" },
    { label: "History", page: "history" },
  ];

  const navigateFromMenu = (page) => {
    setProfileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="user-navbar">
      <div className="user-navbar__inner">
        <button
          type="button"
          className="user-navbar__logo"
          onClick={() => onNavigate("knowledge-base")}
          aria-label="Go to Knowledge Base"
        >
          <Logo size="md" />
        </button>

        <nav
          className="user-navbar__links"
          aria-label="Workspace navigation"
        >
          {links.map((link) => (
            <button
              key={link.page}
              type="button"
              className={`user-navbar__link ${
                activePage === link.page
                  ? "user-navbar__link--active"
                  : ""
              }`}
              onClick={() => onNavigate(link.page)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="user-navbar__right">
          <div className="user-navbar__trust" aria-label="Security status">
            <span className="user-navbar__shield">✓</span>
            <span>Secure</span>
            <b aria-hidden="true">•</b>
            <span>Trusted</span>
            <b aria-hidden="true">•</b>
            <span>Enterprise Ready</span>
          </div>

          <div className="user-navbar__profile">
            <button
              type="button"
              className="user-navbar__profile-button"
              onClick={() => setProfileOpen((open) => !open)}
              aria-expanded={profileOpen}
              aria-haspopup="menu"
            >
              <span className="user-navbar__avatar">
                {userName.charAt(0).toUpperCase()}
              </span>

              <span>{userName}</span>

              <span
                className={`user-navbar__chevron ${
                  profileOpen ? "is-open" : ""
                }`}
                aria-hidden="true"
              >
               ⌄
              </span>
            </button>

            {profileOpen && (
              <div
                className="user-navbar__menu"
                role="menu"
                aria-label="Account menu"
              >
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => navigateFromMenu("settings")}
                >
                  Profile
                </button>

                <button
                  type="button"
                  role="menuitem"
                  onClick={() => navigateFromMenu("knowledge-base")}
                >
                  Workspace
                </button>

                <button
                  type="button"
                  role="menuitem"
                  className="user-navbar__signout"
                  onClick={() => {
                    setProfileOpen(false);
                    onSignOut();
                  }}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}