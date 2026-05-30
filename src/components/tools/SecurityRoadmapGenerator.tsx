'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import Button from '@/components/common/Button';

type BusinessType = 'startup' | 'smb' | 'midmarket' | 'enterprise' | 'healthcare' | 'fintech' | 'government';
type CloudEnv = 'aws' | 'azure' | 'gcp' | 'multicloud' | 'hybrid' | 'none';
type ComplianceNeed = 'none' | 'nist' | 'soc2' | 'iso27001' | 'hipaa' | 'pci' | 'cmmc';
type MaturityLevel = 'reactive' | 'developing' | 'managed';

interface RoadmapItem {
  action: string;
  why: string;
  effort: 'Low' | 'Medium' | 'High';
  impact: 'High' | 'Medium' | 'Low';
}

interface Phase {
  label: string;
  timeline: string;
  theme: string;
  color: string;
  border: string;
  bg: string;
  items: RoadmapItem[];
}

function generateRoadmap(
  business: BusinessType,
  cloud: CloudEnv,
  compliance: ComplianceNeed,
  maturity: MaturityLevel,
): Phase[] {
  // ── 30-day items ──────────────────────────────────────────────────────────
  const day30: RoadmapItem[] = [
    { action: 'Enable MFA on all admin and privileged accounts', why: 'Single biggest risk reducer — prevents most credential-based attacks.', effort: 'Low', impact: 'High' },
    { action: 'Conduct asset discovery and create an inventory', why: 'You cannot protect what you cannot see. Start with a complete asset list.', effort: 'Medium', impact: 'High' },
    { action: 'Perform initial security risk assessment', why: 'Establishes baseline and prioritizes where to focus effort and budget.', effort: 'Medium', impact: 'High' },
  ];

  if (cloud !== 'none') {
    day30.push({ action: `Enable ${cloud === 'aws' ? 'AWS Security Hub & GuardDuty' : cloud === 'azure' ? 'Microsoft Defender for Cloud' : cloud === 'gcp' ? 'GCP Security Command Center' : 'cloud security posture management (CSPM)'} in all regions`, why: 'Native cloud security tools provide immediate visibility into misconfigurations and threats.', effort: 'Low', impact: 'High' });
    day30.push({ action: 'Audit and remove unused IAM users, roles, and access keys', why: 'Dormant credentials are a top vector for cloud account compromise.', effort: 'Medium', impact: 'High' });
  }

  if (business === 'healthcare') {
    day30.push({ action: 'Conduct HIPAA Security Rule risk analysis', why: 'Required by law — identifies PHI exposure and establishes your security program baseline.', effort: 'Medium', impact: 'High' });
    day30.push({ action: 'Inventory all systems that touch PHI', why: 'Define your HIPAA scope before addressing individual controls.', effort: 'Low', impact: 'High' });
  }

  if (business === 'fintech' || compliance === 'pci') {
    day30.push({ action: 'Define and document cardholder data environment (CDE) scope', why: 'Scoping is the foundation of PCI DSS compliance — scope creep is the biggest compliance risk.', effort: 'Medium', impact: 'High' });
  }

  if (business === 'government' || compliance === 'cmmc') {
    day30.push({ action: 'Identify all CUI (Controlled Unclassified Information) locations', why: 'CMMC compliance begins with knowing where CUI lives across systems and cloud services.', effort: 'Medium', impact: 'High' });
  }

  day30.push({ action: 'Deploy endpoint protection (EDR/XDR) on all workstations and servers', why: 'Endpoint compromise is the most common initial access vector in breaches.', effort: 'Medium', impact: 'High' });
  day30.push({ action: 'Implement automated backup with offsite/immutable copies', why: 'Ransomware-proof backups are your last line of defense against data loss.', effort: 'Medium', impact: 'High' });

  // ── 60-day items ──────────────────────────────────────────────────────────
  const day60: RoadmapItem[] = [
    { action: 'Launch security awareness training for all employees', why: 'Employees are the primary target — training reduces phishing susceptibility by 70%.', effort: 'Low', impact: 'High' },
    { action: 'Run phishing simulation exercises', why: 'Identify at-risk employees and reinforce training with real-world scenarios.', effort: 'Low', impact: 'Medium' },
    { action: 'Implement vulnerability scanning (internal + external)', why: 'You need a regular cadence of vulnerability data to prioritize remediation work.', effort: 'Medium', impact: 'High' },
    { action: 'Document and implement patch management process', why: 'Unpatched systems are responsible for the majority of successful exploits.', effort: 'Medium', impact: 'High' },
  ];

  if (cloud !== 'none') {
    day60.push({ action: 'Apply CIS benchmark hardening to cloud configurations', why: 'Baseline hardening eliminates the most common misconfigurations found in cloud assessments.', effort: 'Medium', impact: 'High' });
    day60.push({ action: 'Enable cloud logging (CloudTrail, Azure Monitor, GCP Audit Logs)', why: 'Logging is required for compliance and for detecting and investigating incidents.', effort: 'Low', impact: 'High' });
    if (cloud === 'aws' || cloud === 'multicloud' || cloud === 'hybrid') {
      day60.push({ action: 'Implement S3 Block Public Access at account level and audit bucket policies', why: 'Public S3 buckets are among the most common sources of data breach in cloud environments.', effort: 'Low', impact: 'High' });
    }
  }

  if (compliance === 'soc2' || compliance === 'iso27001') {
    day60.push({ action: 'Begin gap assessment against target compliance framework', why: 'Understand exactly where you are vs. where you need to be before starting remediation.', effort: 'High', impact: 'High' });
    day60.push({ action: 'Draft core security policies (access control, acceptable use, incident response)', why: 'Compliance frameworks require documented policies as evidence of a managed security program.', effort: 'Medium', impact: 'High' });
  }

  day60.push({ action: 'Establish security metrics and a basic security reporting process', why: 'Measuring security posture enables data-driven decisions and leadership visibility.', effort: 'Medium', impact: 'Medium' });

  if (maturity === 'reactive') {
    day60.push({ action: 'Implement network segmentation to isolate critical systems', why: 'Segmentation limits lateral movement in the event of a breach.', effort: 'High', impact: 'High' });
  }

  // ── 90-day items ──────────────────────────────────────────────────────────
  const day90: RoadmapItem[] = [
    { action: 'Test and update Incident Response plan (tabletop exercise)', why: 'Plans that are never tested fail in real incidents. Tabletops build muscle memory before a crisis.', effort: 'Medium', impact: 'High' },
    { action: 'Implement centralized logging and SIEM or alerting platform', why: 'Detect threats you cannot see in individual system logs. Required for most compliance frameworks.', effort: 'High', impact: 'High' },
    { action: 'Begin third-party vendor risk assessments', why: 'Supply chain attacks are increasing — vendor risk management closes a major blind spot.', effort: 'Medium', impact: 'Medium' },
  ];

  if (cloud !== 'none') {
    day90.push({ action: 'Implement Infrastructure as Code (IaC) security scanning in CI/CD pipeline', why: 'Shift security left — catch misconfigurations in Terraform/CloudFormation before they reach production.', effort: 'High', impact: 'High' });
    day90.push({ action: 'Enable cloud-native secrets management (Secrets Manager, Key Vault, Secret Manager)', why: 'Hardcoded credentials in code and configs are one of the most common critical findings in cloud assessments.', effort: 'Medium', impact: 'High' });
  }

  if (compliance !== 'none') {
    const frameworkName = compliance === 'soc2' ? 'SOC 2' : compliance === 'iso27001' ? 'ISO 27001' : compliance === 'hipaa' ? 'HIPAA' : compliance === 'pci' ? 'PCI DSS' : compliance === 'cmmc' ? 'CMMC' : compliance === 'nist' ? 'NIST CSF' : '';
    day90.push({ action: `Complete ${frameworkName} gap remediation and begin evidence collection`, why: 'Begin the formal compliance journey with a structured remediation plan and audit evidence.', effort: 'High', impact: 'High' });
    day90.push({ action: 'Engage compliance auditor or assessor for pre-assessment review', why: 'A pre-assessment identifies remaining gaps before the formal audit — avoids costly surprises.', effort: 'Medium', impact: 'High' });
  }

  if (business === 'startup' || business === 'smb') {
    day90.push({ action: 'Implement Zero Trust access model with SSO and passwordless authentication', why: 'Modern access architecture eliminates VPN complexity and greatly reduces credential risk.', effort: 'High', impact: 'High' });
  }

  day90.push({ action: 'Reassess risk posture and generate updated executive security report', why: 'Measure your progress against the baseline established in day 30 and plan the next 90 days.', effort: 'Low', impact: 'High' });

  return [
    {
      label: 'Phase 1',
      timeline: 'Days 1–30',
      theme: 'Foundation & Quick Wins',
      color: '#ef4444',
      border: 'border-red-500/30',
      bg: 'bg-red-500/10',
      items: day30,
    },
    {
      label: 'Phase 2',
      timeline: 'Days 31–60',
      theme: 'Controls & Visibility',
      color: '#f97316',
      border: 'border-orange-500/30',
      bg: 'bg-orange-500/10',
      items: day60,
    },
    {
      label: 'Phase 3',
      timeline: 'Days 61–90',
      theme: 'Maturity & Compliance',
      color: '#22c55e',
      border: 'border-green-500/30',
      bg: 'bg-green-500/10',
      items: day90,
    },
  ];
}

