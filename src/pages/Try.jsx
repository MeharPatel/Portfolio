import React, { useState, useEffect } from "react";

const Try = ({ words = ["Developer", "Designer", "Creator"] }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      if (isDeleting) {
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setCurrentWord(words[(wordIndex + 1) % words.length]);
        }
      } else {
        setCharIndex((prev) => prev + 1);
        if (charIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setInterval(type, 100);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [charIndex, isDeleting, wordIndex, words, currentWord]);

  return (
    <span className="text-[var(--primary)] font-mono text-xl md:text-2xl">
      {currentWord.substring(0, charIndex)}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default Try;