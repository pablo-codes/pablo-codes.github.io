import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// SVG Diagram 1: Sacred Rosary
const SacredRosaryDiagram = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full bg-surface-container-low select-none">
    <defs>
      <linearGradient id="amberGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F38124" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#735c00" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    
    <path d="M 60,100 L 130,100 M 170,100 L 230,100 M 270,100 L 340,100 M 340,100 L 200,165 L 60,100" 
          fill="none" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.15))" strokeWidth="1.5" strokeDasharray="4 4" />
    
    <circle r="3" fill="#F38124">
      <animateMotion dur="6s" repeatCount="indefinite" path="M 60,100 L 130,100 M 170,100 L 230,100 M 270,100 L 340,100" />
    </circle>
    <circle r="3" fill="#735c00">
      <animateMotion dur="6s" begin="3s" repeatCount="indefinite" path="M 340,100 L 200,165 L 60,100" />
    </circle>

    <g transform="translate(60,100)">
      <circle r="22" fill="url(#amberGlow)" className="animate-pulse" />
      <circle r="18" fill="var(--md-sys-color-surface-bright, #fff)" stroke="#F38124" strokeWidth="1.5" />
      <text y="5" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="16" fill="#F38124">mic</text>
      <text y="32" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--md-sys-color-on-surface, #000)">Mic Stream</text>
    </g>

    <g transform="translate(150,100)">
      <circle r="20" fill="var(--md-sys-color-surface-bright, #fff)" stroke="var(--md-sys-color-outline, rgba(0,0,0,0.3))" strokeWidth="1" />
      <text y="5" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="16" fill="#735c00">hearing</text>
      <text y="30" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--md-sys-color-on-surface, #000)">VAD Service</text>
    </g>

    <g transform="translate(250,100)">
      <circle r="20" fill="var(--md-sys-color-surface-bright, #fff)" stroke="var(--md-sys-color-outline, rgba(0,0,0,0.3))" strokeWidth="1" />
      <text y="5" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="16" fill="#735c00">account_tree</text>
      <text y="30" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--md-sys-color-on-surface, #000)">State Provider</text>
    </g>

    <g transform="translate(340,100)">
      <circle r="22" fill="url(#amberGlow)" className="animate-pulse" />
      <circle r="18" fill="var(--md-sys-color-surface-bright, #fff)" stroke="#F38124" strokeWidth="1.5" />
      <text y="5" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="16" fill="#F38124">volume_up</text>
      <text y="32" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--md-sys-color-on-surface, #000)">Audio Engine</text>
    </g>

    <g transform="translate(200,165)">
      <rect x="-35" y="-12" width="70" height="24" rx="12" fill="var(--md-sys-color-surface-variant, #f0f0f0)" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.15))" strokeWidth="1" />
      <text y="3" textAnchor="middle" fontSize="8" fontWeight="600" fill="#735c00">sqlite (prayers)</text>
    </g>
  </svg>
);

