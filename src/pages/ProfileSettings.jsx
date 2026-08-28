import { useState } from "react";
import UserNavbar from "../components/UserNavbar.jsx";
import "./ProfileSettings.css";

export default function ProfileSettings({ onNavigate, onSignOut }) {
  const [name, setName] = useState("Duann");
  const [email, setEmail] = useState("duann@example.com");
  const [saved, setSaved] = useState(false);
  const [confirmSignOut, setConfirmSignOut] = useState(false);

  const [notifications, setNotifications] = useState({
    validation: true,
    completed: true,
    weekly: false,
  });

  const toggleNotification = (key) => {
    setNotifications((current) => ({
      ...current,
      [key]: !current[key],
    }));
    setSaved(false);
  };

  const saveSettings = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <div className="profile-settings-page">
      <UserNavbar
        activePage="profile"
        userName={name}
        onNavigate={onNavigate}
        onSignOut={() => setConfirmSignOut(true)}
      />

      <main className="profile-settings-main">
        <div className="profile-settings-breadcrumb">
          <button
            type="button"
            onClick={() => onNavigate("knowledge-base")}
          >
            Workspace
          </button>
          <span>/</span>
          <span>Profile &amp; settings</span>
        </div>

        <header className="profile-settings-heading">
          <div>
            <p className="profile-settings-eyebrow">ACCOUNT CONTROL</p>
            <h1>Profile &amp; settings</h1>
            <p>
              Manage your account details and notification preferences.
            </p>
          </div>

          <div className="profile-settings-avatar" aria-hidden="true">
            {name.charAt(0).toUpperCase()}
          </div>
        </header>

        <form
          className="profile-settings-layout"
          onSubmit={saveSettings}
        >
          <section className="profile-settings-card">
            <div className="profile-settings-card-heading">
              <div>
                <h2>Account details</h2>
                <p>
                  These details identify you in your CLAW workspace.
                </p>
              </div>

              <span className="profile-settings-badge">Verified</span>
            </div>

            <label className="profile-settings-field">
              <span>Full name</span>
              <input
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setSaved(false);
                }}
                required
              />
            </label>

            <label className="profile-settings-field">
              <span>Email address</span>
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSaved(false);
                }}
                required
              />
            </label>

            <div className="profile-settings-field">
              <span>Workspace role</span>
              <div className="profile-settings-readonly">
                Compliance analyst
              </div>
            </div>
          </section>

          <section className="profile-settings-card">
            <div className="profile-settings-card-heading">
              <div>
                <h2>Notification preferences</h2>
                <p>Choose when CLAW should keep you informed.</p>
              </div>
            </div>

            <div className="profile-settings-preferences">
              <PreferenceRow
                title="Validation updates"
                description="Get notified when analysis changes status."
                checked={notifications.validation}
                onChange={() => toggleNotification("validation")}
              />

              <PreferenceRow
                title="Completed validations"
                description="Receive a notification when results are ready."
                checked={notifications.completed}
                onChange={() => toggleNotification("completed")}
              />

              <PreferenceRow
                title="Weekly activity summary"
                description="Receive a weekly workspace overview."
                checked={notifications.weekly}
                onChange={() => toggleNotification("weekly")}
              />
            </div>
          </section>

          <div className="profile-settings-actions">
            {saved && (
              <span className="profile-settings-saved">
                Changes saved
              </span>
            )}

            <button type="submit" className="profile-settings-save">
              Save changes
            </button>
          </div>
        </form>

        <section className="profile-settings-danger">
          <div>
            <h2>Sign out</h2>
            <p>End your current CLAW workspace session.</p>
          </div>

          <button
            type="button"
            onClick={() => setConfirmSignOut(true)}
          >
            Sign out
          </button>
        </section>
      </main>

      {confirmSignOut && (
        <div className="profile-settings-modal-backdrop">
          <section
            className="profile-settings-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="signout-title"
          >
            <h2 id="signout-title">Sign out of CLAW?</h2>
            <p>
              You can sign back in at any time to return to your workspace.
            </p>

            <div className="profile-settings-modal-actions">
              <button
                type="button"
                onClick={() => setConfirmSignOut(false)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="confirm"
                onClick={onSignOut}
              >
                Sign out
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

function PreferenceRow({
  title,
  description,
  checked,
  onChange,
}) {
  return (
    <label className="profile-settings-preference">
      <span>
        <strong>{title}</strong>
        <small>{description}</small>
      </span>

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      <i aria-hidden="true" />
    </label>
  );
}