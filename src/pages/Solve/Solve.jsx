// src/pages/Solve/Solve.jsx
import React from 'react';
import { NavigationHeader } from '../../components/common/NavigationHeader';
import { ProblemDescription } from './components/ProblemDescription';
import { CodeEditor } from './components/CodeEditor';

export const Solve = ({
  selectedProblem,
  code,
  setCode,
  onBack,
  navigateTo,
  showNotifications,
  setShowNotifications,
  currentPage
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      <NavigationHeader 
        title={selectedProblem?.title || 'Problem'} 
        showBackButton 
        backAction={onBack}
        currentPage={currentPage}
        navigateTo={navigateTo}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />

      {/* Main Content */}
      <div className="flex-1 flex">
        <ProblemDescription problem={selectedProblem} />
        <CodeEditor code={code} setCode={setCode} />
      </div>
    </div>
  );
};