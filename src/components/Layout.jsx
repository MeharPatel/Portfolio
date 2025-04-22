import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import CustomCursor from "./CustomCursor";

const Layout = ({ children, isDark, toggleTheme, homeRef, aboutRef, projectRef, contactRef, scrollTo }) => {
  const location = useLocation();

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.45, 0, 0.55, 1],
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Navbar */}
      {/* <Navbar /> */}
        <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} homeRef = {homeRef} aboutRef = {aboutRef} projectRef = {projectRef} contactRef = {contactRef} scrollTo = {scrollTo}  />
      
      
      {/* Main content with page transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          id="main-content"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pt-16 min-h-screen" // Add padding for fixed navbar
        >
          {children}
        </motion.main>
      </AnimatePresence>
      
      {/* Footer */}
      <footer className="bg-background border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-foreground/70">
                © {new Date().getFullYear()} PixelPurple.dev
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Built with React, Tailwind CSS & a lot of coffee ☕
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="interactive text-foreground/70 hover:text-primary">GitHub</a>
              <a href="#" className="interactive text-foreground/70 hover:text-primary">LinkedIn</a>
              <a href="#" className="interactive text-foreground/70 hover:text-primary">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;