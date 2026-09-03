'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import CyberAtmosphere from './CyberAtmosphere';
import { CUSTOMER_PROBLEMS } from '@/lib/content';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function CustomerProblems() {
  return (
    <section className="cyber-section-alt section-padding" aria-labelledby="problems-heading">
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            id="problems-heading"
            title="Security challenges that slow business progress"
            subtitle="Threat Landscape"
            description="Organizations face practical risk—not abstract threats. These are the gaps we help close."
            centered
            size="lg"
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {CUSTOMER_PROBLEMS.map((problem, index) => (
            <motion.article
              key={problem.title}
              variants={itemVariants}
              className="cyber-panel p-6 hover:border-primary-500/35 transition-smooth"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary-500/15 text-primary-400 text-xs font-bold mb-4 font-mono">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{problem.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
