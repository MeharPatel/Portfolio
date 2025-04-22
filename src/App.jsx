import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Try from './pages/Try'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { useRef } from 'react'
import Layout from './components/Layout'

function App() {

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



      
      <section ref = {homeRef}>
        <Home projectRef = {projectRef} contactRef = {contactRef} scrollTo = {scrollTo} />
      </section>
      <Try />
      <section ref = {aboutRef}>
        <About />
      </section>
      <section ref = {projectRef}>
        <Projects />
      </section>
      <section ref = {contactRef}>
        <Contact />
      </section>
      <Footer />
    </Layout>
    </div>
  )
}

export default App
