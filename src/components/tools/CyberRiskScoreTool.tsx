'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import Button from '@/components/common/Button';

const QUESTIONS = [
  {
    id: 1,
    category: 'Access Control',
    question: 'How does your organization manage user access and authentication?',
    options: [
      { label: 'No formal process — shared passwords, no MFA', score: 0 },
      { label: 'Basic username/password, some accounts reviewed occasionally', score: 1 },
      { label: 'MFA enforced for most systems, periodic access reviews', score: 2 },
      { label: 'Zero-trust model, MFA everywhere, automated access reviews', score: 3 },
    ],
  },
  {
    id: 2,
    category: 'Patch Management',
    question: 'How quickly does your organization apply security patches?',
    options: [
      { label: 'We patch when we notice issues or never', score: 0 },
      { label: 'Patches applied manually, sometimes weeks/months later', score: 1 },
      { label: 'Scheduled patching cycle (monthly)', score: 2 },
      { label: 'Automated patching within 72 hours of critical releases', score: 3 },
    ],
  },
  {
    id: 3,
    category: 'Incident Response',
    question: 'Does your organization have an incident response plan?',
    options: [
      { label: 'No plan — we would figure it out if something happened', score: 0 },
      { label: 'Informal understanding but nothing documented', score: 1 },
      { label: 'Written plan exists but not regularly tested', score: 2 },
      { label: 'Documented, tested annually, with assigned roles and runbooks', score: 3 },
    ],
  },
  {
    id: 4,
    category: 'Cloud Security',
    question: 'How do you secure your cloud environments (AWS, Azure, GCP)?',
    options: [
      { label: 'We use default cloud settings', score: 0 },
      { label: 'Some basic configurations, no formal review', score: 1 },
      { label: 'Cloud security baseline applied, some monitoring in place', score: 2 },
      { label: 'CSPM tool in use, continuous monitoring, hardened configurations', score: 3 },
    ],
  },
  {
    id: 5,
    category: 'Employee Training',
    question: 'How frequently do employees receive security awareness training?',
    options: [
      { label: 'Never or only at onboarding', score: 0 },
      { label: 'Annual training only', score: 1 },
      { label: 'Quarterly training with phishing simulations', score: 2 },
      { label: 'Continuous training program with role-based content', score: 3 },
    ],
  },
  {
    id: 6,
    category: 'Data Protection',
    question: 'How is sensitive data classified and protected?',
    options: [
      { label: 'No data classification or encryption policy', score: 0 },
      { label: 'Some encryption in transit, no formal classification', score: 1 },
      { label: 'Data classification policy, encryption at rest and in transit', score: 2 },
      { label: 'Full DLP program, classification enforced, regular audits', score: 3 },
    ],
  },
  {
    id: 7,
    category: 'Vulnerability Management',
    question: 'How does your organization identify and address security vulnerabilities?',
    options: [
      { label: 'No scanning — we rely on vendor notifications', score: 0 },
      { label: 'Occasional ad-hoc scans', score: 1 },
      { label: 'Regular vulnerability scans with tracked remediation', score: 2 },
      { label: 'Continuous scanning, risk-prioritized remediation, pen testing', score: 3 },
    ],
  },
  {
    id: 8,
    category: 'Backup & Recovery',
    question: 'How are backups managed and tested?',
    options: [
      { label: 'No backups or untested backups', score: 0 },
      { label: 'Backups taken but never tested', score: 1 },
      { label: 'Regular backups with occasional restore testing', score: 2 },
      { label: 'Automated backups, tested quarterly, offsite/immutable copies', score: 3 },
    ],
  },
  {
    id: 9,
    category: 'Compliance',
    question: 'What is your current compliance posture?',
    options: [
      { label: 'No compliance requirements being addressed', score: 0 },
      { label: 'Aware of requirements but no formal program', score: 1 },
      { label: 'Working toward one or more frameworks (NIST, SOC2, etc.)', score: 2 },
      { label: 'Certified / compliant with one or more frameworks', score: 3 },
    ],
  },
  {
    id: 10,
    category: 'Vendor Risk',
    question: 'How do you manage third-party and vendor security risk?',
    options: [
      { label: 'No vendor risk process', score: 0 },
      { label: 'We ask vendors about security occasionally', score: 1 },
      { label: 'Vendor security questionnaires for key suppliers', score: 2 },
      { label: 'Formal third-party risk program with ongoing monitoring', score: 3 },
    ],
  },
];

