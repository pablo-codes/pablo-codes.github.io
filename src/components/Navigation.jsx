import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Works', path: '/works' },
    { name: 'Skills', path: '/skills' },
    { name: 'Architecture', path: '/architecture' },
    { name: 'Chronology', path: '/chronology' },
    { name: 'Connect', path: '/connect' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 shadow-sm border-b border-outline-variant/20 py-4'
          : 'bg-transparent py-6'
      }`}
      style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
    >
      <div className="flex justify-between items-center px-[5vw] max-w-[1440px] mx-auto w-full">
        {/* Logo */}
        <div
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }}
          className="font-display-lg text-headline-md tracking-[0.1em] text-primary cursor-pointer select-none active:opacity-75 transition-opacity"
        >
          FRANCIS OKPANI
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-label-caps text-label-caps tracking-widest cursor-pointer transition-colors duration-300 ${
                  isActive
                    ? 'text-primary font-bold border-b border-primary/40 pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="/Francis_Okpani_Resume.pdf"
            download
            className="font-label-caps text-label-caps tracking-widest cursor-pointer transition-colors duration-300 text-on-surface-variant hover:text-primary flex items-center gap-1"
          >
            Resume <span className="material-symbols-outlined text-[14px]">download</span>
          </a>
        </div>

        {/* Inquire Action Button */}
        <button
          onClick={() => navigate('/connect')}
          className="hidden md:block font-label-caps text-label-caps text-primary border border-primary-container/30 px-6 py-2 rounded-full shimmer-btn bg-surface-container hover:bg-surface-container-high transition-colors text-[11px] tracking-widest"
        >
          Inquire
        </button>

        {/* Mobile Burger Menu Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary hover:opacity-80 transition-opacity p-2"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-outline-variant/30 shadow-lg px-8 py-6 flex flex-col gap-6 animate-fade-in-up">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `font-label-caps text-label-caps tracking-widest text-lg transition-colors py-2 ${
                  isActive
                    ? 'text-primary font-bold border-b border-primary/40 pb-1 w-fit'
                    : 'text-on-surface-variant'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="/Francis_Okpani_Resume.pdf"
            download
            onClick={() => setMobileMenuOpen(false)}
            className="font-label-caps text-label-caps tracking-widest text-lg transition-colors py-2 text-on-surface-variant hover:text-primary flex items-center gap-2"
          >
            Resume <span className="material-symbols-outlined text-[18px]">download</span>
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate('/connect');
            }}
            className="w-full font-label-caps text-label-caps bg-primary text-on-primary py-3 rounded-full text-center tracking-widest mt-2 hover:bg-opacity-95 transition-all duration-300"
          >
            Inquire
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
