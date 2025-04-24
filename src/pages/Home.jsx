
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Home = ({ projectRef, contactRef, scrollTo }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const rotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 360]),
    springConfig
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const techRef = useRef(null);

  // Detect when tech stack is in view
  const isInView = useInView(techRef, { once: true, margin: "-50px" });

    const techVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // Moving background animations
  const floatingOrbs = Array(5).fill(null);

  return (
    <section id="home" ref={targetRef} className="relative min-h-screen overflow-hidden">
      {/* Animated background orbs */}
      {floatingOrbs.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 400 - 200],
            scale: [1, Math.random() * 0.5 + 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(${Math.random() * 360}deg, var(--primary), var(--accent))`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="container relative px-4 md:px-6 py-10 md:py-20">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile section with spinning sketch */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12 mb-12"
            variants={itemVariants}
          >
            {/* Left side - Profile image */}
            <div className="relative group z-10">
              <motion.div 
                className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl transition-all duration-300 group-hover:scale-105">
                <img
                  src="/mehar.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Decorative rings */}
              <motion.div 
                className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-full"
                style={{ rotate }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Right side - Name and intro */}
            <div className="text-center md:text-left z-10">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6"
                variants={itemVariants}
              >
                <span className="inline-block home-title">
                  Hi, I'm Mehar Patel
                </span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl text-foreground/80">
                  Full Stack Developer!
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-xl mb-2 text-foreground/80 max-w-2xl"
                variants={itemVariants}>
                Crafting digital experiences through code.
              </motion.p>
              <motion.p 
                className="text-xl md:text-xl mb-4 text-foreground/80 max-w-2xl"
                variants={itemVariants}>
                Full-stack developer crafting pixel-perfect websites with a pinch of fantasy.
              </motion.p>

            </div>
          </motion.div>

          {/* Spinning sketch illustration */}
          <motion.div 
            className="relative w-64 h-64 mx-auto my-10 group z-10"
            whileHover={{ scale: 1.05 }}
            animate={{ rotate: [0, 360] }}
            transition={{ 
              rotate: { 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            <div className="w-full h-full rounded-2xl bg-secondary p-4 rotate-2 shadow-lg transform transition-transform group-hover:rotate-6">
              <div className="w-full h-full rounded-lg bg-background dark:bg-slate-800 p-4 flex items-center justify-center relative overflow-hidden">
                {/* Code sketch */}
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full text-primary/80"
                  style={{ maxWidth: "150px" }}
                >
                  <motion.path 
                    d="M20,70 L80,70 L80,40 L20,40 Z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <motion.path 
                    d="M10,70 L90,70 L90,75 L10,75 Z" 
                    fill="currentColor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.path 
                    d="M30,50 L45,50 M30,55 L50,55 M30,60 L40,60" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                  />
                </svg>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shine" />
              </div>
            </div>
          </motion.div>

          <motion.p
                className="text-lg italic text-primary/90 mb-10"
                variants={itemVariants}
              >
                "Oh yeah! I sketch too sometimes haha!"
              </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8 mb-6"
            variants={itemVariants}
          >
            <button onClick={() => scrollTo(projectRef)} class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">See My Work</span>
            </button>
            <button onClick={() => scrollTo(contactRef)} class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">See My Work</span>
            </button>
            {/* <button onClick={() => scrollTo(projectRef)} class="relative px-6 py-3 font-bold text-black group">
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span class="relative">See My Work</span>
            </button>
            <button onClick={() => scrollTo(contactRef)} class="relative px-6 py-3 font-bold text-black group">
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span class="relative">Get in Touch</span>
            </button> */}
          </motion.div>
        </motion.div>
      </div>

  
        <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-secondary/50 backdrop-blur-md border border-border py-2 px-4 rounded-full hidden md:flex items-center space-x-3"
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}>
              <motion.div className="flex items-center space-x-3" variants={itemVariants}>
                <span className="text-xs text-foreground/60">Tech Stack:</span>
                {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="text-xs font-medium bg-background/50 border border-border rounded-full px-3 py-1"
                    custom={i}
                    variants={techVariants}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div> 
    </section>
  );
};

export default Home;
