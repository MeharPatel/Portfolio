import React from 'react'

const Education = () => {
  return (
    <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="edu-title">Qualification</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-10 px-24">      

        <div className="flex flex-col gap-6 w-full md:w-1/2">
            <div>
            <h2 className="text-2xl font-bold">Bachelor of Engineering in Computer Science</h2>
            <p>R.N.G. Patel Institute of Technology | 2020 - 2024</p>
            <p className="mt-2">
                Specialized in Software Engineering, with a focus on building scalable web applications and strong fundamentals in algorithms.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-bold">Higher Secondary Education</h2>
            <p>st. Xavier's High School | 2018 - 2020</p>
            <p className="mt-2">
                Majored in Science (Physics, Chemistry, Mathematics) and participated in coding and robotics clubs.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-bold">Secondary School Education</h2>
            <p>Lourdes Convent High School | 2016 - 2018</p>
            <p className="mt-2">
                Completed secondary education with a keen interest in computer applications and mathematics.
            </p>
            </div>
        </div>

        <div className="hidden md:block w-full md:w-1/2 flex justify-center">
            <img 
            src="/edu6.jpg" 
            alt="Education" 
            className="rounded-2xl w-full max-w-md object-cover"
            />
        </div>
        </div>
    </div>
  )
}

export default Education