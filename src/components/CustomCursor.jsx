import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  // State to track cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Delay visibility until first move to prevent cursor at 0,0 on page load
      if (!isVisible) setIsVisible(true);
    };

    // Function to check if cursor is over an interactive element
    const checkHovering = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName.toLowerCase() === "a" || 
        target.tagName.toLowerCase() === "button" ||
        target.classList.contains("interactive") ||
        target.closest("a") || 
        target.closest("button") ||
        target.closest(".interactive");
      
      setIsHovering(!!isInteractive);
    };

    // Combined handler for both position and hover checking
    const handleMouseMove = (e) => {
      updatePosition(e);
      checkHovering(e);
    };

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", () => setIsVisible(true));
    window.addEventListener("mouseleave", () => setIsVisible(false));

    // Clean up event listeners
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", () => setIsVisible(true));
      window.removeEventListener("mouseleave", () => setIsVisible(false));
    };
  }, [isVisible]);

  // Don't render cursor on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor orb */}
      <div 
        className={`cursor
          fixed pointer-events-none z-50 rounded-full 
          transition-transform duration-150 flex items-center justify-center 
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          ${isHovering ? 'w-8 h-8 bg-white' : 'w-4 h-4 bg-primary animate-pulse-cursor'}
        `}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Trailing cursor effect */}
      <div 
        className={`trailing-cursor
          fixed pointer-events-none z-40 rounded-full bg-primary/30
          w-10 h-10 transition-all duration-300 ease-out 
          ${isVisible ? 'opacity-30' : 'opacity-0'}
          ${isHovering ? 'scale-150' : 'scale-100'}
        `}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transitionDelay: '0.05s', // This creates the trailing effect
        }}
      />
    </>
  );
};

export default CustomCursor;