import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CodeBracketSquareIcon,
  CpuChipIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Enterprise Autodialer Platform",
      company: "Punch Group",
      description:
        "Full-stack enterprise autodialer platform with GraphQL architecture, real-time voice communications, and AI-driven automation.",
      technologies: [
        "Node.js",
        "TypeScript",
        "GraphQL",
        "Apollo Server",
        "Twilio",
        "Vonage",
        "WebSocket",
        "OpenAI",
        "MongoDB",
        "Redis",
        "BullMQ",
      ],
      icon: CpuChipIcon,
      color: "from-blue-500 to-blue-600",
      highlights: [
        "Built comprehensive API with 34+ GraphQL resolvers",
        "Integrated real-time call automation with AI assistance",
        "Implemented WebSocket-based lead management system",
      ],
    },
    {
      title: "OCR API System",
      company: "Calculate All",
      description:
        "Advanced OCR API capable of extracting text from 500+ file formats with 95%+ accuracy, significantly reducing manual data entry.",
      technologies: [
        "Node.js",
        "Tesseract",
        "pdfjs-dist",
        "MongoDB",
        "Express",
      ],
      icon: CodeBracketSquareIcon,
      color: "from-purple-500 to-purple-600",
      highlights: [
        "95%+ text extraction accuracy",
        "Support for 500+ file formats",
        "30% reduction in manual data entry time",
      ],
    },
    {
      title: "Image Management System",
      company: "Calculate All",
      description:
        "Scalable image management platform with optimized storage, fast querying, and comprehensive media handling capabilities.",
      technologies: ["Node.js", "Cloudinary SDK", "MongoDB", "AWS S3"],
      icon: PhotoIcon,
      color: "from-green-500 to-green-600",
      highlights: [
        "40% decrease in storage costs",
        "3x increase in query speed",
        "Secure media storage with AWS S3",
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Showcasing impactful solutions and technical excellence
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hard transition-all border border-gray-100"
            >
              {/* Project Header */}
              <div
                className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <project.icon className="h-16 w-16 text-white opacity-80" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-1">
                  {project.company}
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4 space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-50 text-gray-700 text-xs rounded-md border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-primary-50 text-primary text-xs rounded-md border border-primary-200 font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
