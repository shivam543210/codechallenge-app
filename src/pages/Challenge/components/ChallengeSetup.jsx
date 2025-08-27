// src/pages/Challenge/components/ChallengeSetup.jsx
import React from 'react';
import { Users, Send, Trophy, Play } from 'lucide-react';

export const ChallengeSetup = ({ 
  selectedTime, 
  setSelectedTime, 
  inviteCode, 
  onCreateChallenge, 
  onJoinChallenge 
}) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Start a Coding Challenge</h2>
        <p className="text-gray-300 text-lg">Compete with other developers in real-time</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Host Challenge */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Host Challenge</h3>
            <p className="text-gray-400">Create a challenge and invite friends</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">Challenge Duration</label>
              <select 
                value={selectedTime}
                onChange={(e) => setSelectedTime(parseInt(e.target.value))}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600"
              >
                <option value={5}>5 minutes</option>
                <option value={15}>15 minutes</option>
                <option value={30}>30 minutes</option>
                <option value={60}>1 hour</option>
              </select>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Invite Code</span>
                <button className="text-blue-400 text-sm hover:text-blue-300">Copy</button>
              </div>
              <div className="text-2xl font-mono text-green-400 tracking-wider">{inviteCode}</div>
            </div>

            <button 
              onClick={onCreateChallenge}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 font-medium"
            >
              <Trophy className="w-5 h-5" />
              <span>Create Challenge</span>
            </button>
          </div>
        </div>

        {/* Join Challenge */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Join Challenge</h3>
            <p className="text-gray-400">Enter a friend's invite code</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">Invite Code</label>
              <input
                type="text"
                placeholder="Enter 6-digit code"
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 text-center text-lg font-mono tracking-wider uppercase"
                maxLength={6}
              />
            </div>

            <button 
              onClick={onJoinChallenge}
              className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 font-medium"
            >
              <Play className="w-5 h-5" />
              <span>Join Challenge</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};