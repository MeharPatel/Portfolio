// frontend/front/src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = ({ homeRef, aboutRef, experienceRef, projectRef, skillsRef, educationRef, contactRef, scrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  const clickOnLink = (ref) => {
    toggleMenu();
    scrollTo(ref);
  }

  // Track scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion variants for mobile menu
  const menuVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

    const socials = [
    { href: 'https://github.com/MeharPatel', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/mehar-patel/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'meharpatel2512@gmail.com', icon: Mail, label: 'Email' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg py-2 shadow-md glass"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            onClick = {() => {scrollTo(homeRef)}}
            className="text-2xl font-bold text-[var(--primary)] interactive whitespace-nowrap text-start"
          >
            Mehar Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            
              {/* <button
              onClick={() => {scrollTo(homeRef)}}
                asChild
                variant="ghost"
                className="text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive whitespace-nowrap">
                Home
              </button> */}

              <button
              onClick={() => {scrollTo(aboutRef)}}
                asChild
                variant="ghost"
                className="text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive whitespace-nowrap">
                About
              </button>

              <button
              onClick={() => {scrollTo(experienceRef)}}
                asChild
                variant="ghost"
                className="text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive whitespace-nowrap">
                Experience
              </button>

              <button
              onClick={() => {scrollTo(projectRef)}}
                asChild
                variant="ghost"
                className="text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive whitespace-nowrap">
                Projects
              </button>
              
              <button
              onClick={() => {scrollTo(skillsRef)}}
                asChild
                variant="ghost"
                className="text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive whitespace-nowrap">
                Skills
              </button>

              <button
              onClick={() => {scrollTo(educationRef)}}
                asChild
                variant="ghost"
                className="text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive whitespace-nowrap">
                Education
              </button>

              <button
              onClick={() => {scrollTo(contactRef)}}
                asChild
                variant="ghost"
                className="text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive whitespace-nowrap">
                Contact
              </button>
            
            <ThemeToggle className="ml-2" />

            <div className="flex items-center space-x-4 pl-2 border-l border-border">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    to={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    <social.icon size={20} />
                  </Link>
                ))}
              </div>
          </div>

          {/* Mobile Hamburger button */}
          <button
            variant="ghost"
            size="icon"
            className="md:hidden text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 left-0 h-screen w-full bg-background/95 backdrop-blur-lg border-l border-[rgba(168,85,247,0.2)] md:hidden"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        style={{ display: isOpen ? "block" : "none" }} // Ensure proper display toggle
      >
        <div className="container mx-auto px-4 max-w-4xl h-full flex flex-col">
          {/* Close button */}
          <div className="flex justify-end pt-4">
            <button
              variant="ghost"
              size="icon"
              className="text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <motion.div
            className="flex flex-col items-center justify-center flex-grow space-y-6"
            variants={containerVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}>
            
              {/* <motion.div variants={itemVariants}>
                <button
                  asChild
                  variant="ghost"
                  className="text-xl text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive"
                  onClick={() => {clickOnLink(homeRef)}}>
                  Home
                </button>
              </motion.div> */}

              <motion.div variants={itemVariants}>
                <button
                  asChild
                  variant="ghost"
                  className="text-xl text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive"
                  onClick={() => {clickOnLink(aboutRef)}}>
                  About
                </button>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  asChild
                  variant="ghost"
                  className="text-xl text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive"
                  onClick={() => {clickOnLink(experienceRef)}}>
                  Experience
                </button>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  asChild
                  variant="ghost"
                  className="text-xl text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive"
                  onClick={() => {clickOnLink(projectRef)}}>
                  Projects
                </button>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  asChild
                  variant="ghost"
                  className="text-xl text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive"
                  onClick={() => {clickOnLink(skillsRef)}}>
                  Skills
                </button>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  asChild
                  variant="ghost"
                  className="text-xl text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive"
                  onClick={() => {clickOnLink(educationRef)}}>
                  Education
                </button>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  asChild
                  variant="ghost"
                  className="text-xl text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.1] interactive"
                  onClick={() => {clickOnLink(contactRef)}}>
                  Contact
                </button>
              </motion.div>
            
            <motion.div variants={itemVariants}>
              <ThemeToggle className="mt-4" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

// Variants for container (stagger children)
const containerVariants = {
  closed: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.1 } },
};

