import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy loading route components for performance optimization
const Home = lazy(() => import('./components/Home'));
const Works = lazy(() => import('./components/Works'));
const Skills = lazy(() => import('./components/Skills'));
const Architecture = lazy(() => import('./components/Architecture'));
const Chronology = lazy(() => import('./components/Chronology'));
const Connect = lazy(() => import('./components/Connect'));

// Elegant loading fallback screen
const ShimmerLoader = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background relative z-50">
    <div className="atmospheric-bg" />
    <div className="flex flex-col items-center gap-6">
      {/* Botanical/Alchemy Pulsing Loader */}
      <svg className="w-16 h-16 text-primary animate-pulse-slow" fill="currentColor" viewBox="0 0 100 100">
        <path d="M50 100 C 50 80 40 60 20 50 C 40 60 50 40 50 20 C 50 40 60 60 80 50 C 60 60 50 80 50 100 Z" />
      </svg>
      <div className="font-label-caps text-label-caps text-[11px] text-primary/70 tracking-[0.2em] uppercase animate-pulse">
        Gathering Aether...
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-on-background flex flex-col relative">
          {/* Subtle Atmospheric Backdrop styling */}
          <div className="atmospheric-bg" />

          {/* Global Navigation Bar */}
          <Navigation />

          {/* Main Content Area */}
          <main className="flex-grow z-10">
            <Suspense fallback={<ShimmerLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/architecture" element={<Architecture />} />
                <Route path="/chronology" element={<Chronology />} />
                <Route path="/connect" element={<Connect />} />
              </Routes>
            </Suspense>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