// SVG Diagram 2: local-git-deploy
const LocalGitDeployDiagram = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full bg-surface-container-low select-none">
    <rect x="30" y="55" width="90" height="110" rx="12" fill="var(--md-sys-color-surface-bright, #fff)" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.2))" strokeWidth="1" />
    <text x="75" y="80" textAnchor="middle" fontSize="9" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">Local Git</text>
    <text x="75" y="108" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="20" fill="#735c00">folder_git</text>
    <text x="75" y="130" textAnchor="middle" fontSize="7" fill="var(--md-sys-color-on-surface-variant, #555)">Workspace Commit</text>

    <path d="M 120,110 L 280,110" fill="none" stroke="#F38124" strokeWidth="3" />
    <path d="M 120,110 L 280,110" fill="none" stroke="var(--md-sys-color-surface-bright, #fff)" strokeWidth="1" strokeDasharray="8 8">
      <animate attributeName="stroke-dashoffset" values="50;0" dur="2s" repeatCount="indefinite" />
    </path>

    <g transform="translate(200,110)">
      <rect x="-35" y="-18" width="70" height="36" rx="6" fill="var(--md-sys-color-surface-variant, #f0f0f0)" stroke="var(--md-sys-color-outline, rgba(0,0,0,0.3))" strokeWidth="1" />
      <text y="-5" textAnchor="middle" fontSize="8" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">Git Diff</text>
      <text y="10" textAnchor="middle" fontSize="7" fill="var(--md-sys-color-on-surface-variant, #555)">Exclude Globs</text>
    </g>

    <rect x="280" y="55" width="90" height="110" rx="12" fill="var(--md-sys-color-surface-bright, #fff)" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.2))" strokeWidth="1" />
    <text x="325" y="80" textAnchor="middle" fontSize="9" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">Remote Host</text>
    <text x="325" y="105" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="24" fill="#735c00">dns</text>
    
    <g transform="translate(325,140)">
      <rect x="-30" y="-8" width="60" height="16" rx="4" fill="#735c00" />
      <text y="2" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#fff">.deploy-sync</text>
    </g>
  </svg>
);

// SVG Diagram 3: Distributed Browser Orchestration Engine
const BrowserOrchestrationDiagram = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full bg-surface-container-low select-none">
    <path d="M 90,80 L 170,80 M 230,80 L 310,80 M 310,80 L 200,160 M 200,160 L 90,80" 
          fill="none" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.15))" strokeWidth="1.5" strokeDasharray="3 3" />
    
    <circle r="3" fill="#F38124">
      <animateMotion dur="4s" repeatCount="indefinite" path="M 90,80 L 170,80" />
    </circle>
    <circle r="3" fill="#735c00">
      <animateMotion dur="4s" repeatCount="indefinite" path="M 230,80 L 310,80" />
    </circle>
    <circle r="3" fill="#F38124">
      <animateMotion dur="4s" repeatCount="indefinite" path="M 310,80 L 200,160" />
    </circle>
    <circle r="3" fill="#735c00">
      <animateMotion dur="4s" repeatCount="indefinite" path="M 200,160 L 90,80" />
    </circle>

    <g transform="translate(90,80)">
      <rect x="-35" y="-20" width="70" height="40" rx="8" fill="var(--md-sys-color-surface-bright, #fff)" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.2))" strokeWidth="1" />
      <text y="-5" textAnchor="middle" fontSize="8" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">Django API</text>
      <text y="12" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="16" fill="#735c00">settings_input_component</text>
    </g>

    <g transform="translate(200,80)">
      <rect x="-30" y="-20" width="60" height="40" rx="4" fill="var(--md-sys-color-surface-variant, #f0f0f0)" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.2))" strokeWidth="1" />
      <text y="-5" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#F38124">Celery</text>
      <text y="10" textAnchor="middle" fontSize="7" fill="var(--md-sys-color-on-surface-variant, #555)">Redis Queue</text>
    </g>

    <g transform="translate(310,80)">
      <rect x="-35" y="-20" width="70" height="40" rx="8" fill="var(--md-sys-color-surface-bright, #fff)" stroke="#F38124" strokeWidth="1.5" />
      <text y="-5" textAnchor="middle" fontSize="8" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">Chrome CDP</text>
      <text y="12" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="16" fill="#F38124">open_in_browser</text>
    </g>

    <g transform="translate(200,160)">
      <rect x="-45" y="-12" width="90" height="24" rx="12" fill="#735c00" />
      <text y="3" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#fff">Daphne WebSockets</text>
    </g>
  </svg>
);

