'use client';

import { motion } from 'framer-motion';
import { TRUST_SIGNALS } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';
import {
  CloudLockIcon,
  ShieldIcon,
  ComplianceIcon,
  IncidentResponseIcon,
  DevSecOpsIcon,
  CISOIcon,
} from '@/components/icons/CybersecurityIcons';

const trustIcons = [
  CloudLockIcon,
  ShieldIcon,
  ComplianceIcon,
  IncidentResponseIcon,
  DevSecOpsIcon,
  CISOIcon,
];

export default function TrustBar() {
  return (
    <section className="py-10 md:py-14 bg-slate-950/80 border-y border-white/10">
      <div className="container-custom">
        <p className="text-center text-white/40 text-xs uppercase tracking-[0.2em] font-semibold mb-8">
          Core capabilities
        </p>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {TRUST_SIGNALS.map((signal, index) => {
            const Icon = trustIcons[index] ?? ShieldIcon;
            return (
              <motion.div
                key={signal}
                variants={itemVariants}
                className="flex flex-col items-center gap-3 text-center group"
              >
                <div className="w-12 h-12 text-primary-400/80 group-hover:text-primary-400 transition-colors">
                  <Icon />
                </div>
                <p className="text-white/75 font-medium text-sm">{signal}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
