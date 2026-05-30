'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import Button from '@/components/common/Button';

const LEVELS = [
  {
    level: 1,
    label: 'Reactive',
    color: '#ef4444',
    bg: 'from-red-950/50 to-red-900/20',
    border: 'border-red-500/30',
    icon: '🔴',
    tagline: 'Security happens only after incidents',
    description: 'No formal security program. Responding to breaches rather than preventing them. Little to no documentation, training, or policy enforcement.',
    characteristics: [
      'No documented security policies or procedures',
      'Security addressed only after incidents occur',
      'No asset inventory or risk management process',
      'Limited or no employee security awareness',
      'Basic or no access controls',
      'Backups are inconsistent or untested',
    ],
    nextSteps: [
      'Conduct an immediate security risk assessment',
      'Establish a basic information security policy',
      'Implement MFA on all critical accounts',
      'Create an asset inventory',
      'Deploy antivirus and patch management',
    ],
  },
  {
    level: 2,
    label: 'Developing',
    color: '#f97316',
    bg: 'from-orange-950/50 to-orange-900/20',
    border: 'border-orange-500/30',
    icon: '🟠',
    tagline: 'Some security exists but it\'s inconsistent',
    description: 'Security awareness is growing. Some policies exist but enforcement is inconsistent. Controls are implemented ad hoc without a unified strategy.',
    characteristics: [
      'Basic security policies documented but not fully enforced',
      'Some training provided but not regular or tracked',
      'Patching and access reviews done manually and inconsistently',
      'Incident response plan exists on paper but untested',
      'Compliance considered only when required',
      'Limited visibility into threats and vulnerabilities',
    ],
    nextSteps: [
      'Formalize security policies and get leadership sign-off',
      'Implement regular vulnerability scanning',
      'Launch quarterly security awareness training',
      'Test and update your incident response plan',
      'Begin mapping to a compliance framework (NIST, SOC 2)',
    ],
  },
  {
    level: 3,
    label: 'Managed',
    color: '#eab308',
    bg: 'from-yellow-950/50 to-yellow-900/20',
    border: 'border-yellow-500/30',
    icon: '🟡',
    tagline: 'Security is structured and consistently applied',
    description: 'A formal security program is in place with defined policies, assigned roles, and regular reviews. Controls are consistently applied across most of the organization.',
    characteristics: [
      'Comprehensive, approved security policies in place',
      'Risk assessments conducted annually or more often',
      'Access control, MFA, and patch management enforced',
      'Security monitoring and alerting operational',
      'Incident response plan tested at least annually',
      'One or more compliance frameworks being pursued',
    ],
    nextSteps: [
      'Implement continuous security monitoring (SIEM)',
      'Begin third-party vendor risk assessments',
      'Pursue formal compliance certification (SOC 2, ISO 27001)',
      'Move from annual to continuous vulnerability management',
      'Conduct tabletop exercises for incident response',
    ],
  },
  {
    level: 4,
    label: 'Optimized',
    color: '#22c55e',
    bg: 'from-green-950/50 to-green-900/20',
    border: 'border-green-500/30',
    icon: '🟢',
    tagline: 'Security is proactive, automated, and measured',
    description: 'Security is embedded in all business processes. Metrics drive decisions. Automation reduces manual effort and response times. Compliance is maintained continuously.',
    characteristics: [
      'Security metrics and KPIs tracked and reported to leadership',
      'Threat intelligence integrated into defense posture',
      'Automated vulnerability management and patch deployment',
      'Continuous compliance monitoring via tooling',
      'Red team or penetration testing performed regularly',
      'DevSecOps pipeline with security gates in CI/CD',
    ],
    nextSteps: [
      'Implement zero-trust architecture principles',
      'Expand threat hunting and purple team exercises',
      'Integrate security into product development lifecycle',
      'Automate compliance evidence collection',
      'Build a security champions program across teams',
    ],
  },
  {
    level: 5,
    label: 'Resilient',
    color: '#06b6d4',
    bg: 'from-cyan-950/50 to-cyan-900/20',
    border: 'border-cyan-500/30',
    icon: '🔵',
    tagline: 'Security is a competitive differentiator',
    description: 'Security is fully embedded in culture, strategy, and operations. The organization anticipates threats, adapts continuously, and uses security as a trust signal to customers and partners.',
    characteristics: [
      'Zero-trust architecture fully implemented',
      'Security culture embedded at every level of the organization',
      'Advanced threat intelligence and proactive threat hunting',
      'Full supply chain and third-party risk management program',
      'Regular red team vs. blue team adversarial simulations',
      'Security leadership participates in board-level decisions',
    ],
    nextSteps: [
      'Focus on continuous improvement and threat simulation',
      'Contribute to industry threat intelligence sharing communities',
      'Pursue advanced certifications and board-level security governance',
      'Implement AI/ML-powered anomaly detection',
      'Share security posture publicly via trust center',
    ],
  },
];

