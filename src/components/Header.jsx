import React, { useState, useEffect } from 'react';

function Header() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <i className="bi bi-check2-square text-primary-500 text-3xl mr-2"></i>
          <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">TaskMaster</h1>
        </div>
        
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? (
            <i className="bi bi-moon-fill text-xl"></i>
          ) : (
            <i className="bi bi-sun-fill text-xl text-yellow-400"></i>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
