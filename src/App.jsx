// src/App.jsx - REPLACE YOUR EXISTING FILE
import React, { useState } from 'react';
import { Dashboard } from './pages';
// import { ThemeProvider } from './components/common/ThemeProvider';
import { Problems } from './pages';
import { Solve } from './pages';
import { Challenge } from './pages';
import { ProblemHistory } from './pages';
import { Calendar } from './pages';
import { Community } from './pages'
import { CodeHistory } from './pages';
import { FullLeaderboard } from './pages';
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
 const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setCurrentPage('codehistory');
  };
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

 const goBack = () => {
    if (currentPage === 'solve') {
      setCurrentPage('problems');
    } else if (currentPage === 'codehistory') {
      setCurrentPage('dashboard');
    } else {
      setCurrentPage('dashboard');
    }
  };

  const pageProps = {
    navigateTo,
    handleProblemClick,
    handleActivityClick,
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
      case 'challenge':
        return <Challenge {...pageProps} onBack={goBack} />;
      case 'problemhistory':
        return <ProblemHistory {...pageProps} onBack={goBack} />;
      case 'calendar':
        return <Calendar {...pageProps} onBack={goBack} />;
      case 'codehistory':
        return (
          <CodeHistory 
            {...pageProps}
            selectedActivity={selectedActivity}
            onBack={goBack}
          />
        );
      case 'fullleaderboard':
        return <FullLeaderboard {...pageProps} onBack={goBack} />;
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