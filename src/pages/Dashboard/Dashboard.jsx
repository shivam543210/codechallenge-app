import React from 'react';
import { NavigationHeader } from '../../components/common/NavigationHeader';
import { StatsGrid } from './components/StatsGrid';
import { RecommendedProblems } from './components/RecommendedProblems';
import { RecentActivity } from './components/RecentActivity';
import { Leaderboard } from './components/Leaderboard';
import { Target, History, Calendar } from 'lucide-react';

export const Dashboard = ({ 
  navigateTo, 
  handleProblemClick, 
  handleActivityClick,
  userStats, 
  showNotifications, 
  setShowNotifications,
  currentPage 
}) => {
  // const { theme } = useTheme(); // Use theme

  return (
     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> {/* Apply theme background */}
      <NavigationHeader 
        title="CodeChallenge" 
        currentPage={currentPage}
        navigateTo={navigateTo}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />
      
     <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section - using hardcoded classes instead of theme */}
        <div className="mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Welcome back, Coder!</h2>
                <p className="text-gray-300 text-lg">Ready to tackle some challenging problems today?</p>
              </div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => navigateTo('challenge')}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all duration-200 flex items-center space-x-2 font-medium"
                >
                  <Target className="w-5 h-5" />
                  <span>Start Challenge</span>
                </button>
                <button 
                  onClick={() => navigateTo('problemhistory')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 flex items-center space-x-2 font-medium"
                >
                  <History className="w-5 h-5" />
                  <span>Problem History</span>
                </button>
                <button 
                  onClick={() => navigateTo('calendar')}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all duration-200 flex items-center space-x-2 font-medium"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Calendar</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <StatsGrid userStats={userStats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <RecommendedProblems handleProblemClick={handleProblemClick} navigateTo={navigateTo} />
          <RecentActivity handleActivityClick={handleActivityClick} />
          <Leaderboard userStats={userStats} navigateTo={navigateTo} />
        </div>
      </div>
    </div>
  );
};
