'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

type Category = 'All' | 'Checklists' | 'Templates' | 'Guides' | 'Frameworks';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: Exclude<Category, 'All'>;
  pages: number;
  tags: string[];
  fileName: string;
  preview: string[];
}

const RESOURCES: Resource[] = [
  {
    id: 'cloud-security-checklist',
    title: 'Cloud Security Hardening Checklist',
    description: 'Comprehensive checklist covering AWS, Azure, and GCP security configurations, IAM hardening, logging, and data protection controls.',
    category: 'Checklists',
    pages: 8,
    tags: ['AWS', 'Azure', 'GCP', 'Cloud', 'IAM'],
    fileName: 'DITconsult-Cloud-Security-Checklist.pdf',
    preview: [
      '☐ S3 Block Public Access enabled at account level',
      '☐ Root account MFA enabled and access keys deleted',
      '☐ CloudTrail enabled in all regions with log validation',
      '☐ Security Hub enabled with CIS benchmark standards',
      '☐ VPC Flow Logs enabled for all VPCs',
      '☐ GuardDuty enabled in all regions',
      '☐ KMS encryption used for all sensitive data stores',
      '☐ Azure Security Center Defender plans enabled',
      '+ 40 more controls...',
    ],
  },
  {
    id: 'incident-response-template',
    title: 'Incident Response Plan Template',
    description: 'A battle-tested IR plan template covering preparation, identification, containment, eradication, recovery, and lessons learned phases.',
    category: 'Templates',
    pages: 14,
    tags: ['Incident Response', 'NIST', 'PICERL'],
    fileName: 'DITconsult-Incident-Response-Plan-Template.pdf',
    preview: [
      '1. Executive Summary & Policy Statement',
      '2. IR Team Roles and Responsibilities',
      '3. Incident Classification Levels (P1–P4)',
      '4. Detection & Reporting Procedures',
      '5. Containment Checklists (Ransomware, Data Breach, DDoS)',
      '6. Eradication and Recovery Steps',
      '7. Evidence Preservation Procedures',
      '8. Post-Incident Lessons Learned Template',
    ],
  },
  {
    id: 'ransomware-playbook',
    title: 'Ransomware Response Playbook',
    description: 'Hour-by-hour response guidance for ransomware incidents, including isolation steps, communication templates, and recovery checklists.',
    category: 'Templates',
    pages: 10,
    tags: ['Ransomware', 'Incident Response', 'Recovery'],
    fileName: 'DITconsult-Ransomware-Response-Playbook.pdf',
    preview: [
      '📋 Hour 0–1: Immediate isolation and team activation',
      '📋 Hour 1–4: Scope assessment and evidence collection',
      '📋 Hour 4–24: Containment and stakeholder communication',
      '📋 Day 2–7: Eradication, rebuild, and recovery',
      '📋 Executive communication templates',
      '📋 Law enforcement notification guidance',
      '📋 Cyber insurance claim checklist',
    ],
  },
  {
    id: 'nist-csf-guide',
    title: 'NIST CSF 2.0 Implementation Guide',
    description: 'Practical guide to implementing the NIST Cybersecurity Framework 2.0, including the new Govern function and mapping to common tools.',
    category: 'Guides',
    pages: 18,
    tags: ['NIST CSF', 'Compliance', 'Governance'],
    fileName: 'DITconsult-NIST-CSF-Implementation-Guide.pdf',
    preview: [
      '✦ Understanding the 6 NIST CSF 2.0 Functions (Govern is new)',
      '✦ Creating your Organization Profile',
      '✦ Current vs. Target Profile gap analysis',
      '✦ Prioritizing improvement actions by risk',
      '✦ Mapping NIST CSF to CIS Controls v8',
      '✦ Tool and technology recommendations per category',
      '✦ Board reporting template for CSF metrics',
    ],
  },
  {
    id: 'soc2-readiness-guide',
    title: 'SOC 2 Readiness Guide for SaaS Companies',
    description: 'Step-by-step guide to achieving SOC 2 Type II compliance, covering evidence collection, policy requirements, and audit preparation.',
    category: 'Guides',
    pages: 16,
    tags: ['SOC 2', 'SaaS', 'Compliance', 'Audit'],
    fileName: 'DITconsult-SOC2-Readiness-Guide.pdf',
    preview: [
      '✦ Trust Services Criteria (TSC) explained',
      '✦ Scope definition and system description',
      '✦ Required policies and procedures (with templates)',
      '✦ Evidence collection checklist by TSC',
      '✦ Common audit failures and how to avoid them',
      '✦ Selecting an auditing firm',
      '✦ Timeline: 3–6 month readiness roadmap',
    ],
  },
  {
    id: 'hipaa-security-checklist',
    title: 'HIPAA Security Rule Compliance Checklist',
    description: 'Detailed checklist of HIPAA Security Rule requirements for healthcare organizations and business associates handling PHI.',
    category: 'Checklists',
    pages: 6,
    tags: ['HIPAA', 'Healthcare', 'PHI', 'Compliance'],
    fileName: 'DITconsult-HIPAA-Security-Checklist.pdf',
    preview: [
      '☐ Risk analysis conducted and documented',
      '☐ Risk management plan implemented',
      '☐ Sanction policy for workforce violations',
      '☐ PHI encrypted at rest and in transit',
      '☐ Audit controls enabled for PHI systems',
      '☐ Business Associate Agreements (BAAs) executed',
      '☐ Breach notification procedures documented',
      '+ 30 more controls...',
    ],
  },
  {
    id: 'vendor-risk-questionnaire',
    title: 'Third-Party Vendor Risk Questionnaire',
    description: 'Security questionnaire template for assessing the security posture of vendors and third-party service providers handling your data.',
    category: 'Templates',
    pages: 7,
    tags: ['Vendor Risk', 'Third-Party', 'Supply Chain'],
    fileName: 'DITconsult-Vendor-Risk-Questionnaire.pdf',
    preview: [
      '1. Company and Contact Information',
      '2. Data Handling and Classification',
      '3. Access Control and Authentication',
      '4. Encryption and Data Protection',
      '5. Incident Response Capabilities',
      '6. Compliance Certifications (SOC 2, ISO 27001)',
      '7. Business Continuity and Disaster Recovery',
      '8. Sub-processor and Fourth-Party Disclosure',
    ],
  },
  {
    id: 'kubernetes-security-guide',
    title: 'Kubernetes Security Hardening Guide',
    description: 'Security hardening guide for Kubernetes clusters covering RBAC, pod security, network policies, secrets management, and runtime protection.',
    category: 'Guides',
    pages: 12,
    tags: ['Kubernetes', 'K8s', 'Container Security', 'Cloud'],
    fileName: 'DITconsult-Kubernetes-Security-Guide.pdf',
    preview: [
      '✦ Cluster hardening and API server security',
      '✦ RBAC design principles and least privilege',
      '✦ Pod Security Admission (replacement for PSP)',
      '✦ Network policies for micro-segmentation',
      '✦ Secrets management with Vault or External Secrets',
      '✦ Container image scanning in CI/CD pipelines',
      '✦ Runtime security with Falco',
      '✦ CIS Kubernetes Benchmark mapping',
    ],
  },
  {
    id: 'security-policy-templates',
    title: 'Information Security Policy Bundle',
    description: 'A complete set of foundational security policies ready to customize for your organization — 8 policies covering the most critical areas.',
    category: 'Templates',
    pages: 28,
    tags: ['Policy', 'Governance', 'Compliance', 'NIST', 'SOC 2'],
    fileName: 'DITconsult-Security-Policy-Bundle.pdf',
    preview: [
      '1. Information Security Policy (Master)',
      '2. Acceptable Use Policy',
      '3. Access Control Policy',
      '4. Data Classification and Handling Policy',
      '5. Incident Response Policy',
      '6. Remote Work and BYOD Policy',
      '7. Vendor and Third-Party Risk Policy',
      '8. Business Continuity and Disaster Recovery Policy',
    ],
  },
  {
    id: 'cmmc-readiness-guide',
    title: 'CMMC 2.0 Readiness Guide for DoD Contractors',
    description: 'Practical guide for small and medium DoD contractors preparing for CMMC Level 1 or Level 2 certification requirements.',
    category: 'Frameworks',
    pages: 14,
    tags: ['CMMC', 'DoD', 'CUI', 'Compliance'],
    fileName: 'DITconsult-CMMC-Readiness-Guide.pdf',
    preview: [
      '✦ CMMC 2.0 levels explained (1, 2, 3)',
      '✦ FAR 52.204-21 (Level 1) requirements checklist',
      '✦ NIST SP 800-171 (Level 2) practice mapping',
      '✦ Identifying and protecting Controlled Unclassified Information (CUI)',
      '✦ System Security Plan (SSP) template overview',
      '✦ Plan of Action & Milestones (POA&M) guidance',
      '✦ C3PAO vs. self-assessment decisions',
    ],
  },
  {
    id: 'cis-controls-guide',
    title: 'CIS Controls v8 Quick Start Guide',
    description: 'Practical implementation guide for the CIS Critical Security Controls v8, with prioritized actions for each implementation group (IG1–IG3).',
    category: 'Frameworks',
    pages: 10,
    tags: ['CIS Controls', 'Baseline', 'SMB', 'Enterprise'],
    fileName: 'DITconsult-CIS-Controls-v8-Guide.pdf',
    preview: [
      '✦ IG1 (Basic): 56 safeguards every org must implement',
      '✦ IG2 (Foundational): Security for orgs with IT staff',
      '✦ IG3 (Advanced): For enterprises with mature security',
      '✦ Control 1–5: Asset management and access control',
      '✦ Control 6–12: Data, network, and email protections',
      '✦ Control 13–18: Logging, monitoring, and IR',
      '✦ Mapping to NIST CSF and SOC 2',
    ],
  },
  {
    id: 'pen-test-scope-template',
    title: 'Penetration Test Scoping & Rules of Engagement Template',
    description: 'A professional template for defining the scope, rules of engagement, and authorization for internal or third-party penetration testing engagements.',
    category: 'Templates',
    pages: 5,
    tags: ['Penetration Testing', 'Red Team', 'Scoping'],
    fileName: 'DITconsult-PenTest-Scope-Template.pdf',
    preview: [
      '1. Engagement authorization and signoff page',
      '2. In-scope and out-of-scope systems definition',
      '3. Testing windows and blackout periods',
      '4. Emergency contact procedures',
      '5. Data handling and reporting requirements',
      '6. Authorized testing techniques',
      '7. Liability and indemnification language',
    ],
  },
];