const BUSINESS_OPTIONS: { value: BusinessType; label: string; desc: string }[] = [
  { value: 'startup', label: 'Startup', desc: 'Early-stage, growing fast' },
  { value: 'smb', label: 'Small Business', desc: '< 100 employees' },
  { value: 'midmarket', label: 'Mid-Market', desc: '100–1,000 employees' },
  { value: 'enterprise', label: 'Enterprise', desc: '1,000+ employees' },
  { value: 'healthcare', label: 'Healthcare', desc: 'Hospital, clinic, or digital health' },
  { value: 'fintech', label: 'Fintech / Finance', desc: 'Financial services, payments' },
  { value: 'government', label: 'Gov / DoD Contractor', desc: 'Federal or defense work' },
];

const CLOUD_OPTIONS: { value: CloudEnv; label: string }[] = [
  { value: 'aws', label: 'AWS' },
  { value: 'azure', label: 'Microsoft Azure' },
  { value: 'gcp', label: 'Google Cloud (GCP)' },
  { value: 'multicloud', label: 'Multi-Cloud' },
  { value: 'hybrid', label: 'Hybrid (Cloud + On-Prem)' },
  { value: 'none', label: 'On-Premises Only' },
];

const COMPLIANCE_OPTIONS: { value: ComplianceNeed; label: string }[] = [
  { value: 'none', label: 'None currently required' },
  { value: 'nist', label: 'NIST CSF' },
  { value: 'soc2', label: 'SOC 2' },
  { value: 'iso27001', label: 'ISO 27001' },
  { value: 'hipaa', label: 'HIPAA' },
  { value: 'pci', label: 'PCI DSS' },
  { value: 'cmmc', label: 'CMMC (DoD)' },
];

