import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';

// Import the dashboard components we built earlier
import KBUpload from './components/KBUpload';
import KBList from './components/KBList';
import ValidateUpload from './components/Validate_Upload';

export default function App() {
  // Simple state router for the hackathon: 'landing' | 'auth' | 'dashboard'
  const [currentView, setCurrentView] = useState('landing');
  const [activeDashTab, setActiveDashTab] = useState('kb');

  // RENDER ROUTER
  if (currentView === 'landing') return <LandingPage onNavigate={setCurrentView} />;
  if (currentView === 'auth') return <AuthPage onLoginSuccess={() => setCurrentView('dashboard')} />;

  // MAIN DASHBOARD (From previous steps)
  return (
    <div className="min-h-screen bg-[#faf9f8] font-sans text-slate-900">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentView('landing')}>
            <div className="w-4 h-4 bg-[#0067b8]"></div>
            <h1 className="text-lg font-semibold text-slate-900 tracking-tight">CLAW</h1>
            <span className="text-slate-300 mx-2">|</span>
            <span className="text-sm text-slate-500">Legal Compliance AI</span>
          </div>
          
          <div className="flex space-x-8 mt-2">
            <button onClick={() => setActiveDashTab('kb')} className={`pb-3 text-sm font-medium border-b-2 transition-colors ${activeDashTab === 'kb' ? 'border-[#0067b8] text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>
              Knowledge Base
            </button>
            <button onClick={() => setActiveDashTab('validate')} className={`pb-3 text-sm font-medium border-b-2 transition-colors ${activeDashTab === 'validate' ? 'border-[#0067b8] text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>
              Document Validation
            </button>
          </div>
          
          <button onClick={() => setCurrentView('landing')} className="text-sm text-slate-500 hover:text-slate-900">Log out</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 md:py-8">
        {activeDashTab === 'kb' ? (
          <div className="space-y-6">
            <KBUpload onUploadComplete={() => console.log('KB File uploaded')} />
            <KBList />
          </div>
        ) : (
          <div className="space-y-6">
            <ValidateUpload onValidationStart={() => console.log('Validation Started')} />
          </div>
        )}
      </main>
    </div>
  );
}
