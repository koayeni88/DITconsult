'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import CTASection from '@/components/home/CTASection';

const expertise = [
  { icon: '☁️', label: 'Cloud Security', desc: 'AWS, Azure, GCP architecture review and hardening' },
  { icon: '📋', label: 'Compliance', desc: 'CMMC, SOC 2, HIPAA, ISO 27001, NIST CSF' },
  { icon: '🛡️', label: 'Risk Management', desc: 'Enterprise risk assessments and security strategy' },
  { icon: '🔍', label: 'Threat Detection', desc: 'SIEM, EDR, cloud-native detection engineering' },
  { icon: '🏗️', label: 'DevSecOps', desc: 'Security pipeline integration, IaC scanning' },
  { icon: '🎯', label: 'Incident Response', desc: 'Containment, forensics, and recovery planning' },
];

const credentials = [
  { name: 'AWS Certified Security – Specialty', org: 'Amazon Web Services' },
  { name: 'Certified Information Systems Security Professional (CISSP)', org: 'ISC²' },
  { name: 'Certified Cloud Security Professional (CCSP)', org: 'ISC²' },
  { name: 'CompTIA Security+', org: 'CompTIA' },
];

const timeline = [
  {
    year: '2024–Present',
    role: 'Founder & Principal Consultant',
    org: 'DITconsult',
    desc: 'Founded DITconsult to bring enterprise-grade cybersecurity expertise to mid-market companies, government contractors, and cloud-native teams — without the overhead of a Big 4 engagement.',
  },
  {
    year: '2020–2024',
    role: 'Senior Cybersecurity Engineer',
    org: 'Enterprise Technology',
    desc: 'Led cloud security architecture and compliance programs for large enterprise clients, delivering CMMC readiness, SOC 2 certification support, and AWS/Azure hardening across complex environments.',
  },
  {
    year: '2018–2020',
    role: 'Security Analyst & Consultant',
    org: 'Cybersecurity Practice',
    desc: 'Performed vulnerability assessments, penetration tests, and compliance gap analyses for financial services, healthcare, and federal contractor clients.',
  },
  {
    year: '2016–2018',
    role: 'IT & Security Instructor',
    org: 'Technical Education',
    desc: 'Taught cybersecurity fundamentals, network security, and cloud computing — developing a passion for translating complex security concepts into practical, actionable guidance.',
  },
];

const values = [
  {
    icon: '🎯',
    title: 'No Fluff, Just Results',
    desc: "Security advice that actually gets implemented. I deliver actionable recommendations — not 200-page reports that sit in a drawer.",
  },
  {
    icon: '🤝',
    title: 'Trusted Advisor, Not Vendor',
    desc: "I work for your organization's best interests, not to sell tools or services you don't need. My success is your improved security posture.",
  },
  {
    icon: '📣',
    title: 'Plain-Language Communication',
    desc: "Security shouldn't require a decoder ring. I explain risk in business terms that resonate with executives, engineers, and everyone in between.",
  },
  {
    icon: '⚡',
    title: 'Speed Without Shortcuts',
    desc: "Rapid assessment and delivery without compromising depth. Mid-market companies need results in weeks, not quarters.",
  },
];