const getRiskLevel = (score: number) => {
  const pct = (score / 30) * 100;
  if (pct < 25) return { label: 'Critical Risk', color: '#ef4444', bg: 'from-red-950/60 to-red-900/30', border: 'border-red-500/40', desc: 'Your organization has significant security gaps that expose you to high risk of breach, ransomware, and regulatory penalties. Immediate action is needed.' };
  if (pct < 50) return { label: 'High Risk', color: '#f97316', bg: 'from-orange-950/60 to-orange-900/30', border: 'border-orange-500/40', desc: 'Several foundational controls are missing or inconsistent. You have meaningful exposure that a motivated attacker could exploit.' };
  if (pct < 70) return { label: 'Moderate Risk', color: '#eab308', bg: 'from-yellow-950/60 to-yellow-900/30', border: 'border-yellow-500/40', desc: 'You have some security controls in place but gaps remain. Focused improvements would significantly reduce your exposure.' };
  if (pct < 90) return { label: 'Low Risk', color: '#22c55e', bg: 'from-green-950/60 to-green-900/30', border: 'border-green-500/40', desc: 'Your security posture is solid. Targeted enhancements and continuous improvement will help you reach and maintain an optimized state.' };
  return { label: 'Resilient', color: '#06b6d4', bg: 'from-cyan-950/60 to-cyan-900/30', border: 'border-cyan-500/40', desc: 'Excellent security posture. Focus on continuous improvement, red teaming, and staying ahead of emerging threats.' };
};

const getRecommendations = (answers: number[]) => {
  const recs: string[] = [];
  if (answers[0] < 2) recs.push('Implement MFA across all systems and establish a formal access review process.');
  if (answers[1] < 2) recs.push('Establish a patch management program with defined SLAs for critical patches (≤72h).');
  if (answers[2] < 2) recs.push('Develop and test a formal Incident Response Plan with assigned roles.');
  if (answers[3] < 2) recs.push('Deploy a Cloud Security Posture Management (CSPM) tool and harden cloud configurations.');
  if (answers[4] < 2) recs.push('Launch a quarterly security awareness and phishing simulation program.');
  if (answers[5] < 2) recs.push('Implement a data classification policy with encryption enforced at rest and in transit.');
  if (answers[6] < 2) recs.push('Begin regular vulnerability scanning and establish a risk-prioritized remediation workflow.');
  if (answers[7] < 2) recs.push('Automate backups and test restoration quarterly. Move to immutable or offsite copies.');
  if (answers[8] < 2) recs.push('Engage a compliance consultant to map your environment to NIST CSF or SOC 2.');
  if (answers[9] < 2) recs.push('Build a vendor risk questionnaire and assess your top 10 third-party suppliers.');
  return recs.length ? recs : ['Excellent foundation — focus on red team exercises, threat intelligence, and zero-trust maturity.'];
};

