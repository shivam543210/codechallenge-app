// src/pages/CodeHistory/CodeHistory.jsx
import React, { useState } from 'react';
import { NavigationHeader } from '../../components/common/NavigationHeader';
import { Code, Clock, Check, Play, RotateCcw, ChevronDown } from 'lucide-react';

export const CodeHistory = ({ selectedActivity, navigateTo, showNotifications, setShowNotifications, currentPage, onBack }) => {
  const [selectedAttempt, setSelectedAttempt] = useState(0);
  
  // Mock code history for the selected activity
  const codeHistory = {
    problem: selectedActivity?.problem || 'Two Sum',
    attempts: [
      {
        id: 1,
        timestamp: '2025-08-27 14:30:00',
        code: `function twoSum(nums, target) {
    // First attempt - brute force approach
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}`,
        status: 'failed',
        runtime: null,
        memory: null,
        testsPassed: 8,
        totalTests: 15,
        language: 'JavaScript',
        notes: 'Time Limit Exceeded - O(n²) solution too slow for large inputs'
      },
      {
        id: 2,
        timestamp: '2025-08-27 14:45:00',
        code: `function twoSum(nums, target) {
    // Second attempt - using hash map
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}`,
        status: 'completed',
        runtime: '52ms',
        memory: '41.2MB',
        testsPassed: 15,
        totalTests: 15,
        language: 'JavaScript',
        notes: 'Accepted! Optimized to O(n) time complexity using hash map'
      }
    ]
  };

  const currentAttempt = codeHistory.attempts[selectedAttempt];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-500/10';
      case 'failed':
        return 'text-red-400 bg-red-500/10';
      default:
        return 'text-yellow-400 bg-yellow-500/10';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <Check className="w-4 h-4" />;
      case 'failed':
        return <RotateCcw className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavigationHeader 
        title={`Code History: ${codeHistory.problem}`}
        showBackButton 
        backAction={onBack}
        currentPage={currentPage}
        navigateTo={navigateTo}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Attempts Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h3 className="text-xl font-semibold text-white mb-2">Attempts History</h3>
                <p className="text-gray-400 text-sm">{codeHistory.attempts.length} attempts</p>
              </div>
              
              <div className="divide-y divide-white/10">
                {codeHistory.attempts.map((attempt, index) => (
                  <div
                    key={attempt.id}
                    onClick={() => setSelectedAttempt(index)}
                    className={`p-4 cursor-pointer transition-all duration-200 ${
                      selectedAttempt === index ? 'bg-blue-500/10 border-r-2 border-blue-500' : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">Attempt {index + 1}</span>
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${getStatusColor(attempt.status)}`}>
                        {getStatusIcon(attempt.status)}
                        <span className="capitalize">{attempt.status}</span>
                      </div>
                    </div>
                    
                    <div className="text-gray-400 text-sm space-y-1">
                      <div>{new Date(attempt.timestamp).toLocaleString()}</div>
                      <div>{attempt.language}</div>
                      <div>{attempt.testsPassed}/{attempt.totalTests} tests passed</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code Viewer */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
              {/* Code Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Attempt {selectedAttempt + 1} - {currentAttempt.language}
                    </h3>
                    <p className="text-gray-400 text-sm">{new Date(currentAttempt.timestamp).toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${getStatusColor(currentAttempt.status)}`}>
                      {getStatusIcon(currentAttempt.status)}
                      <span className="capitalize font-medium">{currentAttempt.status}</span>
                    </div>
                    
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-all duration-200">
                      <Play className="w-4 h-4" />
                      <span>Run Again</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Performance Stats */}
              {currentAttempt.status === 'completed' && (
                <div className="p-6 border-b border-white/10 bg-green-500/5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{currentAttempt.runtime}</div>
                      <div className="text-sm text-gray-400">Runtime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{currentAttempt.memory}</div>
                      <div className="text-sm text-gray-400">Memory Usage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{currentAttempt.testsPassed}/{currentAttempt.totalTests}</div>
                      <div className="text-sm text-gray-400">Tests Passed</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Code Display */}
              <div className="p-6">
                <div className="bg-black/50 rounded-lg border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <Code className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">solution.js</span>
                    </div>
                    <button className="text-gray-400 hover:text-white text-sm">Copy Code</button>
                  </div>
                  
                  <pre className="p-6 text-gray-100 font-mono text-sm overflow-x-auto">
                    <code>{currentAttempt.code}</code>
                  </pre>
                </div>
              </div>

              {/* Notes Section */}
              {currentAttempt.notes && (
                <div className="p-6 border-t border-white/10">
                  <h4 className="text-white font-medium mb-3">Notes & Analysis</h4>
                  <div className={`p-4 rounded-lg border ${
                    currentAttempt.status === 'completed' 
                      ? 'bg-green-500/5 border-green-500/20' 
                      : 'bg-red-500/5 border-red-500/20'
                  }`}>
                    <p className="text-gray-300 text-sm">{currentAttempt.notes}</p>
                  </div>
                </div>
              )}

              {/* Test Results */}
              <div className="p-6 border-t border-white/10">
                <h4 className="text-white font-medium mb-4">Test Results</h4>
                <div className="space-y-2">
                  {Array.from({ length: currentAttempt.totalTests }, (_, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                      <span className="text-gray-300 text-sm">Test Case {i + 1}</span>
                      <div className={`flex items-center space-x-2 ${
                        i < currentAttempt.testsPassed ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {i < currentAttempt.testsPassed ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <RotateCcw className="w-4 h-4" />
                        )}
                        <span className="text-sm">
                          {i < currentAttempt.testsPassed ? 'Passed' : 'Failed'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};