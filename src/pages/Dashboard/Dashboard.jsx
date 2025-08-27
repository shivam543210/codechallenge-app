// src/pages/Dashboard/Dashboard.jsx
import React from 'react';
import { NavigationHeader } from '../../components/common/NavigationHeader';
import { StatsGrid } from './components/StatsGrid';
import { RecommendedProblems } from './components/RecommendedProblems';
import { RecentActivity } from './components/RecentActivity';
import { Leaderboard } from './components/Leaderboard';
import { Target, Zap } from 'lucide-react';

export const Dashboard = ({ 
  navigateTo, 
  handleProblemClick, 
  userStats, 
  showNotifications, 
  setShowNotifications,
  currentPage 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavigationHeader 
        title="CodeChallenge" 
        currentPage={currentPage}
        navigateTo={navigateTo}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Welcome back, Coder!</h2>
                <p className="text-gray-300 text-lg">Ready to tackle some challenging problems today?</p>
              </div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => navigateTo('problems')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 flex items-center space-x-2 font-medium"
                >
                  <Target className="w-5 h-5" />
                  <span>Start Solving</span>
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all duration-200 flex items-center space-x-2 font-medium">
                  <Zap className="w-5 h-5" />
                  <span>Quick Challenge</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <StatsGrid userStats={userStats} />

        {/* Recent Activity & Quick Access */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <RecommendedProblems handleProblemClick={handleProblemClick} navigateTo={navigateTo} />
          <RecentActivity />
          <Leaderboard userStats={userStats} />
        </div>
      </div>
    </div>
  );
};