const QUIZ_QUESTIONS = [
  {
    question: 'How would you describe your organization\'s security policy documentation?',
    options: [
      { label: 'No policies exist', value: 1 },
      { label: 'Some policies but inconsistently followed', value: 2 },
      { label: 'Formal policies exist and are enforced', value: 3 },
      { label: 'Policies are automated and continuously updated', value: 4 },
      { label: 'Security is embedded in all business processes', value: 5 },
    ],
  },
  {
    question: 'How is incident response handled in your organization?',
    options: [
      { label: 'We figure it out when it happens', value: 1 },
      { label: 'We have an informal plan', value: 2 },
      { label: 'Documented plan, tested annually', value: 3 },
      { label: 'Automated playbooks and regular tabletop exercises', value: 4 },
      { label: 'Continuous simulation and adversarial testing', value: 5 },
    ],
  },
  {
    question: 'What describes your vulnerability management approach?',
    options: [
      { label: 'No scanning — we patch when notified', value: 1 },
      { label: 'Occasional manual scans', value: 2 },
      { label: 'Scheduled scans with tracked remediation', value: 3 },
      { label: 'Continuous scanning with risk-prioritized automation', value: 4 },
      { label: 'Continuous scanning + red team + threat hunting', value: 5 },
    ],
  },
  {
    question: 'How are security metrics reported to leadership?',
    options: [
      { label: 'Not reported', value: 1 },
      { label: 'Ad hoc after incidents', value: 2 },
      { label: 'Quarterly reports to IT or security leadership', value: 3 },
      { label: 'Monthly dashboards with KPIs to exec team', value: 4 },
      { label: 'Real-time dashboards, board-level security reporting', value: 5 },
    ],
  },
  {
    question: 'How is security embedded in software development?',
    options: [
      { label: 'Not considered during development', value: 1 },
      { label: 'Security reviews done manually post-development', value: 2 },
      { label: 'Security testing included before release', value: 3 },
      { label: 'DevSecOps pipeline with automated security gates', value: 4 },
      { label: 'Full SSDLC with threat modeling and security champions', value: 5 },
    ],
  },
];

