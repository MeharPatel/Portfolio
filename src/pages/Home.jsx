import React from 'react'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-4xl mb-6 .font-times-new-roman" data-aos="fade-up">
          <b>Get to know Me</b>
        </h2>
        <p className="max-w-2xl text-center text-lg" data-aos="fade-up" data-aos-delay="200">
        Curious, creative, and just getting started — I have one year of experience under my belt and a whole lot of passion for what’s next. I love working with teams that spark ideas off each other and turn good work into something great. Every project is a chance to learn, grow, and push a little further, and I’m excited to keep adding new skills along the way.
        </p>
        <p className="max-w-2xl text-center text-lg" data-aos="fade-up" data-aos-delay="200">
        I'm someone who quietly observes, thinks deeply, and comes up with creative ideas that adapt to the situation. Even though I'm more of an introvert at heart, I genuinely get along with all kinds of people and love being part of a team. I believe that a calm approach, a curious mind, and a willingness to keep learning can turn small moments into meaningful achievements.
        </p>
      </div>
    </div>
  )
}

export default Home
