'use client';

import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import { HERO } from '@/lib/content';
import { COMPANY_TAGLINE } from '@/lib/constants';
import { slideInLeft, slideInRight } from '@/lib/animations';
import HeroVisual from './HeroVisual';
import CyberAtmosphere from './CyberAtmosphere';

export default function HeroSection() {
  return (
    <section className="cyber-hero relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800/40 to-navy-900 border-b border-primary-500/20">
      <CyberAtmosphere variant="full" />

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={slideInLeft}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-7"
          >
            <p className="text-gold-400 font-semibold text-xs uppercase tracking-[0.2em]">
              {COMPANY_TAGLINE}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight">
              {HERO.headline}
            </h1>
            <p className="text-lg text-white/65 leading-relaxed max-w-xl">{HERO.subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asLink href="/contact" variant="primary" size="lg">
                {HERO.ctaPrimary}
              </Button>
              <Button asLink href="/services" variant="secondary" size="lg">
                {HERO.ctaSecondary}
              </Button>
            </div>
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
              {HERO.capabilities.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-primary-400" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={slideInRight}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
