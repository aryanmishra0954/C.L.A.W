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

  const navigationItems = [
    { label: "Knowledge Base", page: "knowledge-base" },
    { label: "Validate", page: "validate" },
    { label: "History", page: "history" },
  ];

  const goTo = (page) => {
    setProfileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="user-navbar">
      <div className="user-navbar__inner">
        <button
          type="button"
          className="user-navbar__logo"
          onClick={() => goTo("knowledge-base")}
          aria-label="Open Knowledge Base"
        >
          <Logo size="md" />
        </button>

        <nav
          className="user-navbar__links"
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <button
              key={item.page}
              type="button"
              className={`user-navbar__link ${
                activePage === item.page
                  ? "user-navbar__link--active"
                  : ""
              }`}
              onClick={() => goTo(item.page)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="user-navbar__right">
          <div className="user-navbar__trust">
            <span className="user-navbar__shield">✓</span>
            <span>Secure</span>
            <b>•</b>
            <span>Trusted</span>
            <b>•</b>
            <span>Enterprise Ready</span>
          </div>

          <div className="user-navbar__profile">
            <button
              type="button"
              className="user-navbar__profile-button"
              onClick={() => setProfileOpen((current) => !current)}
              aria-haspopup="menu"
              aria-expanded={profileOpen}
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
                aria-label="Profile menu"
              >
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => goTo("settings")}
                >
                  Profile &amp; settings
                </button>

                <button
                  type="button"
                  role="menuitem"
                  onClick={() => goTo("knowledge-base")}
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