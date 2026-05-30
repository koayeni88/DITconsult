'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GlassmorphismCard from '@/components/common/GlassmorphismCard';
import SectionHeading from '@/components/common/SectionHeading';
import { SERVICES } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';
import {
  ShieldIcon,
  CloudLockIcon,
  ComplianceIcon,
  VulnerabilityIcon,
  IncidentResponseIcon,
  DevSecOpsIcon,
  DataProtectionIcon,
  CISOIcon,
} from '@/components/icons/CybersecurityIcons';

const iconMap: { [key: string]: React.ReactNode } = {
  'cloud-lock': <CloudLockIcon />,
  'vulnerability': <VulnerabilityIcon />,
  'compliance': <ComplianceIcon />,
  'shield': <ShieldIcon />,
  'incident-response': <IncidentResponseIcon />,
  'data-protection': <DataProtectionIcon />,
  'devsecops': <DevSecOpsIcon />,
  'ciso': <CISOIcon />,
};

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Our Services"
            subtitle="Expert Consulting"
            description="Comprehensive cybersecurity solutions tailored to your organization's needs"
            centered
            size="lg"
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="h-full">
              <Link href={service.href} className="block h-full group">
                <GlassmorphismCard
                  icon={
                    <div className="w-12 h-12 text-primary-400 group-hover:text-primary-300 transition-colors">
                      {iconMap[service.icon as string] || <ShieldIcon />}
                    </div>
                  }
                  title={service.title}
                  description={service.shortDescription}
                  size="md"
                  hover
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
