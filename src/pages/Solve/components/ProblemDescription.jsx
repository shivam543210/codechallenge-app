// src/pages/Solve/components/ProblemDescription.jsx
import React from 'react';
import { getDifficultyColor } from '../../../utils/helpers';

export const ProblemDescription = ({ problem }) => {
  if (!problem) {
    return (
      <div className="w-1/2 p-6 overflow-y-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <p className="text-gray-400">No problem selected</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-1/2 p-6 overflow-y-auto">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <div className="flex items-center space-x-3 mb-6">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(problem.difficulty)}`}>
            {problem.difficulty}
          </span>
          <span className="text-gray-400">#{problem.id}</span>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
          <p className="text-gray-300 mb-6">{problem.description}</p>

          <h3 className="text-lg font-semibold text-white mb-3">Examples</h3>
          {(problem.examples || []).map((example, i) => (
            <div key={i} className="bg-black/30 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-400 mb-2">Example {i + 1}:</p>
              <div className="space-y-2">
                <div>
                  <span className="text-white font-medium">Input: </span>
                  <span className="text-blue-300 font-mono">{example.input}</span>
                </div>
                <div>
                  <span className="text-white font-medium">Output: </span>
                  <span className="text-green-300 font-mono">{example.output}</span>
                </div>
                {example.explanation && (
                  <div>
                    <span className="text-white font-medium">Explanation: </span>
                    <span className="text-gray-300">{example.explanation}</span>
                  </div>
                )}
              </div>
            </div>
          ))}

          <h3 className="text-lg font-semibold text-white mb-3">Constraints</h3>
          <ul className="text-gray-300 space-y-1">
            {(problem.constraints || []).map((constraint, i) => (
              <li key={i} className="font-mono text-sm">{constraint}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-6">
            {(problem.tags || []).map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};