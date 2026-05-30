'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { PROCESS_STEPS } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function ProcessSection() {
  return (
    <section className="section-padding bg-slate-950/50 border-y border-white/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Our Process"
            subtitle="Proven Methodology"
            description="A strategic, step-by-step approach to strengthening your security posture"
            centered
            size="lg"
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-6 md:gap-4 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div key={step.number} variants={itemVariants} className="relative">
              {/* Connector line */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[50%] w-[calc(100%-20px)] h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent" />
              )}

              {/* Card */}
              <div className="glass-effect rounded-xl p-6 relative z-10">
                {/* Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/20 border border-primary-500/50 mb-4">
                  <span className="text-lg font-bold text-primary-400">{step.number}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
