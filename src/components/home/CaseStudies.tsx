'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GlassmorphismCard from '@/components/common/GlassmorphismCard';
import SectionHeading from '@/components/common/SectionHeading';
import { CASE_STUDIES } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function CaseStudies() {
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
            title="Outcomes our clients achieve"
            subtitle="Client Impact"
            description="Representative results from recent engagements across SaaS, finance, and healthcare"
            centered
            size="lg"
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {CASE_STUDIES.map((caseStudy) => (
            <motion.div key={caseStudy.id} variants={itemVariants}>
              <GlassmorphismCard size="lg" hover={false}>
                <p className="text-5xl font-black gradient-text leading-none">{caseStudy.metricValue}</p>
                <p className="text-primary-400/90 font-semibold text-xs uppercase tracking-wider mt-2 mb-4">
                  {caseStudy.metric}
                </p>
                <h3 className="text-lg font-bold text-white mb-2">{caseStudy.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{caseStudy.description}</p>
                {caseStudy.slug && (
                  <div className="mt-4 pt-4 border-t border-white/8">
                    <Link
                      href={`/case-studies/${caseStudy.slug}`}
                      className="text-primary-400 text-sm font-semibold hover:text-primary-300 transition-colors"
                    >
                      View Full Case Study →
                    </Link>
                  </div>
                )}
              </GlassmorphismCard>
            </motion.div>
          ))}
        </motion.div>
        <p className="text-center text-white/35 text-xs mt-8 max-w-2xl mx-auto">
          Metrics shown are illustrative of typical engagement outcomes. Actual results vary by environment and scope.
        </p>
      </div>
    </section>
  );
}
