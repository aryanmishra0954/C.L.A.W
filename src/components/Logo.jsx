import "./Logo.css";

export default function Logo({ size = "md", showText = true }) {
  return (
    <span className={`claw-logo claw-logo--${size}`}>
      <span className="claw-logo__mark" aria-hidden="true">
        C
      </span>

      {showText && (
        <span className="claw-logo__text">CLAW</span>
      )}
    </span>
  );
}