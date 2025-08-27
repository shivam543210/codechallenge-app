import React, { useState } from 'react';
import { NavigationHeader } from '../../components/common/NavigationHeader';
import { Check, Clock, Trophy, Code, ChevronRight, Calendar } from 'lucide-react';
import { getDifficultyColor } from '../../utils/helpers';

export const ProblemHistory = ({ navigateTo, showNotifications, setShowNotifications, currentPage, onBack }) => {
  const [filter, setFilter] = useState('all'); // all, completed, attempted

  // Mock solved problems history
  const solvedProblems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      solvedAt: "2025-08-27",
      attempts: 2,
      bestTime: "15:30",
      status: "completed",
      score: 100,
      language: "JavaScript"
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters", 
      difficulty: "Medium",
      solvedAt: "2025-08-26",
      attempts: 4,
      bestTime: "28:45",
      status: "completed",
      score: 85,
      language: "Python"
    },
    {
      id: 2,
      title: "Valid Parentheses",
      difficulty: "Easy", 
      solvedAt: "2025-08-25",
      attempts: 1,
      bestTime: "08:20",
      status: "completed",
      score: 100,
      language: "JavaScript"
    },
    {
      id: 5,
      title: "Maximum Subarray",
      difficulty: "Medium",
      solvedAt: "2025-08-24",
      attempts: 3,
      bestTime: null,
      status: "attempted",
      score: 0,
      language: "Java"
    }
  ];

  const filteredProblems = solvedProblems.filter(problem => {
    if (filter === 'completed') return problem.status === 'completed';
    if (filter === 'attempted') return problem.status === 'attempted';
    return true;
  });

  const getStatusIcon = (status) => {
    if (status === 'completed') return <Check className="w-4 h-4 text-green-400" />;
    return <Clock className="w-4 h-4 text-yellow-400" />;
  };

  const getStatusColor = (status) => {
    if (status === 'completed') return 'bg-green-500/10 text-green-400';
    return 'bg-yellow-500/10 text-yellow-400';
  };

  const stats = {
    total: solvedProblems.length,
    completed: solvedProblems.filter(p => p.status === 'completed').length,
    attempted: solvedProblems.filter(p => p.status === 'attempted').length,
    avgScore: Math.round(solvedProblems.reduce((acc, p) => acc + p.score, 0) / solvedProblems.length)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavigationHeader 
        title="Problem History" 
        showBackButton 
        backAction={onBack}
        currentPage={currentPage}
        navigateTo={navigateTo}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Problems</p>
                <p className="text-2xl font-bold text-white">{stats.total}</p>
              </div>
              <Code className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Completed</p>
                <p className="text-2xl font-bold text-green-400">{stats.completed}</p>
              </div>
              <Check className="w-8 h-8 text-green-400" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Attempted</p>
                <p className="text-2xl font-bold text-yellow-400">{stats.attempted}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Avg Score</p>
                <p className="text-2xl font-bold text-purple-400">{stats.avgScore}%</p>
              </div>
              <Trophy className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  filter === 'all' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                All Problems
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  filter === 'completed' ? 'bg-green-600 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => setFilter('attempted')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  filter === 'attempted' ? 'bg-yellow-600 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Attempted
              </button>
            </div>
            
            <button 
              onClick={() => navigateTo('calendar')}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              <span>Calendar View</span>
            </button>
          </div>
        </div>

        {/* Problems List */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h3 className="text-xl font-semibold text-white">Your Problem History</h3>
            <p className="text-gray-400 text-sm mt-1">Track your progress and improvement over time</p>
          </div>
          
          <div className="divide-y divide-white/10">
            {filteredProblems.map((problem) => (
              <div
                key={problem.id}
                className="p-6 hover:bg-white/5 transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        problem.status === 'completed' ? 'bg-green-500/20' : 'bg-yellow-500/20'
                      }`}>
                        {getStatusIcon(problem.status)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                            {problem.title}
                          </h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(problem.status)}`}>
                            {problem.status}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                          <span>Solved: {problem.solvedAt}</span>
                          <span>Attempts: {problem.attempts}</span>
                          {problem.bestTime && <span>Best Time: {problem.bestTime}</span>}
                          <span>Language: {problem.language}</span>
                          <span>Score: {problem.score}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
          
          {filteredProblems.length === 0 && (
            <div className="p-12 text-center">
              <Code className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-white font-medium mb-2">No problems found</h3>
              <p className="text-gray-400 mb-6">Start solving problems to build your history</p>
              <button 
                onClick={() => navigateTo('problems')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200"
              >
                Browse Problems
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
