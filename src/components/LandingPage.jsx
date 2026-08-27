import React from 'react';
import { 
  ShieldCheck, FileText, AlertTriangle, BarChart3, ArrowRight, PlayCircle,
  Lock, Zap, Scale, Building2, Activity, Cpu, Factory, ChevronRight
} from 'lucide-react';

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-100 sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">C</div>
          <span className="text-xl font-bold tracking-tight">CLAW</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">How It Works</a>
          <a href="#" className="hover:text-blue-600">Technology</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Pricing</a>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => onNavigate('auth')} className="text-sm font-semibold text-slate-700 hover:text-blue-600">Sign In</button>
          <button onClick={() => onNavigate('auth')} className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Hero Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-wide uppercase border border-blue-100">
            <ShieldCheck className="w-4 h-4" />
            <span>AI-Powered Compliance Verification</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Compliance, <br/>
            <span className="text-blue-600">Verified by Intelligence.</span>
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
            CLAW uses advanced AI to analyze your documents against applicable laws and regulations, identifying risks, gaps, and non-compliance—so you can make informed decisions with confidence.
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="flex items-center space-x-2 text-sm font-medium text-slate-700">
              <div className="p-1.5 bg-blue-50 rounded text-blue-600"><ShieldCheck className="w-4 h-4" /></div>
              <span>Upload Regulations</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium text-slate-700">
              <div className="p-1.5 bg-blue-50 rounded text-blue-600"><FileText className="w-4 h-4" /></div>
              <span>Validate Contracts</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium text-slate-700">
              <div className="p-1.5 bg-blue-50 rounded text-blue-600"><AlertTriangle className="w-4 h-4" /></div>
              <span>Identify Risks</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium text-slate-700">
              <div className="p-1.5 bg-blue-50 rounded text-blue-600"><BarChart3 className="w-4 h-4" /></div>
              <span>Get Compliance Insights</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <button onClick={() => onNavigate('auth')} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition flex items-center space-x-2 shadow-lg shadow-blue-600/20">
              <span>Get Started</span> <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-slate-50 transition flex items-center space-x-2">
              <span>View Demo</span> <PlayCircle className="w-4 h-4 text-blue-600" />
            </button>
          </div>
          
          <p className="text-sm text-slate-500 flex items-center mt-6">
            <ShieldCheck className="w-4 h-4 mr-2 text-slate-400" />
            Enterprise-grade security. Built on <strong className="text-blue-600 ml-1">Microsoft Azure.</strong>
          </p>
        </div>

        {/* Hero Right Diagram (CSS Rebuilt) */}
        <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center">
          {/* Dashed Connecting Lines (Background) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full border-2 border-dashed border-slate-200 animate-[spin_60s_linear_infinite]"></div>
          </div>

          {/* Center Hub */}
          <div className="z-10 w-32 h-32 bg-white rounded-full border-8 border-blue-50 shadow-2xl flex flex-col items-center justify-center relative">
            <div className="text-5xl font-extrabold text-blue-600">C</div>
            <span className="absolute -bottom-8 font-bold text-blue-600 text-sm">CLAW AI</span>
          </div>

          {/* Top Left Card: Document */}
          <div className="absolute top-8 left-0 bg-white p-4 rounded-xl shadow-xl border border-slate-100 w-48 z-20 hover:-translate-y-1 transition-transform">
            <p className="text-xs font-bold text-slate-800 mb-2">1. Your Document</p>
            <div className="flex items-center space-x-3 bg-slate-50 p-2 rounded-lg border border-slate-100">
              <FileText className="w-6 h-6 text-blue-500" />
              <div>
                <p className="text-[10px] font-semibold">Contract.pdf</p>
                <p className="text-[9px] text-slate-500">Vendor Agreement</p>
              </div>
            </div>
          </div>

          {/* Top Right Card: Laws */}
          <div className="absolute top-12 right-0 bg-white p-4 rounded-xl shadow-xl border border-slate-100 w-48 z-20 hover:-translate-y-1 transition-transform">
            <p className="text-xs font-bold text-slate-800 mb-2">2. Relevant Laws</p>
            <div className="flex items-start space-x-3 bg-blue-50/50 p-2 rounded-lg border border-blue-100">
              <Building2 className="w-5 h-5 text-blue-600 mt-1" />
              <ul className="text-[10px] font-medium text-slate-700 space-y-1">
                <li>• GDPR Article 6</li>
                <li>• Data Protection Act</li>
                <li>• Contract Law</li>
              </ul>
            </div>
          </div>

          {/* Bottom Left Card: Analysis */}
          <div className="absolute bottom-16 left-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 w-48 z-20 hover:-translate-y-1 transition-transform">
            <p className="text-xs font-bold text-slate-800 mb-2">3. AI Analysis</p>
            <ul className="text-[10px] font-medium text-slate-700 space-y-2">
              <li className="flex items-center"><ShieldCheck className="w-3 h-3 text-blue-500 mr-1.5"/> Extract Clauses</li>
              <li className="flex items-center"><ShieldCheck className="w-3 h-3 text-blue-500 mr-1.5"/> Compare Laws</li>
              <li className="flex items-center"><ShieldCheck className="w-3 h-3 text-blue-500 mr-1.5"/> Evaluate Compliance</li>
            </ul>
          </div>

          {/* Bottom Right Card: Result */}
          <div className="absolute bottom-8 right-4 bg-white p-4 rounded-xl shadow-xl border-l-4 border-emerald-500 w-48 z-20 hover:-translate-y-1 transition-transform">
            <p className="text-xs font-bold text-slate-800 mb-2">4. Compliance Result</p>
            <div className="flex items-center justify-between mb-3">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded">COMPLIANT</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-emerald-500 h-1.5 rounded-full w-[82%]"></div>
            </div>
            <p className="text-[10px] text-slate-500 mt-1 text-right">Score: 82%</p>
          </div>
        </div>
      </div>

      {/* Feature Strip */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="grid md:grid-cols-4 gap-8 bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div>
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4"><ShieldCheck className="w-5 h-5" /></div>
            <h3 className="font-bold text-slate-900 mb-2">Accurate & Reliable</h3>
            <p className="text-sm text-slate-600">AI models fine-tuned for legal compliance with high accuracy and explainability.</p>
          </div>
          <div>
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4"><Lock className="w-5 h-5" /></div>
            <h3 className="font-bold text-slate-900 mb-2">Secure & Private</h3>
            <p className="text-sm text-slate-600">Enterprise-grade security on Microsoft Azure. Your data is always protected.</p>
          </div>
          <div>
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4"><Zap className="w-5 h-5" /></div>
            <h3 className="font-bold text-slate-900 mb-2">Fast & Scalable</h3>
            <p className="text-sm text-slate-600">Process hundreds of documents in minutes, not weeks or months.</p>
          </div>
          <div>
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4"><BarChart3 className="w-5 h-5" /></div>
            <h3 className="font-bold text-slate-900 mb-2">Actionable Insights</h3>
            <p className="text-sm text-slate-600">Clear explanations, relevant laws, and confidence scores for every finding.</p>
          </div>
        </div>
      </div>

      {/* Trusted Footer */}
      <div className="bg-[#0f172a] py-8 border-t-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <ShieldCheck className="w-8 h-8 text-blue-400" />
            <p className="text-slate-300 text-sm font-medium">Trusted by legal and compliance teams<br/>to reduce risk and stay audit-ready.</p>
          </div>
          <div className="flex flex-wrap items-center gap-8 text-slate-400">
            <span className="flex items-center space-x-2 text-sm"><Scale className="w-4 h-4"/> <span>Legal Firms</span></span>
            <span className="flex items-center space-x-2 text-sm"><Building2 className="w-4 h-4"/> <span>Financial Services</span></span>
            <span className="flex items-center space-x-2 text-sm"><Activity className="w-4 h-4"/> <span>Healthcare</span></span>
            <span className="flex items-center space-x-2 text-sm"><Cpu className="w-4 h-4"/> <span>Technology</span></span>
            <span className="flex items-center space-x-2 text-sm"><Factory className="w-4 h-4"/> <span>Manufacturing</span></span>
          </div>
        </div>
      </div>

    </div>
  );
}