const MATURITY_OPTIONS: { value: MaturityLevel; label: string; desc: string }[] = [
  { value: 'reactive', label: 'Reactive', desc: 'Security happens after incidents' },
  { value: 'developing', label: 'Developing', desc: 'Some controls, inconsistently applied' },
  { value: 'managed', label: 'Managed', desc: 'Formal program in place' },
];

const effortColors = { Low: 'text-green-400', Medium: 'text-yellow-400', High: 'text-red-400' };
const impactColors = { High: 'text-primary-400', Medium: 'text-white/50', Low: 'text-white/30' };

export default function SecurityRoadmapGenerator() {
  const [step, setStep] = useState(0);
  const [business, setBusiness] = useState<BusinessType | null>(null);
  const [cloud, setCloud] = useState<CloudEnv | null>(null);
  const [compliance, setCompliance] = useState<ComplianceNeed | null>(null);
  const [maturity, setMaturity] = useState<MaturityLevel | null>(null);
  const [generated, setGenerated] = useState(false);
  const [openPhase, setOpenPhase] = useState<number | null>(0);

  const canNext = (s: number) => {
    if (s === 0) return business !== null;
    if (s === 1) return cloud !== null;
    if (s === 2) return compliance !== null;
    if (s === 3) return maturity !== null;
    return true;
  };

  const roadmap = generated && business && cloud && compliance && maturity
    ? generateRoadmap(business, cloud, compliance, maturity)
    : null;

  const totalItems = roadmap ? roadmap.reduce((a, p) => a + p.items.length, 0) : 0;

  const steps = [
    {
      label: 'Business Type',
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {BUSINESS_OPTIONS.map(o => (
            <button key={o.value} onClick={() => setBusiness(o.value)}
              className={`rounded-xl border p-4 text-left transition-all ${business === o.value ? 'border-primary-500 bg-primary-500/20' : 'border-white/10 bg-white/5 hover:border-white/20'}`}>
              <div className="font-semibold text-white text-sm">{o.label}</div>
              <div className="text-white/40 text-xs mt-0.5">{o.desc}</div>
            </button>
          ))}
        </div>
      ),
    },
    {
      label: 'Cloud Environment',
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {CLOUD_OPTIONS.map(o => (
            <button key={o.value} onClick={() => setCloud(o.value)}
              className={`rounded-xl border p-4 text-left transition-all ${cloud === o.value ? 'border-primary-500 bg-primary-500/20' : 'border-white/10 bg-white/5 hover:border-white/20'}`}>
              <div className="font-semibold text-white text-sm">{o.label}</div>
            </button>
          ))}
        </div>
      ),
    },
    {
      label: 'Compliance Requirement',
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {COMPLIANCE_OPTIONS.map(o => (
            <button key={o.value} onClick={() => setCompliance(o.value)}
              className={`rounded-xl border p-4 text-left transition-all ${compliance === o.value ? 'border-primary-500 bg-primary-500/20' : 'border-white/10 bg-white/5 hover:border-white/20'}`}>
              <div className="font-semibold text-white text-sm">{o.label}</div>
            </button>
          ))}
        </div>
      ),
    },
    {
      label: 'Current Maturity Level',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {MATURITY_OPTIONS.map(o => (
            <button key={o.value} onClick={() => setMaturity(o.value)}
              className={`rounded-xl border p-5 text-left transition-all ${maturity === o.value ? 'border-primary-500 bg-primary-500/20' : 'border-white/10 bg-white/5 hover:border-white/20'}`}>
              <div className="font-bold text-white mb-1">{o.label}</div>
              <div className="text-white/40 text-xs">{o.desc}</div>
            </button>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950/40 to-black py-20">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Header */}
        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-primary-400 font-semibold text-xs uppercase tracking-widest mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
            Personalized Plan
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Security Roadmap Generator</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Answer 4 quick questions and receive a personalized 30/60/90-day cybersecurity improvement roadmap.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!generated ? (
            <motion.div key="wizard" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {/* Step indicators */}
              <div className="flex items-center gap-2 justify-center mb-8">
                {steps.map((_s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-all
                      ${i < step ? 'bg-primary-500 border-primary-500 text-white' : i === step ? 'border-primary-500 text-primary-400' : 'border-white/20 text-white/30'}`}>
                      {i < step ? '✓' : i + 1}
                    </div>
                    {i < steps.length - 1 && <div className={`w-8 h-0.5 ${i < step ? 'bg-primary-500' : 'bg-white/20'}`} />}
                  </div>
                ))}
              </div>

              <div className="glass-effect-lg rounded-2xl p-8">
                <h2 className="text-lg font-bold text-white mb-6">
                  Step {step + 1}: What type of organization are you?
                  {step === 1 && ' Which cloud environment do you use?'}
                  {step === 2 && ' Do you have a compliance requirement?'}
                  {step === 3 && ' What is your current security maturity level?'}
                </h2>
                {steps[step].content}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={() => setStep(s => s - 1)}
                    disabled={step === 0}
                    className="text-white/40 hover:text-white disabled:opacity-0 text-sm transition-colors"
                  >
                    ← Back
                  </button>
                  {step < steps.length - 1 ? (
                    <Button onClick={() => setStep(s => s + 1)} disabled={!canNext(step)} variant="primary" className="disabled:opacity-40 disabled:cursor-not-allowed">
                      Next →
                    </Button>
                  ) : (
                    <Button onClick={() => setGenerated(true)} disabled={!canNext(step)} variant="primary" className="disabled:opacity-40 disabled:cursor-not-allowed">
                      Generate My Roadmap →
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div key="roadmap" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              {/* Summary */}
              <div className="glass-effect-lg rounded-xl p-4 mb-6 flex flex-wrap gap-3 items-center">
                <span className="text-white/40 text-xs">Your profile:</span>
                {[BUSINESS_OPTIONS.find(o => o.value === business)?.label, CLOUD_OPTIONS.find(o => o.value === cloud)?.label, COMPLIANCE_OPTIONS.find(o => o.value === compliance)?.label, MATURITY_OPTIONS.find(o => o.value === maturity)?.label].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold border border-primary-500/30 bg-primary-500/10 text-primary-400">{tag}</span>
                ))}
                <span className="ml-auto text-white/40 text-xs">{totalItems} action items</span>
              </div>

              {/* Phases */}
              {roadmap?.map((phase, pi) => (
                <div key={pi} className={`rounded-2xl border ${phase.border} ${openPhase === pi ? phase.bg : 'bg-white/5'} mb-4 overflow-hidden transition-all`}>
                  <button
                    onClick={() => setOpenPhase(openPhase === pi ? null : pi)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center border text-xs font-extrabold" style={{ borderColor: phase.color, color: phase.color, backgroundColor: `${phase.color}20` }}>
                        {phase.label.split(' ')[1]}
                      </div>
                      <div>
                        <p style={{ color: phase.color }} className="font-bold text-sm">{phase.timeline}</p>
                        <p className="text-white font-semibold">{phase.theme}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white/40 text-xs">{phase.items.length} actions</span>
                      <span className="text-white/40 text-sm">{openPhase === pi ? '▲' : '▼'}</span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openPhase === pi && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="px-5 pb-5 border-t border-white/10 pt-4 space-y-4">
                          {phase.items.map((item, ii) => (
                            <div key={ii} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                              <span className="text-primary-400 font-bold text-sm shrink-0">{ii + 1}</span>
                              <div className="flex-1">
                                <p className="text-white font-semibold text-sm mb-1">{item.action}</p>
                                <p className="text-white/55 text-xs mb-2">{item.why}</p>
                                <div className="flex gap-3 text-xs">
                                  <span>Effort: <span className={effortColors[item.effort]}>{item.effort}</span></span>
                                  <span>Impact: <span className={impactColors[item.impact]}>{item.impact}</span></span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* CTAs */}
              <div className="glass-effect-lg rounded-2xl p-8 text-center border border-primary-500/20 mt-6">
                <h3 className="text-2xl font-bold text-white mb-3">Want Expert Help Executing This?</h3>
                <p className="text-white/60 mb-6">DITconsult can help you execute this roadmap with expert guidance, accountability, and measurable results.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asLink href="/contact" variant="primary">Book a Roadmap Review Call</Button>
                  <Button onClick={() => { setGenerated(false); setStep(0); setBusiness(null); setCloud(null); setCompliance(null); setMaturity(null); }} variant="secondary">Start Over</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
