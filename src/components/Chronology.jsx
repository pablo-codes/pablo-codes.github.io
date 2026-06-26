import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Chronology = () => {
  const milestones = [
    {
      year: 'MMXXV - PRESENT',
      role: 'Full Stack Developer',
      company: 'Punch Group, Nigeria',
      reflection: 'Developed a full-stack enterprise autodialer platform (Node.js, TypeScript, Apollo GraphQL). Integrated Twilio & Vonage APIs for AI-driven call automation workflows and built lead management queues using WebSockets and Redis BullMQ.',
      icon: 'phone_callback',
      side: 'right',
      motif: (
        <svg className="absolute -top-6 -right-6 text-tertiary-container/30 w-32 h-32 select-none pointer-events-none" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" />
        </svg>
      ),
    },
    {
      year: 'MMXXV (APR - JUL)',
      role: 'MERN Stack Developer',
      company: 'PERZSI LLC, USA (Remote Contract)',
      reflection: 'Led a team of 3 developers in building an internal product. Configured automated GitHub CI/CD pipelines, developed scalable RESTful APIs, and translated complex Figma mockups directly into production React views.',
      icon: 'groups',
      side: 'left',
      motif: (
        <svg className="absolute -bottom-8 -left-8 text-secondary-container/40 w-40 h-40 select-none pointer-events-none" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100Z" />
        </svg>
      ),
    },
    {
      year: 'MMXXV (MAY - JUN)',
      role: 'Web Developer',
      company: 'GN128 Solutions, Nigeria',
      reflection: 'Contributed to 3 active web projects. Redesigned client websites to optimize UX, built PHP backends, handled complete integration cycles, and wrote extensive system documentation.',
      icon: 'language',
      side: 'right',
      motif: (
        <svg className="absolute top-1/2 right-0 -translate-y-1/2 text-tertiary-container/20 w-32 h-32 select-none pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" />
          <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" opacity="0.5" />
        </svg>
      ),
    },
    {
      year: 'MMXXIV - MMXXV',
      role: 'Fullstack PHP Developer',
      company: 'PERZSI LLC, USA',
      reflection: 'Designed and launched a unified business dashboard, optimizing query layouts to reduce load times by 30%. Integrated 3 payment processing platforms and migrated node-based servers to Laravel frameworks.',
      icon: 'dashboard',
      side: 'left',
      motif: (
        <svg className="absolute -top-6 -right-6 text-tertiary-container/30 w-32 h-32 select-none pointer-events-none" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" />
        </svg>
      ),
    },
    {
      year: 'MMXXIII',
      role: 'Backend Developer',
      company: 'Calculate All, USA',
      reflection: 'Built an OCR document extraction API utilizing Tesseract and pdfjs-dist libraries. Managed scalable image assets via Cloudinary SDK integrations and structured MongoDB database queries.',
      icon: 'document_scanner',
      side: 'right',
      motif: (
        <svg className="absolute -bottom-8 -left-8 text-secondary-container/40 w-40 h-40 select-none pointer-events-none" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100Z" />
        </svg>
      ),
    },
    {
      year: 'MMXXII - MMXXIII',
      role: 'FullStack Web Intern',
      company: 'GIGSHARE',
      reflection: 'Assisted in developing and maintaining RESTful APIs, improving query speeds by 40% through custom Mongoose indexing rules and database aggregation operations.',
      icon: 'school',
      side: 'left',
      motif: (
        <svg className="absolute top-1/2 right-0 -translate-y-1/2 text-tertiary-container/20 w-32 h-32 select-none pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" />
          <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" opacity="0.5" />
        </svg>
      ),
    },
  ];

  const cardVariants = {
    hidden: (side) => ({
      opacity: 0,
      x: side === 'left' ? -50 : 50,
      y: 20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const markerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="relative min-h-screen pt-40 pb-32">
      <Helmet>
        <title>Chronology | Francis Okpani</title>
        <meta name="description" content="View the professional timeline and evolution of Francis Okpani." />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="Chronology | Francis Okpani" />
        <meta property="og:description" content="View the professional timeline and evolution of Francis Okpani." />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:title" content="Chronology | Francis Okpani" />
        <meta name="twitter:description" content="View the professional timeline and evolution of Francis Okpani." />
      </Helmet>
      {/* Organic Background Rhythm */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <svg className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] opacity-30" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1000">
          <path d="M0 200C240 350 480 150 720 300C960 450 1200 250 1440 400V1000H0V200Z" fill="#fed4c2" opacity="0.3" />
          <path d="M0 400C300 550 500 250 800 450C1100 650 1300 350 1440 500V1000H0V400Z" fill="#f9edd4" opacity="0.6" />
          <path d="M0 600C400 700 600 500 900 650C1200 800 1350 600 1440 750V1000H0V600Z" fill="#cfe8e3" opacity="0.2" />
        </svg>
      </div>

      {/* Hero Header */}
      <header className="text-center mb-32 relative px-margin-safe max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6"
        >
          The Flow of Time
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto"
        >
          A ledger of evolution. Tracing the trajectory of thought, execution, and discovery through the annals of the archive.
        </motion.p>
      </header>

      {/* Timeline Section */}
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Central Golden Thread */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 timeline-line z-0" />

        {/* Timeline Entries */}
        <div className="relative z-10 flex flex-col gap-24">
          {milestones.map((item, idx) => (
            <div
              key={item.year + item.role}
              className={`flex flex-col md:flex-row w-full ${
                item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
              } justify-start items-center md:items-start group relative`}
            >
              {/* Card Container Column */}
              <div className="w-full pl-16 md:pl-0 md:w-1/2 md:px-12 pt-1 md:pt-0">
                <motion.div
                  custom={item.side}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  variants={cardVariants}
                  className="bg-surface rounded-[32px] p-10 border border-outline-variant/30 shadow-[0_12px_40px_rgba(118,87,73,0.08)] relative overflow-hidden transition-transform duration-500 hover:-translate-y-1 select-none"
                >
                  {/* Decorative star motif vector */}
                  {item.motif}

                  {/* Year Tag */}
                  <div className={`flex items-center gap-4 mb-4 relative z-10 ${item.side === 'left' ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="font-label-caps text-label-caps bg-surface-variant text-on-surface-variant px-4 py-1.5 rounded-full border border-outline-variant/30 tracking-widest text-[9px]">
                      {item.year}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3
                    className={`font-headline-md text-headline-md text-primary mb-1 relative z-10 ${
                      item.side === 'left' ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    {item.role}
                  </h3>

                  {/* Company Name */}
                  <h4
                    className={`font-body-md text-secondary font-semibold mb-4 relative z-10 ${
                      item.side === 'left' ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    {item.company}
                  </h4>

                  {/* Reflection Text */}
                  <p
                    className={`font-body-md text-body-md text-on-surface-variant opacity-90 italic relative z-10 leading-relaxed ${
                      item.side === 'left' ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    {item.reflection}
                  </p>
                </motion.div>
              </div>

              {/* Central Circle Marker */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={markerVariants}
                className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 md:top-10 w-10 h-10 rounded-full bg-surface border border-outline-variant/50 flex items-center justify-center z-20 shadow-sm transition-all duration-300 hover:scale-110"
              >
                <span className="material-symbols-outlined text-secondary text-[20px] select-none">{item.icon}</span>
              </motion.div>

              {/* Empty Spacer Column for Desktop */}
              <div className="hidden md:block w-1/2" />
            </div>
          ))}

          {/* End Dot Marker */}
          <div className="relative w-full flex justify-start md:justify-center mt-12 pl-6 md:pl-0">
            <div className="w-8 h-8 rounded-full bg-surface border border-outline-variant/50 flex items-center justify-center z-20 -ml-[15px] md:ml-0 shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative End Rule */}
      <div className="mt-32 flex items-center justify-center opacity-60">
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-outline-variant" />
        <div className="w-2.5 h-2.5 mx-4 rotate-45 bg-surface-variant border border-outline-variant" />
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-outline-variant" />
      </div>
    </div>
  );
};

export default Chronology;
