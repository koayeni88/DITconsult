'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import Button from '@/components/common/Button';

type Framework = 'NIST CSF' | 'SOC 2' | 'ISO 27001' | 'HIPAA' | 'PCI DSS' | 'CMMC';

interface Domain {
  name: string;
  questions: { q: string; weight: number }[];
}

const FRAMEWORKS: Record<Framework, { color: string; bg: string; border: string; desc: string; domains: Domain[] }> = {
  'NIST CSF': {
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    desc: 'NIST Cybersecurity Framework — the gold standard for risk-based cybersecurity governance.',
    domains: [
      { name: 'Identify', questions: [
        { q: 'Asset inventory is maintained and up to date', weight: 1 },
        { q: 'Risk assessments are conducted regularly', weight: 1.5 },
        { q: 'Supply chain risks are identified and managed', weight: 1 },
      ]},
      { name: 'Protect', questions: [
        { q: 'Access control policies are defined and enforced (MFA, least privilege)', weight: 1.5 },
        { q: 'Data is classified and encrypted at rest and in transit', weight: 1.5 },
        { q: 'Security awareness training is conducted regularly', weight: 1 },
      ]},
      { name: 'Detect', questions: [
        { q: 'Security monitoring and SIEM/alerting are in place', weight: 1.5 },
        { q: 'Anomaly detection and vulnerability scanning are operational', weight: 1 },
      ]},
      { name: 'Respond', questions: [
        { q: 'An incident response plan exists and has been tested', weight: 2 },
        { q: 'Communication plans for security incidents are documented', weight: 1 },
      ]},
      { name: 'Recover', questions: [
        { q: 'Backup and recovery procedures are defined and tested', weight: 1.5 },
        { q: 'Lessons learned process exists post-incident', weight: 1 },
      ]},
    ],
  },
  'SOC 2': {
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    desc: 'SOC 2 Type II — required by most enterprise customers for SaaS and service providers.',
    domains: [
      { name: 'Security (CC)', questions: [
        { q: 'Logical and physical access controls are implemented', weight: 2 },
        { q: 'Change management procedures are in place', weight: 1.5 },
        { q: 'Risk assessment process exists and is documented', weight: 1.5 },
      ]},
      { name: 'Availability', questions: [
        { q: 'System availability is monitored with defined SLAs', weight: 1.5 },
        { q: 'Disaster recovery plan is documented and tested', weight: 2 },
      ]},
      { name: 'Confidentiality', questions: [
        { q: 'Confidential data is identified, classified, and protected', weight: 2 },
        { q: 'NDA/confidentiality agreements are in place with staff and vendors', weight: 1 },
      ]},
      { name: 'Processing Integrity', questions: [
        { q: 'System processing is complete, accurate, and authorized', weight: 1.5 },
      ]},
      { name: 'Privacy', questions: [
        { q: 'Privacy policy is published and personal data is handled per policy', weight: 1.5 },
        { q: 'Data retention and disposal procedures are documented', weight: 1 },
      ]},
    ],
  },
  'ISO 27001': {
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    desc: 'ISO/IEC 27001 — internationally recognized information security management system standard.',
    domains: [
      { name: 'Context & Leadership', questions: [
        { q: 'Information security policy is defined and approved by leadership', weight: 1.5 },
        { q: 'Roles and responsibilities for ISMS are assigned', weight: 1 },
      ]},
      { name: 'Risk Management', questions: [
        { q: 'Risk assessment and treatment methodology is documented', weight: 2 },
        { q: 'Statement of Applicability (SoA) exists', weight: 2 },
      ]},
      { name: 'Controls Implementation', questions: [
        { q: 'Annex A controls have been evaluated for applicability', weight: 2 },
        { q: 'Access control, cryptography, and asset management controls are active', weight: 1.5 },
        { q: 'Supplier relationships are managed with security requirements', weight: 1 },
      ]},
      { name: 'Monitoring & Improvement', questions: [
        { q: 'Internal audits of the ISMS are conducted', weight: 1.5 },
        { q: 'Management reviews of the ISMS occur regularly', weight: 1 },
        { q: 'Nonconformities and corrective actions are tracked', weight: 1 },
      ]},
    ],
  },
  'HIPAA': {
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    desc: 'HIPAA Security Rule — required for healthcare organizations handling Protected Health Information (PHI).',
    domains: [
      { name: 'Administrative Safeguards', questions: [
        { q: 'Security risk analysis has been conducted and documented', weight: 2 },
        { q: 'Security training is provided to all workforce members', weight: 1.5 },
        { q: 'Access controls and workforce clearance procedures are in place', weight: 1.5 },
      ]},
      { name: 'Physical Safeguards', questions: [
        { q: 'Facility access controls restrict unauthorized access to PHI systems', weight: 1.5 },
        { q: 'Workstation use and device policies are in place', weight: 1 },
      ]},
      { name: 'Technical Safeguards', questions: [
        { q: 'PHI is encrypted in transit and at rest', weight: 2 },
        { q: 'Audit controls log access to systems containing PHI', weight: 2 },
        { q: 'Automatic logoff is enforced on systems with PHI', weight: 1 },
      ]},
      { name: 'Breach Notification', questions: [
        { q: 'Breach notification procedures are documented and understood', weight: 1.5 },
        { q: 'Business Associate Agreements (BAAs) are in place with all vendors handling PHI', weight: 2 },
      ]},
    ],
  },
  'PCI DSS': {
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    desc: 'PCI DSS v4.0 — required for organizations that process, store, or transmit cardholder data.',
    domains: [
      { name: 'Network Security', questions: [
        { q: 'Cardholder data environment (CDE) is segmented from other networks', weight: 2 },
        { q: 'Firewalls and network security controls are configured and documented', weight: 2 },
      ]},
      { name: 'Data Protection', questions: [
        { q: 'Primary Account Numbers (PANs) are masked or tokenized in storage', weight: 2 },
        { q: 'Cardholder data is encrypted in transit using strong cryptography', weight: 2 },
      ]},
      { name: 'Access Control', questions: [
        { q: 'Access to cardholder data is restricted to business need-to-know', weight: 2 },
        { q: 'MFA is required for all access to the CDE', weight: 2 },
      ]},
      { name: 'Monitoring & Testing', questions: [
        { q: 'Logging and monitoring systems track all access to CDE', weight: 1.5 },
        { q: 'Penetration testing is performed at least annually', weight: 1.5 },
        { q: 'Vulnerability scanning is performed quarterly', weight: 1 },
      ]},
    ],
  },
  'CMMC': {
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    desc: 'CMMC 2.0 — required for Department of Defense (DoD) contractors handling CUI.',
    domains: [
      { name: 'Access Control (AC)', questions: [
        { q: 'System access is limited to authorized users and processes', weight: 2 },
        { q: 'Remote access is controlled and monitored', weight: 1.5 },
        { q: 'Wireless access is managed with authentication', weight: 1 },
      ]},
      { name: 'Configuration Management (CM)', questions: [
        { q: 'Baseline configurations are established and maintained', weight: 1.5 },
        { q: 'Unauthorized software is prevented from executing (application whitelisting)', weight: 2 },
      ]},
      { name: 'Incident Response (IR)', questions: [
        { q: 'Incident response capability is established and tested', weight: 2 },
        { q: 'Incidents are tracked, documented, and reported to authorities as required', weight: 1.5 },
      ]},
      { name: 'System & Info Integrity (SI)', questions: [
        { q: 'Malware protection is deployed and updated across all systems', weight: 2 },
        { q: 'Security alerts are monitored and acted upon', weight: 1.5 },
        { q: 'CUI is protected from unauthorized disclosure', weight: 2 },
      ]},
    ],
  },
};

