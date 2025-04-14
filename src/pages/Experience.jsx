import React from 'react'

export const Experience = () => {
    const experiences = [
        {
          title: 'Back-end Developer',
          company: 'SRKay Consulting Group',
          date: 'May 2024 - Present',
          details: [
            'I worked as a backend developer mostly worked with NodeJs (sailsJs) and MS-SQL.',
            'I learnt .net when I exchanged projects then worked with that too, I am quite adaptive and can learn new languages and tools quickly.',
            'I worked with a large group of people and I learnt how to balanced working independently and collaborating closely with teammates.',
            'Accepted constructive feedback and continuously worked on improving my skills.',
          ],
        },
        {
          title: 'Intern Developer',
          company: 'SRKay Consulting Group',
          date: 'January 2024 - April 2024',
          details: [
            'I learnt about SQL, Javascript and Angular in the internship.',
            'Strengthened problem-solving skills by debugging and testing frontend features.',
            'Gained hands-on experience working in an Agile environment..',
          ],
        },
      ];

  return (
    <div className="max-w-6xl mx-auto p-8">
    <h2 className="text-4xl mb-4 text-center">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="experience_card shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-400 mb-4">{exp.date}</p>
            <ul className="list-disc list-inside space-y-2">
              {exp.details.map((point, idx) => (
                <li key={idx} className="text-gray-700">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
