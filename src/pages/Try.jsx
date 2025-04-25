import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CustomBackground from "../components/CustomBackground";

const Try = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -50px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="pt-16 pb-16 md:pt-24 md:pb-24 bg-gradient-to-b from-[var(--background)] to-[rgba(168,85,247,0.1)] relative min-h-screen"
    >
      <CustomBackground className="hidden md:block absolute inset-0 z-0" />
      <motion.div
        className="container mx-auto px-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            Welcome to My Purple Pixel Portfolio!
          </h1>
          <p className="text-lg text-[rgba(31,41,55,0.7)] dark:text-[rgba(243,244,246,0.7)] mb-6">
            This homepage glows so bold, it’s a *purple pixel* gold!
          </p>
          <motion.a
            href="#contact"
            variants={itemVariants}
            className="inline-block px-6 py-3 bg-[var(--primary)] text-[var(--foreground)] rounded-lg hover:bg-[var(--accent)] transition-colors interactive"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Try;


























// // frontend/front/src/components/Navbar.jsx
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// // import { Button } from "./ui/button";
// import ThemeToggle from "../components/ThemeToggle";

// const Try = ({ homeRef, aboutRef, projectRef, contactRef, scrollTo }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Toggle mobile menu
//   const toggleMenu = () => setIsOpen(!isOpen);

//   // Track scroll for glassmorphism effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Navigation links
//   const navLinks = [
//     { to: "/", label: "Home" },
//     { to: "/about", label: "About" },
//     { to: "/projects", label: "Projects" },
//     { to: "/skills", label: "Skills" },
//     { to: "/experience", label: "Experience" },
//     { to: "/contact", label: "Contact" },
//   ];

//   // Framer Motion variants for mobile menu
//   const menuVariants = {
//     closed: { x: "100%", opacity: 0 },
//     open: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
//   };

//   const itemVariants = {
//     closed: { opacity: 0, y: 20 },
//     open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
//         scrolled
//           ? "bg-background/80 backdrop-blur-lg py-2 shadow-md glass"
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link
//             onClick={() => scrollTo(homeRef)}
//             className="text-2xl font-bold text-[var(--primary)] interactive whitespace-nowrap">
//             Mehar Portfolio
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navLinks.map((link) => (
//               <button
//                 key={link.label}
//                 asChild
//                 variant="ghost"
//                 className="text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive whitespace-nowrap"
//               >
//                 <Link to={link.to}>{link.label}</Link>
//               </button>
//             ))}
//             <ThemeToggle className="ml-2" />
//           </div>

//           {/* Mobile Hamburger button */}
//           <button
//             variant="ghost"
//             size="icon"
//             className="md:hidden text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive"
//             onClick={toggleMenu}
//             aria-label={isOpen ? "Close menu" : "Open menu"}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <motion.div
//         className={`fixed top-0 left-0 h-full w-full bg-background/95 backdrop-blur-lg glass md:hidden ${
//           isOpen ? "block" : "hidden"
//         }`}
//         variants={menuVariants}
//         initial="closed"
//         animate={isOpen ? "open" : "closed"}
//       >
//         <div className="container mx-auto px-4 max-w-4xl h-full flex flex-col">
//           {/* Close button */}
//           <div className="flex justify-end pt-4">
//             <button
//               variant="ghost"
//               size="icon"
//               className="text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive"
//               onClick={toggleMenu}
//               aria-label="Close menu"
//             >
//               <X size={24} />
//             </button>
//           </div>

//           {/* Mobile Navigation Links */}
//           <motion.div
//             className="flex flex-col items-center justify-center flex-grow space-y-6"
//             variants={containerVariants}
//             initial="closed"
//             animate={isOpen ? "open" : "closed"}
//           >
//             {navLinks.map((link, index) => (
//               <motion.div key={link.label} variants={itemVariants} custom={index}>
//                 <button
//                   asChild
//                   variant="ghost"
//                   className="text-xl text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive"
//                   onClick={toggleMenu}
//                 >
//                   <Link to={link.to}>{link.label}</Link>
//                 </button>
//               </motion.div>
//             ))}
//             <motion.div variants={itemVariants} custom={navLinks.length}>
//               <ThemeToggle className="mt-4" />
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </nav>
//   );
// };

// // Variants for container (stagger children)
// const containerVariants = {
//   closed: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
//   open: { transition: { staggerChildren: 0.1 } },
// };

// export default Try;