const READINESS_LEVELS = [
  { min: 0, max: 20, label: 'Not Ready', color: '#ef4444', desc: 'Significant gaps. Compliance is not achievable without major investment.' },
  { min: 20, max: 40, label: 'Early Stage', color: '#f97316', desc: 'Foundation is weak. Key controls and documentation are missing.' },
  { min: 40, max: 60, label: 'Developing', color: '#eab308', desc: 'Some controls exist but important gaps remain. 6-12 months of focused effort needed.' },
  { min: 60, max: 80, label: 'Nearly Ready', color: '#22c55e', desc: 'Good baseline with a few gaps. Targeted remediation can close the gap.' },
  { min: 80, max: 101, label: 'Audit Ready', color: '#06b6d4', desc: 'Strong posture. You are likely ready for a formal assessment or audit.' },
];

export default function ComplianceCalculator() {
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const fw = selectedFramework ? FRAMEWORKS[selectedFramework] : null;
  const allQuestions = fw ? fw.domains.flatMap(d => d.questions.map((q, qi) => ({ ...q, key: `${d.name}-${qi}` }))) : [];
  const answered = Object.keys(answers).length;
  const totalQ = allQuestions.length;

  const getScore = () => {
    if (!fw) return 0;
    let earned = 0;
    let possible = 0;
    fw.domains.forEach(d => {
      d.questions.forEach((q, qi) => {
        const key = `${d.name}-${qi}`;
        possible += q.weight * 4;
        earned += (answers[key] ?? 0) * q.weight;
      });
    });
    return possible > 0 ? Math.round((earned / possible) * 100) : 0;
  };

  const getDomainScore = (domain: Domain) => {
    let earned = 0, possible = 0;
    domain.questions.forEach((q, qi) => {
      const key = `${domain.name}-${qi}`;
      possible += q.weight * 4;
      earned += (answers[key] ?? 0) * q.weight;
    });
    return possible > 0 ? Math.round((earned / possible) * 100) : 0;
  };

  const score = getScore();
  const readiness = READINESS_LEVELS.find(r => score >= r.min && score < r.max) || READINESS_LEVELS[READINESS_LEVELS.length - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950/40 to-black py-20">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Header */}
        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-primary-400 font-semibold text-xs uppercase tracking-widest mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
            Free Tool
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Compliance Readiness Calculator</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Select a framework, rate your current controls, and see your readiness score with a domain-by-domain breakdown.
          </p>
        </motion.div>

        {/* Framework selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {(Object.keys(FRAMEWORKS) as Framework[]).map(fw => {
            const cfg = FRAMEWORKS[fw];
            const active = selectedFramework === fw;
            return (
              <button
                key={fw}
                onClick={() => { setSelectedFramework(fw); setAnswers({}); setSubmitted(false); }}
                className={`rounded-xl border p-4 text-left transition-all ${active ? `${cfg.bg} ${cfg.border}` : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'}`}
              >
                <div className={`font-bold text-sm mb-1 ${active ? cfg.color : 'text-white'}`}>{fw}</div>
                <div className="text-white/50 text-xs leading-snug line-clamp-2">{cfg.desc}</div>
              </button>
            );
          })}
        </div>

        {/* Questions */}
        <AnimatePresence mode="wait">
          {fw && !submitted && (
            <motion.div key={selectedFramework} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              {fw.domains.map(domain => (
                <div key={domain.name} className="glass-effect-lg rounded-2xl p-6 mb-4">
                  <h3 className={`font-bold text-base mb-4 ${fw.color}`}>{domain.name}</h3>
                  <div className="space-y-5">
                    {domain.questions.map((q, qi) => {
                      const key = `${domain.name}-${qi}`;
                      const val = answers[key];
                      return (
                        <div key={qi}>
                          <p className="text-white/80 text-sm mb-2">{q.q}</p>
                          <div className="flex gap-2 flex-wrap">
                            {[
                              { score: 0, label: 'Not implemented' },
                              { score: 1, label: 'Partially' },
                              { score: 2, label: 'Mostly' },
                              { score: 3, label: 'Largely' },
                              { score: 4, label: 'Fully' },
                            ].map(opt => (
                              <button
                                key={opt.score}
                                onClick={() => setAnswers(prev => ({ ...prev, [key]: opt.score }))}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all
                                  ${val === opt.score
                                    ? `${fw.bg} ${fw.border} ${fw.color}`
                                    : 'border-white/10 text-white/50 hover:text-white hover:border-white/30'
                                  }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between mt-4 glass-effect-lg rounded-xl p-4">
                <span className="text-white/50 text-sm">{answered}/{totalQ} questions answered</span>
                <Button
                  onClick={() => setSubmitted(true)}
                  variant="primary"
                  disabled={answered < totalQ}
                  className="disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Calculate Readiness Score →
                </Button>
              </div>
            </motion.div>
          )}

          {submitted && fw && (
            <motion.div key="results" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
              {/* Score header */}
              <div className={`rounded-2xl border ${fw.border} ${fw.bg} p-8 text-center mb-6`}>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-2">{selectedFramework} Readiness Score</p>
                <div className="text-6xl font-extrabold mb-1" style={{ color: readiness.color }}>{score}%</div>
                <div className="text-xl font-bold mb-2" style={{ color: readiness.color }}>{readiness.label}</div>
                <p className="text-white/60 text-sm max-w-lg mx-auto">{readiness.desc}</p>
                <div className="w-full h-3 bg-white/10 rounded-full mt-6">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: readiness.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${score}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Domain breakdown */}
              <div className="glass-effect-lg rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-5">Domain Breakdown</h3>
                <div className="space-y-4">
                  {fw.domains.map(domain => {
                    const ds = getDomainScore(domain);
                    const color = ds < 40 ? '#ef4444' : ds < 60 ? '#f97316' : ds < 80 ? '#eab308' : '#22c55e';
                    return (
                      <div key={domain.name}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white/70 text-sm">{domain.name}</span>
                          <span className="text-xs font-bold" style={{ color }}>{ds}%</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${ds}%` }}
                            transition={{ duration: 0.8 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTAs */}
              <div className="glass-effect-lg rounded-2xl p-6 border border-primary-500/20 text-center mb-6">
                <h3 className="text-lg font-bold text-white mb-2">Ready to close the gaps?</h3>
                <p className="text-white/60 text-sm mb-5">DITconsult provides gap assessments, remediation roadmaps, and audit support for all major frameworks.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asLink href="/contact" variant="primary">Schedule a Compliance Consultation</Button>
                  <Button onClick={() => { setAnswers({}); setSubmitted(false); }} variant="secondary">Try Another Framework</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
