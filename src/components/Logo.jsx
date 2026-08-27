import "./Logo.css";

/**
 * CLAW C-mark + wordmark.
 * props: size ("sm" | "md" | "lg"), showText (bool), variant ("dark" | "light")
 */
export default function Logo({ size = "md", showText = true, variant = "dark" }) {
  return (
    <span className={`claw-logo claw-logo--${size} claw-logo--${variant}`}>
      <svg className="claw-logo__mark" viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M44 15.5A24 24 0 1 0 44 48.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M52 24A16 16 0 1 0 52 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
          opacity="0.55"
        />
        <circle cx="50" cy="44" r="4.5" fill="currentColor" />
      </svg>
      {showText ? <span className="claw-logo__word">CLAW</span> : null}
    </span>
  );
}
