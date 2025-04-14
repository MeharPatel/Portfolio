import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = ({ isDark, toggleTheme }) => {

  return (
    <div>
    <motion.section
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>

      <nav className="navbar flex justify-between items-center bg-white-800 p-4 shadow-lg sticky top-0 z-50">
        <div className="text-2xl font-bold">
          <Link to = "/" className="font-times-new-roman">Mehar Patel</Link>
        </div>
        <div className="space-x-6 text-lg">
          <Link to = "/about" className="hover:text-blue-500 font-times-new-roman">About</Link>
          <Link to = "/contact" className="hover:text-blue-500 font-times-new-roman">Contact</Link>
          <Link to = "/projects" className="hover:text-blue-500 font-times-new-roman">Projects</Link>
          <button onClick = {toggleTheme}>
            {isDark ? '🌞' : '🌙'}
          </button>
        </div>
      </nav>
          </motion.section>
    </div>
  )
}

export default Navbar
