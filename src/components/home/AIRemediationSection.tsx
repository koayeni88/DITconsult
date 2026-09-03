'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { AI_REMEDIATION_WORKFLOW, AI_REMEDIATION_GUARDRAILS } from '@/lib/content';
import { slideInLeft, slideInRight } from '@/lib/animations';
import CyberAtmosphere from './CyberAtmosphere';

export default function AIRemediationSection() {
  return (
    <section className="cyber-section-alt section-padding" aria-labelledby="ai-remediation-heading">
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInLeft}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              id="ai-remediation-heading"
              title="AI-Assisted Cloud Security Remediation"
              subtitle="AI-Assisted Defense"
              description="Accelerate detection and prioritization of cloud misconfigurations—with human oversight, approval controls, and audit-ready documentation at every step."
              centered={false}
              size="md"
            />
            <div className="mt-8 rounded-xl border border-gold-500/20 bg-gold-500/5 p-5">
              <p className="text-white/75 text-sm leading-relaxed">
                AI supports analysis and prioritization. DiTconsult does not perform unsupervised production changes.
                Every remediation recommendation requires human review and approval.
              </p>
            </div>
            <Button asLink href="/ai-cloud-remediation" variant="primary" size="lg" className="mt-8">
              Explore AI-Assisted Remediation
            </Button>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInRight}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">How the workflow operates</h3>
            <ol className="space-y-4">
              {AI_REMEDIATION_WORKFLOW.map((step) => (
                <li key={step.step} className="flex gap-4 cyber-panel !rounded-xl p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-500/20 text-primary-400 text-sm font-bold font-mono">
                    {step.step}
                  </span>
                  <div>
                    <p className="text-white font-medium text-sm">{step.title}</p>
                    <p className="text-white/55 text-sm mt-1 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <h4 className="text-sm font-semibold text-white/80 mt-8 mb-3">Governance and controls</h4>
            <ul className="space-y-2">
              {AI_REMEDIATION_GUARDRAILS.map((item) => (
                <li key={item} className="flex gap-2 text-white/60 text-sm">
                  <span className="text-primary-400 shrink-0" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
