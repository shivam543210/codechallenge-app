// src/components/common/NavigationHeader.jsx
import React from 'react';
import { ArrowLeft, Code, Home, BookOpen, Bell, Settings, Users } from 'lucide-react';
import { notifications } from '../../data/mockData';

export const NavigationHeader = ({ 
  title, 
  showBackButton = false, 
  backAction, 
  currentPage,
  navigateTo,
  showNotifications,
  setShowNotifications 
}) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <button
                onClick={backAction}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">{title}</h1>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => navigateTo('dashboard')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 'dashboard' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </button>
            <button 
              onClick={() => navigateTo('problems')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 'problems' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Problems</span>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-xl shadow-xl border border-white/10 z-50">
                  <div className="p-4 border-b border-white/10">
                    <h3 className="text-white font-medium">Notifications</h3>
                  </div>
                  <div className="p-2 max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-3 hover:bg-white/5 rounded-lg cursor-pointer">
                        <div className="text-sm text-white">{notification.message}</div>
                        <div className="text-xs text-gray-400 mt-1">{notification.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>1v1 Challenge</span>
            </button>

            <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};