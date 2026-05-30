'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import { PROBLEM_HEADLINE, PROBLEM_DESCRIPTION } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';

const problems = [
  {
    title: 'Cloud misconfigurations',
    description: 'Exposed storage, overly permissive IAM, and drift across environments.',
  },
  {
    title: 'Ransomware & phishing',
    description: 'Human and technical gaps that turn a single click into business disruption.',
  },
  {
    title: 'Compliance pressure',
    description: 'SOC 2, HIPAA, PCI, and NIST requirements with limited internal bandwidth.',
  },
  {
    title: 'Identity & visibility gaps',
    description: 'Weak MFA adoption, shadow IT, and blind spots in logging and monitoring.',
  },
  {
    title: 'Incident readiness',
    description: 'Unclear playbooks and untested response when minutes matter most.',
  },
  {
    title: 'Security debt',
    description: 'Backlogged findings without prioritization aligned to business risk.',
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-black via-slate-950/30 to-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title={PROBLEM_HEADLINE}
            description={PROBLEM_DESCRIPTION}
            centered
            size="lg"
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              className="glass-effect rounded-2xl p-6 md:p-7 hover:border-primary-500/30 transition-smooth group"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500/15 text-primary-400 text-sm font-bold mb-4 group-hover:bg-primary-500/25 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
