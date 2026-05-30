'use client';

import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import {
  HERO_HEADLINE,
  HERO_HEADLINE_ACCENT,
  HERO_SUBHEADLINE,
  HERO_CTA_PRIMARY,
  HERO_CTA_SECONDARY,
} from '@/lib/constants';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';
import HeroVisual from './HeroVisual';

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-gradient-to-b from-black via-slate-950/40 to-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] bg-primary-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-cyan-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(0, 102, 255, 0.15) 25%, rgba(0, 102, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(0, 102, 255, 0.15) 75%, rgba(0, 102, 255, 0.15) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(0, 102, 255, 0.15) 25%, rgba(0, 102, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(0, 102, 255, 0.15) 75%, rgba(0, 102, 255, 0.15) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={slideInLeft}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-5">
              <motion.span
                className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-primary-400 font-semibold text-xs uppercase tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
                Enterprise Cybersecurity
              </motion.span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight">
                {HERO_HEADLINE}{' '}
                <span className="gradient-text block sm:inline mt-1 sm:mt-0">
                  {HERO_HEADLINE_ACCENT}
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/65 leading-relaxed max-w-xl"
            >
              {HERO_SUBHEADLINE}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asLink href="/contact" variant="primary" size="lg">
                {HERO_CTA_PRIMARY}
              </Button>
              <Button asLink href="/services" variant="secondary" size="lg">
                {HERO_CTA_SECONDARY}
              </Button>
            </motion.div>

            <motion.ul
              variants={fadeInUp}
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50 pt-2"
            >
              {['AWS · Azure · GCP', 'SOC 2 & HIPAA', 'Incident-ready teams'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-primary-400">✓</span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={slideInRight}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
