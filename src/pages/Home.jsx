import React from 'react'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-4xl mb-6 .font-times-new-roman" data-aos="fade-up">
          A Little About Me
        </h2>
        <p className="max-w-2xl text-center text-lg" data-aos="fade-up" data-aos-delay="200">
          I'm a passionate Developer & Designer crafting clean, user-centric experiences. 
          Focused on building beautiful web apps with a touch of creativity.
        </p>
      </div>
    </div>
  )
}

export default Home
