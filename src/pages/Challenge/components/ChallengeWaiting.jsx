// src/pages/Challenge/components/ChallengeWaiting.jsx
import React from 'react';
import { Clock } from 'lucide-react';

export const ChallengeWaiting = ({ 
  inviteCode, 
  selectedTime, 
  opponents, 
  onStartChallenge 
}) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 text-center">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
        <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Clock className="w-10 h-10 text-yellow-400 animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Waiting for Opponent...</h2>
        <p className="text-gray-400 mb-6">Share your invite code with a friend to start</p>
        
        <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
          <div className="text-sm text-gray-400 mb-2">Invite Code</div>
          <div className="text-3xl font-mono text-green-400 tracking-wider">{inviteCode}</div>
        </div>

        <div className="space-y-2 mb-6">
          <div className="text-white font-medium">Challenge Settings:</div>
          <div className="text-gray-400">Duration: {selectedTime} minutes</div>
          <div className="text-gray-400">Mode: Competitive Solving</div>
        </div>

        {opponents.length > 0 && (
          <>
            <div className="text-green-400 mb-4">✓ Opponent connected!</div>
            <button 
              onClick={onStartChallenge}
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 font-medium"
            >
              Start Challenge
            </button>
          </>
        )}
      </div>
    </div>
  );
};