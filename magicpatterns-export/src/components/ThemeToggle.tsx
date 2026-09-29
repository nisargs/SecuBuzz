import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Initial check from document or localStorage
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'light') {
      setTheme('light');
    } else {
      const saved = localStorage.getItem('secubuzz-theme');
      if (saved === 'light') {
        setTheme('light');
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        setTheme('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('secubuzz-theme', next);
    } catch (e) {}
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid h-9 w-9 place-items-center rounded-md border border-line bg-surface text-muted transition-colors duration-150 ease-out hover:border-accent hover:text-ink focus:outline-none"
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? (
        <SunIcon className="h-4 w-4 text-accent transition-transform duration-150 hover:rotate-12" />
      ) : (
        <MoonIcon className="h-4 w-4 text-accent transition-transform duration-150 hover:-rotate-12" />
      )}
    </button>
  );
}
