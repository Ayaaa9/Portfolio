import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    setIsDark(theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-slate-700 dark:bg-slate-700 light:bg-slate-300 rounded-full transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/30 group"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-0.5 left-0.5 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full transition-all duration-500 flex items-center justify-center shadow-lg ${
          isDark ? 'translate-x-0' : 'translate-x-7'
        }`}
      >
        {isDark ? (
          <Moon size={14} className="text-white transition-transform duration-500 group-hover:rotate-12" />
        ) : (
          <Sun size={14} className="text-white transition-transform duration-500 group-hover:rotate-180" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
