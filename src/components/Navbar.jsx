import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to = "/">Home</Link>
      <Link to = "/about">About</Link>
      <Link to = "/contact">Contact</Link>
      <Link to = "/skills">Skills</Link>
      <Link to = "/projects">Projects</Link>
      <Link to = "/resume">Resume</Link>
    </div>
  )
}

export default Navbar
