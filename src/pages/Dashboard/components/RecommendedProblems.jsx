// src/pages/Dashboard/components/RecommendedProblems.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { problems } from '../../../data/problems';
import { getDifficultyColor } from '../../../utils/helpers';

export const RecommendedProblems = ({ handleProblemClick, navigateTo }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
      <div className="p-6 border-b border-white/10">
        <h3 className="text-xl font-semibold text-white">Recommended Problems</h3>
        <p className="text-gray-400 text-sm mt-1">Perfect for your current skill level</p>
      </div>
      <div className="divide-y divide-white/10">
        {problems.slice(0, 3).map((problem) => (
          <div
            key={problem.id}
            onClick={() => handleProblemClick(problem)}
            className="p-4 hover:bg-white/5 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    {problem.title}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 text-sm line-clamp-1">
                  {problem.description}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-white/10">
        <button 
          onClick={() => navigateTo('problems')}
          className="w-full px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-all duration-200 font-medium"
        >
          View All Problems
        </button>
      </div>
    </div>
  );
};