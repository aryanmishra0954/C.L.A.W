import "./Button.css";

/**
 * props: variant ("primary" | "outline" | "ghost"), size ("sm" | "md"),
 * icon (node, right side), onClick, type
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  iconLeft = null,
  className = "",
  ...rest
}) {
  return (
    <button
      className={`claw-btn claw-btn--${variant} claw-btn--${size} ${className}`}
      {...rest}
    >
      {iconLeft ? <span className="claw-btn__icon">{iconLeft}</span> : null}
      <span>{children}</span>
      {icon ? <span className="claw-btn__icon">{icon}</span> : null}
    </button>
  );
}
