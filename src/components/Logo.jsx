import "./Logo.css";

export default function Logo({ size = "md", showText = true }) {
  return (
    <span
      className={`claw-logo claw-logo--${size}`}
      aria-label={showText ? "CLAW" : "CLAW logo"}
    >
      <span className="claw-logo__mark" aria-hidden="true">
        <span className="claw-logo__letter">C</span>
      </span>

      {showText && (
        <span className="claw-logo__text">CLAW</span>
      )}
    </span>
  );
}