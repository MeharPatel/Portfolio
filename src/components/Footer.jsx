// frontend/front/src/components/Footer.jsx
import React, { useRef } from "react";
import { ArrowUp } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  // Ref for the footer section
  const ref = useRef(null);
  // Detect when footer is in view
  const isInView = useInView(ref, {
    once: true, // Animate only once
    amount: 0.2, // Trigger when 20% is visible
    margin: "0px 0px -50px 0px", // Trigger 50px before bottom
  });

  // Variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer
      ref={ref}
      className="py-2 border-t border-[rgba(168,85,247,0.2)] bg-gradient-to-t from-[var(--background)] to-[rgba(168,85,247,0.1)] relative"
    >
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Name */}
          <motion.div variants={itemVariants} className="mb-4 md:mb-0">
            <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
              PixelPun
            </p>
            <p className="text-sm">
              Built with *purple pixel* love!
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div variants={itemVariants} className="flex items-center">
            <p className="text-sm text-[rgba(31,41,55,0.6)] dark:text-[rgba(243,244,246,0.6)]">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.div variants={itemVariants} className="mt-6 md:mt-0">
            <a
              href="#home"
              className="p-3 bg-[var(--primary)]/10 rounded-full hover:bg-[var(--primary)]/20 transition-colors inline-block interactive"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 text-[var(--primary)]" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;