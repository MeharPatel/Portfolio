import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const Hero = ({ projectRef }) => {
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      };

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

      const floatingOrbs = Array(5).fill(null);

  return (
    <section>
            <div id='home' className="home container-fluid">
                
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
                            <div className="relative group">
                              <div
                                className="w-48 h-48 mb-0 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl transition-all duration-300 group-hover:scale-105">
                                <img
                                  src="/mehar.jpg" // Replace with your image
                                  alt="Profile"
                                  className="w-full h-full object-cover" />
                              </div>
                
                              {/* Decorative rings */}
                              <motion.div
                                className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-full"
                                style={{ rotate }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              />
                            </div>
                
                            {/* Right side - Name and intro */}
                            <div className="text-center md:text-left">
                              <motion.h1
                                className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6"
                                variants={itemVariants}
                              >
                                <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-pink-500 to-blue-500 bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
                                    Hi, I'm Mehar Patel
                                </span>
                                <br />
                                <span className="text-3xl md:text-4xl lg:text-5xl text-foreground/80">
                                  I Stack the Full Stack!
                                </span>
                              </motion.h1>
                
                              <motion.p
                                className="text-xl md:text-2xl mb-4 text-foreground/80 max-w-2xl"
                                variants={itemVariants}>
                                Full-stack developer crafting pixel-perfect apps with a side of humor.
                              </motion.p>
                
                              
                            </div>
                          </motion.div>


                            <motion.div
                                        className="relative w-64 h-64 mx-auto my-10 group"
                                        whileHover={{ scale: 1.05 }}
                                        animate={{ rotate: [0, 360] }}
                                        transition={{
                                          rotate: {
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear",
                                          },
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
                                className="text-center text-lg italic text-primary/90 mb-8"
                                variants={itemVariants}
                              >
                                "Oh yeah! I sketch too sometimes haha!"
                              </motion.p>




                              <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            variants={itemVariants}
          >
            <button
              asChild
              className="bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-full text-lg relative overflow-hidden group"
            >
              <button onClick={() => scrollTo()}></button></button>>
                <span className="relative z-10">See My Work</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </button>
            <button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-6 py-6 rounded-full text-lg relative overflow-hidden group"
            >
              <Link to="/contact">
                <span className="relative z-10">Get in Touch</span>
                <motion.div
                  className="absolute inset-0 bg-primary/5"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </button>
          </motion.div>

                          </motion.div>



            </div>

        </section>
  )
}

export default Hero
