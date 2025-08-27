// src/pages/Problems/Problems.jsx
import React, { useState } from 'react';
import { NavigationHeader } from '../../components/common/NavigationHeader';
import { FilterBar } from './components/FilterBar';
import { ProblemsList } from './components/ProblemsList';
import { problems } from '../../data/problems';
import { filterProblems } from '../../utils/helpers';

export const Problems = ({ 
  navigateTo, 
  handleProblemClick, 
  showNotifications, 
  setShowNotifications,
  currentPage 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All Difficulties');
  const [topicFilter, setTopicFilter] = useState('All Topics');

  const filteredProblems = filterProblems(problems, searchQuery, difficultyFilter, topicFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavigationHeader 
        title="Problems" 
        currentPage={currentPage}
        navigateTo={navigateTo}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <FilterBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          difficultyFilter={difficultyFilter}
          setDifficultyFilter={setDifficultyFilter}
          topicFilter={topicFilter}
          setTopicFilter={setTopicFilter}
          totalProblems={problems.length}
          filteredCount={filteredProblems.length}
        />
        <ProblemsList 
          problems={filteredProblems}
          handleProblemClick={handleProblemClick}
        />
      </div>
    </div>
  );
};