// src/App.jsx
import React, { useState } from 'react';
import { Dashboard } from './pages';
import { Problems } from './pages';
import { Solve } from './pages';
import { useUserStats } from './hooks/useUserStats';
import './index.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [code, setCode] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  const { userStats, updateStats } = useUserStats();

  const handleProblemClick = (problem) => {
    setSelectedProblem(problem);
    setCode('');
    setCurrentPage('solve');
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const goBack = () => {
    setCurrentPage('problems');
  };

  const pageProps = {
    navigateTo,
    handleProblemClick,
    userStats,
    showNotifications,
    setShowNotifications,
    currentPage,
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard {...pageProps} />;
      case 'problems':
        return <Problems {...pageProps} />;
      case 'solve':
        return (
          <Solve 
            {...pageProps}
            selectedProblem={selectedProblem}
            code={code}
            setCode={setCode}
            onBack={goBack}
          />
        );
      default:
        return <Dashboard {...pageProps} />;
    }
  };

  return (
    <div>
      {renderCurrentPage()}
    </div>
  );
};

export default App;