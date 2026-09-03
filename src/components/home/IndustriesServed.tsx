'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '@/components/common/SectionHeading';
import { INDUSTRIES } from '@/lib/content';
import { containerVariants, itemVariants } from '@/lib/animations';
import CyberAtmosphere from './CyberAtmosphere';

const industryIcons: Record<string, string> = {
  healthcare: 'H',
  finance: 'F',
  education: 'E',
  government: 'G',
  saas: 'S',
  business: 'B',
};

export default function IndustriesServed() {
  return (
    <section className="cyber-section section-padding" aria-labelledby="industries-heading">
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom relative z-10">
        <SectionHeading
          id="industries-heading"
          title="Industry-focused security outcomes"
          subtitle="Protected Industries"
          description="Regulatory context and operational priorities vary by sector. We tailor assessments and advisory to your environment."
          centered
          size="lg"
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {INDUSTRIES.map((industry) => (
            <motion.article key={industry.id} variants={itemVariants} className="h-full">
              <Link href={industry.href} className="block h-full group">
                <div className="cyber-panel p-7 h-full hover:border-primary-500/40 transition-smooth">
                  <div
                    className="w-10 h-10 rounded-lg bg-primary-500/15 border border-primary-500/25 flex items-center justify-center text-primary-400 font-bold text-sm mb-4 font-mono"
                    aria-hidden="true"
                  >
                    {industryIcons[industry.icon] ?? '•'}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2 text-white/55 text-xs">
                        <span className="text-primary-400 shrink-0">→</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <p className="text-center mt-10">
          <Link href="/industries" className="text-primary-400 font-semibold text-sm hover:underline">
            View all industries →
          </Link>
        </p>
      </div>
    </section>
  );
}
