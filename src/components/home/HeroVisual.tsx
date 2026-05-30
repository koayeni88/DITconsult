'use client';

import { motion } from 'framer-motion';

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-md h-96 flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* Animated concentric circles (security layers) */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary-500/30"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border border-primary-400/20"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-16 rounded-full border border-primary-300/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        {/* Center shield with lock */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative w-24 h-24"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Shield background */}
            <svg
              className="absolute inset-0 w-24 h-24 text-primary-500"
              viewBox="0 0 100 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 10L85 30V55C85 75 50 105 50 105C50 105 15 75 15 55V30L50 10Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="currentColor"
                opacity="0.1"
              />
              <path
                d="M50 10L85 30V55C85 75 50 105 50 105C50 105 15 75 15 55V30L50 10Z"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
              />
            </svg>

            {/* Lock icon inside shield */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                className="w-10 h-10 text-primary-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="10"
                  width="12"
                  height="10"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M9 10V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="15" r="1.5" fill="currentColor" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Orbiting security nodes */}
          {[0, 90, 180, 270].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"
              animate={{
                x: Math.cos((angle * Math.PI) / 180) * 90,
                y: Math.sin((angle * Math.PI) / 180) * 90,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.5,
              }}
              style={{ transformOrigin: '0 0', left: '50%', top: '50%' }}
            />
          ))}
        </div>

        {/* Data flow lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            x1="50"
            y1="100"
            x2="150"
            y2="100"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            strokeDasharray="5,5"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -10 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.line
            x1="100"
            y1="50"
            x2="100"
            y2="150"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            strokeDasharray="5,5"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -10 }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0066ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0066ff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
