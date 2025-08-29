import React, { useState } from 'react';
import { ArrowLeft, Code, Home, BookOpen, Bell, Settings, Users, Palette } from 'lucide-react';
import { notifications } from '../../data/mockData';
import { useTheme } from './ThemeProvider';

export const NavigationHeader = ({ 
  title, 
  showBackButton = false, 
  backAction, 
  currentPage,
  navigateTo,
  showNotifications,
  setShowNotifications 
}) => {
  const { theme, themes, changeTheme, currentTheme } = useTheme();
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  return (
    <div className={`${theme.colors.card} border-b`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <button
                onClick={backAction}
                className={`p-2 hover:bg-white/10 rounded-lg transition-colors ${theme.colors.text}`}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-r ${theme.colors.secondary} rounded-lg flex items-center justify-center`}>
                <Code className={`w-5 h-5 ${theme.colors.text}`} />
              </div>
              <h1 className={`text-2xl font-bold ${theme.colors.text}`}>{title}</h1>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => navigateTo('dashboard')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 'dashboard' 
                  ? theme.colors.accent 
                  : `${theme.colors.textSecondary} hover:${theme.colors.text} hover:bg-white/10`
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </button>
            
            <button 
              onClick={() => navigateTo('problems')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 'problems' 
                  ? theme.colors.accent 
                  : `${theme.colors.textSecondary} hover:${theme.colors.text} hover:bg-white/10`
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Problems</span>
            </button>

            {/* Theme Toggle */}
            <div className="relative">
              <button 
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className={`p-2 ${theme.colors.textSecondary} hover:${theme.colors.text} hover:bg-white/10 rounded-lg transition-all duration-200`}
              >
                <Palette className="w-5 h-5" />
              </button>
              
              {showThemeMenu && (
                <div className={`absolute right-0 mt-2 w-48 ${theme.colors.card} rounded-xl shadow-xl border z-50`}>
                  <div className={`p-4 border-b border-white/10`}>
                    <h3 className={`${theme.colors.text} font-medium`}>Choose Theme</h3>
                  </div>
                  <div className="p-2">
                    {Object.entries(themes).map(([key, themeData]) => (
                      <button
                        key={key}
                        onClick={() => {
                          changeTheme(key);
                          setShowThemeMenu(false);
                        }}
                        className={`w-full text-left p-3 hover:bg-white/5 rounded-lg cursor-pointer transition-all duration-200 flex items-center space-x-3 ${
                          currentTheme === key ? 'bg-white/10' : ''
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${themeData.colors.secondary}`}></div>
                        <span className={`text-sm ${theme.colors.text}`}>{themeData.name}</span>
                        {currentTheme === key && (
                          <div className={`ml-auto w-2 h-2 rounded-full ${theme.colors.accent}`}></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-2 ${theme.colors.textSecondary} hover:${theme.colors.text} hover:bg-white/10 rounded-lg transition-all duration-200 relative`}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              {showNotifications && (
                <div className={`absolute right-0 mt-2 w-80 ${theme.colors.card} rounded-xl shadow-xl border z-50`}>
                  <div className={`p-4 border-b border-white/10`}>
                    <h3 className={`${theme.colors.text} font-medium`}>Notifications</h3>
                  </div>
                  <div className="p-2 max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-3 hover:bg-white/5 rounded-lg cursor-pointer">
                        <div className={`text-sm ${theme.colors.text}`}>{notification.message}</div>
                        <div className={`text-xs ${theme.colors.textMuted} mt-1`}>{notification.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <button className={`px-4 py-2 ${theme.colors.accent} ${theme.colors.text} rounded-lg transition-all duration-200 flex items-center space-x-2`}>
              <Users className="w-4 h-4" />
              <span>1v1 Challenge</span>
            </button>
            
            <button className={`p-2 ${theme.colors.textSecondary} hover:${theme.colors.text} hover:bg-white/10 rounded-lg transition-all duration-200`}>
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
