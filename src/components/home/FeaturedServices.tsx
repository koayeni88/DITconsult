'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { FEATURED_SERVICES } from '@/lib/content';
import { containerVariants, itemVariants } from '@/lib/animations';
import {
  ShieldIcon,
  CloudLockIcon,
  ComplianceIcon,
  VulnerabilityIcon,
  IncidentResponseIcon,
  CISOIcon,
} from '@/components/icons/CybersecurityIcons';
import CyberAtmosphere from './CyberAtmosphere';

const iconMap: Record<string, React.ReactNode> = {
  'cloud-lock': <CloudLockIcon />,
  shield: <ShieldIcon />,
  compliance: <ComplianceIcon />,
  vulnerability: <VulnerabilityIcon />,
  'incident-response': <IncidentResponseIcon />,
  ciso: <CISOIcon />,
};

export default function FeaturedServices() {
  return (
    <section className="cyber-section section-padding" aria-labelledby="services-heading">
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom relative z-10">
        <SectionHeading
          id="services-heading"
          title="Core services built around our three strengths"
          subtitle="Security Services"
          description="Multi-cloud security, compliance readiness, and risk-prioritized remediation. Additional services remain available from the full services page."
          centered
          size="lg"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {FEATURED_SERVICES.map((service) => (
            <motion.article key={service.id} variants={itemVariants} className="h-full">
              <Link href={service.href} className="block h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 rounded-2xl">
                <div className="cyber-panel p-7 h-full flex flex-col hover:border-primary-500/40 transition-smooth">
                  <div className="w-11 h-11 text-primary-400 mb-5 drop-shadow-[0_0_12px_rgba(0,102,255,0.45)]" aria-hidden="true">
                    {iconMap[service.icon] ?? <ShieldIcon />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                    {service.title}
                  </h3>
                  <div className="space-y-3 flex-1 text-sm">
                    <div>
                      <p className="text-gold-400/90 text-xs font-semibold uppercase tracking-wide mb-1">Problem</p>
                      <p className="text-white/60 leading-relaxed">{service.problem}</p>
                    </div>
                    <div>
                      <p className="text-primary-400/90 text-xs font-semibold uppercase tracking-wide mb-1">What we do</p>
                      <p className="text-white/60 leading-relaxed">{service.approach}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-1">Deliverable</p>
                      <p className="text-white/70 leading-relaxed">{service.deliverable}</p>
                    </div>
                  </div>
                  <span className="mt-5 text-primary-400 text-sm font-semibold group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button asLink href="/services" variant="secondary" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
