'use client';

import Link from 'next/link';
import SectionHeading from '@/components/common/SectionHeading';
import { DIVISIONS, HOMEPAGE_DIVISION_INTRO } from '@/lib/divisions';
import {
  ShieldIcon,
  DevSecOpsIcon,
  DataProtectionIcon,
  ComplianceIcon,
} from '@/components/icons/CybersecurityIcons';
import CyberAtmosphere from './CyberAtmosphere';

const iconMap = {
  shield: <ShieldIcon />,
  transform: <DevSecOpsIcon />,
  training: <DataProtectionIcon />,
  education: <ComplianceIcon />,
};

export default function DivisionCards() {
  return (
    <section className="cyber-section section-padding" aria-labelledby="divisions-heading">
      <CyberAtmosphere variant="subtle" />
      <div className="container-custom relative z-10">
        <SectionHeading
          id="divisions-heading"
          title={HOMEPAGE_DIVISION_INTRO.title}
          subtitle="Four business divisions"
          description={HOMEPAGE_DIVISION_INTRO.description}
          centered
          size="lg"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {DIVISIONS.map((division) => (
            <article key={division.id} className="cyber-panel p-7 md:p-8 h-full flex flex-col">
              <div className="w-11 h-11 text-primary-400 mb-5" aria-hidden="true">
                {iconMap[division.icon]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{division.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{division.homepageDescription}</p>
              <ul className="space-y-2 flex-1 mb-6">
                {division.homepageCapabilities.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-white/70">
                    <span className="text-primary-400 shrink-0" aria-hidden="true">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={division.href}
                className="text-primary-400 text-sm font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
              >
                {division.homepageCta} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
