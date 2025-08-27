// src/pages/Solve/components/CodeEditor.jsx
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { PROGRAMMING_LANGUAGES } from '../../../utils/constants';

export const CodeEditor = ({ code, setCode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');
  const [output, setOutput] = useState('Click "Run" to test your code...');

  const handleRun = () => {
    setOutput('Running code... (This is a mock output)');
    // Mock output after delay
    setTimeout(() => {
      setOutput('Output: [0,1]\nExecution time: 0.5ms\nMemory usage: 10MB');
    }, 1000);
  };

  const handleSubmit = () => {
    setOutput('Submitting solution... (This is a mock submission)');
    setTimeout(() => {
      setOutput('✅ Accepted!\nRuntime: 65ms (beats 95.2% of submissions)\nMemory: 14.2MB (beats 87.1% of submissions)');
    }, 1500);
  };

  return (
    <div className="w-1/2 p-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 h-full flex flex-col">
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-medium">Code Editor</h3>
            <div className="flex items-center space-x-3">
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-gray-700 text-white rounded px-3 py-1 text-sm"
              >
                {PROGRAMMING_LANGUAGES.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
              <button 
                onClick={handleRun}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center space-x-2"
              >
                <Play className="w-4 h-4" />
                <span>Run</span>
              </button>
              <button 
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={`// Write your ${selectedLanguage} solution here...\n\nfunction twoSum(nums, target) {\n    // Your code here\n}`}
            className="w-full h-full bg-black/50 text-gray-100 font-mono text-sm p-4 rounded-lg border border-white/10 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="p-4 border-t border-white/10">
          <div className="bg-black/50 rounded-lg p-4">
            <h4 className="text-white font-medium mb-2">Output</h4>
            <div className="text-gray-400 text-sm font-mono whitespace-pre-wrap">
              {output}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};