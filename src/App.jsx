import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Resume from './pages/Resume'
import Skills from './pages/Skills'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {
  
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    isDark ? document.body.classList.add('dark') : document.body.classList.remove('dark');
    isDark ? document.body.classList.remove('light') : document.body.classList.add('light');
  }, [isDark])

  return (
    <div>
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)}   />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "/projects" element = {<Projects />} />
        <Route path = "/skills" element = {<Skills />} />
        <Route path = "/resume" element = {<Resume />} />
        <Route path = "/education" element = {<Education />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
