// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from "react";
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ className }) => {
  // State to track theme
  const [isDark, setIsDark] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme on button click
  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`p-2 rounded-full text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] ${className}`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;