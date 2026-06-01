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
  VulnerabilityIcon,
  DataProtectionIcon,
  NetworkSecurityIcon,
} from '@/components/icons/CybersecurityIcons';

// Mapped 1-to-1 with TRUST_SIGNALS order:
// Cloud Security, Risk Management, Compliance, Incident Response,
// DevSecOps, Virtual CISO, Cybersecurity, Vulnerability Management, Data Privacy
const trustIcons = [
  CloudLockIcon,       // Cloud Security
  ShieldIcon,          // Risk Management
  ComplianceIcon,      // Compliance
  IncidentResponseIcon,// Incident Response
  DevSecOpsIcon,       // DevSecOps
  CISOIcon,            // Virtual CISO
  NetworkSecurityIcon, // Cybersecurity
  VulnerabilityIcon,   // Vulnerability Management
  DataProtectionIcon,  // Data Privacy
];

export default function TrustBar() {
  return (
    <section className="py-10 md:py-14 bg-slate-950/80 border-y border-white/10">
      <div className="container-custom">
        <p className="text-center text-white/40 text-xs uppercase tracking-[0.2em] font-semibold mb-8">
          Core capabilities
        </p>
        <motion.div
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6"
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
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-3 text-center group cursor-default"
              >
                <div className="relative w-12 h-12 text-primary-400/70 group-hover:text-primary-400 transition-colors duration-300">
                  {/* Glow ring that lights up on hover */}
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-primary-500/40" />
                  <Icon />
                </div>
                <p className="text-white/60 group-hover:text-white font-medium text-sm transition-colors duration-300">{signal}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