export default function CyberRiskScoreTool() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const risk = getRiskLevel(totalScore);
  const recs = getRecommendations(answers);
  const pct = Math.round((totalScore / 30) * 100);

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    if (current + 1 >= QUESTIONS.length) {
      setAnswers(newAnswers);
      setDone(true);
    } else {
      setAnswers(newAnswers);
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setDone(false);
  };

  const q = QUESTIONS[current];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950/40 to-black py-20">
      <div className="container-custom max-w-3xl mx-auto">
        {/* Header */}
        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-primary-400 font-semibold text-xs uppercase tracking-widest mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
            Free Assessment
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Cyber Risk Score</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Answer 10 questions about your security posture and receive a personalized risk rating with actionable recommendations — no email required.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="glass-effect-lg rounded-2xl p-8 md:p-10"
            >
              {/* Progress */}
              <div className="flex items-center justify-between mb-6 text-sm text-white/50">
                <span className="text-primary-400 font-semibold uppercase tracking-widest text-xs">{q.category}</span>
                <span>{current + 1} / {QUESTIONS.length}</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full mb-8">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full"
                  initial={{ width: `${(current / QUESTIONS.length) * 100}%` }}
                  animate={{ width: `${((current + 1) / QUESTIONS.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white mb-8">{q.question}</h2>

              <div className="space-y-3 mb-8">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(opt.score)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 text-sm font-medium
                      ${selected === opt.score
                        ? 'border-primary-500 bg-primary-500/20 text-white'
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <Button
                onClick={handleNext}
                disabled={selected === null}
                variant="primary"
                size="lg"
                className="w-full disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {current + 1 === QUESTIONS.length ? 'Get My Risk Score' : 'Next Question →'}
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Score card */}
              <div className={`bg-gradient-to-br ${risk.bg} border ${risk.border} rounded-2xl p-8 md:p-10 mb-6`}>
                <div className="text-center mb-8">
                  <p className="text-white/50 text-sm uppercase tracking-widest mb-2">Your Risk Level</p>
                  <h2 className="text-5xl font-extrabold mb-1" style={{ color: risk.color }}>{risk.label}</h2>
                  <p className="text-white/60 text-sm mt-3 max-w-lg mx-auto">{risk.desc}</p>
                </div>

                {/* Gauge */}
                <div className="w-full h-3 bg-white/10 rounded-full mb-2">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, #ef4444 0%, #f97316 33%, #eab308 55%, #22c55e 75%, #06b6d4 100%)` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
                <div className="flex justify-between text-xs text-white/30 mb-2">
                  <span>Critical</span><span>High</span><span>Moderate</span><span>Low</span><span>Resilient</span>
                </div>
                <p className="text-center text-2xl font-bold text-white mt-4">Security Score: {pct}/100</p>
              </div>

              {/* Category breakdown */}
              <div className="glass-effect-lg rounded-2xl p-6 md:p-8 mb-6">
                <h3 className="text-lg font-bold text-white mb-5">Category Breakdown</h3>
                <div className="space-y-3">
                  {QUESTIONS.map((q, i) => {
                    const s = answers[i];
                    const barColor = s === 0 ? '#ef4444' : s === 1 ? '#f97316' : s === 2 ? '#eab308' : '#22c55e';
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-white/60 text-xs w-36 shrink-0">{q.category}</span>
                        <div className="flex-1 h-2 bg-white/10 rounded-full">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: barColor }}
                            initial={{ width: 0 }}
                            animate={{ width: `${(s / 3) * 100}%` }}
                            transition={{ duration: 0.8, delay: i * 0.05 }}
                          />
                        </div>
                        <span className="text-xs text-white/40 w-8 text-right">{s}/3</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recommendations */}
              <div className="glass-effect-lg rounded-2xl p-6 md:p-8 mb-8">
                <h3 className="text-lg font-bold text-white mb-5">Top Recommendations</h3>
                <ul className="space-y-3">
                  {recs.map((rec, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/70">
                      <span className="text-primary-400 font-bold shrink-0 mt-0.5">{i + 1}.</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asLink href="/contact" variant="primary" size="lg" className="flex-1 justify-center">
                  Get a Full Security Assessment
                </Button>
                <Button onClick={handleReset} variant="secondary" size="lg" className="flex-1 justify-center">
                  Retake Assessment
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
