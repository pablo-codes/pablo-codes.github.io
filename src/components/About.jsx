import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: "Companies Worked With", value: "6+" },
    { label: "Years Experience", value: "3+" },
    { label: "Technologies Mastered", value: "30+" },
    { label: "Certifications", value: "3+" },
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-white">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Passionate developer dedicated to creating innovative solutions
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">
              Building Digital Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              I'm a highly skilled{" "}
              <span className="font-semibold text-primary">
                Full Stack Web Developer
              </span>{" "}
              with over{" "}
              <span className="font-semibold text-primary">
                3+ years of experience
              </span>{" "}
              specializing in MERN stack technologies.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              My expertise spans across{" "}
              <span className="font-semibold">
                JavaScript, Node.js, React, MongoDB, and REST APIs
              </span>
              , enabling me to deliver scalable, secure, and performant web
              applications that drive business success.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              From building enterprise autodialer platforms with GraphQL and
              real-time communications to developing OCR APIs with 95%+
              accuracy, I bring a proven track record of transforming complex
              requirements into elegant solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm passionate about leveraging cutting-edge technologies like{" "}
              <span className="font-semibold">
                TypeScript, Docker, GraphQL, and Smart Contracts
              </span>{" "}
              to create innovative digital experiences that make a difference.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.4 }}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-shadow border border-primary-100"
              >
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
