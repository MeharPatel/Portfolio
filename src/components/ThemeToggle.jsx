import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
// import { Button } from "@/components/ui/button";

const ThemeToggle = ({ className = "" }) => {
  // State to track current theme
  const [theme, setTheme] = useState("light");

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    // Check if user has already set a theme preference
    const storedTheme = localStorage.getItem("theme");
    
    // If no stored preference, check system preference
    if (!storedTheme) {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setTheme(systemPreference);
      applyTheme(systemPreference);
    } else {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    }
  }, []);

  // Function to apply theme to document and store preference
  const applyTheme = (newTheme) => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      className={`interactive rounded-full p-2 hover:bg-secondary ${className}`}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;