// SVG Diagram 4: Catholic Prayers API
const PrayersApiDiagram = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full bg-surface-container-low select-none">
    <path d="M 60,112 L 140,112 M 180,112 L 250,70 M 180,112 L 250,112 M 180,112 L 250,154" 
          fill="none" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.15))" strokeWidth="1.5" strokeDasharray="3 3" />

    <circle r="3.5" fill="#F38124">
      <animateMotion dur="3s" repeatCount="indefinite" path="M 60,112 L 140,112" />
    </circle>
    <circle r="3" fill="#735c00">
      <animateMotion dur="3s" begin="0.5s" repeatCount="indefinite" path="M 180,112 L 250,70" />
    </circle>
    <circle r="3" fill="#735c00">
      <animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M 180,112 L 250,112" />
    </circle>
    <circle r="3" fill="#735c00">
      <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M 180,112 L 250,154" />
    </circle>

    <g transform="translate(60,112)">
      <circle r="18" fill="var(--md-sys-color-surface-bright, #fff)" stroke="#F38124" strokeWidth="1" />
      <text y="5" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="14" fill="#F38124">api</text>
      <text y="28" textAnchor="middle" fontSize="7" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">Client API Request</text>
    </g>

    <g transform="translate(160,112)">
      <circle r="22" fill="var(--md-sys-color-surface-bright, #fff)" stroke="#735c00" strokeWidth="1.5" />
      <text y="5" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="16" fill="#735c00">bolt</text>
      <text y="32" textAnchor="middle" fontSize="8" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">FastAPI Server</text>
    </g>

    <g transform="translate(280,70)">
      <rect x="-35" y="-12" width="70" height="24" rx="6" fill="var(--md-sys-color-surface-variant, #f0f0f0)" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.15))" strokeWidth="1" />
      <text y="3" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#735c00">SQLite Pool 1 (ro)</text>
    </g>
    
    <g transform="translate(280,112)">
      <rect x="-35" y="-12" width="70" height="24" rx="6" fill="var(--md-sys-color-surface-variant, #f0f0f0)" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.15))" strokeWidth="1" />
      <text y="3" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#735c00">SQLite Pool 2 (ro)</text>
    </g>

    <g transform="translate(280,154)">
      <rect x="-35" y="-12" width="70" height="24" rx="6" fill="var(--md-sys-color-surface-variant, #f0f0f0)" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.15))" strokeWidth="1" />
      <text y="3" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#735c00">SQLite Pool 3 (ro)</text>
    </g>
  </svg>
);

// SVG Diagram 5: BibleTalk
const BibleTalkDiagram = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full bg-surface-container-low select-none">
    <path d="M 60,70 L 140,70 M 140,70 L 220,50 M 140,70 L 220,90 M 60,150 L 140,150 M 140,150 L 220,150" 
          fill="none" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.15))" strokeWidth="1.5" strokeDasharray="3 3" />
    
    <circle r="3" fill="#F38124">
      <animateMotion dur="4s" repeatCount="indefinite" path="M 60,70 L 140,70" />
    </circle>
    <circle r="2.5" fill="#735c00">
      <animateMotion dur="4s" repeatCount="indefinite" path="M 140,70 L 220,50" />
    </circle>
    <circle r="2.5" fill="#735c00">
      <animateMotion dur="4s" repeatCount="indefinite" path="M 140,70 L 220,90" />
    </circle>
    <circle r="3" fill="#F38124">
      <animateMotion dur="4s" repeatCount="indefinite" path="M 60,150 L 140,150 M 140,150 L 220,150" />
    </circle>

    <g transform="translate(60,70)">
      <circle r="18" fill="var(--md-sys-color-surface-bright, #fff)" stroke="#735c00" strokeWidth="1.5" />
      <text y="5" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="14" fill="#735c00">book</text>
      <text y="28" textAnchor="middle" fontSize="7" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">Reader UI</text>
    </g>

    <g transform="translate(140,70)">
      <rect x="-25" y="-12" width="50" height="24" rx="4" fill="var(--md-sys-color-surface-variant, #f0f0f0)" stroke="var(--md-sys-color-outline, rgba(0,0,0,0.3))" strokeWidth="1" />
      <text y="3" textAnchor="middle" fontSize="7" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">Hot-Swap</text>
    </g>

    <g transform="translate(240,50)">
      <rect x="-35" y="-10" width="70" height="20" rx="3" fill="var(--md-sys-color-surface-bright, #fff)" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.2))" strokeWidth="1" />
      <text y="2" textAnchor="middle" fontSize="7" fill="var(--md-sys-color-on-surface-variant, #555)">4 Bundled DBs (ro)</text>
    </g>
    
    <g transform="translate(240,90)">
      <rect x="-35" y="-10" width="70" height="20" rx="3" fill="var(--md-sys-color-surface-bright, #fff)" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.2))" strokeWidth="1" />
      <text y="2" textAnchor="middle" fontSize="7" fill="var(--md-sys-color-on-surface-variant, #555)">Study Plans (rw)</text>
    </g>

    <g transform="translate(60,150)">
      <circle r="18" fill="var(--md-sys-color-surface-bright, #fff)" stroke="#F38124" strokeWidth="1.5" />
      <text y="5" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="14" fill="#F38124">notifications_active</text>
      <text y="28" textAnchor="middle" fontSize="7" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">Reminder Alarm</text>
    </g>

    <g transform="translate(140,150)">
      <rect x="-25" y="-12" width="50" height="24" rx="4" fill="var(--md-sys-color-surface-variant, #f0f0f0)" stroke="var(--md-sys-color-outline, rgba(0,0,0,0.3))" strokeWidth="1" />
      <text y="3" textAnchor="middle" fontSize="7" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">Deep Link</text>
    </g>

    <g transform="translate(240,150)">
      <rect x="-35" y="-12" width="70" height="24" rx="6" fill="#735c00" />
      <text y="3" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#fff">user.sqlite (rw)</text>
    </g>
  </svg>
);

