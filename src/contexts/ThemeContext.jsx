import React, { createContext, useState, useContext } from 'react';

// Define some default themes (you can extend or change these)
const themes = {
  darkDefault: {
    background: '#121212',
    primary: '#BB86FC',
    secondary: '#03DAC6',
    text: '#FFFFFF',
    accent: '#3700B3',
  },
  darkMono: {
    background: '#222',
    primary: '#6200EE',
    secondary: '#03DAC6',
    text: '#E0E0E0',
    accent: '#BB86FC',
  },
  darkPink: {
    background: '#1E1E1E',
    primary: '#FF4081',
    secondary: '#00E676',
    text: '#FFFFFF',
    accent: '#F06292',
  },
  // You can add more themes here
};

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('darkDefault');
  const [theme, setTheme] = useState(themes[themeName]);

  const changeTheme = (name) => {
    if (themes[name]) {
      setThemeName(name);
      setTheme(themes[name]);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, themeName, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
