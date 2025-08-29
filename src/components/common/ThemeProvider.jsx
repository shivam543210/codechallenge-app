import React, { createContext, useContext, useState, useEffect } from 'react';

// Define your themes
const themes = {
  // Original Purple Theme
  purple: {
    name: 'Purple Dark',
    colors: {
      primary: 'from-slate-900 via-purple-900 to-slate-900',
      secondary: 'from-blue-600/20 to-purple-600/20',
      accent: 'bg-blue-600 hover:bg-blue-700',
      card: 'bg-white/5 backdrop-blur-sm border-white/10',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      textMuted: 'text-gray-400'
    }
  },

  // Inspired by your Glint design
  glint: {
    name: 'Glint Green',
    colors: {
      primary: 'from-gray-900 via-emerald-900 to-gray-900',
      secondary: 'from-emerald-600/20 to-green-600/20',
      accent: 'bg-emerald-600 hover:bg-emerald-700',
      card: 'bg-white/5 backdrop-blur-sm border-emerald-500/20',
      text: 'text-white',
      textSecondary: 'text-emerald-100',
      textMuted: 'text-emerald-400'
    }
  },

  // Inspired by your AI Event design
  cosmic: {
    name: 'Cosmic Blue',
    colors: {
      primary: 'from-slate-900 via-blue-900 to-indigo-900',
      secondary: 'from-blue-600/20 to-indigo-600/20',
      accent: 'bg-indigo-600 hover:bg-indigo-700',
      card: 'bg-white/5 backdrop-blur-sm border-indigo-500/20',
      text: 'text-white',
      textSecondary: 'text-blue-100',
      textMuted: 'text-indigo-400'
    }
  },

  // Dark Professional
  carbon: {
    name: 'Carbon Dark',
    colors: {
      primary: 'from-gray-950 via-gray-900 to-black',
      secondary: 'from-gray-800/20 to-gray-700/20',
      accent: 'bg-gray-700 hover:bg-gray-600',
      card: 'bg-white/5 backdrop-blur-sm border-gray-500/20',
      text: 'text-white',
      textSecondary: 'text-gray-200',
      textMuted: 'text-gray-400'
    }
  },

  // Orange/Red Theme
  fire: {
    name: 'Fire Orange',
    colors: {
      primary: 'from-gray-900 via-orange-900 to-red-900',
      secondary: 'from-orange-600/20 to-red-600/20',
      accent: 'bg-orange-600 hover:bg-orange-700',
      card: 'bg-white/5 backdrop-blur-sm border-orange-500/20',
      text: 'text-white',
      textSecondary: 'text-orange-100',
      textMuted: 'text-orange-400'
    }
  },

  // Cyberpunk Theme
  cyber: {
    name: 'Cyberpunk',
    colors: {
      primary: 'from-black via-purple-950 to-pink-950',
      secondary: 'from-pink-600/20 to-purple-600/20',
      accent: 'bg-pink-600 hover:bg-pink-700',
      card: 'bg-white/5 backdrop-blur-sm border-pink-500/20',
      text: 'text-white',
      textSecondary: 'text-pink-100',
      textMuted: 'text-pink-400'
    }
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('purple');

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('codeChallenge-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Save theme to localStorage
  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
    localStorage.setItem('codeChallenge-theme', themeName);
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
