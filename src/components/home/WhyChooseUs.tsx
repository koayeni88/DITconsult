'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { WHY_CHOOSE_TITLE, WHY_CHOOSE_DESCRIPTION, WHY_CHOOSE_US } from '@/lib/constants';
import { slideInLeft, slideInRight, containerVariants, itemVariants } from '@/lib/animations';

const highlights = [
  { label: 'Multi-cloud', value: 'AWS · Azure · GCP' },
  { label: 'Frameworks', value: 'NIST · ISO · SOC 2' },
  { label: 'Deliverables', value: 'Roadmaps & playbooks' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-b from-black via-slate-950/40 to-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              title={WHY_CHOOSE_TITLE}
              description={WHY_CHOOSE_DESCRIPTION}
              centered={false}
              size="md"
            />

            <motion.ul
              className="mt-8 space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {WHY_CHOOSE_US.map((reason, index) => (
                <motion.li key={index} variants={itemVariants} className="flex gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="text-white/70 leading-relaxed">{reason}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="glass-effect-lg rounded-2xl p-8 md:p-10 space-y-6">
              <h3 className="text-lg font-bold text-white">What you get from day one</h3>
              <div className="space-y-5">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-white/50 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-primary-500/10 border border-primary-500/20 p-5">
                <p className="text-white/80 text-sm leading-relaxed">
                  Every engagement ends with prioritized findings, executive summaries, and a remediation
                  plan your team can execute—not a PDF that sits on a shelf.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