export default Navbar;















// // src/components/Navbar.jsx
// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
// import ThemeToggle from "./ThemeToggle"; // Adjust path if needed
// // import { Button } from "./ui/button"; // Adjust path if needed
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   // Toggle mobile menu
//   const toggleMenu = () => setIsOpen(!isOpen);

//   // Detect scroll to change navbar style
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   // Animation variants for mobile menu
//   const menuVariants = {
//     open: {
//       opacity: 1,
//       height: "auto",
//       transition: {
//         duration: 0.3,
//         staggerChildren: 0.1,
//         when: "beforeChildren",
//       },
//     },
//     closed: {
//       opacity: 0,
//       height: 0,
//       transition: {
//         duration: 0.3,
//         staggerChildren: 0.05,
//         staggerDirection: -1,
//         when: "afterChildren",
//       },
//     },
//   };

//   const itemVariants = {
//     open: { opacity: 1, y: 0 },
//     closed: { opacity: 0, y: -10 },
//   };



//   return (
//     <nav
//       className={`fixed w-full z-40 transition-all duration-300 ${
//         scrolled
//           ? "bg-background/80 backdrop-blur-lg py-2 shadow-md"
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="mx-auto px-4 md:px-6">
//         <div className="flex justify-between items-center">
//           {/* Logo/brand */}
//           <Link
//             to="/"
//             className="interactive text-2xl font-bold text-primary flex items-center"
//           >
//             <span className="tracking-tight">Mehar </span>
//             <span className="text-primary text-3xl"> Portfolio</span>
//           </Link>

//           {/* Desktop navigation */}
//           <div className="hidden md:flex items-center space-x-1">
            
//               <button
//                 key={homeRef} onClick={() => scrollTo(homeRef)}
//                 className={`interactive px-4 py-2 rounded-md text-sm font-medium transition-colors`}>
//                 Home
//               </button>
//               <button
//                 key={aboutRef} onClick={() => scrollTo(aboutRef)}
//                 className={`interactive px-4 py-2 rounded-md text-sm font-medium transition-colors`}>
//                 About
//               </button>
//               <button
//                 key={projectRef} onClick={() => scrollTo(projectRef)}
//                 className={`interactive px-4 py-2 rounded-md text-sm font-medium transition-colors`}>
//                 Projects
//               </button>
//               <button
//                 key={contactRef} onClick={() => scrollTo(contactRef)}
//                 className={`interactive px-4 py-2 rounded-md text-sm font-medium transition-colors`}>
//                 Contact
//               </button>

//               <ThemeToggle className="mr-2" />
            
//               

//           </div>

//           {/* Mobile menu button */}
//           <div className="flex md:hidden items-center">
//             <ThemeToggle className="mr-2" />
//             <button
//               variant="ghost"
//               size="icon"
//               onClick={toggleMenu}
//               aria-label="Menu"
//               className="interactive p-2"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <motion.div
//           initial="closed"
//           animate={isOpen ? "open" : "closed"}
//           variants={menuVariants}
//           className="md:hidden overflow-hidden"
//         >
//           <div className="pt-3 pb-2 space-y-1">
            
//               <motion.div key={homeRef} variants={itemVariants}>
//                 <button
//                   onClick={() => scrollTo(homeRef)}
//                   className={`interactive block px-4 py-2 rounded-md text-base font-medium transition-colors`}>
//                   Home
//                 </button>
//               </motion.div>
              
//               <motion.div key={aboutRef} variants={itemVariants}>
//                 <button
//                   onClick={() => scrollTo(aboutRef)}
//                   className={`interactive block px-4 py-2 rounded-md text-base font-medium transition-colors`}>
//                   About
//                 </button>
//               </motion.div>

//               <motion.div key={projectRef} variants={itemVariants}>
//                 <button
//                   onClick={() => scrollTo(projectRef)}
//                   className={`interactive block px-4 py-2 rounded-md text-base font-medium transition-colors`}>
//                   Projects
//                 </button>
//               </motion.div>

//               <motion.div key={contactRef} variants={itemVariants}>
//                 <button
//                   onClick={() => scrollTo(contactRef)}
//                   className={`interactive block px-4 py-2 rounded-md text-base font-medium transition-colors`}>
//                   Contact
//                 </button>
//               </motion.div>
            
//           </div>
//         </motion.div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;