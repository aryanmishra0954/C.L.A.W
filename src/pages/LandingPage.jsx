  import {
    Sparkles,
    ShieldCheck,
    FileCheck,
    AlertTriangle,
    BarChart3,
    Lock,
    Zap,
    Scale,
    Landmark,
    HeartPulse,
    Cpu,
    Factory,
    ArrowRight,
    Play,
    Check,
    FileText,
    Upload,
  } from "lucide-react";
  import Navbar from "../components/Navbar.jsx";
  import Button from "../components/Button.jsx";
  import Logo from "../components/Logo.jsx";
  import "./LandingPage.css";

  const HERO_STEPS = [
    { icon: Upload, line1: "Upload", line2: "Regulations" },
    { icon: FileCheck, line1: "Validate", line2: "Contracts" },
    { icon: AlertTriangle, line1: "Identify", line2: "Risks" },
    { icon: BarChart3, line1: "Get Compliance", line2: "Insights" },
  ];

  const VALUES = [
    {
      icon: ShieldCheck,
      title: "Accurate & Reliable",
      body: "AI models fine-tuned for legal compliance with high accuracy and explainability.",
    },
    {
      icon: Lock,
      title: "Secure & Private",
      body: "Enterprise-grade security on Microsoft Azure. Your data is always protected.",
    },
    {
      icon: Zap,
      title: "Fast & Scalable",
      body: "Process hundreds of documents in minutes, not weeks or months.",
    },
    {
      icon: BarChart3,
      title: "Actionable Insights",
      body: "Clear explanations, relevant laws, and confidence scores for every finding.",
    },
  ];

  const INDUSTRIES = [
    { icon: Scale, label: "Legal Firms" },
    { icon: Landmark, label: "Financial Services" },
    { icon: HeartPulse, label: "Healthcare" },
    { icon: Cpu, label: "Technology" },
    { icon: Factory, label: "Manufacturing" },
  ];

  export default function LandingPage({ onNavigate = () => {} }) {
    return (
      <div className="landing">
        <Navbar onNavigate={onNavigate} />

        <main className="landing__main">
          <section className="hero" id="how-it-works">
            <div className="hero__copy">
              <span className="hero__badge">
                <Sparkles size={15} />
                AI-POWERED COMPLIANCE VERIFICATION
              </span>

              <h1 className="hero__title">
                Compliance,
                <br />
                <span className="hero__title-accent">Verified by Intelligence.</span>
              </h1>

              <p className="hero__lead">
                CLAW uses advanced AI to analyze your documents against applicable laws and
                regulations, identifying risks, gaps, and non-compliance—so you can make
                informed decisions with confidence.
              </p>

              <ul className="hero__steps">
                {HERO_STEPS.map((step) => (
                  <li className="hero__step" key={step.line2}>
                    <span className="hero__step-icon">
                      <step.icon size={20} />
                    </span>
                    <span className="hero__step-label">
                      {step.line1}
                      <br />
                      {step.line2}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="hero__cta">
                <Button
                    icon={<ArrowRight size={17} />}
                    onClick={() => onNavigate("signup")}
                  >
                    Get Started
                </Button>

                <Button
                    variant="outline"
                    icon={<Play size={15} fill="currentColor" />}
                  >
                    View Demo
                </Button>
              </div>

              <p className="hero__note">
                <ShieldCheck size={16} />
                <span>
                  Enterprise-grade security. Built on{" "}
                  <a href="#technology">Microsoft Azure</a>.
                </span>
              </p>
            </div>

            <div className="pipeline" aria-label="How CLAW works">
              <div className="pipeline__grid">
                <article className="pcard pcard--tl">
                  <h3 className="pcard__title">1. Your Document</h3>
                  <div className="pcard__doc">
                    <span className="pcard__pdf">
                      <FileText size={18} />
                      PDF
                    </span>
                    <span className="pcard__doc-text">
                      Contract.pdf
                      <em>Vendor Agreement</em>
                    </span>
                  </div>
                </article>

                <article className="pcard pcard--tr">
                  <h3 className="pcard__title">2. Relevant Laws</h3>
                  <div className="pcard__row">
                    <span className="pcard__glyph">
                      <Landmark size={26} />
                    </span>
                    <ul className="pcard__list">
                      <li>GDPR Article 6</li>
                      <li>Data Protection Act</li>
                      <li>Contract Law</li>
                    </ul>
                  </div>
                  <a className="pcard__more" href="#features">
                    + More Regulations
                  </a>
                </article>

                <article className="pcard pcard--bl">
                  <h3 className="pcard__title">3. AI Analysis</h3>
                  <ul className="pcard__checks">
                    {["Extract Clauses", "Compare Laws", "Evaluate Compliance", "Assess Risk"].map(
                      (item) => (
                        <li key={item}>
                          <Check size={15} />
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </article>

                <article className="pcard pcard--br">
                  <h3 className="pcard__title">4. Compliance Result</h3>
                  <div className="pcard__result">
                    <span className="pcard__shield">
                      <ShieldCheck size={22} />
                    </span>
                    <span className="pcard__status">COMPLIANT</span>
                  </div>
                  <p className="pcard__score-label">Compliance Score</p>
                  <p className="pcard__score">82%</p>
                  <div className="pcard__bar">
                    <span style={{ width: "82%" }} />
                  </div>
                </article>

                <div className="pipeline__core" aria-hidden="true">
                  <div className="pipeline__orb">
                    <Logo size="lg" showText={false} />
                  </div>
                  <span className="pipeline__core-label">CLAW AI</span>
                </div>

                <span className="pipeline__line pipeline__line--top" aria-hidden="true" />
                <span className="pipeline__line pipeline__line--bottom" aria-hidden="true" />
                <span className="pipeline__line pipeline__line--left" aria-hidden="true" />
                <span className="pipeline__line pipeline__line--right" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="values" id="features">
            {VALUES.map((value) => (
              <article className="value" key={value.title}>
                <span className="value__icon">
                  <value.icon size={22} />
                </span>
                <div>
                  <h3 className="value__title">{value.title}</h3>
                  <p className="value__body">{value.body}</p>
                </div>
              </article>
            ))}
          </section>

          <section className="trust" id="about">
            <div className="trust__lead">
              <span className="trust__mark">
                <ShieldCheck size={24} />
              </span>
              <p>
                Trusted by legal and compliance teams
                <br />
                to reduce risk and stay audit-ready.
              </p>
            </div>
            <ul className="trust__list">
              {INDUSTRIES.map((industry) => (
                <li key={industry.label}>
                  <industry.icon size={22} />
                  {industry.label}
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    );
  }
