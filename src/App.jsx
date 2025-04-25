import './App.css'
import About from './pages/About'
import ContactMe from './pages/ContactMe'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Try from './pages/Try'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Layout from './components/Layout'
import CustomBackground from './components/CustomBackground'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Education from './pages/Education'

function App() {
  
  // const [isDark, setIsDark] = useState(false);

  // useEffect(() => {
  //   isDark ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  //   isDark ? document.body.classList.remove('light') : document.body.classList.add('light');
  // }, [isDark])

  const homeRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const projectRef = useRef();
  const skillsRef = useRef();
  const educationRef = useRef();
  const contactRef = useRef();

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior : 'smooth' })
  };

  return (
    <div> 
    <Layout homeRef = {homeRef} aboutRef = {aboutRef} experienceRef = {experienceRef} projectRef = {projectRef} skillsRef = {skillsRef} educationRef = {educationRef} contactRef = {contactRef} scrollTo = {scrollTo}>


      {/* <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} homeRef = {homeRef} aboutRef = {aboutRef} projectRef = {projectRef} contactRef = {contactRef} scrollTo = {scrollTo}  /> */}
      <section ref = {homeRef}>
      <CustomBackground />
        <Home projectRef = {projectRef} contactRef = {contactRef} scrollTo = {scrollTo} />
      </section>
      <section ref = {aboutRef}>
        <About />
      </section>
      <section ref = {experienceRef}>
        <Experience />
      </section>
      <section ref = {projectRef}>
        <Projects />
      </section>
      <section ref = {skillsRef}>
        <Skills />
      </section>
      <section ref = {educationRef}>
        <Education />
      </section>
      {/* <Try /> */}
      <section ref = {contactRef}>
        <ContactMe />
      </section>
      <Footer scrollTo = {scrollTo} homeRef = {homeRef} />
    </Layout>
    </div>
  )
}

export default App
