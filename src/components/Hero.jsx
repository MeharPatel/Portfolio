import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const Hero = () => {
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

  return (
    <section>
            <div id='home' className="home container-fluid">
                <div className="box-cont">
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>
                <div className="box-cont">
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>
                <div className="box-cont">
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>
                <div className="box-cont">
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>
                <div className="box-cont">
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>
                <div className="box-cont">
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>
                <div className="box-cont">
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>
                <div className="box-cont">
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>
                <motion.div
                          className="max-w-4xl mx-auto "
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                            
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-12 mb-12"
                    variants={itemVariants}
                >
                    {/* Left side - Profile image */}
                    <div className="relative group">
                    <div
                        className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl transition-all duration-300 group-hover:scale-105">
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

                    <motion.p
                        className="text-lg italic text-primary/90 mb-8"
                        variants={itemVariants}
                    >
                        "Oh yeah! I sketch too sometimes haha!"
                    </motion.p>
                    </div>
                        </motion.div>
                </motion.div>
            </div>

        </section>
  )
}

export default Hero