const CATEGORIES: Category[] = ['All', 'Checklists', 'Templates', 'Guides', 'Frameworks'];

const categoryColors: Record<Exclude<Category, 'All'>, string> = {
  Checklists: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  Templates: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
  Guides: 'text-green-400 border-green-500/30 bg-green-500/10',
  Frameworks: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
};

export default function ResourceLibraryPage() {
  const [active, setActive] = useState<Category>('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = active === 'All' ? RESOURCES : RESOURCES.filter(r => r.category === active);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950/40 to-black py-20">
      <div className="container-custom max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-primary-400 font-semibold text-xs uppercase tracking-widest mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
            Free Downloads
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Cybersecurity Resource Library</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Professional-grade checklists, templates, guides, and frameworks — free from DITconsult. No email required to preview; download via the contact form.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {(CATEGORIES.slice(1) as Exclude<Category, 'All'>[]).map(cat => {
            const count = RESOURCES.filter(r => r.category === cat).length;
            const [textClass] = categoryColors[cat].split(' ');
            return (
              <div key={cat} className={`rounded-xl border ${categoryColors[cat]} p-4 text-center`}>
                <div className={`text-2xl font-extrabold ${textClass}`}>{count}</div>
                <div className="text-white/50 text-xs mt-1">{cat}</div>
              </div>
            );
          })}
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all
                ${active === cat
                  ? 'bg-primary-500 border-primary-500 text-white'
                  : 'border-white/20 text-white/60 hover:text-white hover:border-white/40'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resource grid */}
        <div className="space-y-4">
          {filtered.map(resource => {
            const catColor = categoryColors[resource.category];
            const isOpen = expanded === resource.id;
            return (
              <motion.div
                key={resource.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-effect-lg rounded-xl border border-white/10 overflow-hidden"
              >
                <div className="flex items-start gap-4 p-5">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${catColor}`}>
                        {resource.category}
                      </span>
                      <span className="text-white/30 text-xs">{resource.pages} pages</span>
                      <div className="flex gap-1 flex-wrap">
                        {resource.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded text-xs text-white/40 border border-white/10">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-base mb-1">{resource.title}</h3>
                    <p className="text-white/60 text-sm">{resource.description}</p>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <button
                      onClick={() => setExpanded(isOpen ? null : resource.id)}
                      className="px-4 py-2 text-xs font-semibold text-white/60 border border-white/20 rounded-lg hover:border-white/40 hover:text-white transition-all"
                    >
                      {isOpen ? 'Hide Preview' : 'Preview →'}
                    </button>
                    <a
                      href="/contact"
                      className="px-4 py-2 text-xs font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-lg text-center transition-colors"
                    >
                      ↓ Download
                    </a>
                  </div>
                </div>

                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/10 px-5 pb-5 pt-4"
                  >
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Table of Contents / Preview</p>
                    <ul className="space-y-1.5">
                      {resource.preview.map((item, i) => (
                        <li key={i} className="text-sm text-white/65 font-mono">{item}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex gap-3">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        Request Full Download — {resource.fileName}
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 glass-effect-lg rounded-2xl p-8 text-center border border-primary-500/20">
          <h3 className="text-2xl font-bold text-white mb-3">Need Custom Templates or Policies?</h3>
          <p className="text-white/60 mb-6">We create customized security documentation, policies, and procedures tailored to your organization&apos;s specific environment and compliance requirements.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors">
            Request Custom Documentation
          </a>
        </div>
      </div>
    </div>
  );
}
