// src/pages/Problems/components/ProblemsList.jsx
import React from 'react';
import { ChevronRight, Check, Users } from 'lucide-react';
import { getDifficultyColor } from '../../../utils/helpers';

export const ProblemsList = ({ problems, handleProblemClick }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
      <div className="divide-y divide-white/10">
        {problems.map((problem) => (
          <div
            key={problem.id}
            onClick={() => handleProblemClick(problem)}
            className="p-6 hover:bg-white/5 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-gray-400 font-mono text-sm w-8">#{problem.id}</span>
                  <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                    {problem.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2 ml-12">
                  {problem.description}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 ml-12">
                  <span className="flex items-center space-x-1">
                    <Check className="w-4 h-4" />
                    <span>{problem.acceptance}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{problem.submissions}</span>
                  </span>
                  <div className="flex space-x-2">
                    {problem.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-700/50 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};