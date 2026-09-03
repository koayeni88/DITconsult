'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { PROCESS_STEPS } from '@/lib/content';
import { containerVariants, itemVariants } from '@/lib/animations';
import CyberAtmosphere from './CyberAtmosphere';

export default function ProcessSection() {
  return (
    <section className="cyber-section-alt section-padding" aria-labelledby="process-heading">
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom relative z-10">
        <SectionHeading
          id="process-heading"
          title="A clear path from discovery to improvement"
          subtitle="Security Process"
          description="Every engagement follows a structured methodology so you know what to expect at each stage."
          centered
          size="lg"
        />

        <motion.ol
          className="mt-14 space-y-6 max-w-3xl mx-auto lg:max-w-none lg:grid lg:grid-cols-4 lg:gap-6 lg:space-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PROCESS_STEPS.map((step) => (
            <motion.li
              key={step.number}
              variants={itemVariants}
              className="cyber-panel p-6 relative"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500/20 text-primary-400 font-bold text-sm mb-4 font-mono">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{step.description}</p>
              <p className="text-white/45 text-xs border-t border-white/10 pt-3">
                <span className="text-gold-400/90 font-semibold">You can expect: </span>
                {step.clientExpectation}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
