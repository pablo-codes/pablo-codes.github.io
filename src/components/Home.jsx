import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const skillsData = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'PHP', 'Python', 'Java', 'Kotlin', 'Rust', 'Solidity', 'COBOL'],
  },
  {
    title: 'Frontend Frameworks & Libraries',
    skills: ['ReactJS', 'HTML5', 'CSS3', 'jQuery'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'Laravel', 'Django', 'Flask', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Mobile Development',
    skills: ['Flutter', 'Native Android Development', 'Android Studio'],
  },
  {
    title: 'Databases & ORMs',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'MariaDB', 'Redis', 'Firebase', 'Sequelize', 'TypeORM', 'phpMyAdmin'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Google Cloud', 'Docker', 'Git', 'GitHub', 'GitHub CI/CD', 'Linux', 'FileZilla', 'XAMPP'],
  },
  {
    title: 'Third-Party Integrations',
    skills: ['OpenAI API', 'Twilio', 'SendGrid', 'WordPress'],
  },
];

const Home = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const haloRef = useRef(null);

  // Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedY = Math.random() * 0.4 + 0.1;
        this.opacity = Math.random() * 0.2 + 0.05;
      }
      update() {
        this.y -= this.speedY;
        if (this.y < 0) {
          this.y = height;
          this.x = Math.random() * width;
        }
      }
      draw() {
        ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      const particleCount = Math.floor(window.innerWidth / 20);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (!animationFrameId) animate();
      } else {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    });

    const heroEl = document.getElementById('home-hero');
    if (heroEl) observer.observe(heroEl);
    else animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  // Mouse Halo Tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      const halo = haloRef.current;
      if (!halo) return;
      halo.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(212, 175, 55, 0.05), transparent 40%)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax Scroll Effects
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yHeroText = useTransform(scrollY, [0, 400], [0, 100]);
  const yHeroMedia = useTransform(scrollY, [0, 400], [0, -40]);

  // Framer Motion Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div ref={containerRef} className="relative min-h-screen pt-24 overflow-hidden">
      <Helmet>
        <title>Francis Okpani | Portfolio</title>
        <meta name="description" content="Portfolio of Francis Okpani, a highly skilled Full Stack Web & Mobile Developer architecting distributed systems and clean aesthetics." />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="Francis Okpani | Portfolio" />
        <meta property="og:description" content="Portfolio of Francis Okpani, a highly skilled Full Stack Web & Mobile Developer architecting distributed systems and clean aesthetics." />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:title" content="Francis Okpani | Portfolio" />
        <meta name="twitter:description" content="Portfolio of Francis Okpani, a highly skilled Full Stack Web & Mobile Developer architecting distributed systems and clean aesthetics." />
      </Helmet>

      {/* Interactive Halo & Particles */}
      <div ref={haloRef} className="fixed inset-0 pointer-events-none z-0" />
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Atmospheric Radial Blobs */}
      <div className="fixed top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-surface-container-high blob-bg" />
      <div className="fixed top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-secondary-container blob-bg opacity-30" />
      <div className="fixed bottom-[-10%] left-[10%] w-[50vw] h-[50vw] bg-surface-container blob-bg" />

      {/* Hero Section */}
      <section id="home-hero" className="relative min-h-[90vh] flex items-center px-margin-safe z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center relative">
          {/* Botanical SVG Accent */}
          <motion.div
            initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
            animate={{ opacity: 0.4, rotate: -12, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute top-[-80px] left-[-60px] w-32 h-32 text-tertiary-container pointer-events-none select-none"
          >
            <svg fill="currentColor" viewBox="0 0 100 100">
              <path d="M50 100 C 50 80 40 60 20 50 C 40 60 50 40 50 20 C 50 40 60 60 80 50 C 60 60 50 80 50 100 Z"></path>
              <path d="M50 90 L 50 100" stroke="currentColor" strokeWidth="2"></path>
            </svg>
          </motion.div>

          {/* Left Text */}
          <motion.div style={{ y: yHeroText }} className="flex flex-col gap-6 lg:pr-12 relative z-10 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-wide leading-tight"
            >
              Francis Okpani
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-headline-md text-secondary tracking-widest text-lg uppercase"
            >
              Craftsman of Distributed & Mobile Systems
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mt-4 leading-relaxed"
            >
              Highly skilled Full Stack Web & Mobile Developer with 3+ years of experience in MERN stack, Flutter, Python, Go, and Rust. Architecting serene, distributed applications with structural integrity and clean aesthetics.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 animate-fade-in"
            >
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    const element = document.getElementById('works-section');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-3 bg-secondary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-full hover:bg-on-secondary-container hover:text-on-primary-container transition-colors duration-500 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] shimmer-btn"
                >
                  Explore Revelations
                  <span className="material-symbols-outlined text-[16px] animate-bounce-slow">arrow_downward</span>
                </button>
                <a
                  href="/Francis_Okpani_Resume.pdf"
                  download
                  className="inline-flex items-center gap-3 bg-transparent border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded-full hover:bg-secondary/10 transition-colors duration-500 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                >
                  Download Resume
                  <span className="material-symbols-outlined text-[16px]">download</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Floating Card */}
          <motion.div
            style={{ y: yHeroMedia }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 0.95, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[480px] w-full flex items-center justify-center z-10"
          >
            {/* Background Shadows/Rotated Sheets */}
            <div className="absolute inset-0 bg-secondary-container rounded-[40px] opacity-25 transform rotate-3 scale-105" />
            <div className="absolute inset-0 bg-surface-container-high rounded-[40px] opacity-40 transform -rotate-2 scale-100" />
            <div className="w-full h-full bg-surface-container-lowest rounded-[32px] soft-card-shadow overflow-hidden relative border border-surface-variant p-4">
              <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-surface-container-lowest group select-none">
                <img
                  alt="Francis Okpani - Hero Visual"
                  className="w-full h-full object-cover mix-blend-multiply opacity-85 hover:scale-105 transition-transform duration-[2000ms]"
                  src="/download.png"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Expertise: The Pillars of Creation */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="py-32 px-margin-safe relative z-10"
      >
        <div className="absolute inset-0 bg-surface-container-low opacity-60 rounded-t-[100px] z-[-1] overflow-hidden">
          <svg className="absolute top-0 right-0 w-[60%] h-full text-surface-container opacity-50" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,0 C50,20 80,80 100,100 L100,0 Z" fill="currentColor"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative text-center">
          {/* Section Leaf Motif */}
          <div className="flex justify-center mb-8">
            <span className="material-symbols-outlined text-secondary text-4xl select-none">spa</span>
          </div>

          <h2 className="font-display-lg text-headline-md text-primary mb-20 tracking-[0.2em] uppercase text-sm">
            The Pillars of Creation
          </h2>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Foundations */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-start bg-surface-container-lowest p-10 rounded-[32px] soft-card-shadow border border-surface-variant hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="material-symbols-outlined text-[40px] text-secondary mb-6 relative z-10">database</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4 text-2xl relative z-10">Foundations</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed relative z-10">
                Architecting resilient backends and local data persistence. Building with Flutter/Dart, Node.js/TypeScript, Python APIs, and SQLite/PostgreSQL layers.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {['Flutter', 'NodeJS', 'Python', 'PostgreSQL', 'SQLite'].map((tech) => (
                  <span key={tech} className="px-4 py-1 rounded-full bg-surface text-secondary font-label-caps text-label-caps text-[10px] border border-outline-variant">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-start bg-surface-container-lowest p-10 rounded-[32px] soft-card-shadow border border-surface-variant hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group md:mt-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="material-symbols-outlined text-[40px] text-secondary mb-6 relative z-10">web</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4 text-2xl relative z-10">Form</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed relative z-10">
                Crafting intuitive, luminous client UIs. Utilizing React, TypeScript, Tailwind CSS, and pure CSS frameworks to bring responsive web views to life.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {['ReactJS', 'TypeScript', 'Tailwind', 'GraphQL', 'HTML5/CSS3'].map((tech) => (
                  <span key={tech} className="px-4 py-1 rounded-full bg-surface text-secondary font-label-caps text-label-caps text-[10px] border border-outline-variant">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Flow */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-start bg-surface-container-lowest p-10 rounded-[32px] soft-card-shadow border border-surface-variant hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="material-symbols-outlined text-[40px] text-secondary mb-6 relative z-10">all_inclusive</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4 text-2xl relative z-10">Flow</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed relative z-10">
                Orchestrating background pipelines and automated cycles. Implementing GitHub Actions CI/CD, Docker execution containers, and distributed sync CLI deployments.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {['Git/Github', 'CI/CD', 'Docker', 'Celery', 'NPM CLI'].map((tech) => (
                  <span key={tech} className="px-4 py-1 rounded-full bg-surface text-secondary font-label-caps text-label-caps text-[10px] border border-outline-variant">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Codex of Capabilities (Detailed Skills) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="py-20 px-margin-safe relative z-10"
      >
        <div className="max-w-7xl mx-auto relative text-center">
          <div className="flex justify-center mb-8">
            <span className="material-symbols-outlined text-secondary text-4xl select-none">auto_stories</span>
          </div>

          <h2 className="font-display-lg text-headline-md text-primary mb-16 tracking-[0.2em] uppercase text-sm">
            Codex of Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {skillsData.map((category) => (
              <div key={category.title} className="bg-surface-container-lowest/85 backdrop-blur-sm p-8 rounded-[32px] border border-outline-variant/30 soft-card-shadow hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-headline-sm text-secondary mb-4 text-xl tracking-wide border-b border-outline-variant/20 pb-2">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3.5 py-1.5 rounded-full bg-surface text-secondary font-label-caps text-label-caps text-[10px] border border-outline-variant/30 hover:border-primary hover:text-primary transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Selected Works Highlights (Revelations) */}
      <section id="works-section" className="py-32 px-margin-safe relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center relative mb-12"
          >
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">Revelations</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4 uppercase tracking-[0.2em] text-sm">
              Featured Projects
            </p>
          </motion.div>

          {/* Project 1: Sacred Rosary */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative"
          >
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[90%] lg:w-[80%] h-[120%] bg-surface-container rounded-[60px] z-[-1] opacity-50 transform -rotate-2" />
            <div className="w-full lg:w-5/12 flex flex-col items-start text-left bg-surface-container-lowest/80 backdrop-blur-md p-10 rounded-[32px] soft-card-shadow border border-surface-variant">
              <h3 className="font-headline-md text-headline-md text-primary mb-2 text-4xl">Sacred Rosary</h3>
              <p className="font-label-caps text-label-caps text-secondary mb-8 tracking-widest">Mobile Companion App</p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                An offline-first Flutter mobile application featuring AI-guided audio, real-time Voice Activity Detection (VAD) for interactive hands-free prayer, downloadable voice packs, and a 202-prayer SQLite database, all wrapped in a custom manuscript theme.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('/works')}
                  className="border-b border-secondary text-secondary font-label-caps text-label-caps pb-1 hover:text-primary hover:border-primary transition-colors"
                >
                  View in Gallery
                </button>
              </div>
            </div>

            <div className="w-full lg:w-7/12 select-none">
              <div className="framed-artifact soft-card-shadow hover:-translate-y-2 transition-transform duration-500">
                <div className="corner-accent corner-tl" />
                <div className="corner-accent corner-tr" />
                <div className="corner-accent corner-bl" />
                <div className="corner-accent corner-br" />
                <div className="framed-artifact-inner bg-surface-container aspect-[16/10]">
                  <img
                    alt="Sacred Rosary illuminated abstract layout"
                    className="w-full h-full object-cover opacity-90 mix-blend-multiply filter sepia-[0.3]"
                    src="/sacred_rosary.jpg"
                  />
                </div>
              </div>
            </div>
          </motion.article>

          {/* Project 2: BibleTalk */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24 relative"
          >
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[90%] lg:w-[80%] h-[120%] bg-surface-container-high rounded-[60px] z-[-1] opacity-50 transform rotate-2" />
            <div className="w-full lg:w-5/12 flex flex-col items-start lg:items-end text-left lg:text-right bg-surface-container-lowest/80 backdrop-blur-md p-10 rounded-[32px] soft-card-shadow border border-surface-variant">
              <h3 className="font-headline-md text-headline-md text-primary mb-2 text-4xl">BibleTalk</h3>
              <p className="font-label-caps text-label-caps text-secondary mb-8 tracking-widest">Mobile Application</p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                An offline-first scripture reader featuring reading calendar trackers, notes, bookmarks, and deep-link daily notifications scheduled locally based on timezone offsets, with 4 complete Bible translations pre-bundled in SQLite.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('/works')}
                  className="border-b border-secondary text-secondary font-label-caps text-label-caps pb-1 hover:text-primary hover:border-primary transition-colors"
                >
                  View in Gallery
                </button>
              </div>
            </div>

            <div className="w-full lg:w-7/12 select-none">
              <div className="framed-artifact soft-card-shadow hover:-translate-y-2 transition-transform duration-500">
                <div className="corner-accent corner-tl" />
                <div className="corner-accent corner-tr" />
                <div className="corner-accent corner-bl" />
                <div className="corner-accent corner-br" />
                <div className="framed-artifact-inner bg-surface-container aspect-[16/10]">
                  <img
                    alt="BibleTalk offline reader interface"
                    className="w-full h-full object-cover opacity-95 mix-blend-multiply sepia-[0.2]"
                    src="/bible_talk.jpg"
                  />
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Decorative End Rule */}
      <div className="my-20 flex items-center justify-center opacity-40">
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-outline-variant" />
        <div className="w-2.5 h-2.5 rotate-45 bg-primary mx-4 shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-outline-variant" />
      </div>
    </div>
  );
};

export default Home;
