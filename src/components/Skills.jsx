import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'databases', label: 'Databases' },
    { id: 'devops', label: 'DevOps' },
    { id: 'integrations', label: 'Integrations' }
  ];

  const skillGroups = [
    {
      id: 'languages',
      title: 'Languages',
      description: 'Written tongues used to weave structural logic and speak directly to systems.',
      icon: 'code',
      skills: [
        { name: 'JavaScript (ES6+)', description: 'Modern, dynamic scripting for frontend and backend logic.' },
        { name: 'TypeScript', description: 'Strictly typed superset of JavaScript for scalable, bulletproof systems.' },
        { name: 'PHP', description: 'Server-side scripting language driving millions of web applications and MVC frameworks.' },
        { name: 'Python', description: 'High-level language for scripting, system automation, and web APIs.' },
        { name: 'Java', description: 'Object-oriented, robust language for cross-platform enterprise backends.' },
        { name: 'Kotlin', description: 'Modern language for native Android apps and backend services.' },
        { name: 'Rust', description: 'Safe, concurrent, and high-performance systems-level language.' },
        { name: 'Solidity', description: 'Smart contract language for Ethereum and decentralized applications (dApps).' },
        { name: 'COBOL', description: 'Legacy systems language for financial systems and high-throughput transaction processing.' }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Frameworks & Libraries',
      description: 'Libraries and frameworks to shape fluid, responsive, and tactile client screens.',
      icon: 'responsive_layout',
      skills: [
        { name: 'ReactJS', description: 'Component-based UI library for crafting stateful, highly interactive frontends.' },
        { name: 'HTML5', description: 'Semantic structure of modern web applications.' },
        { name: 'CSS3', description: 'Advanced styling, animations, layouts, and responsive designs.' },
        { name: 'jQuery', description: 'Fast, small, and feature-rich legacy JavaScript library for DOM manipulation.' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      description: 'Engines that orchestrate logic, APIs, and heavy processing.',
      icon: 'dns',
      skills: [
        { name: 'Node.js', description: 'Scalable asynchronous JavaScript runtime for high-concurrency systems.' },
        { name: 'Express.js', description: 'Minimalist web framework for Node.js API servers.' },
        { name: 'Laravel', description: 'Elegant PHP MVC framework with expressive syntax and robust ecosystem.' },
        { name: 'Django', description: 'Secure, batteries-included Python framework for clean, rapid development.' },
        { name: 'Flask', description: 'Lightweight, modular Python microframework for agile services.' },
        { name: 'GraphQL', description: 'Flexible query language for APIs, allowing clients to request exactly what they need.' },
        { name: 'REST APIs', description: 'Standardized web service architecture for interoperable resources.' }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      description: 'Environments and engines to craft native and cross-platform mobile client systems.',
      icon: 'phone_android',
      skills: [
        { name: 'Flutter', description: 'Cross-platform engine for building natively compiled mobile apps from a single codebase.' },
        { name: 'Native Android Development', description: 'System-optimized mobile solutions utilizing native SDKs and languages.' },
        { name: 'Android Studio', description: 'Professional IDE for building and debugging mobile systems.' }
      ]
    },
    {
      id: 'databases',
      title: 'Databases & ORMs',
      description: 'Relational, NoSQL, in-memory storage systems and data mapping layers.',
      icon: 'database',
      skills: [
        { name: 'MongoDB', description: 'NoSQL document database for flexible, JSON-like data storage.' },
        { name: 'PostgreSQL', description: 'Advanced, open-source object-relational database system.' },
        { name: 'MySQL', description: 'Widely used relational database management system.' },
        { name: 'MariaDB', description: 'High-performance, open-source branch of MySQL.' },
        { name: 'Redis', description: 'Ultra-fast in-memory data store used as database, cache, and message broker.' },
        { name: 'Firebase', description: 'Real-time mobile/web backend and database suite.' },
        { name: 'Sequelize', description: 'Promise-based Node.js ORM for Postgres, MySQL, and MariaDB.' },
        { name: 'TypeORM', description: 'Advanced TypeScript ORM running on multiple database platforms.' },
        { name: 'phpMyAdmin', description: 'Web interface for administering MySQL and MariaDB databases.' }
      ]
    },
    {
      id: 'devops',
      title: 'Cloud & DevOps',
      description: 'Infrastructure, deployment targets, virtualization systems, and tooling.',
      icon: 'settings_suggest',
      skills: [
        { name: 'Google Cloud', description: 'Secure, scalable cloud infrastructure and serverless products.' },
        { name: 'Docker', description: 'Containerization platform to package and distribute applications consistently.' },
        { name: 'Git', description: 'Distributed version control system for tracking source code changes.' },
        { name: 'GitHub', description: 'Collaborative hosting platform for Git repositories and team workflows.' },
        { name: 'GitHub CI/CD', description: 'Automated workflows for building, testing, and deploying applications.' },
        { name: 'Linux', description: 'The operating system foundation for cloud servers and container infrastructure.' },
        { name: 'FileZilla', description: 'Graphical FTP/SFTP client for secure file transfers.' },
        { name: 'XAMPP', description: 'Local development environment stack containing Apache, MariaDB, PHP, and Perl.' }
      ]
    },
    {
      id: 'integrations',
      title: 'Third-Party Integrations',
      description: 'External APIs and content management engines seamlessly integrated into applications.',
      icon: 'extension',
      skills: [
        { name: 'OpenAI API', description: 'Advanced artificial intelligence capabilities and LLM inference integrations.' },
        { name: 'Twilio', description: 'Telephony APIs for programmatic SMS, Voice, and authentication.' },
        { name: 'SendGrid', description: 'Enterprise transactional and marketing email delivery infrastructure.' },
        { name: 'WordPress', description: 'Popular content management system (CMS) and custom theme/plugin development.' }
      ]
    }
  ];

  const filteredGroups = activeFilter === 'all' 
    ? skillGroups 
    : skillGroups.filter(group => group.id === activeFilter);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="relative min-h-screen pt-40 pb-32">
      <Helmet>
        <title>Skills | Francis Okpani</title>
        <meta name="description" content="Explore the technical capabilities and system disciplines of Francis Okpani." />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="Skills | Francis Okpani" />
        <meta property="og:description" content="Explore the technical capabilities and system disciplines of Francis Okpani." />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:title" content="Skills | Francis Okpani" />
        <meta name="twitter:description" content="Explore the technical capabilities and system disciplines of Francis Okpani." />
      </Helmet>

      {/* Decorative Atmosphere Backdrops */}
      <div className="aether-glow w-[500px] h-[500px] top-10 right-[-100px] opacity-40" />
      <div className="aether-glow w-[700px] h-[700px] bottom-[10%] left-[-200px] opacity-35" />

      {/* Organic Background Rhythm */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <svg className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] opacity-20 text-tertiary-container/30" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-margin-safe relative z-10 w-full">
        {/* Header Section */}
        <section className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6"
          >
            The Arsenal of Craft
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto"
          >
            A cartography of languages, platforms, databases, and third-party integrations. Woven from rigorous distributed mechanics and serene architectural flow.
          </motion.p>
        </section>

        {/* Dynamic Filters Slider */}
        <section className="flex justify-center mb-16 select-none overflow-x-auto pb-4 max-w-full px-4 scrollbar-none">
          <div className="flex bg-surface-container/50 border border-outline-variant/30 rounded-full p-1.5 backdrop-blur-md min-w-max">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`relative px-5 py-2.5 rounded-full font-label-caps text-label-caps text-[11px] tracking-wider transition-colors duration-300 ${
                    isActive ? 'text-on-primary' : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-primary rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Interactive Skills Cards Grid */}
        <motion.section 
          layout
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group) => (
              <motion.article
                layout
                key={group.id}
                variants={fadeInUp}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-surface-bright border border-outline-variant/20 shadow-[0_15px_40px_rgba(118,87,73,0.06)] rounded-[32px] p-8 group hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(118,87,73,0.1)] transition-all duration-500 relative"
              >
                {/* SVG Corner Accent Frame */}
                <div className="corner-accent corner-tl" />
                <div className="corner-accent corner-tr" />
                <div className="corner-accent corner-bl" />
                <div className="corner-accent corner-br" />

                {/* Card Icon */}
                <div className="absolute top-0 right-0 p-6 opacity-30 text-secondary transition-all group-hover:scale-110 duration-500">
                  <span className="material-symbols-outlined text-[36px]">{group.icon}</span>
                </div>

                <header className="mb-6 pr-12">
                  <h2 className="font-headline-sm text-headline-sm text-primary mb-2">
                    {group.title}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant/80">
                    {group.description}
                  </p>
                </header>

                {/* Skills Pills List */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      title={skill.description}
                      className="px-4 py-2 bg-surface-container hover:bg-surface-container-high rounded-full font-label-caps text-label-caps text-[10.5px] text-on-surface-variant hover:text-primary tracking-wider border border-outline-variant/30 hover:border-primary/40 transition-all duration-300 cursor-help select-none hover:shadow-[0_4px_12px_rgba(212,175,55,0.1)]"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.section>
      </div>
    </div>
  );
};

export default Skills;
