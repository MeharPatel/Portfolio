import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Skills from './Skills'
import Education from './Education';
import Experience from './Experience';
// import { Education } from './Education';

const About = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {/* Page heading */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Me: <span className='about-title'> More Than Just Code </span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded" />
        </motion.div>

        {/* Bio section */}
        <motion.div
          variants={fadeInVariants}
          className="bg-card rounded-xl p-6 shadow-lg border border-border mb-12 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
          
          <div className="relative">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Who Am I?</h2>
            <p className="text-lg mb-6">
              I'm a full-stack developer who loves turning coffee into code. When 
              I'm not debugging, I'm probably sketching or cracking bad puns.
            </p>
            <p className="text-lg">
              My approach to development combines technical expertise with a 
              creative mindset, allowing me to build solutions that are both
              functional and beautiful.
            </p>
            
            {/* The punny tagline */}
            <div className="mt-8 p-4 bg-primary/10 rounded-lg text-center">
              <p className="text-xl italic font-medium text-primary">
                "I don't just write code, I make it byte!"
              </p>
            </div>
          </div>
        </motion.div>

        {/* My journey section */}
        <motion.div
          variants={fadeInVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="relative">
              <h2 className="text-2xl font-semibold mb-4 text-primary">My Journey</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 py-2">
                  <h3 className="font-medium">Started coding in 2017</h3>
                  <p className="text-muted-foreground">
                    Fell in love with JavaScript and built my first website
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4 py-2">
                  <h3 className="font-medium">Mastered React in 2019</h3>
                  <p className="text-muted-foreground">
                    Started building complex frontend applications
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4 py-2">
                  <h3 className="font-medium">Full-stack by 2020</h3>
                  <p className="text-muted-foreground">
                    Added Node.js to my toolkit and never looked back
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4 py-2">
                  <h3 className="font-medium">Now</h3>
                  <p className="text-muted-foreground">
                    Building apps that don't crash... mostly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-lg border border-border relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="relative">
              <h2 className="text-2xl font-semibold mb-4 text-primary">When I'm Not Coding</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-3 bg-primary/20 rounded-full text-primary">✏️</span>
                  <span>Drawing sketches and doodles</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-3 bg-primary/20 rounded-full text-primary">📚</span>
                  <span>Reading tech books and sci-fi novels</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-3 bg-primary/20 rounded-full text-primary">🎮</span>
                  <span>Playing indie games for "inspiration"</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-3 bg-primary/20 rounded-full text-primary">🏃‍♂️</span>
                  <span>Running to clear cache... I mean, my head</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-3 bg-primary/20 rounded-full text-primary">☕</span>
                  <span>Coffee tasting (it's research for work, I swear)</span>
                </li>
              </ul>
              
              <div className="mt-6 p-3 bg-muted rounded-lg">
                <p className="italic text-muted-foreground">
                  "My GitHub commit graph has more activity than my social life..."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Final quote */}
        <motion.div
          variants={fadeInVariants}
          className="mt-12 flex flex-col items-center"
        >
          <p className="text-xl italic text-primary">
            "My code's so clean, it sparkles like a byte!"
          </p>
          <Link class="group mt-8 p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent h-auto w-[170px] overflow-hidden transition-all duration-100" target='_blank' download='/mehar.jpg'>
            <span class="visit_btn group-hover:w-full absolute left-0 h-full w-5 border-y border-l transition-all duration-500">
            </span>
            <p class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
            duration-200">My Resume</p>
            <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">Download Now!</span>
            <span class="visit_btn group-hover:w-full absolute right-0 h-full w-5  border-y border-r transition-all duration-500">
            </span>
          </Link>
        </motion.div>
      </motion.div>

 

      <Experience />
      <Skills />
      <Education />


    </div>
  )
}

export default About
