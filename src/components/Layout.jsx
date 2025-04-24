import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import CustomCursor from "./CustomCursor";

const Layout = ({ children, isDark, setIsDark, homeRef, aboutRef, projectRef, contactRef, scrollTo }) => {
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
        <Navbar homeRef = {homeRef} aboutRef = {aboutRef} projectRef = {projectRef} contactRef = {contactRef} scrollTo = {scrollTo}  />
      
      
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
      
    </>
  );
};

export default Layout;