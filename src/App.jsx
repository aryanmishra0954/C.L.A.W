import React, { useState } from 'react';
import KBUpload from './components/KBUpload';
import KBList from './components/KBList';
// Make sure the file in your components folder is exactly named Validate_Upload.jsx (capital V, capital U)
import ValidateUpload from './components/Validate_Upload';

export default function App() {
  const [activeTab, setActiveTab] = useState('kb');

  return (
    <div className="min-h-screen bg-[#faf9f8] font-sans text-slate-900">
      
      {/* Enterprise Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600"></div>
            <h1 className="text-lg font-semibold text-slate-900 tracking-tight">CLAW</h1>
            <span className="text-slate-400 mx-2">|</span>
            <span className="text-sm text-slate-600">Legal Compliance AI</span>
          </div>
        </div>
        
        {/* Microsoft-Style Tab Navigation */}
        <div className="max-w-6xl mx-auto px-6 flex space-x-6 mt-2">
          <button
            onClick={() => setActiveTab('kb')}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'kb' 
                ? 'border-blue-600 text-slate-900' 
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Knowledge Base
          </button>
          <button
            onClick={() => setActiveTab('validate')}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'validate' 
                ? 'border-blue-600 text-slate-900' 
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Document Validation
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto p-6 md:py-8">
        {activeTab === 'kb' ? (
          <div className="space-y-8">
            <KBUpload onUploadComplete={() => console.log('KB File uploaded')} />
            <KBList />
          </div>
        ) : (
          <div className="space-y-8">
            <ValidateUpload onValidationStart={() => console.log('Validation Started')} />
          </div>
        )}
      </main>

    </div>
  );
}
