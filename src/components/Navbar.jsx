// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle"; // Adjust path if needed
// import { Button } from "@/components/ui/button"; // Adjust path if needed
import { motion } from "framer-motion";

const Navbar = ({ homeRef, aboutRef, projectRef, contactRef, scrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Animation variants for mobile menu
  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg py-2 shadow-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo/brand */}
          <Link
            to="/"
            className="interactive text-2xl font-bold text-primary flex items-center"
          >
            <span className="tracking-tight">Mehar Patel </span>
            <span className="text-primary text-3xl"> Portfolio</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            
              <button
                key={homeRef} onClick={() => scrollTo(homeRef)}
                className={`interactive px-4 py-2 rounded-md text-sm font-medium transition-colors`}>
                Home
              </button>
              <button
                key={aboutRef} onClick={() => scrollTo(aboutRef)}
                className={`interactive px-4 py-2 rounded-md text-sm font-medium transition-colors`}>
                About
              </button>
              <button
                key={projectRef} onClick={() => scrollTo(projectRef)}
                className={`interactive px-4 py-2 rounded-md text-sm font-medium transition-colors`}>
                Projects
              </button>
              <button
                key={contactRef} onClick={() => scrollTo(contactRef)}
                className={`interactive px-4 py-2 rounded-md text-sm font-medium transition-colors`}>
                Contact
              </button>
            
            
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <ThemeToggle className="mr-2" />
            <button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Menu"
              className="interactive p-2"
            >
              {/* {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />} */}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-3 pb-2 space-y-1">
            
              <motion.div key={homeRef} variants={itemVariants}>
                <button
                  onClick={() => scrollTo(homeRef)}
                  className={`interactive block px-4 py-2 rounded-md text-base font-medium transition-colors`}>
                  Home
                </button>
              </motion.div>
              
              <motion.div key={aboutRef} variants={itemVariants}>
                <button
                  onClick={() => scrollTo(aboutRef)}
                  className={`interactive block px-4 py-2 rounded-md text-base font-medium transition-colors`}>
                  About
                </button>
              </motion.div>

              <motion.div key={projectRef} variants={itemVariants}>
                <button
                  onClick={() => scrollTo(projectRef)}
                  className={`interactive block px-4 py-2 rounded-md text-base font-medium transition-colors`}>
                  Projects
                </button>
              </motion.div>

              <motion.div key={contactRef} variants={itemVariants}>
                <button
                  onClick={() => scrollTo(contactRef)}
                  className={`interactive block px-4 py-2 rounded-md text-base font-medium transition-colors`}>
                  Contact
                </button>
              </motion.div>
            
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;