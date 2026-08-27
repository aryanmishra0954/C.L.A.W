import { useState } from 'react'
import { ArrowRight, Check, Eye, EyeOff, FileText, LockKeyhole, Mail, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import './AuthPage.css'

const benefits = [
  { icon: ShieldCheck, label: 'Faster', detail: 'Verification' },
  { icon: Sparkles, label: 'Reduce', detail: 'Legal Risk' },
  { icon: Zap, label: 'Scale', detail: 'Effortlessly' },
  { icon: LockKeyhole, label: 'Built on', detail: 'Microsoft Azure' },
]

export default function AuthPage() {
  const [mode, setMode] = useState('signin')
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="auth-shell">
      <section className="auth-story" aria-label="About CLAW">
        <div className="story-content">
          <div className="brand"><span className="brand-mark">C</span><span>CLAW</span></div>
          <p className="eyebrow">LEGAL TECH + AI + COMPLIANCE</p>
          <h1>Intelligent compliance <span>starts here.</span></h1>
          <p className="story-copy">Upload your documents, leverage the power of AI, and get accurate compliance insights — faster, safer, and smarter.</p>
          <div className="process-visual" aria-label="Document analysis process">
            <div className="doc-card"><FileText size={30} /><strong>CONTRACT</strong><i /><i /><i /><ShieldCheck className="doc-check" size={28} /></div>
            <div className="connector">→</div><div className="ai-core"><span>C</span><small>AI</small></div><div className="connector">→</div>
            <div className="laws-card"><strong>Relevant Laws</strong><p><Check size={14} /> GDPR Article 6</p><p><Check size={14} /> Data Protection Act</p><p><Check size={14} /> Corporate Law</p><p><Check size={14} /> Employment Law</p></div>
          </div>
          <div className="process-labels"><div><strong>Your Documents</strong><span>Contracts, agreements,<br />regulations and more.</span></div><div><strong>AI Analysis</strong><span>RAG-powered accuracy<br />with trusted sources.</span></div><div><strong>Compliance Results</strong><span>Clear insights, explanations<br />and risk analysis.</span></div></div>
          <div className="benefits">{benefits.map(({ icon: Icon, label, detail }) => <div key={detail}><Icon size={23} /><span>{label}<br />{detail}</span></div>)}</div>
        </div>
      </section>
      <section className="auth-panel">
        <div className="trust-row"><ShieldCheck size={22} /><span>Secure</span><b>•</b><span>Trusted</span><b>•</b><span>Enterprise Ready</span></div>
        <div className="auth-form-wrap">
          <div className="mode-tabs"><button className={mode === 'signin' ? 'active' : ''} onClick={() => { setMode('signin'); setSubmitted(false) }}>Sign In</button><button className={mode === 'signup' ? 'active' : ''} onClick={() => { setMode('signup'); setSubmitted(false) }}>Sign Up</button></div>
          <h2>{mode === 'signin' ? 'Welcome back' : 'Create your account'}</h2><p className="form-subtitle">{mode === 'signin' ? 'Sign in to your CLAW account to continue.' : 'Start making compliance intelligent today.'}</p>
          <div className="social-buttons"><button><span className="google">G</span> Continue with Google</button><button><span className="microsoft"><i /><i /><i /><i /></span> Continue with Microsoft</button><button><span className="azure">◆</span><span>Continue with Microsoft Entra ID<small>(Work / School Account)</small></span></button></div>
          <div className="or"><span />OR<span /></div>
          <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
            {mode === 'signup' && <label>Full Name<input required placeholder="Your full name" /></label>}
            <label>Email Address<div className="input-wrap"><Mail size={20} /><input required type="email" placeholder="you@company.com" /></div></label>
            <label>Password<div className="input-wrap"><LockKeyhole size={20} /><input required type={showPassword ? 'text' : 'password'} placeholder="Enter your password" /><button type="button" className="icon-button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button></div></label>
            {mode === 'signin' && <button type="button" className="forgot">Forgot password?</button>}
            <button className="submit-button" type="submit">{submitted ? 'You’re all set' : mode === 'signin' ? 'Sign In' : 'Create account'} <ArrowRight size={21} /></button>
          </form>
          <p className="switch-copy">{mode === 'signin' ? "Don't have an account?" : 'Already have an account?'} <button onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}>{mode === 'signin' ? 'Create account' : 'Sign in'} <ArrowRight size={16} /></button></p>
        </div>
      </section>
    </main>
  )
}
