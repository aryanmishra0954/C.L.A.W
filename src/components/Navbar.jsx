import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import "./Navbar.css";

const links = [
  { label: "Features", target: "features" },
  { label: "How It Works", target: "how-it-works" },
  { label: "Technology", target: "technology" },
  { label: "About", target: "about" },
];

export default function Navbar({
  onNavigate = () => {},
  authMode = false,
}) {
  return (
    <header className={`claw-nav ${authMode ? "claw-nav--auth" : ""}`}>
      <div className="claw-nav__inner">
        {!authMode && (
          <button
            className="claw-nav__brand"
            type="button"
            onClick={() => onNavigate("landing")}
            aria-label="CLAW home"
          >
            <Logo size="md" />
          </button>
        )}

        <nav className="claw-nav__links">
          {links.map((link) => (
            <a
              key={link.target}
              className="claw-nav__link"
              href={`#${link.target}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {!authMode && (
          <div className="claw-nav__actions">
            <button
              className="claw-nav__signin"
              type="button"
              onClick={() => onNavigate("auth")}
            >
              Sign In
            </button>

            <Button
              size="sm"
              onClick={() => onNavigate("auth")}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}