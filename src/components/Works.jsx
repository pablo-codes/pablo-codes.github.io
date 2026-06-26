import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Sacred Rosary',
      category: 'Mobile Devotion',
      tags: ['Flutter', 'Provider', 'sqflite', 'just_audio', 'VAD Speech'],
      image: '/sacred_rosary.jpg',
      description: 'A production-grade, offline-first Flutter mobile application designed to offer a digital sanctuary for prayer. Features hands-free prayer powered by offline Voice Activity Detection (VAD), downloadable voice packs, and a 202-prayer library wrapped in a bespoke manuscript theme.',
      alignLeft: true,
      details: {
        platform: 'Android (Primary), iOS-ready',
        architecture: 'Provider-based state management, service-oriented backend, GoRouter declarative navigation',
        designPhilosophy: '"The Sacred Manuscript" — editorial, reverent, parchment-inspired UI with three themes (Warm White, Sepia/Sacred Parchment, Candlelit Night)',
        features: [
          {
            title: 'Immersive Rosary Prayer Experience',
            desc: 'Fullscreen step-by-step guided prayer session with stained-glass mystery artwork, circular bead progress indicators, and dynamic prayer sequences custom-built from format configurations.'
          },
          {
            title: 'Three Prayer Modes',
            desc: 'Choose between Full Audio (AI leads and responds), Guided Prayer (turn-taking with AI), and Silent Prayer (meditative manual counter).'
          },
          {
            title: 'Voice Activity Detection (VAD)',
            desc: 'Hands-free turn-taking in Guided Mode. Uses the device microphone to detect when the user finishes speaking, featuring silence fallbacks and singleton lifecycle.'
          },
          {
            title: 'Downloadable Voice Packs',
            desc: 'Browse and download AI-generated voice packs from a remote server with stream-based progress bars, error-handling retries, and storage space reclaiming.'
          },
          {
            title: 'Prayer Library (202 Prayers)',
            desc: 'Bundled read-only SQLite database containing 202 prayers, supporting full-text search, category chip rail filtering, and a daily rotation algorithm.'
          },
          {
            title: 'Personal Intention Journal & Analytics',
            desc: 'Full SQLite CRUD journaling for prayer intentions. Links specific prayers with target counts and tracks sessions, streaks, and meditation minutes.'
          }
        ],
        codebaseHighlights: [
          'DESIGN_SYSTEM.md: Creative styling token definitions and rules.',
          'lib/services/vad_service.dart: Manages mic initialization and silence detection.',
          'lib/services/voice_pack_service.dart: Stream-based file download and validation.',
          'lib/screens/pray_screen.dart: Interactive, bead-by-bead prayer interface.'
        ]
      }
    },
    {
      title: 'local-git-deploy',
      category: 'Developer Tool',
      tags: ['NodeJS', 'NPM CLI', 'simple-git', 'FTP/SFTP', 'yaml'],
      image: '/local_git_deploy.png',
      description: 'A developer-first CLI tool that deploys only modified git files to remote servers. By computing a local-to-remote git diff based on remote sync logs, it deletes, renames, and synchronizes assets in seconds, bypassing long pipeline queues.',
      alignLeft: false,
      details: {
        platform: 'Node.js CLI (NPM Package)',
        architecture: 'Modular Node.js service using simple-git, basic-ftp, and ssh2-sftp-client',
        designPhilosophy: 'Developer-first CLI UX utilizing Ora spinners, Chalk terminal colors, and Commander argument parser',
        features: [
          {
            title: 'Git-Diff Sync Engine',
            desc: 'Connects to the server, parses the remote .deploy-sync-state commit hash, and uploads only modified or added files since that commit, reducing sync times to seconds.'
          },
          {
            title: 'Remote Deletions & Renames',
            desc: 'Automatically identifies deleted or renamed files via git diff and mirrors those deletions on the remote server, keeping the target folder clean.'
          },
          {
            title: 'Safe Credential Handling',
            desc: 'Loads server passwords or private key paths from local .env files (secured via .gitignore) instead of hardcoding credentials in configuration files.'
          },
          {
            title: 'Resilient Failure Recovery',
            desc: 'Halts execution if the remote commit SHA does not exist in local history (e.g. after a rebase). Retains the last successful state file on upload failures.'
          }
        ],
        codebaseHighlights: [
          'bin/cli.js: Configures CLI arguments, options, and commands.',
          'src/index.js: Core sync orchestrator matching diffs and managing SFTP/FTP streams.',
          'src/clients/: Shared client contract implementation (ftp-client.js and sftp-client.js).'
        ]
      }
    },
    {
      title: 'Distributed Browser Orchestration Engine',
      category: 'Distributed Web Automation',
      tags: ['Django', 'DRF', 'Celery', 'Redis', 'Playwright', 'CDP'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlutFF4FtELkrseNswNZQ-PQnDQAuiWG0otZ9GVj06qMHwsbBX_zMc_8qMIjMRMWbFBHqnSBB_K22xv5cgg6WLYVbuGS2a6H1VAQgq9cLsjXfh1X5OFcQ7DH0gEC-3LSfsa9a0OjUT46w4qlc1Ok6fWwSQmRCE2X56A--P5xH2kCBz9961tz_ara-Z4F2M57WtzKyFilMi4GdNjw149jEQLCBDtUWQtoWRX7u0xTgCIPjEIbASyg6rPjHhaS9tYsbbIGOEQWrvEIM',
      description: 'A robust web automation platform orchestrating concurrent browser sessions to validate streaming playback metrics. Utilizes native Chrome processes under Chrome DevTools Protocol (CDP) to satisfy Widevine DRM checks and bypass bot-detection systems.',
      alignLeft: true,
      details: {
        platform: 'Python Web Application (Django & Playwright)',
        architecture: 'Split Control Plane (DRF API, Daphne ASGI WebSockets) and Worker Plane (Celery cluster with Redis broker)',
        designPhilosophy: 'Real-time telemetry diagnostics and self-healing automation loops',
        features: [
          {
            title: 'Hybrid CDP Launch Pattern',
            desc: 'Spawns native, un-instrumented Google Chrome processes via subprocess with remote debugging ports, and attaches Playwright over CDP to preserve DRM CDM binaries.'
          },
          {
            title: 'Manifest V3 Extension Generation',
            desc: 'Dynamically compiles Manifest V3 Chrome extensions in memory for each user profile during startup to support proxy authentication challenge handlers.'
          },
          {
            title: 'Human-Behavior Simulation',
            desc: 'Emulates character-by-character typing with randomized micro-delays and persistent Chrome profile directories for cookies to mimic organic users.'
          },
          {
            title: 'Self-Healing Playback Loop',
            desc: 'Verifies actual stream play by parsing DOM leaf nodes via regex to track increments in elapsed time, executing recovery states (e.g. clicking resume, refreshing) on stalls.'
          },
          {
            title: 'Safe WebSocket Broadcasts',
            desc: 'Uses a daemon thread broadcaster to push log messages and metrics to Django Channels, preventing event-loop blocks on main database-worker threads.'
          }
        ],
        codebaseHighlights: [
          'tasks.py: Celery routines orchestrating browser execution and cPanel account provisioning.',
          'browser_bot.py: Playwright CDP controller managing page lifecycle and DOM recovery.',
          'models.py: Relational schema mapping Campaign, ListeningSession, and TaskLog tables.'
        ]
      }
    },
    {
      title: 'Catholic Prayers API',
      category: 'Backend System',
      tags: ['Python', 'FastAPI', 'SQLite', 'Vercel Serverless', 'Swagger'],
      image: '/catholic_prayers_api.png',
      description: 'A public, open-source RESTful API providing text database accesses for liturgical prayers. Optimized for concurrent serverless execution on Vercel utilizing a read-only SQLite connection structure to prevent file locks.',
      alignLeft: false,
      details: {
        platform: 'Python Serverless REST API (FastAPI & Vercel)',
        architecture: 'Asynchronous FastAPI routers query relational SQLite database files',
        designPhilosophy: 'Zero-configuration public endpoints, lightweight and hyper-performant',
        features: [
          {
            title: 'FastAPI Performance',
            desc: 'Achieves sub-millisecond response times utilizing native Python async/await request routing.'
          },
          {
            title: 'Read-Only Database Connection Tuning',
            desc: 'Uses read-only SQLite connection parameters to completely bypass file write locks under high concurrent serverless traffic.'
          },
          {
            title: 'Relational Queries & Pagination',
            desc: 'Supports full-text search across titles and body texts with category filtering and offset-based pagination.'
          },
          {
            title: 'Auto-Generated Docs',
            desc: 'Provisions interactive Swagger UI at /docs and ReDoc at /redoc for live testing and inspection.'
          }
        ],
        codebaseHighlights: [
          'api/index.py: Implements routers, database connections, and CORS middleware.',
          'vercel.json: Configures Vercel function routing and runtime packages.',
          'prayers.db: Read-only SQLite relational database.'
        ]
      }
    },
    {
      title: 'BibleTalk',
      category: 'Mobile Application',
      tags: ['Flutter', 'Dart', 'Provider', 'sqflite', 'timezone reminders'],
      image: '/bible_talk.jpg',
      description: 'An offline-first scripture reader featuring reading calendar trackers, notes, bookmarks, and deep-link daily notifications scheduled locally based on timezone offsets.',
      alignLeft: true,
      details: {
        platform: 'Android (Portrait-Locked), iOS-Ready',
        architecture: 'Dual-Database SQLite setup with Provider/ChangeNotifier reactive state management',
        designPhilosophy: 'Warm, faith-inspired aesthetic with custom serif typography (Lora) and orange accents',
        features: [
          {
            title: 'Multi-Translation Hot-Swap',
            desc: 'Ships with 4 complete offline Bible translations (KJV, ASV, WEB, Douay-Rheims) pre-bundled as SQLite assets, hot-swappable at runtime.'
          },
          {
            title: 'Dual-Database Design',
            desc: 'Separates read-only Bible translation databases from a writable user database containing Highlights, Notes, Reading Progress, and reading plans.'
          },
          {
            title: 'Reading Plans System',
            desc: '6 built-in plans with daily progress tracking, progress percentage calculations, and completion congratulatory alerts.'
          },
          {
            title: 'Deep-Linked Local Notifications',
            desc: 'Schedules daily reminders and Verse of the Day notifications, deep-linking taps directly to specific chapters and verses.'
          },
          {
            title: 'Management Dashboard',
            desc: 'Tabbed view of Highlights and Notes with swipe-to-delete dismissible gestures.'
          }
        ],
        codebaseHighlights: [
          'lib/main.dart: Orchestrates database initialization, notifications, and navigation keys.',
          'lib/services/notification_service.dart: Schedules timezone-aware notifications and parses deep-link payloads.',
          'lib/screens/reading_screen.dart: Highly customizable scripture reader interface with multi-font support.'
        ]
      }
    },
    {
      title: 'Pablo-Recorder',
      category: 'Web Utility',
      tags: ['HTML5', 'CSS3', 'Web Audio API', 'WebCodecs', 'mp4-muxer', 'PWA'],
      image: '/pablo_recorder.png',
      description: 'A lightweight, zero-install Progressive Web App (PWA) that captures high-definition screen and microphone streams directly in-browser. Features a Web Audio API DSP filter pipeline and a custom dual-engine H.264/AAC MP4 encoder.',
      alignLeft: false,
      details: {
        platform: 'Browser-Native PWA (Google Chrome, Microsoft Edge, Safari)',
        architecture: 'Single-page vanilla HTML5/ES6 application utilizing browser Web APIs and dynamic CDN imports (zero-build environment)',
        designPhilosophy: 'Glassmorphic dashboard panel with frosted-glass textures, floating background blobs, and seamless theme custom properties',
        features: [
          {
            title: 'Dual Recording Engines',
            desc: 'Leverages native MediaRecorder for WebM, and WebCodecs (H.264 video / AAC audio) paired with mp4-muxer to generate seekable MP4 containers locally.'
          },
          {
            title: 'Web Audio API DSP Filters',
            desc: 'Real-time mic signal processing. Connects BiquadFilterNodes for low-frequency rumble cut (highpass) and high-frequency static noise cut (lowpass) with GainNode volume amplification.'
          },
          {
            title: 'Timeline & Keyframe Management',
            desc: 'Subtracts elapsed pause duration from monotonic WebCodecs frame timestamps to maintain sync. Forces I-frame keyframe injection every 120 frames for smooth video seekability.'
          },
          {
            title: 'Memory & Resolution Safeguards',
            desc: 'Actively disposes of VideoFrame and AudioData buffers in loops to prevent RAM leaks, auto-rounds odd window dimensions to even boundaries, and revokes Object URLs.'
          },
          {
            title: 'Installable PWA Interface',
            desc: 'Supports standalone system execution using a configured site.webmanifest and customized home screen launcher icons.'
          }
        ],
        codebaseHighlights: [
          'index.html: Centralized file containing styling tokens, visualizer canvas, DSP nodes, and encoders.',
          'site.webmanifest: Defines application installation settings, shortcut URLs, and branding metadata.',
          'mp4-muxer: Dynamically loaded via ES module CDN links on format selection.'
        ]
      }
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative min-h-screen pt-40 pb-32">
      <Helmet>
        <title>Works | Francis Okpani</title>
        <meta name="description" content="Explore the gallery of digital artifacts and featured projects by Francis Okpani." />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="Works | Francis Okpani" />
        <meta property="og:description" content="Explore the gallery of digital artifacts and featured projects by Francis Okpani." />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:title" content="Works | Francis Okpani" />
        <meta name="twitter:description" content="Explore the gallery of digital artifacts and featured projects by Francis Okpani." />
      </Helmet>
      {/* Background Graphic Patterns */}
      <div className="organic-waves" />
      <div className="atmospheric-bg" />

      {/* Hero Section */}
      <section className="px-margin-safe max-w-[1440px] mx-auto mb-32 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 max-w-4xl"
        >
          The Gallery of Revelations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto"
        >
          A curated exhibition of digital artifacts. Each piece is an exploration of the space between rigorous engineering and artisan craft, designed to evoke a sense of quiet intellect and technical purity.
        </motion.p>
      </section>

      {/* Gallery List */}
      <section className="px-margin-safe max-w-[1440px] mx-auto space-y-[140px] select-none">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className={`flex flex-col ${
              project.alignLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-12 items-center lg:items-start group`}
          >
            {/* Project Image Card */}
            <div className="w-full lg:w-3/5 rounded-xl overflow-hidden bg-surface-container-high shadow-[0_20px_50px_rgba(38,22,10,0.05)] gallery-card relative aspect-[4/3]">
              <img
                alt={`${project.title} interface visualization`}
                className="w-full h-full object-cover opacity-90 mix-blend-multiply transition-transform duration-[2000ms] group-hover:scale-105"
                src={project.image}
                loading="lazy"
              />
            </div>

            {/* Project Copy */}
            <div
              className={`w-full lg:w-2/5 flex flex-col pt-4 lg:pt-16 ${
                project.alignLeft ? 'lg:pl-8' : 'lg:pr-8 lg:items-end lg:text-right'
              }`}
            >
              <h2 className="font-headline-md text-headline-md text-primary mb-4">{project.title}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className={`flex flex-wrap gap-3 mb-8 ${!project.alignLeft && 'lg:justify-end'}`}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-surface-variant rounded-full font-label-caps text-label-caps text-[10px] text-on-surface-variant tracking-wider border border-outline-variant/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <button
                onClick={() => setSelectedProject(project)}
                className={`inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary uppercase tracking-widest hover:text-primary transition-all w-fit duration-300 ${
                  project.alignLeft ? 'group-hover:gap-4' : 'group-hover:gap-4 flex-row-reverse'
                }`}
              >
                Explore Artifact Details
                <span
                  className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1"
                  style={!project.alignLeft ? { transform: 'scaleX(-1)' } : {}}
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Details Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-background/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface-bright border border-outline-variant/30 rounded-[32px] p-6 md:p-10 max-w-4xl w-full shadow-2xl relative my-8 max-h-[85vh] overflow-y-auto select-text text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors p-2"
                aria-label="Close details"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>

              {/* Title & Header */}
              <div className="mb-8">
                <span className="font-label-caps text-label-caps text-secondary tracking-widest text-xs uppercase mb-2 block">
                  {selectedProject.category}
                </span>
                <h3 className="font-display-lg text-headline-lg md:text-display-sm text-primary mb-2">
                  {selectedProject.title}
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-outline-variant/40 via-outline-variant/10 to-transparent my-4" />
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left Column: Metadata & Stack */}
                <div className="md:col-span-5 flex flex-col gap-6">
                  {selectedProject.details && (
                    <>
                      <div>
                        <h4 className="font-label-caps text-label-caps text-on-surface-variant text-[11px] tracking-wider uppercase mb-2">Platform</h4>
                        <p className="font-body-md text-on-surface text-sm leading-relaxed">{selectedProject.details.platform}</p>
                      </div>

                      <div>
                        <h4 className="font-label-caps text-label-caps text-on-surface-variant text-[11px] tracking-wider uppercase mb-2">Architecture</h4>
                        <p className="font-body-md text-on-surface text-sm leading-relaxed">{selectedProject.details.architecture}</p>
                      </div>

                      <div>
                        <h4 className="font-label-caps text-label-caps text-on-surface-variant text-[11px] tracking-wider uppercase mb-2">Design Philosophy</h4>
                        <p className="font-body-md text-on-surface text-sm leading-relaxed">{selectedProject.details.designPhilosophy}</p>
                      </div>
                    </>
                  )}

                  <div>
                    <h4 className="font-label-caps text-label-caps text-on-surface-variant text-[11px] tracking-wider uppercase mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-surface-variant rounded-full font-label-caps text-label-caps text-[9px] text-on-surface-variant tracking-wider border border-outline-variant/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Features & Codebase Highlights */}
                <div className="md:col-span-7 flex flex-col gap-6">
                  {selectedProject.details && (
                    <>
                      <div>
                        <h4 className="font-label-caps text-label-caps text-on-surface-variant text-[11px] tracking-wider uppercase mb-4">Core Technical Features</h4>
                        <ul className="space-y-4">
                          {selectedProject.details.features.map((feat, index) => (
                            <li key={index} className="flex gap-3 items-start">
                              <span className="material-symbols-outlined text-secondary text-[16px] mt-1 select-none">spa</span>
                              <div>
                                <h5 className="font-body-md font-bold text-on-surface text-sm mb-1">{feat.title}</h5>
                                <p className="font-body-md text-on-surface-variant text-xs leading-relaxed">{feat.desc}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {selectedProject.details.codebaseHighlights && (
                        <div>
                          <h4 className="font-label-caps text-label-caps text-on-surface-variant text-[11px] tracking-wider uppercase mb-3">Codebase Highlights</h4>
                          <ul className="space-y-2">
                            {selectedProject.details.codebaseHighlights.map((hl, index) => (
                              <li key={index} className="flex gap-2 items-center text-xs font-mono text-on-surface-variant bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/20">
                                <span className="material-symbols-outlined text-[14px] text-primary">code</span>
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="mt-8 pt-6 border-t border-outline-variant/20 flex flex-wrap gap-4 justify-between items-center">
                <p className="text-xs text-on-surface-variant">
                  Interested in discussing this system's implementation?
                </p>
                <Link
                  to="/connect"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 bg-secondary text-on-primary font-label-caps text-label-caps px-6 py-3 rounded-full hover:bg-on-secondary-container hover:text-on-primary-container transition-all duration-300"
                >
                  Inquire About Project
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Works;
