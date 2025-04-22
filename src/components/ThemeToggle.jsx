import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
// import { Button } from './ui/button';

const ThemeToggle = ({ className = '' }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <button variant="ghost" size="icon" aria-label="Toggle theme" className={className}>
      <div className="h-5 w-5" />
    </button>
  );

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      className={`interactive ${className}`}
    >
      {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;