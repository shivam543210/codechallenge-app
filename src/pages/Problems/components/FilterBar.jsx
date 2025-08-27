// src/pages/Problems/components/FilterBar.jsx
import React from 'react';
import { Filter, Search, Star } from 'lucide-react';
import { DIFFICULTY_OPTIONS, TOPIC_OPTIONS } from '../../../utils/constants';

export const FilterBar = ({
  searchQuery,
  setSearchQuery,
  difficultyFilter,
  setDifficultyFilter,
  topicFilter,
  setTopicFilter,
  totalProblems,
  filteredCount
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select 
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 appearance-none pr-8"
            >
              {DIFFICULTY_OPTIONS.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <Filter className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
          <div className="relative">
            <select 
              value={topicFilter}
              onChange={(e) => setTopicFilter(e.target.value)}
              className="bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 appearance-none pr-8"
            >
              {TOPIC_OPTIONS.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <Filter className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search problems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 w-64 pl-10"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-gray-400">
            Showing {filteredCount} of {totalProblems} problems
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-all duration-200">
            <Star className="w-4 h-4" />
            <span>Favorites</span>
          </button>
        </div>
      </div>
    </div>
  );
};