import React from 'react';
import { Trophy, Flame, ChevronRight } from 'lucide-react';
import { updateLeaderboardWithUserStats } from '../../../utils/helpers';
import { leaderboard } from '../../../data/mockData';

export const Leaderboard = ({ userStats, navigateTo }) => {
  const updatedLeaderboard = updateLeaderboardWithUserStats(leaderboard, userStats);

  const getRankIcon = (rank) => {
    if (rank <= 3) {
      return <Trophy className="w-4 h-4" />;
    }
    return rank;
  };

  const getRankBgColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-500/20 text-yellow-400';
      case 2:
        return 'bg-gray-400/20 text-gray-300';
      case 3:
        return 'bg-orange-500/20 text-orange-400';
      default:
        return 'bg-gray-600/20 text-gray-400';
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">Leaderboard</h3>
            <p className="text-gray-400 text-sm mt-1">Click to view full rankings</p>
          </div>
          <button 
            onClick={() => navigateTo('fullleaderboard')}
            className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 text-sm"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="p-6 space-y-3">
        {updatedLeaderboard.map((user, i) => (
          <div 
            key={user.rank} 
            className={`flex items-center space-x-4 p-3 rounded-lg border cursor-pointer hover:bg-white/5 transition-all duration-200 ${
              user.name === 'You' 
                ? 'bg-blue-500/10 border-blue-500/30' 
                : 'bg-white/5 border-white/10'
            }`}
            onClick={() => navigateTo('fullleaderboard')}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${getRankBgColor(user.rank)}`}>
              {getRankIcon(user.rank)}
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">{user.name}</p>
              <p className="text-gray-400 text-xs">{user.solved} solved</p>
            </div>
            <div className="flex items-center space-x-1">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm">{user.streak}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