// SVG Diagram 6: Pablo-Recorder
const PabloRecorderDiagram = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full bg-surface-container-low select-none">
    <path d="M 60,80 L 140,80 M 60,140 L 140,140 M 140,80 L 220,112 M 140,140 L 220,112 M 220,112 L 310,112" 
          fill="none" stroke="var(--md-sys-color-outline-variant, rgba(0,0,0,0.15))" strokeWidth="1.5" strokeDasharray="3 3" />
    
    <circle r="3.5" fill="#F38124">
      <animateMotion dur="3s" repeatCount="indefinite" path="M 60,80 L 140,80" />
    </circle>
    <circle r="3.5" fill="#F38124">
      <animateMotion dur="3s" repeatCount="indefinite" path="M 60,140 L 140,140" />
    </circle>
    <circle r="2.5" fill="#735c00">
      <animateMotion dur="3s" repeatCount="indefinite" path="M 140,80 L 220,112" />
    </circle>
    <circle r="2.5" fill="#735c00">
      <animateMotion dur="3s" repeatCount="indefinite" path="M 140,140 L 220,112" />
    </circle>
    <circle r="3" fill="#735c00">
      <animateMotion dur="3s" repeatCount="indefinite" path="M 220,112 L 310,112" />
    </circle>

    <g transform="translate(60,80)">
      <circle r="16" fill="var(--md-sys-color-surface-bright, #fff)" stroke="#735c00" strokeWidth="1" />
      <text y="5" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="12" fill="#735c00">screen_share</text>
      <text y="26" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">Screen Capture</text>
    </g>

    <g transform="translate(60,140)">
      <circle r="16" fill="var(--md-sys-color-surface-bright, #fff)" stroke="#735c00" strokeWidth="1" />
      <text y="5" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="12" fill="#735c00">mic</text>
      <text y="26" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">Microphone</text>
    </g>

    <g transform="translate(140,140)">
      <rect x="-25" y="-12" width="50" height="24" rx="4" fill="var(--md-sys-color-surface-variant, #f0f0f0)" stroke="var(--md-sys-color-outline, rgba(0,0,0,0.3))" strokeWidth="1" />
      <text y="-1" textAnchor="middle" fontSize="7" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">DSP Biquads</text>
      <text y="8" textAnchor="middle" fontSize="6" fill="var(--md-sys-color-on-surface-variant, #555)">Low-cut / Highpass</text>
    </g>

    <g transform="translate(220,112)">
      <rect x="-35" y="-18" width="70" height="36" rx="6" fill="var(--md-sys-color-surface-bright, #fff)" stroke="#F38124" strokeWidth="1.5" />
      <text y="-5" textAnchor="middle" fontSize="8" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">WebCodecs</text>
      <text y="8" textAnchor="middle" fontSize="6" fill="var(--md-sys-color-on-surface-variant, #555)">H.264 / AAC Encoders</text>
    </g>

    <g transform="translate(325,112)">
      <circle r="18" fill="#735c00" />
      <text y="4" textAnchor="middle" style={{ fontFamily: "'Material Symbols Outlined'" }} fontSize="14" fill="#fff">video_file</text>
      <text y="28" textAnchor="middle" fontSize="7" fontWeight="bold" fill="var(--md-sys-color-on-surface, #000)">mp4-muxer (RAM)</text>
    </g>
  </svg>
);

