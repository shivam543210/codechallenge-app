// src/pages/Dashboard/components/RecentActivity.jsx
import React from 'react';
import { Check, Code, Trophy } from 'lucide-react';
import { recentActivity } from '../../../data/mockData';
import { getStatusColor } from '../../../utils/helpers';

export const RecentActivity = () => {
  const getActivityIcon = (status) => {
    switch (status) {
      case 'completed':
        return <Check className="w-4 h-4 text-green-400" />;
      case 'won':
        return <Trophy className="w-4 h-4 text-purple-400" />;
      default:
        return <Code className="w-4 h-4 text-yellow-400" />;
    }
  };

  const getActivityBgColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20';
      case 'won':
        return 'bg-purple-500/20';
      default:
        return 'bg-yellow-500/20';
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
      <div className="p-6 border-b border-white/10">
        <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
        <p className="text-gray-400 text-sm mt-1">Your latest coding sessions</p>
      </div>
      <div className="p-6 space-y-4">
        {recentActivity.map((activity, i) => (
          <div key={i} className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg border border-white/10">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getActivityBgColor(activity.status)}`}>
              {getActivityIcon(activity.status)}
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">{activity.problem}</p>
              <p className="text-gray-400 text-xs">{activity.time}</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(activity.status)}`}>
              {activity.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};