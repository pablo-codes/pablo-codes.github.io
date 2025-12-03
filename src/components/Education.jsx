import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      title: "Diploma in Full Stack Web Development",
      icon: CodeBracketIcon,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Diploma in Web Development Fundamentals",
      icon: AcademicCapIcon,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Cyber Security Certification",
      icon: ShieldCheckIcon,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="education" className="section-padding bg-white">
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
            Education & <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Continuous learning and professional development
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all border border-gray-100"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center`}
              >
                <edu.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-center font-heading font-semibold text-gray-900 leading-snug">
                {edu.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
