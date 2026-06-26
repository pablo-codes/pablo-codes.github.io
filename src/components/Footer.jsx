import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-container w-full rounded-t-[3rem] border-t border-outline-variant/20 relative z-10 overflow-hidden mt-20">
      {/* Decorative Botanical Accent */}
      <div className="absolute top-0 left-[10%] -translate-y-1/2 opacity-25 text-secondary pointer-events-none select-none">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 100 C 50 80 40 60 20 50 C 40 60 50 40 50 20 C 50 40 60 60 80 50 C 60 60 50 80 50 100 Z"></path>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-margin-safe py-16 flex flex-col items-center gap-8">
        {/* Title */}
        <div className="font-display-lg text-headline-md text-primary tracking-widest">
          FRANCIS OKPANI
        </div>

        {/* Links Grid */}
        <div className="flex gap-8 flex-wrap justify-center font-body-md text-body-md">
          <Link
            to="/works"
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 opacity-80 hover:opacity-100"
          >
            Works
          </Link>
          <Link
            to="/skills"
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 opacity-80 hover:opacity-100"
          >
            Skills
          </Link>
          <Link
            to="/architecture"
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 opacity-80 hover:opacity-100"
          >
            Architecture
          </Link>
          <Link
            to="/chronology"
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 opacity-80 hover:opacity-100"
          >
            Chronology
          </Link>
          <Link
            to="/connect"
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 opacity-80 hover:opacity-100"
          >
            Connect
          </Link>
        </div>

        {/* Social Grid */}
        <div className="flex gap-6 font-body-md text-body-md">
          <a
            href="https://github.com/pablo-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors duration-300 underline underline-offset-4 decoration-secondary/20"
          >
            GitHub
          </a>
          <a
            href="http://www.linkedin.com/in/francis-okpani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors duration-300 underline underline-offset-4 decoration-secondary/20"
          >
            LinkedIn
          </a>
          <a
            href="mailto:francisokpani570@gmail.com"
            className="text-secondary hover:text-primary transition-colors duration-300 underline underline-offset-4 decoration-secondary/20"
          >
            Email
          </a>
        </div>

        {/* Tapered Divider Rule */}
        <div className="flex items-center justify-center opacity-40 w-full max-w-md my-2">
          <div className="h-px w-full bg-gradient-to-r from-transparent to-outline-variant"></div>
          <div className="w-2 h-2 rotate-45 bg-surface-variant border border-outline-variant mx-3"></div>
          <div className="h-px w-full bg-gradient-to-l from-transparent to-outline-variant"></div>
        </div>

        {/* Copyright */}
        <div className="font-body-md text-body-md text-on-surface-variant/60 text-center select-none">
          © {new Date().getFullYear()} Francis Okpani. Crafted in Aether Gold.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
