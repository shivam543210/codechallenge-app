// src/pages/Calendar/Calendar.jsx
import React, { useState } from 'react';
import { NavigationHeader } from '../../components/common/NavigationHeader';
import { ChevronLeft, ChevronRight, Check, Trophy, Flame } from 'lucide-react';

export const Calendar = ({ navigateTo, showNotifications, setShowNotifications, currentPage, onBack }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Mock solved dates - days when problems were solved
  const solvedDates = {
    '2025-08-27': { count: 2, problems: ['Two Sum', 'Valid Parentheses'] },
    '2025-08-26': { count: 1, problems: ['Longest Substring'] },
    '2025-08-25': { count: 3, problems: ['Merge Lists', 'Binary Tree', 'Max Subarray'] },
    '2025-08-23': { count: 1, problems: ['Two Pointers'] },
    '2025-08-22': { count: 2, problems: ['Hash Table', 'Array Sum'] },
    '2025-08-20': { count: 1, problems: ['Stack Problem'] },
    '2025-08-19': { count: 2, problems: ['String Matching', 'DP Problem'] },
    '2025-08-15': { count: 1, problems: ['Graph Traversal'] },
    '2025-08-14': { count: 3, problems: ['Tree Height', 'Sorting', 'Search'] },
    '2025-08-10': { count: 1, problems: ['Linked List'] }
  };

  const getCurrentMonth = () => {
    return currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const formatDateKey = (day) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month, day).toISOString().split('T')[0];
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getTotalSolved = () => {
    return Object.values(solvedDates).reduce((total, day) => total + day.count, 0);
  };

  const getCurrentStreak = () => {
    // Calculate current streak
    const today = new Date();
    let streak = 0;
    let currentDay = new Date(today);
    
    while (currentDay >= new Date('2025-08-01')) {
      const dateKey = currentDay.toISOString().split('T')[0];
      if (solvedDates[dateKey]) {
        streak++;
        currentDay.setDate(currentDay.getDate() - 1);
      } else {
        break;
      }
    }
    
    return streak;
  };

  const getBestStreak = () => {
    // Calculate longest streak (mock)
    return 7;
  };

  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear();
  };

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const days = getDaysInMonth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavigationHeader 
        title="Problem Calendar" 
        showBackButton 
        backAction={onBack}
        currentPage={currentPage}
        navigateTo={navigateTo}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />
      
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Solved</p>
                <p className="text-3xl font-bold text-green-400">{getTotalSolved()}</p>
                <p className="text-gray-400 text-sm mt-1">All time</p>
              </div>
              <Check className="w-8 h-8 text-green-400" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Current Streak</p>
                <p className="text-3xl font-bold text-orange-400 flex items-center">
                  {getCurrentStreak()}
                  <Flame className="w-6 h-6 ml-2" />
                </p>
                <p className="text-gray-400 text-sm mt-1">Days</p>
              </div>
              <Flame className="w-8 h-8 text-orange-400" />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Best Streak</p>
                <p className="text-3xl font-bold text-purple-400">{getBestStreak()}</p>
                <p className="text-gray-400 text-sm mt-1">Days</p>
              </div>
              <Trophy className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
          {/* Calendar Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{getCurrentMonth()}</h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={goToPreviousMonth}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-300 hover:text-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNextMonth}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-300 hover:text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            {/* Day Names */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {dayNames.map((dayName) => (
                <div key={dayName} className="text-center text-gray-400 text-sm font-medium py-2">
                  {dayName}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                if (!day) {
                  return <div key={index} className="h-16"></div>;
                }

                const dateKey = formatDateKey(day);
                const dayData = solvedDates[dateKey];
                const isCurrentDay = isToday(day);

                return (
                  <div
                    key={day}
                    className={`h-16 rounded-lg border transition-all duration-200 cursor-pointer group relative ${
                      isCurrentDay
                        ? 'border-blue-500 bg-blue-500/10'
                        : dayData
                        ? 'border-green-500/50 bg-green-500/10 hover:bg-green-500/20'
                        : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <div className="p-2 h-full flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className={`text-sm font-medium ${
                          isCurrentDay ? 'text-blue-400' : dayData ? 'text-green-400' : 'text-gray-300'
                        }`}>
                          {day}
                        </span>
                        {dayData && (
                          <div className="flex items-center space-x-1">
                            <Check className="w-3 h-3 text-green-400" />
                            <span className="text-xs text-green-400">{dayData.count}</span>
                          </div>
                        )}
                      </div>
                      
                      {dayData && (
                        <div className="flex space-x-1">
                          {Array.from({ length: Math.min(dayData.count, 3) }, (_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          ))}
                          {dayData.count > 3 && (
                            <span className="text-xs text-green-400">+</span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Tooltip */}
                    {dayData && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                        <div className="bg-gray-800 text-white text-xs rounded-lg py-2 px-3 min-w-max">
                          <div className="font-medium mb-1">{dayData.count} problems solved</div>
                          <div className="space-y-1">
                            {dayData.problems.map((problem, i) => (
                              <div key={i} className="text-gray-300">• {problem}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-white font-medium mb-4">Legend</h3>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border border-white/20 rounded"></div>
              <span className="text-gray-400 text-sm">No problems solved</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500/20 border border-green-500/50 rounded"></div>
              <span className="text-gray-400 text-sm">Problems solved</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500/20 border border-blue-500 rounded"></div>
              <span className="text-gray-400 text-sm">Today</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};