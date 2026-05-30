'use client';

import { motion } from 'framer-motion';

// ── Small inline SVG icons ──────────────────────────────────────────────────

const ShieldSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 2L20 6V12C20 16.4 16.4 20.5 12 22C7.6 20.5 4 16.4 4 12V6L12 2Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LockSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 11V7C8 5.34 9.34 4 11 4H13C14.66 4 16 5.34 16 7V11"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

const EyeSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const BugSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M8 7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V13C16 15.8 14.2 18 12 18C9.8 18 8 15.8 8 13V7Z"
      stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 10H8M16 10H20M5 7L8 9M19 7L16 9M5 16L8 14M19 16L16 14M12 18V21"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const NetworkSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="4" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="20" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="4" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="20" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 7L10 10M18 7L14 10M6 17L10 14M18 17L14 14"
      stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

const KeySVG = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="8" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 10H21M18 10V13M15 10V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const FingerPrintSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 3C9.8 3 7.8 3.8 6.3 5.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17.7 5.1C16.2 3.8 14.2 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 19C7 17.8 6 16 6 13.5V12C6 8.7 8.7 6 12 6C15.3 6 18 8.7 18 12V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 21C10 21 9 19 9 16V12.5C9 10.6 10.3 9 12 9C13.7 9 15 10.6 15 12.5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 12V16C12 17.5 12.5 19.5 13 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ── Icon config: position (%), size, color, animation params ────────────────

const ICONS = [
  { id: 0, Icon: ShieldSVG,      x: 5,  y: 15, size: 40, color: '#3b82f6', delay: 0,   duration: 7 },
  { id: 1, Icon: LockSVG,        x: 88, y: 10, size: 32, color: '#06b6d4', delay: 1,   duration: 9 },
  { id: 2, Icon: NetworkSVG,     x: 92, y: 55, size: 36, color: '#6366f1', delay: 0.5, duration: 8 },
  { id: 3, Icon: BugSVG,         x: 3,  y: 70, size: 28, color: '#f43f5e', delay: 2,   duration: 6 },
  { id: 4, Icon: EyeSVG,         x: 80, y: 80, size: 34, color: '#3b82f6', delay: 1.5, duration: 10 },
  { id: 5, Icon: KeySVG,         x: 15, y: 85, size: 30, color: '#a855f7', delay: 0.8, duration: 7.5 },
  { id: 6, Icon: FingerPrintSVG, x: 50, y: 5,  size: 36, color: '#06b6d4', delay: 3,   duration: 8.5 },
  { id: 7, Icon: ShieldSVG,      x: 68, y: 90, size: 26, color: '#10b981', delay: 2.5, duration: 6.5 },
];

// ── Floating binary / hex particles ────────────────────────────────────────

const CODE_PARTICLES = [
  { id: 0,  text: '0xFF',    x: 10, delay: 0,   duration: 14 },
  { id: 1,  text: '10110',   x: 22, delay: 1.5, duration: 18 },
  { id: 2,  text: 'SHA-256', x: 35, delay: 3,   duration: 16 },
  { id: 3,  text: '01001',   x: 48, delay: 0.5, duration: 20 },
  { id: 4,  text: '0xA3',    x: 60, delay: 2,   duration: 15 },
  { id: 5,  text: 'TLS 1.3', x: 73, delay: 4,   duration: 17 },
  { id: 6,  text: '11010',   x: 85, delay: 1,   duration: 19 },
  { id: 7,  text: 'AES-128', x: 95, delay: 3.5, duration: 13 },
];

// ── Scanning line ───────────────────────────────────────────────────────────

function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-px pointer-events-none"
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.6) 30%, rgba(6,182,212,0.8) 50%, rgba(59,130,246,0.6) 70%, transparent 100%)',
        boxShadow: '0 0 12px 2px rgba(59,130,246,0.4)',
      }}
      initial={{ top: '-2%' }}
      animate={{ top: '102%' }}
      transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
    />
  );
}

// ── Pulsing radar rings ─────────────────────────────────────────────────────

function RadarRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary-500/10"
          initial={{ width: 80, height: 80, opacity: 0.6 }}
          animate={{ width: 80 + i * 120, height: 80 + i * 120, opacity: 0 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.2,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

// ── Main component ──────────────────────────────────────────────────────────

export default function FloatingCyberElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* Scanning line */}
      <ScanLine />

      {/* Radar rings */}
      <RadarRings />

      {/* Floating icons */}
      {ICONS.map(({ id, Icon, x, y, size, color, delay, duration }) => (
        <motion.div
          key={id}
          className="absolute"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
            color,
            filter: `drop-shadow(0 0 6px ${color}66)`,
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 0.55, 0.55, 0],
            scale: [0.6, 1, 1, 0.6],
            y: [0, -18, -18, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Floating code particles */}
      {CODE_PARTICLES.map(({ id, text, x, delay, duration }) => (
        <motion.span
          key={id}
          className="absolute font-mono text-[10px] tracking-wider"
          style={{
            left: `${x}%`,
            color: 'rgba(99,102,241,0.5)',
            textShadow: '0 0 8px rgba(99,102,241,0.4)',
          }}
          initial={{ bottom: '-5%', opacity: 0 }}
          animate={{ bottom: '110%', opacity: [0, 0.7, 0.7, 0] }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {text}
        </motion.span>
      ))}

      {/* Corner accent — top-right terminal blink */}
      <motion.div
        className="absolute top-6 right-6 flex items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <span className="font-mono text-[10px] text-emerald-400/60 tracking-widest">THREAT SCAN ACTIVE</span>
        <motion.span
          className="inline-block w-1.5 h-3 bg-emerald-400/70"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}
