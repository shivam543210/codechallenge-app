// src/pages/Challenge/components/ChallengeFinished.jsx
import React from 'react';
import { Trophy } from 'lucide-react';

export const ChallengeFinished = ({ onNewChallenge, navigateTo }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 text-center">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-10 h-10 text-green-400" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Challenge Complete!</h2>
        <p className="text-green-400 text-xl mb-6">🎉 You Won! 🎉</p>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-green-500/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">2</div>
            <div className="text-white font-medium">You</div>
            <div className="text-gray-400 text-sm">Problems Solved</div>
          </div>
          <div className="bg-blue-500/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-400">1</div>
            <div className="text-white font-medium">CodeMaster</div>
            <div className="text-gray-400 text-sm">Problems Solved</div>
          </div>
        </div>

        <div className="flex space-x-4 justify-center">
          <button 
            onClick={onNewChallenge}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200"
          >
            New Challenge
          </button>
          <button 
            onClick={() => navigateTo('dashboard')}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-all duration-200"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};