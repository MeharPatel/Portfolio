// frontend/front/src/pages/Skills.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

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
  {
    name: "Soft Skills",
    skills: [
      "Problem Solving",
      "Teamwork",
      "Adaptability",
      "Critical Thinking",
      "Enthusiasm",
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
const Skills = () => {
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
            Technical <span className="skills-title">Skills</span>
          </motion.h2>
          <motion.p variants={itemVariants}>
            A comprehensive overview of technologies and tools I work with to
            build modern applications.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillSection
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Coding Activity Section */}
        <motion.div className="mt-20 max-w-4xl mx-auto" variants={itemVariants}>
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
              { value: "25+", label: "Git Repositories" },
              { value: "600+", label: "Leetcode Quenstions Solved" },
              { value: "5+", label: "Projects" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="sub-skills p-6 border border-[rgba(168,85,247,0.2)] rounded-lg backdrop-blur-sm transition-transform hover:transform hover:scale-105 interactive font-extrabold"
                variants={itemVariants}
              >
                <p className="text-bold-xl sub-skills-name text-4xl mb-2">
                  {stat.value}
                </p>
                <p className="">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="text-center mt-16 mb-10">
        <Link
          to="https://leetcode.com/u/MeharPatel/"
          className="relative px-6 py-3 font-bold group"
          target="_blank"
        >
          <span className="leetcode-btn absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="project-btn-border absolute inset-0 w-full h-full border-4"></span>
          <span className="relative">
            View My Leetcode Profile
          </span>
        </Link>
      </motion.div>
    </section>
  );
};

export default Skills;