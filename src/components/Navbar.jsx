import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import "./Navbar.css";

const LINKS = [
  { label: "Features", target: "features" },
  { label: "How It Works", target: "how-it-works" },
  { label: "Technology", target: "technology" },
  { label: "About", target: "about" },
];

export default function Navbar({ onNavigate = () => {} }) {
  return (
    <header className="claw-nav">
      <div className="claw-nav__inner">
        <button
          className="claw-nav__brand"
          onClick={() => onNavigate("landing")}
          aria-label="CLAW home"
        >
          <Logo size="md" />
        </button>

        <nav className="claw-nav__links">
          {LINKS.map((link) => (
            <a key={link.target} className="claw-nav__link" href={`#${link.target}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="claw-nav__actions">
          <button className="claw-nav__signin" onClick={() => onNavigate("auth")}>
            Sign In
          </button>
          <Button size="sm" onClick={() => onNavigate("auth")}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
