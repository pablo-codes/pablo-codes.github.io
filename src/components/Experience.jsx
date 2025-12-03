import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Punch Group",
      location: "Nigeria",
      period: "Sep 2025 - Present",
      type: "Full-time, On-Site",
      achievements: [
        "Developed a full-stack enterprise autodialer platform utilizing Node.js, TypeScript, and Express, anchored by a robust GraphQL architecture with Apollo Server",
        "Integrated Twilio and Vonage APIs for real-time voice communications, SMS, and AI-driven call automation",
        "Engineered a lead management system featuring WebSocket-based agent assignment, automated call queuing, IVR navigation with DTMF support, and dynamic routing",
        "Incorporated OpenAI's GPT models for real-time conversation assistance and automated content generation",
        "Built a scalable backend using MongoDB/Mongoose for data persistence, Redis and BullMQ for asynchronous job processing, and AWS S3/Cloudinary for secure media storage",
        "Designed comprehensive RESTful and GraphQL APIs supporting over 34 resolvers to handle campaigns, logs, scheduling, and real-time reporting",
      ],
    },
    {
      title: "MERN Stack Developer",
      company: "PERZSI LLC",
      location: "USA",
      period: "Apr 2025 - Jul 2025",
      type: "Contract, Remote",
      achievements: [
        "Led a team of 3 developers in designing and developing a new internal product, accelerating project delivery and code quality",
        "Set up GitHub CI/CD pipelines and server configuration for seamless testing and automated deployment",
        "Developed RESTful APIs with proper versioning and security best practices",
        "Translated design mockups directly from Figma to production UI, eliminating additional design cycles",
      ],
    },
    {
      title: "Web Developer",
      company: "GN128 Solutions",
      location: "Nigeria",
      period: "May 2025 - Jun 2025",
      type: "Contract, On-site",
      achievements: [
        "Contributed to 3 active web projects, enhancing UI/UX, performance, and developer efficiency",
        "Implemented PHP backends for 2 client-facing projects, supporting robust business logic and database interactions",
        "Set up CI/CD pipelines for all assigned projects",
      ],
    },
    {
      title: "Fullstack PHP Developer",
      company: "PERZSI LLC",
      location: "USA",
      period: "Mar 2024 - Jan 2025",
      type: "Contract, Remote",
      achievements: [
        "Successfully migrated the company's website backend from Node.js to Laravel, reducing server response time by 40%",
        "Created 5 new SQL tables to support dashboard functionality, reducing data retrieval time by 30%",
        "Integrated 3 payment platforms, increasing payment processing speed by 25%",
      ],
    },
    {
      title: "Backend Developer",
      company: "CALCULATE ALL",
      location: "USA",
      period: "Apr 2023 - Dec 2023",
      type: "Contract, Remote",
      achievements: [
        "Built an OCR API utilizing Tesseract and pdfjs-dist, enabling users to extract text from 500+ file formats with 95%+ accuracy and 30% reduction in manual data entry time",
        "Designed a scalable image management system using Cloudinary's Node.js SDK, leading to a 40% decrease in image storage costs and 3x increase in image querying speed",
        "Developed a MongoDB database, achieving 99.9% uptime and 25% reduction in data storage costs",
      ],
    },
    {
      title: "FullStack Web Development Intern",
      company: "GIGSHARE",
      location: "Remote",
      period: "2022 - 2023",
      type: "Internship",
      achievements: [
        "Developed and maintained RESTful APIs, ensuring 99.5% API uptime and 30% reduction in API response time",
        "Improved database performance by leveraging Mongoose's indexing and aggregation features, resulting in 40% decrease in database query time",
      ],
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="section-padding bg-white">
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
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            My professional journey and achievements
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-300 to-transparent" />

            {/* Experience Items */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              className="space-y-8"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-white border-4 border-primary shadow-glow" />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all border border-gray-100 cursor-pointer"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-primary-50 text-primary text-sm rounded-full border border-primary-100">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <BriefcaseIcon className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    {/* Achievements */}
                    <motion.div
                      initial={false}
                      animate={{ height: expandedIndex === index ? "auto" : 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mt-4 border-t border-gray-200 pt-4">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-600 text-sm flex gap-2"
                          >
                            <span className="text-primary mt-1">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Expand Button */}
                    <button className="mt-4 flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
                      {expandedIndex === index ? (
                        <>
                          <span>Show less</span>
                          <ChevronUpIcon className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          <span>View details</span>
                          <ChevronDownIcon className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
