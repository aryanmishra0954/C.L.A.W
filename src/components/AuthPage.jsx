import React, { useState } from 'react';
import { ShieldCheck, Zap, Cloud, Target, Eye } from 'lucide-react';

export default function AuthPage({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate auth success and route to dashboard
    onLoginSuccess();
  };

  return (
    <div className="flex min-h-screen bg-white font-sans">
      
      {/* Left Panel - Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 flex-col justify-between p-12 relative overflow-hidden">
        {/* Background decorative graphic */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100" className="fill-blue-600">
            <polygon points="0,0 100,0 100,100" />
          </svg>
        </div>

        <div className="z-10">
          <div className="flex items-center space-x-2 mb-12">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">C</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">CLAW</span>
          </div>
          
          <p className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-4">Legal Tech + AI + Compliance</p>
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Intelligent compliance <br/><span className="text-blue-600">starts here.</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-md">
            Upload your documents, leverage the power of AI, and get accurate compliance insights — faster, safer, and smarter.
          </p>
        </div>

        {/* Feature Row Bottom */}
        <div className="z-10 grid grid-cols-4 gap-4 pt-12 border-t border-blue-200/50 mt-12">
          <div>
            <ShieldCheck className="w-6 h-6 text-blue-600 mb-2"/>
            <p className="text-xs font-semibold text-slate-800">Faster Verification</p>
          </div>
          <div>
            <Target className="w-6 h-6 text-blue-600 mb-2"/>
            <p className="text-xs font-semibold text-slate-800">Reduce Legal Risk</p>
          </div>
          <div>
            <Zap className="w-6 h-6 text-blue-600 mb-2"/>
            <p className="text-xs font-semibold text-slate-800">Scale Effortlessly</p>
          </div>
          <div>
            <Cloud className="w-6 h-6 text-blue-600 mb-2"/>
            <p className="text-xs font-semibold text-slate-800">Built on Azure</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 relative">
        <div className="absolute top-8 right-8 text-xs font-medium text-slate-400 flex items-center space-x-4">
          <span className="flex items-center"><ShieldCheck className="w-3 h-3 mr-1"/> Secure</span>
          <span>•</span>
          <span>Trusted</span>
          <span>•</span>
          <span>Enterprise Ready</span>
        </div>

        <div className="max-w-md w-full mx-auto">
          {/* Tab Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-xl mb-10">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition ${isLogin ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition ${!isLogin ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Sign Up
            </button>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-2">{isLogin ? 'Welcome back' : 'Create account'}</h2>
          <p className="text-slate-500 text-sm mb-8">
            {isLogin ? 'Sign in to your CLAW account to continue.' : 'Register to start analyzing compliance instantly.'}
          </p>

          {/* SSO Buttons */}
          <div className="space-y-3 mb-8">
            <button className="w-full flex items-center justify-center space-x-3 bg-white border border-slate-200 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              <span>Continue with Google</span>
            </button>
            <button className="w-full flex items-center justify-center space-x-3 bg-white border border-slate-200 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition">
              <img src="https://www.svgrepo.com/show/475661/microsoft-color.svg" className="w-5 h-5" alt="Microsoft" />
              <span>Continue with Microsoft</span>
            </button>
            <button className="w-full flex flex-col items-center justify-center bg-white border border-slate-200 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition">
              <div className="flex items-center space-x-2">
                <Cloud className="w-4 h-4 text-blue-600" />
                <span>Continue with Microsoft Entra ID</span>
              </div>
              <span className="text-[10px] text-slate-400 font-normal mt-0.5">(Work / School Account)</span>
            </button>
          </div>

          <div className="flex items-center mb-8">
            <div className="flex-1 border-t border-slate-200"></div>
            <span className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">OR</span>
            <div className="flex-1 border-t border-slate-200"></div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
              <input 
                type="email" 
                placeholder="you@company.com" 
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition pr-10"
                />
                <button type="button" className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
              {isLogin && (
                <div className="flex justify-end mt-2">
                  <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-800">Forgot password?</a>
                </div>
              )}
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-bold shadow-md hover:bg-blue-700 transition flex justify-center items-center">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-8">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setIsLogin(!isLogin)} className="font-bold text-blue-600 hover:text-blue-800">
              {isLogin ? 'Create account →' : 'Sign in →'}
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}
