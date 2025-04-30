// frontend/front/src/pages/Experience.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Building2 } from "lucide-react";

const Experience = () => {
  // Ref for the experience section
  const ref = useRef(null);
  // Detect when section is in view
  const isInView = useInView(ref, {
    once: true, // Animate only once
    amount: 0.2, // Trigger when 20% is visible
    margin: "0px 0px -50px 0px", // Trigger 50px before bottom
  });

  // Variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

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
    <section
      ref={ref}
      className="container mx-auto px-4 pt-10 pb-20 md:px-6 md:pt-4 md:pb-32 relative"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        {/* Page heading */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h1 className="experience-title text-4xl md:text-5xl font-bold mb-4">
            My Journey in Tech
          </h1>
          <p className="text-lg mb-4">
            My tech journey’s just getting started and I'm not planing to stop anytime soon!
          </p>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded" />
        </motion.div>

        {/* Experience timeline */}
        <div className="space-y-8">
          {/* Full-time position */}
         {experiences.map((exp, index) => (
          <motion.div 
            variants={itemVariants}
            key = {index}
            className="experience-card relative rounded-xl p-6 shadow-lg border border-[rgba(168,85,247,0.2)] backdrop-blur-sm interactive"
          >
            <div className="flex items-start gap-4">
              <div className="hidden md:block bg-[var(--primary)]/10 p-3 rounded-lg">
                <Building2 className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-start">
                  {exp.title}
                </h3>
                <p className="text-start mb-2">
                  {exp.company}
                </p>
                <p className="text-sm text-start mb-4">
                  {exp.date}
                </p>
                <ul className="list-disc list-inside space-y-2 text-start">
               {exp.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
                </ul>
              </div>
            </div>
          </motion.div>
          ))}
          
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;







   

//   return (
//     <div className="max-w-6xl mx-auto p-8">
//     <h2 className="text-4xl mb-4 text-center">Experience</h2>
//       <div className="space-y-8">
//           <div key={index} className="experience_card shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
//             <h3 className="text-2xl font-semibold">{exp.title}</h3>
//             <p className="text-gray-600">{exp.company}</p>
//             <p className="text-sm text-gray-400 mb-4">{exp.date}</p>
//             <ul className="list-disc list-inside space-y-2">
//                 <li key={idx} className="text-gray-700">{point}</li>
//               
//             </ul>
//           </div>
//         
//       </div>
//     </div>
//   )
// }
