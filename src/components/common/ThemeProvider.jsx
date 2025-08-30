import React, { createContext, useContext, useState, useEffect } from 'react';

const themes = {
  purple: {
    name: 'Purple Dark',
    background: 'from-slate-900 via-purple-900 to-slate-900',
    card: 'bg-white/5 backdrop-blur-sm border-white/10',
    accent: 'bg-blue-600 hover:bg-blue-700',
    button: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
    text: 'text-white',
    textMuted: 'text-gray-400'
  },
  glint: {
    name: 'Glint Green',
    background: 'from-gray-900 via-emerald-900 to-gray-900',
    card: 'bg-white/5 backdrop-blur-sm border-emerald-500/20',
    accent: 'bg-emerald-600 hover:bg-emerald-700',
    button: 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700',
    text: 'text-white',
    textMuted: 'text-emerald-400'
  },
  cosmic: {
    name: 'Cosmic Blue',
    background: 'from-slate-900 via-blue-900 to-indigo-900',
    card: 'bg-white/5 backdrop-blur-sm border-indigo-500/20',
    accent: 'bg-indigo-600 hover:bg-indigo-700',
    button: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
    text: 'text-white',
    textMuted: 'text-indigo-400'
  },
  carbon: {
    name: 'Carbon Dark',
    background: 'from-gray-950 via-gray-900 to-black',
    card: 'bg-white/5 backdrop-blur-sm border-gray-500/20',
    accent: 'bg-gray-700 hover:bg-gray-600',
    button: 'bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500',
    text: 'text-white',
    textMuted: 'text-gray-400'
  },
  fire: {
    name: 'Fire Orange',
    background: 'from-gray-900 via-orange-900 to-red-900',
    card: 'bg-white/5 backdrop-blur-sm border-orange-500/20',
    accent: 'bg-orange-600 hover:bg-orange-700',
    button: 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700',
    text: 'text-white',
    textMuted: 'text-orange-400'
  },
  cyber: {
    name: 'Cyberpunk',
    background: 'from-black via-purple-950 to-pink-950',
    card: 'bg-white/5 backdrop-blur-sm border-pink-500/20',
    accent: 'bg-pink-600 hover:bg-pink-700',
    button: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
    text: 'text-white',
    textMuted: 'text-pink-400'
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('purple');
  
  useEffect(() => {
    const saved = localStorage.getItem('codeChallenge-theme');
    if (saved && themes[saved]) {
      setCurrentTheme(saved);
    }
  }, []);
  
  const changeTheme = (themeKey) => {
    setCurrentTheme(themeKey);
    localStorage.setItem('codeChallenge-theme', themeKey);
    console.log('Theme changed to:', themeKey);
  };
  
  return (
    <ThemeContext.Provider value={{
      currentTheme,
      theme: themes[currentTheme],
      themes,
      changeTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
