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

function App() {
  
  // const [isDark, setIsDark] = useState(false);

  // useEffect(() => {
  //   isDark ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  //   isDark ? document.body.classList.remove('light') : document.body.classList.add('light');
  // }, [isDark])

  const homeRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior : 'smooth' })
  };

  return (
    <div> 
    <Layout homeRef = {homeRef} aboutRef = {aboutRef} projectRef = {projectRef} contactRef = {contactRef} scrollTo = {scrollTo}>



      {/* <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} homeRef = {homeRef} aboutRef = {aboutRef} projectRef = {projectRef} contactRef = {contactRef} scrollTo = {scrollTo}  /> */}
      <section ref = {homeRef}>
      <CustomBackground />
        <Home projectRef = {projectRef} contactRef = {contactRef} scrollTo = {scrollTo} />
      </section>
      <section ref = {aboutRef}>
        <About />
      </section>
      <section ref = {projectRef}>
        <Projects />
      </section>
      <Try />
      <section ref = {contactRef}>
        <ContactMe />
      </section>
      <Footer />
    </Layout>
    </div>
  )
}

export default App
