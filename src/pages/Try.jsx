// frontend/front/src/pages/Skills.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Skill categories data
const skillCategories = [
  {
    name: "Front-End",
    skills: [
      "React",
      "JavaScript",
      "HTML5/CSS3",
      "Tailwind CSS",
      "SASS",
      "Framer Motion",
      "Angular"
    ],
  },
  {
    name: "Back-End",
    skills: [
      "Node.js",
      "Express",
      "C#",
      ".NET",
      "Java",
    ],
  },
  {
    name: "Database",
    skills: [
      "MongoDB",
      "SQL Server",
      "MySQL",
      "Mongoose",
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      "Git",
      "Netlify",
      "Jenkins",
    ],
  },
];

// SkillSection component
const SkillSection = ({ category, index }) => {
  // Ref for each skill section
  const sectionRef = useRef(null);
  // Detect when section is in view
  const isSectionInView = useInView(sectionRef, {
    once: true, // Animate only once
    amount: 0.2, // Trigger when 20% of element is visible
    margin: "0px 0px -50px 0px", // Trigger 50px before bottom
  });

  return (
    <motion.div
      ref={sectionRef}
      className="flex flex-col"
      initial="hidden"
      animate={isSectionInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" },
        },
      }}
    >
      <h3 className="skills-name text-xl font-bold mb-4">
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <div
            key={skill}
            variant="secondary"
            className="skill-text py-1.5 px-3 text-base transition-colors interactive"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Skills page component
const Try = () => {
  // Ref for main section
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
        delayChildren: 0.1,
      },
    },
  };

  // Variants for items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variants for decorative elements
  const decorVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 0.6,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="py-8 md:py-8 bg-gradient-to-b from-[var(--background)] to-[rgba(168,85,247,0.2)] relative"
      ref={ref}
    >
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={itemVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Technical{" "}
            <span className="skills-title">
              Skills
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}>
            A comprehensive overview of technologies and tools I work with to build modern applications.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillSection key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Coding Activity Section */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.h3
            className="text-2xl font-bold mb-6 text-center"
            variants={itemVariants}
          >
            Coding Activity
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            variants={containerVariants}
          >
            {[
              { value: "1,200+", label: "Contributions" },
              { value: "50+", label: "Repositories" },
              { value: "15+", label: "Open Source Projects" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="p-6 border border-[rgba(168,85,247,0.2)] rounded-lg bg-gray-100/20 dark:bg-slate-800/20 backdrop-blur-sm transition-transform hover:transform hover:scale-105 interactive"
                variants={itemVariants}
              >
                <p className="skill-text text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mb-2">
                  {stat.value}
                </p>
                <p className="text-[rgba(31,41,55,0.7)] dark:text-[rgba(243,244,246,0.7)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute left-10 top-10 w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-3xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={decorVariants}
      />
      <motion.div
        className="absolute right-10 bottom-10 w-80 h-80 bg-[var(--accent)]/10 rounded-full blur-3xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={decorVariants}
        transition={{ delay: 0.5 }}
      />
    </section>
  );
};

export default Try;






// // src/pages/Index.jsx
// import React, { useEffect, useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// // import { Button } from "@/components/ui/button"; // Adjust path if needed
// import { Link } from "react-router-dom";


// const Try = () => {
  

//   return (
//     <div>
//     <div class="overflow-hidden whitespace-nowrap border-t border-solid text-gray-900 py-2 ">
//     <div class="inline-block animate-marquee">
//       MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR
//     </div>
//   </div>
//     <div class="overflow-hidden whitespace-nowrap border-t border-solid text-gray-900 py-2 ">
//     <div class="inline-block animate-marquee-reverse">
//     MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR MEHAR
//     </div>
//   </div>
    
//     </div>
  
//   );
// };

// export default Try;