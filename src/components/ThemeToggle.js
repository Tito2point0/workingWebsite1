import React, { useEffect } from 'react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  // Toggle between dark and light mode
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Apply the theme and save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', true);
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', false);
    }
  }, [darkMode]);

  return (
    <button onClick={toggleTheme}>
      Switch to {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;