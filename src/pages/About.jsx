import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="p-8 text-center"
      >
      
      <div className="about-section p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-6">
          I'm a passionate Developer & Designer who loves creating clean and minimal digital experiences. 
          Always learning, always growing.
        </p>
        
        <div className="flex flex-col gap-4 items-center">
          <p className="max-w-xl">
            With a strong background in both front-end development and UI/UX design, 
            I focus on building products that are not only beautiful but also functional. 
            I love experimenting with new technologies and turning ideas into reality.
          </p>
          
          <p className="max-w-xl">
            When I'm not coding, you'll find me sketching designs, exploring nature, or learning something new.
          </p>

          <button className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Download Resume
          </button>
        </div>
      </div>
      </motion.section>
    </div>
  )
}

export default About
