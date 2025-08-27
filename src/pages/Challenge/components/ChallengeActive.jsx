// src/pages/Challenge/components/ChallengeActive.jsx
import React from 'react';
import { Timer } from 'lucide-react';

export const ChallengeActive = ({ challengeTimer }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Challenge Header */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-white">Live Challenge</div>
            <div className="px-4 py-2 bg-red-500/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <Timer className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-mono text-lg">{formatTime(challengeTimer)}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">2</div>
              <div className="text-xs text-gray-400">You</div>
            </div>
            <div className="text-gray-400">vs</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">1</div>
              <div className="text-xs text-gray-400">CodeMaster</div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Problems */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-200 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-medium">Problem {num}</h3>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                Easy
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">Two Sum variant problem for competitive solving...</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Not Attempted</span>
              <button className="text-blue-400 text-sm hover:text-blue-300">Solve →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};