export default function SecurityMaturityModel() {
  const [mode, setMode] = useState<'overview' | 'quiz'>('overview');
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [result, setResult] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const handleAnswer = (val: number) => {
    const newAnswers = [...quizAnswers, val];
    if (currentQ + 1 >= QUIZ_QUESTIONS.length) {
      const avg = Math.round(newAnswers.reduce((a, b) => a + b, 0) / newAnswers.length);
      setResult(avg);
      setQuizAnswers(newAnswers);
    } else {
      setQuizAnswers(newAnswers);
      setCurrentQ(currentQ + 1);
    }
  };

  const resetQuiz = () => {
    setQuizAnswers([]);
    setCurrentQ(0);
    setResult(null);
    setMode('overview');
  };

  const displayLevel = selectedLevel !== null ? LEVELS[selectedLevel - 1] : result !== null ? LEVELS[result - 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950/40 to-black py-20">
      <div className="container-custom max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-primary-400 font-semibold text-xs uppercase tracking-widest mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
            Self-Assessment
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Security Maturity Model</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Identify where your organization falls on the maturity spectrum — from Reactive to Resilient — and see a tailored improvement path.
          </p>
          <div className="flex gap-3 justify-center mt-6">
            <button onClick={() => { setMode('overview'); setResult(null); }} className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${mode === 'overview' ? 'bg-primary-500 border-primary-500 text-white' : 'border-white/20 text-white/60 hover:text-white'}`}>
              Explore Levels
            </button>
            <button onClick={() => { setMode('quiz'); setQuizAnswers([]); setCurrentQ(0); setResult(null); }} className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${mode === 'quiz' ? 'bg-primary-500 border-primary-500 text-white' : 'border-white/20 text-white/60 hover:text-white'}`}>
              Take the Quiz
            </button>
          </div>
        </motion.div>

        {/* Maturity Scale */}
        <div className="flex items-center justify-center gap-0 mb-10 overflow-x-auto pb-2">
          {LEVELS.map((l, i) => (
            <div key={l.level} className="flex items-center">
              <button
                onClick={() => { setSelectedLevel(selectedLevel === l.level ? null : l.level); setMode('overview'); }}
                className={`flex flex-col items-center px-4 py-3 rounded-xl border transition-all min-w-[100px]
                  ${(selectedLevel === l.level || (result === l.level && mode !== 'quiz'))
                    ? `bg-gradient-to-b ${l.bg} ${l.border}`
                    : 'border-white/10 hover:border-white/30'
                  }`}
              >
                <span className="text-2xl mb-1">{l.icon}</span>
                <span className="text-xs font-bold text-white">{l.label}</span>
                <span className="text-[10px] text-white/40">Level {l.level}</span>
              </button>
              {i < LEVELS.length - 1 && <div className="w-4 h-0.5 bg-white/20" />}
            </div>
          ))}
        </div>

        {/* Overview mode: selected level detail */}
        {mode === 'overview' && displayLevel && (
          <motion.div
            key={displayLevel.level}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-gradient-to-br ${displayLevel.bg} border ${displayLevel.border} rounded-2xl p-8 mb-8`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{displayLevel.icon}</span>
              <div>
                <h2 className="text-2xl font-extrabold text-white">Level {displayLevel.level}: {displayLevel.label}</h2>
                <p className="text-white/60 text-sm italic">"{displayLevel.tagline}"</p>
              </div>
            </div>
            <p className="text-white/75 mb-6">{displayLevel.description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-3">Key Characteristics</h3>
                <ul className="space-y-2">
                  {displayLevel.characteristics.map((c, i) => (
                    <li key={i} className="flex gap-2 text-sm text-white/65">
                      <span style={{ color: displayLevel.color }} className="shrink-0 mt-0.5">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-3">
                  {displayLevel.level < 5 ? 'Next Steps to Advance' : 'Ongoing Excellence'}
                </h3>
                <ul className="space-y-2">
                  {displayLevel.nextSteps.map((s, i) => (
                    <li key={i} className="flex gap-2 text-sm text-white/65">
                      <span className="text-primary-400 shrink-0 mt-0.5 font-bold">{i + 1}.</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <Button asLink href="/contact" variant="primary">Get Help Advancing Your Maturity</Button>
            </div>
          </motion.div>
        )}

        {mode === 'overview' && !displayLevel && (
          <div className="text-center text-white/40 py-8">Click a maturity level above to explore its characteristics and next steps.</div>
        )}

        {/* Quiz mode */}
        {mode === 'quiz' && result === null && (
          <motion.div key={currentQ} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="glass-effect-lg rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-primary-400 text-xs font-bold uppercase tracking-widest">Question {currentQ + 1}/{QUIZ_QUESTIONS.length}</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full mb-8">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full"
                animate={{ width: `${((currentQ + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-6">{QUIZ_QUESTIONS[currentQ].question}</h2>
            <div className="space-y-3">
              {QUIZ_QUESTIONS[currentQ].options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(opt.value)}
                  className="w-full text-left px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white/70 hover:border-primary-500/50 hover:bg-primary-500/10 hover:text-white transition-all text-sm">
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {mode === 'quiz' && result !== null && (
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className={`bg-gradient-to-br ${LEVELS[result - 1].bg} border ${LEVELS[result - 1].border} rounded-2xl p-8`}>
            <div className="text-center mb-8">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Your Security Maturity Level</p>
              <span className="text-6xl">{LEVELS[result - 1].icon}</span>
              <h2 className="text-3xl font-extrabold text-white mt-3">Level {result}: {LEVELS[result - 1].label}</h2>
              <p className="text-white/60 italic mt-1">"{LEVELS[result - 1].tagline}"</p>
            </div>
            <p className="text-white/75 mb-6">{LEVELS[result - 1].description}</p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-3">Where You Are</h3>
                <ul className="space-y-2">
                  {LEVELS[result - 1].characteristics.map((c, i) => (
                    <li key={i} className="flex gap-2 text-sm text-white/65">
                      <span style={{ color: LEVELS[result - 1].color }} className="shrink-0 mt-0.5">•</span>{c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-3">Your Next Steps</h3>
                <ul className="space-y-2">
                  {LEVELS[result - 1].nextSteps.map((s, i) => (
                    <li key={i} className="flex gap-2 text-sm text-white/65">
                      <span className="text-primary-400 shrink-0 mt-0.5 font-bold">{i + 1}.</span>{s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asLink href="/contact" variant="primary" className="flex-1 justify-center">Get a Maturity Improvement Plan</Button>
              <Button onClick={resetQuiz} variant="secondary" className="flex-1 justify-center">Retake Quiz</Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
