import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Connect = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // NOTE: Replace 'YOUR_FORM_ID_HERE' with your actual Formspree endpoint ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        alert('There was a problem submitting your missive. Please try again or use direct email.');
      }
    } catch (error) {
      alert('There was an error submitting your missive. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative min-h-screen pt-40 pb-32 flex flex-col bg-background parchment-texture">
      <Helmet>
        <title>Connect | Francis Okpani</title>
        <meta name="description" content="Reach out to Francis Okpani for consultations, projects, and inquiries." />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="Connect | Francis Okpani" />
        <meta property="og:description" content="Reach out to Francis Okpani for consultations, projects, and inquiries." />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:title" content="Connect | Francis Okpani" />
        <meta name="twitter:description" content="Reach out to Francis Okpani for consultations, projects, and inquiries." />
      </Helmet>
      {/* Background Graphic Accents */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] bg-secondary-container/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-surface-container-high/40 rounded-full blur-3xl" />

        {/* Star Accents */}
        <svg className="absolute top-1/4 -left-20 w-64 h-64 text-secondary/10 -rotate-12" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 100 C 50 80 40 60 20 50 C 40 60 50 40 50 20 C 50 40 60 60 80 50 C 60 60 50 80 50 100 Z" />
        </svg>
        <svg className="absolute bottom-1/4 -right-20 w-80 h-80 text-tertiary-container/20 rotate-45" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 100 C 50 80 40 60 20 50 C 40 60 50 40 50 20 C 50 40 60 60 80 50 C 60 60 50 80 50 100 Z" />
        </svg>
      </div>

      {/* Main Container */}
      <main className="flex-grow container mx-auto px-margin-edge max-w-7xl relative z-10 w-full">
        {/* Hero Section */}
        <section className="mb-24 text-center md:text-left relative select-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -z-10" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display-lg text-display-lg text-on-background mb-4"
          >
            Begin a New Chapter
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6 md:mx-0 mx-auto"
          />
        </section>

        {/* Form & Text Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-start mb-24">
          {/* Poetic Invitation (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 flex flex-col gap-6 pr-4 md:pr-8 text-left"
          >
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              We seek the curious and the driven. Those who understand that true innovation is not merely built, but crafted.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed">
              If you are preparing to author a meaningful digital artifact, we stand ready to illuminate the margins and bind the volumes of your next great endeavor.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container select-none text-[22px] animate-pulse">
                auto_awesome
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant text-[11px] tracking-widest uppercase">
                Aetheric Consultations Open
              </span>
            </div>
          </motion.div>

          {/* Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-7 bg-surface-container-lowest/90 backdrop-blur-md rounded-[32px] p-8 border border-outline-variant/30 relative overflow-hidden shadow-[0_20px_50px_rgba(118,87,73,0.08)] hover:-translate-y-1 transition-transform duration-500"
          >
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-primary-container/10 rounded-full blur-2xl -z-10" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <span className="material-symbols-outlined text-[64px] text-primary mb-6 animate-pulse select-none">
                  auto_stories
                </span>
                <h3 className="font-headline-md text-primary mb-4">Missive Recorded</h3>
                <p className="font-body-md text-on-surface-variant max-w-sm">
                  Your intent has been cast into the ledger. We shall reply via courier shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-label-caps text-label-caps border border-primary/20 text-primary px-6 py-2.5 rounded-full hover:bg-surface-variant transition-colors"
                >
                  Write Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="relative border-b border-outline/40 focus-within:border-primary transition-colors py-2 text-left">
                  <label htmlFor="name" className="block font-label-caps text-label-caps text-[10px] text-primary tracking-widest uppercase mb-1">
                    Your Designation
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-body-md text-on-background placeholder:opacity-40 focus:outline-none"
                  />
                </div>

                <div className="relative border-b border-outline/40 focus-within:border-primary transition-colors py-2 text-left">
                  <label htmlFor="email" className="block font-label-caps text-label-caps text-[10px] text-primary tracking-widest uppercase mb-1">
                    Courier Address
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-body-md text-on-background placeholder:opacity-40 focus:outline-none"
                  />
                </div>

                <div className="relative text-left">
                  <label htmlFor="message" className="block font-label-caps text-label-caps text-[10px] text-primary tracking-widest uppercase mb-2">
                    Inscribe Intent
                  </label>
                  <textarea
                    required
                    id="message"
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Inscribe your intent..."
                    className="w-full bg-surface-container/40 border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary/20 font-body-md text-body-md text-on-background p-4 rounded-xl shadow-inner resize-none focus:outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="self-end font-label-caps text-label-caps bg-primary text-on-primary px-8 py-4 rounded-full border border-primary-container/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center gap-2 select-none"
                >
                  Transmit Missive
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-16 opacity-50">
          <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-transparent to-outline" />
          <div className="w-2.5 h-2.5 rotate-45 bg-primary-container mx-4 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
          <div className="h-px w-full max-w-[200px] bg-gradient-to-l from-transparent to-outline" />
        </div>

        {/* The Index (Social Directory) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto bg-surface-container-lowest/80 backdrop-blur-md p-8 rounded-[32px] border border-outline-variant/20 shadow-[0_15px_40px_rgba(118,87,73,0.06)]"
        >
          <h2 className="font-headline-sm text-headline-sm text-on-background mb-6">The Index</h2>
          <div className="flex justify-center gap-12 flex-wrap select-none">
            {/* Github */}
            <a
              href="https://github.com/pablo-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] transition-shadow">
                <span className="material-symbols-outlined text-primary text-[20px]">code</span>
              </div>
              <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-primary transition-colors text-[10px] tracking-widest uppercase">
                GitHub
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="http://www.linkedin.com/in/francis-okpani"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] transition-shadow">
                <span className="material-symbols-outlined text-primary text-[20px]">work</span>
              </div>
              <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-primary transition-colors text-[10px] tracking-widest uppercase">
                LinkedIn
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:francisokpani570@gmail.com"
              className="group flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] transition-shadow">
                <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
              </div>
              <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-primary transition-colors text-[10px] tracking-widest uppercase">
                Direct
              </span>
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Connect;
