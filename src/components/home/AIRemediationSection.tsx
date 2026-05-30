'use client';

import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import SectionHeading from '@/components/common/SectionHeading';
import { AI_REMEDIATION_TITLE, AI_REMEDIATION_DESCRIPTION } from '@/lib/constants';
import { slideInLeft, slideInRight } from '@/lib/animations';

export default function AIRemediationSection() {
  const features = [
    'Automated misconfiguration detection across AWS, Azure, GCP',
    'AI-powered risk prioritization and scoring',
    'Guided, actionable remediation recommendations',
    'Multi-cloud inventory and compliance tracking',
    'Executive dashboards and custom reporting',
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-black via-slate-900/20 to-black">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
            transition={{ duration: 0.7 }}
            className="relative h-96"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-primary-600/10 to-transparent" />
              <div className="absolute inset-0 glass-effect" />
              {/* Floating elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-6xl"
                >
                  🤖
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <SectionHeading
              title={AI_REMEDIATION_TITLE}
              description={AI_REMEDIATION_DESCRIPTION}
              centered={false}
              size="md"
            />

            <motion.ul
              className="mt-8 space-y-4"
              variants={{
                animate: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3"
                >
                  <span className="text-primary-400 font-bold flex-shrink-0">→</span>
                  <span className="text-white/70">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <Button
              asLink
              href="/contact"
              variant="primary"
              size="lg"
              className="mt-8"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
