// src/pages/Dashboard/components/StatsGrid.jsx
import React from 'react';
import { Check, TrendingUp, Calendar, Trophy, Flame } from 'lucide-react';

export const StatsGrid = ({ userStats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-1">Problems Solved</p>
            <p className="text-3xl font-bold text-white">{userStats.problemsSolved}</p>
            <p className="text-green-400 text-sm mt-1">+{userStats.weeklyProgress} this week</p>
          </div>
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
            <Check className="w-6 h-6 text-green-400" />
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-1">Success Rate</p>
            <p className="text-3xl font-bold text-white">{userStats.successRate}%</p>
            <p className="text-blue-400 text-sm mt-1">{userStats.successRate === 0 ? 'Keep practicing!' : 'Great progress!'}</p>
          </div>
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-1">Current Streak</p>
            <p className="text-3xl font-bold text-white flex items-center">
              {userStats.currentStreak}
              {userStats.currentStreak > 0 && <Flame className="w-6 h-6 text-orange-400 ml-2" />}
            </p>
            <p className="text-orange-400 text-sm mt-1">
              {userStats.currentStreak === 0 ? 'Start your streak!' : 'Keep it going!'}
            </p>
          </div>
          <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
            <Calendar className="w-6 h-6 text-orange-400" />
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-1">Rank</p>
            <p className="text-3xl font-bold text-white">{userStats.rank}</p>
            <p className="text-purple-400 text-sm mt-1">
              {userStats.rank === 'Newbie' ? 'Solve to rank up!' : 'Keep climbing!'}
            </p>
          </div>
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <Trophy className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </div>
    </div>
  );
};