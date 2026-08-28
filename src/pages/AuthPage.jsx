import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Logo from "../components/Logo.jsx";
import "./AuthPage.css";

const logos = {
  google: "https://thesvg.org/icons/google/default.svg",
  microsoft: "https://thesvg.org/icons/microsoft/default.svg",
  entra: "https://thesvg.org/icons/microsoft-azure/default.svg",
};

export default function AuthPage({
  onNavigate,
  initialMode = "signin",
}) {
  const [mode, setMode] = useState(initialMode);
  const [showPassword, setShowPassword] = useState(false);

  const isSignUp = mode === "signup";

  return (
    <div className="auth-page">
      <main className="auth-layout">
        <section className="auth-left">
          <div className="auth-left-content">
            <Logo size="lg" showText={false} />

            <p className="auth-eyebrow">
              LEGAL TECH + AI + COMPLIANCE
            </p>

            <h1>
              Intelligent compliance
              <span>starts here.</span>
            </h1>

            <p className="auth-description">
              Upload your documents, leverage the power of AI, and get
              accurate compliance insights — faster, safer, and smarter.
            </p>

            <div className="auth-cards">
              <div className="auth-card document-card">
                <strong>CONTRACT</strong>
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>

              <div className="auth-card ai-card">
                <Logo size="md" showText={false} />
                <strong>AI Analysis</strong>
              </div>

              <div className="auth-card laws-card">
                <strong>Relevant Laws</strong>
                <p>GDPR Article 6</p>
                <p>Data Protection Act</p>
                <p>Corporate Law</p>
                <p>Employment Law</p>
              </div>
            </div>

            <div className="auth-benefits">
              <span>Faster Verification</span>
              <span>Reduce Legal Risk</span>
              <span>Scale Effortlessly</span>
              <span>Built on Microsoft Azure</span>
            </div>
          </div>
        </section>

        <section className="auth-right">
          <Navbar onNavigate={onNavigate} authMode />

          <div className="auth-trust">
            Secure <b>•</b> Trusted <b>•</b> Enterprise Ready
          </div>

          <div className="auth-form">
            <div className="auth-tabs">
              <button
                type="button"
                className={!isSignUp ? "active" : ""}
                onClick={() => setMode("signin")}
              >
                Sign In
              </button>

              <button
                type="button"
                className={isSignUp ? "active" : ""}
                onClick={() => setMode("signup")}
              >
                Sign Up
              </button>
            </div>

            <h2>{isSignUp ? "Create your account" : "Welcome back"}</h2>

            <p className="auth-subtitle">
              {isSignUp
                ? "Create your CLAW account to get started."
                : "Sign in to your CLAW account to continue."}
            </p>

            <div className="social-login">
              <button type="button">
                <img src={logos.google} alt="Google" />
                <span>Continue with Google</span>
              </button>

              <button type="button">
                <img src={logos.microsoft} alt="Microsoft" />
                <span>Continue with Microsoft</span>
              </button>

              <button type="button">
                <img src={logos.entra} alt="Microsoft Entra ID" />
                <span>
                  Continue with Microsoft Entra ID
                  <small>Work / School Account</small>
                </span>
              </button>
            </div>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            {isSignUp && (
              <label>
                Full Name
                <input type="text" placeholder="Your full name" />
              </label>
            )}

            <label>
              Email Address
              <input type="email" placeholder="you@company.com" />
            </label>

            <label>
              Password
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            {!isSignUp && (
              <button className="forgot-password" type="button">
                Forgot password?
              </button>
            )}

            <button className="auth-submit" type="button">
              {isSignUp ? "Create Account" : "Sign In"}
            </button>

            <p className="auth-switch">
              {isSignUp
                ? "Already have an account?"
                : "Don't have an account?"}

              <button
                type="button"
                onClick={() => setMode(isSignUp ? "signin" : "signup")}
              >
                {isSignUp ? "Sign In" : "Create account"}
              </button>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}