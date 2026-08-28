import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import "./Navbar.css";

const links = [
  { label: "Home", target: "landing" },
  { label: "Features", target: "features" },
  { label: "How It Works", target: "how-it-works" },
  { label: "Technology", target: "technology" },
  { label: "About", target: "about" },
];

export default function Navbar({
  onNavigate = () => {},
  authMode = false,
}) {
  const handleLinkClick = (target) => {
    if (target === "landing") {
      onNavigate("landing");
      return;
    }

    window.location.hash = target;
  };

  return (
    <header className={`claw-nav ${authMode ? "claw-nav--auth" : ""}`}>
      <div className="claw-nav__inner">
        <button
          className="claw-nav__brand"
          type="button"
          onClick={() => onNavigate("landing")}
          aria-label="CLAW home"
        >
          <Logo size="md" />
        </button>

        <nav className="claw-nav__links" aria-label="Main navigation">
          {links.map((link) => (
            <button
              key={link.target}
              type="button"
              className="claw-nav__link"
              onClick={() => handleLinkClick(link.target)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {!authMode && (
          <div className="claw-nav__actions">
            <button
              className="claw-nav__signin"
              type="button"
              onClick={() => onNavigate("signin")}
            >
              Sign In
            </button>

            <Button
              size="sm"
              onClick={() => onNavigate("signup")}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}