const Architecture = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const schematics = [
    {
      title: 'Sacred Rosary',
      subtitle: 'Hands-Free Speech Recitation Engine',
      description: 'Orchestrates audio guided prayer using a VAD service over Provider state. Microphone streams are captured, analyzed offline for user speaking intervals, and responses are queued using cached voice pack MP3s and sqflite relational tables.',
      stack: ['Flutter', 'Provider State', 'VAD Service', 'just_audio', 'sqflite'],
      span: 'lg:col-span-7'
    },
    {
      title: 'local-git-deploy',
      subtitle: 'Incremental File Sync Pipeline',
      description: 'Downloads the remote deploy state file via SFTP/FTP client contracts, calculates local-to-remote Git commit diff status arrays, applies glob ignore filters, and deploys incremental changes while mirroring file deletions.',
      stack: ['NodeJS CLI', 'simple-git', 'ssh2-sftp', 'basic-ftp', 'micromatch'],
      span: 'lg:col-span-5'
    },
    {
      title: 'Distributed Browser Orchestration Engine',
      subtitle: 'DRM Bypassing & Telemetry Loop',
      description: 'Launches native Chrome instances with remote debugging ports and controls page workflows via Playwright CDP connection pools. Generates dynamic Manifest V3 proxy auth extensions and uses a daemon thread WebSocket broadcaster for real-time telemetry.',
      stack: ['Django REST', 'Daphne ASGI', 'Celery tasks', 'Redis queue', 'Playwright CDP'],
      span: 'lg:col-span-6'
    },
    {
      title: 'Catholic Prayers API',
      subtitle: 'Serverless Relational Endpoint',
      description: 'Mounts FastAPI routers inside Vercel Serverless triggers. Serves prayer requests utilizing a read-only SQLite database connection pattern, achieving concurrency safety without locking resources under heavy load.',
      stack: ['Python', 'FastAPI', 'Vercel Serverless', 'SQLite ro', 'Swagger UI'],
      span: 'lg:col-span-6'
    },
    {
      title: 'BibleTalk',
      subtitle: 'Dual-Database Offline Scripture Engine',
      description: 'Separates pre-bundled read-only SQLite scripture translations from a writable user.sqlite database tracking highlights, notes, and plan states. Dynamically swaps database connections at runtime and schedules deep-linked local notifications.',
      stack: ['Flutter', 'sqflite', 'local_notifications', 'timezone scheduler'],
      span: 'lg:col-span-5'
    },
    {
      title: 'Pablo-Recorder',
      subtitle: 'DSP Web Audio & WebCodecs Encoder',
      description: 'Acquires browser screen streams and passes mic inputs through BiquadFilter highpass/lowpass DSP nodes. Orchestrates real-time frame/audio encoding via WebCodecs and packages seekable MP4 structures locally via mp4-muxer.',
      stack: ['Vanilla JS', 'Web Audio DSP', 'WebCodecs', 'mp4-muxer', 'PWA'],
      span: 'lg:col-span-7'
    }
  ];

  const renderDiagram = (title) => {
    switch (title) {
      case 'Sacred Rosary':
        return <SacredRosaryDiagram />;
      case 'local-git-deploy':
        return <LocalGitDeployDiagram />;
      case 'Distributed Browser Orchestration Engine':
        return <BrowserOrchestrationDiagram />;
      case 'Catholic Prayers API':
        return <PrayersApiDiagram />;
      case 'BibleTalk':
        return <BibleTalkDiagram />;
      case 'Pablo-Recorder':
        return <PabloRecorderDiagram />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen pt-40 pb-32 overflow-hidden">
      <Helmet>
        <title>Architecture | Francis Okpani</title>
        <meta name="description" content="Dive into the system schematics and technical architecture designed by Francis Okpani." />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="Architecture | Francis Okpani" />
        <meta property="og:description" content="Dive into the system schematics and technical architecture designed by Francis Okpani." />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:title" content="Architecture | Francis Okpani" />
        <meta name="twitter:description" content="Dive into the system schematics and technical architecture designed by Francis Okpani." />
      </Helmet>
      {/* Background Glows & Gradients */}
      <div className="aether-glow w-[600px] h-[600px] top-0 right-[-100px] opacity-60" />
      <div className="aether-glow w-[800px] h-[800px] bottom-[20%] left-[-200px] opacity-40" />

      {/* Hero Section */}
      <section className="px-margin-safe max-w-[1440px] mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center relative mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-6 max-w-4xl"
        >
          The Anatomy of Systems
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12"
        >
          Exploring the delicate interplay of structured logic and boundless scale. A cartography of digital realms woven from aether and iron intent.
        </motion.p>

        {/* Network Diagram Media */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl aspect-video rounded-xl border border-outline-variant/30 bg-surface-container-low/50 overflow-hidden relative shadow-[0_10px_40px_rgba(0,0,0,0.05)] select-none group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-surface-bright/40 to-transparent z-10 pointer-events-none" />
          <img
            alt="Network Diagram representing distributed systems"
            className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-[2000ms] group-hover:scale-105 filter sepia-[0.3]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlutFF4FtELkrseNswNZQ-PQnDQAuiWG0otZ9GVj06qMHwsbBX_zMc_8qMIjMRMWbFBHqnSBB_K22xv5cgg6WLYVbuGS2a6H1VAQgq9cLsjXfh1X5OFcQ7DH0gEC-3LSfsa9a0OjUT46w4qlc1Ok6fWwSQmRCE2X56A--P5xH2kCBz9961tz_ara-Z4F2M57WtzKyFilMi4GdNjw149jEQLCBDtUWQtoWRX7u0xTgCIPjEIbASyg6rPjHhaS9tYsbbIGOEQWrvEIM"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Sacred Schematics Section */}
      <section className="mb-32 px-margin-safe max-w-[1440px] mx-auto relative select-none">
        {/* Organic Blobs Background */}
        <svg
          className="absolute -z-10 text-secondary-container opacity-40 w-[600px] h-[600px] top-[-100px] left-[-150px] mix-blend-multiply pointer-events-none"
          fill="currentColor"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45.7,-76.1C58.9,-69.3,68.8,-55.4,76.5,-41C84.2,-26.6,89.7,-11.7,87.7,2.4C85.7,16.5,76.2,29.9,65.8,41.4C55.4,52.9,44.1,62.5,31.2,70.1C18.3,77.7,3.8,83.3,-10.8,81.8C-25.4,80.3,-40.1,71.7,-51.7,60.6C-63.3,49.5,-71.8,35.9,-77.3,21.1C-82.8,6.3,-85.3,-9.7,-80.4,-23.5C-75.5,-37.3,-63.2,-48.9,-50,-56.1C-36.8,-63.3,-22.7,-66.1,-8,-63.3C6.7,-60.5,23.4,-52.1,32.5,-83L45.7,-76.1Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="absolute -z-10 text-tertiary-container opacity-30 w-[500px] h-[500px] bottom-[-150px] right-[-100px] mix-blend-multiply pointer-events-none"
          fill="currentColor"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.5,-63.1C64.9,-52.9,72.6,-35.1,75.3,-17.1C78,0.9,75.7,19.1,66.8,33.5C57.9,47.9,42.4,58.5,25.6,65.2C8.8,71.9,-9.3,74.7,-25.1,69.5C-40.9,64.3,-54.4,51.1,-63.8,35.3C-73.2,19.5,-78.5,1.1,-74.6,-15.1C-70.7,-31.3,-57.6,-45.3,-43,-55.1C-28.4,-64.9,-14.2,-70.5,1.6,-72.5C17.4,-74.5,38.1,-73.3,51.5,-63.1Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex items-center gap-4 mb-16 relative z-10"
        >
          <span className="material-symbols-outlined text-secondary text-2xl select-none">architecture</span>
          <h2 className="font-headline-md text-headline-md text-on-background">System Schematics</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-outline-variant/40 via-outline-variant/10 to-transparent" />
        </motion.div>

        {/* Schematics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          {schematics.map((schematic) => (
            <motion.div
              key={schematic.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
              className={`${schematic.span} bg-surface-bright border border-outline-variant/20 shadow-[0_15px_40px_rgba(118,87,73,0.08)] rounded-[32px] p-8 group hover:-translate-y-1 transition-transform duration-500 flex flex-col justify-between relative z-10`}
            >
              <div className="mb-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{schematic.title}</h3>
                    <h4 className="font-body-md text-secondary font-semibold text-xs tracking-wider uppercase mb-3">{schematic.subtitle}</h4>
                  </div>
                  <div className="opacity-30 text-secondary-container">
                    <span className="material-symbols-outlined text-[32px]">account_tree</span>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  {schematic.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {schematic.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-surface text-secondary font-label-caps text-label-caps text-[9px] border border-outline-variant/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/20 relative">
                {renderDiagram(schematic.title)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Pillars of Construct */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-margin-safe max-w-[1440px] mx-auto z-10 relative"
      >
        <div className="text-center mb-20">
          <h2 className="font-headline-md text-headline-md text-on-background">The Pillars of Construct</h2>
        </div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <motion.div
            variants={fadeInUp}
            className="p-8 border-t border-outline-variant/30 pt-10 relative group text-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary-container/20 text-secondary group-hover:bg-secondary-container/45 transition-colors duration-300">
                <span className="material-symbols-outlined select-none text-[22px]">shield_locked</span>
              </div>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-4 mb-2">Reliability</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Bypassing platform bot-detection limits. Self-healing browser loops that track media timers, buffering, and cookies to recover sessions rather than crash pipelines.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            variants={fadeInUp}
            className="p-8 border-t border-outline-variant/30 pt-10 relative group text-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary-container/20 text-secondary group-hover:bg-secondary-container/45 transition-colors duration-300">
                <span className="material-symbols-outlined select-none text-[22px]">layers</span>
              </div>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-4 mb-2">Scalability</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Orchestrating multi-worker task distributions. Celery asynchronous background queues and Django Channels ASGI WebSockets stream live playback screenshots effortlessly.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            variants={fadeInUp}
            className="p-8 border-t border-outline-variant/30 pt-10 relative group text-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary-container/20 text-secondary group-hover:bg-secondary-container/45 transition-colors duration-300">
                <span className="material-symbols-outlined select-none text-[22px]">handyman</span>
              </div>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-4 mb-2">Maintainability</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Strict modular decoupling. Clean Provider structures in mobile, clean REST conventions in FastAPI, and clear git diff filters in command line packages.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Architecture;
