import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CodeBracketIcon,
  ServerIcon,
  CircleStackIcon,
  CloudIcon,
  CubeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Web Technologies",
      icon: CodeBracketIcon,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "jQuery"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Frontend",
      icon: CubeIcon,
      skills: [
        "ReactJS",
        "Flutter",
        "Android Studio",
        "Native Android Development",
      ],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Backend & Runtime",
      icon: ServerIcon,
      skills: [
        "Node.js",
        "Express.js",
        "PHP",
        "Laravel",
        "Python (Flask, Django)",
        "Java",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Databases",
      icon: CircleStackIcon,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "PHPMyAdmin"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "DevOps & Cloud",
      icon: CloudIcon,
      skills: [
        "Git",
        "GitHub CI/CD",
        "Docker",
        "Google Cloud",
        "Firebase",
        "Linux",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Specialized Tools",
      icon: WrenchScrewdriverIcon,
      skills: [
        "OpenAI API",
        "Twilio",
        "Sendgrid",
        "Solidity",
        "Rust",
        "GraphQL",
        "Mongoose",
        "Sequelize",
      ],
      color: "from-pink-500 to-pink-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="section-padding bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building modern web applications
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200 hover:bg-primary-50 hover:border-primary-200 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
