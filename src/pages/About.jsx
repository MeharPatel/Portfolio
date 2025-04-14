import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Skills from './Skills'
import Education from './Education';
import { Experience } from './Experience';
// import { Education } from './Education';

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
        <h2 className="text-4xl mb-4">About Me</h2>
        <p className="text-lg mb-6">
          I'm a passionate Developer & Designer who loves creating clean and minimal digital experiences.
          Always learning, always growing.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <p className="max-w-2xl">
            I focus on building products that are not only beautiful but also functional.
            I love experimenting with new technologies and turning ideas into reality.
          </p>

          <p className="max-w-2xl">
            When I'm not coding, you'll find me sketching designs, exploring nature, or learning something new.
          </p>

          <p className="max-w-2xl">
            I am a motivated person with one year of hands-on experience, known for my adaptability, creative problem-solving, and strong teamwork skills. As an introvert, I bring thoughtful insights and focused energy to every project while building positive working relationships with colleagues. I am committed to continuous learning and growth, always aiming to contribute effectively to team goals and deliver high-quality results.
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
        </div>
      </div>
      </motion.section>

      <Experience />
      <Skills />
      <Education />
    </div>
  )
}

export default About
