// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import ThemeToggle from "./ThemeToggle"; // Adjust path if needed
// import { Button } from "@/components/ui/button"; // Adjust path if needed
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

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
            <span className="tracking-tight">PixelPurple</span>
            <span className="text-primary text-3xl">.dev</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`interactive px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary font-bold"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* <ThemeToggle className="ml-2" /> */}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            {/* <ThemeToggle className="mr-2" /> */}
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
            {navLinks.map((link) => (
              <motion.div key={link.path} variants={itemVariants}>
                <Link
                  to={link.path}
                  className={`interactive block px-4 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary/20 text-primary"
                      : "text-foreground/80 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;