export default function FounderPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] bg-gradient-to-b from-black via-slate-900/30 to-black flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 glass-effect-lg border border-primary-500/30 rounded-full px-4 py-2 text-sm text-primary-400 font-medium mb-6">
                <span>👤</span> Founder & Principal Consultant
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                David Idowu
                <span className="block gradient-text">Threat Hunter.</span>
                <span className="block text-white/80 text-4xl">Cloud Architect. Trusted Advisor.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-white/60 leading-relaxed mb-8 max-w-xl">
                I founded DITconsult to give growing organizations access to the same caliber of cybersecurity expertise that Fortune 500 companies rely on — delivered with the responsiveness and personal attention of a dedicated partner.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold transition-colors shadow-neon"
                >
                  Book a Consultation
                </Link>
                <a
                  href="https://linkedin.com/in/david-idowu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass-effect border border-white/10 text-white rounded-xl font-semibold hover:border-primary-500/40 transition-colors"
                >
                  LinkedIn Profile ↗
                </a>
              </motion.div>
            </motion.div>

            {/* Avatar / Profile card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Outer ring */}
                <div className="absolute -inset-4 rounded-full border border-primary-500/20 animate-pulse" />
                <div className="absolute -inset-8 rounded-full border border-primary-500/10" />
                {/* Avatar circle */}
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-primary-500/20 to-cyan-500/10 border-2 border-primary-500/40 flex items-center justify-center overflow-hidden shadow-neon">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-white/90 mb-1">DI</div>
                    <div className="text-xs text-primary-400 font-semibold tracking-widest uppercase">CISSP · CCSP</div>
                  </div>
                </div>
                {/* Floating credential badges */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -right-6 glass-effect-lg border border-green-500/30 rounded-xl px-3 py-1.5 text-xs font-bold text-green-400"
                >
                  AWS Security Specialty
                </motion.div>
                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-3 -left-8 glass-effect-lg border border-cyan-500/30 rounded-xl px-3 py-1.5 text-xs font-bold text-cyan-400"
                >
                  CMMC Practitioner
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-12 bg-black border-y border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '8+', label: 'Years in Cybersecurity' },
              { value: '50+', label: 'Clients Served' },
              { value: '6', label: 'Compliance Frameworks' },
              { value: '100%', label: 'Client Confidentiality' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="section-padding bg-black">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white">
              Why I Started <span className="gradient-text">DITconsult</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-5 text-white/65 leading-relaxed text-lg">
              <p>
                After years of working inside enterprise security teams and consulting for large organizations, I kept seeing the same pattern: small and mid-sized companies were being left behind. They faced the same threats as Fortune 500 enterprises but couldn't afford dedicated security staff or six-figure consulting engagements.
              </p>
              <p>
                I started my career in IT education, teaching network security and cloud computing. That experience taught me something critical — most people aren't confused about security because it's impossible to understand. They're confused because the security industry loves jargon, complexity, and scare tactics.
              </p>
              <p>
                So I built DITconsult around a different model: senior-level expertise, delivered directly — no junior consultants running assessments, no bloated project teams, no padded deliverables. Just clear analysis, practical recommendations, and real results.
              </p>
              <p>
                Whether you're a healthcare provider trying to achieve HIPAA compliance, a DoD contractor navigating CMMC 2.0, or a startup needing SOC 2 to close enterprise deals — I've done this work before, and I'll help you get there faster and with more confidence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="section-padding bg-gradient-to-b from-black via-slate-900/20 to-black">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-2 text-center">
              Areas of <span className="gradient-text">Expertise</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/50 text-center mb-12 max-w-xl mx-auto">
              Deep technical knowledge across the full spectrum of modern cybersecurity.
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {expertise.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass-effect-lg rounded-2xl p-6 border border-white/8 hover:border-primary-500/30 transition-colors group"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">{item.label}</h3>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section-padding bg-black">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-12 text-center">
              Professional <span className="gradient-text">Background</span>
            </motion.h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/60 via-primary-500/20 to-transparent" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="pl-12 relative"
                  >
                    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-primary-500/20 border border-primary-500/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-400" />
                    </div>
                    <div className="text-xs text-primary-400 font-semibold mb-1 tracking-wider uppercase">{item.year}</div>
                    <h3 className="font-bold text-white text-lg leading-tight">{item.role}</h3>
                    <div className="text-sm text-primary-300/70 mb-2">{item.org}</div>
                    <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-gradient-to-b from-black via-slate-900/15 to-black">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-10 text-center">
              Certifications & <span className="gradient-text">Credentials</span>
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {credentials.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-4 glass-effect-lg rounded-xl p-5 border border-white/8"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-400 text-lg">🎓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm leading-tight mb-0.5">{cert.name}</div>
                    <div className="text-xs text-white/45">{cert.org}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-2 text-center">
              How I <span className="gradient-text">Work</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/50 text-center mb-12 max-w-xl mx-auto">
              The principles that guide every client engagement.
            </motion.p>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass-effect-lg rounded-2xl p-7 border border-white/8"
                >
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-bold text-white text-lg mb-2">{v.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
