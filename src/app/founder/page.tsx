'use client';

import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { FOUNDER } from '@/lib/constants';
import { CREDENTIALS, EDUCATION } from '@/lib/founder-profile';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import CTASection from '@/components/home/CTASection';

const highlights = [
  {
    value: 'Over 15 years',
    label: 'Information Technology experience',
  },
  {
    value: 'Enterprise',
    label: 'Cybersecurity at General Motors',
  },
  {
    value: 'CISM · CEH · CJIS',
    label: 'Security management, ethical hacking & CJIS',
  },
  {
    value: 'Army',
    label: 'Veteran-led consulting',
  },
];

const keySkills = [
  'Azure',
  'GCP',
  'AWS',
  'Data Center Management',
  'Virtualization Technology (VMware, ESXi, and vCenter)',
  'Enterprise Server Management',
  'Active Directory Management',
  'Enterprise Patch Management',
  'Enterprise Storage and Backup Management',
  'Vulnerability Assessment and Remediation',
  'Cloud Services Administration (Azure, AWS, GCP)',
  'Windows Server 2012, 2016, 2019, and later',
  'SQL Server Management',
  'Microsoft Hyper-V',
  'Antivirus and Endpoint Security Management',
  'Operating Systems Support',
  'Cisco UCS Management',
  'System and Network Access Controls',
  'LAN Management & Troubleshooting',
  'System Installation, Configuration, and Upgrade',
  'Enterprise File Server Management',
  'Storage Management (SAN, NAS)',
  'Active Directory Group Policy',
  'Azure VMware Solution (AVS)',
  'Group Policy Objects (GPO)',
  'CrowdStrike',
  'Wiz',
  'Policy Creation and Enforcement',
];

const credentials = CREDENTIALS;

const timeline = [
  {
    role: 'President and CEO',
    org: 'DiTconsult',
    desc: 'Built DiTconsult to deliver senior cybersecurity expertise to mid-market companies, contractors, and cloud-native teams — without large-firm overhead.',
  },
  {
    role: 'Cybersecurity Engineer',
    org: 'General Motors',
    desc: 'Designing, implementing, and managing security solutions that safeguard enterprise environments — with focus on risk contextualization, tracking, reporting, and automating security processes.',
  },
  {
    role: 'Assistant Professor',
    org: 'Lone Star College',
    desc: 'Taught and mentored students in computing and technology programs — translating technical concepts into practical, classroom-ready instruction.',
  },
  {
    role: 'Security and Systems Administrator',
    org: 'DIT Services',
    desc: 'Hands-on systems and security administration across infrastructure, access management, and day-to-day defensive operations.',
  },
  {
    role: 'IT Manager',
    org: 'Forum for Agricultural Research in Africa (FARA)',
    desc: 'Led IT operations for a distributed research organization, strengthening reliability and security practices.',
  },
];

const education = EDUCATION;

const principles = [
  {
    title: 'Results over reports',
    desc: 'Actionable recommendations your team can implement — not shelfware binders.',
  },
  {
    title: 'Advisor, not vendor',
    desc: 'Guidance aligned to your risk and budget — not tool quotas or unnecessary upsells.',
  },
  {
    title: 'Plain-language risk',
    desc: 'Executives and engineers get the same truth, explained in terms each can act on.',
  },
  {
    title: 'Speed with rigor',
    desc: 'Focused engagements measured in weeks, with depth where it changes outcomes.',
  },
];

export default function FounderPage() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-navy-900 via-navy-950 to-black">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-primary-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="container-custom relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: 'Founder' }]} />

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.p
                variants={fadeInUp}
                className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-400"
              >
                {FOUNDER.title}
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-6xl"
              >
                {FOUNDER.name}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-5 max-w-xl text-xl font-semibold leading-snug text-white/90 md:text-2xl"
              >
                Over 15 years of experience in Information Technology — brought to DiTconsult
                clients as direct, senior consulting.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="mt-5 max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
              >
                President and CEO of DiTconsult. Army veteran, and holder of the CISM (ISACA), CEH (EC-Council), CJIS
                (FBI), four Microsoft security and Azure certifications, and the AWS Certified Solutions Architect –
                Associate. I
                help organizations assess real risk, prioritize remediation, and improve posture across AWS, Azure, and
                Google Cloud.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  aria-expanded={open}
                  aria-controls={panelId}
                  className="rounded-xl bg-primary-500 px-6 py-3 font-semibold text-white shadow-neon transition-colors hover:bg-primary-600"
                >
                  {open ? 'Profile expanded' : 'Open full founder profile'}
                </button>
                <Link
                  href="/contact"
                  className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 transition-colors hover:border-primary-500/40 hover:text-white"
                >
                  Book a consultation
                </Link>
                <a
                  href={FOUNDER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 transition-colors hover:border-primary-500/40 hover:text-white"
                >
                  LinkedIn profile
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={panelId}
                className="group relative w-full max-w-sm text-left transition-transform hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-primary-500/40 via-transparent to-cyan-400/20 opacity-70 transition-opacity group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-950/80 p-8 backdrop-blur-sm">
                  <div className="mx-auto flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border border-primary-500/35 bg-gradient-to-br from-primary-500/20 to-cyan-500/10">
                    {FOUNDER.photoSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={FOUNDER.photoSrc}
                        alt={`${FOUNDER.name}, ${FOUNDER.title}`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="text-5xl font-black tracking-tight text-white">{FOUNDER.initials}</div>
                        <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-400">
                          CISM · CEH · CJIS
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-8 border-t border-white/10 pt-6 text-center">
                    <p className="text-3xl font-black text-white">15+</p>
                    <p className="mt-1 text-sm text-white/55">years in Information Technology</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/45">
                      Azure · AWS · GCP · CrowdStrike · Wiz
                    </p>
                    <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-400">
                      {open ? 'Hide full profile' : 'Click to expand full profile'}
                      <svg
                        className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </p>
                  </div>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-navy-950 py-10">
        <div className="container-custom">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border-l border-primary-500/40 pl-4"
              >
                <div className="text-lg font-bold text-white">{item.value}</div>
                <div className="mt-1 text-sm text-white/50">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="container-custom py-6">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-navy-950/70 px-5 py-4 text-left transition-colors hover:border-primary-500/35 hover:bg-navy-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-400">Founder section</p>
              <p className="mt-1 text-lg font-bold text-white md:text-xl">
                {open ? 'Full founder profile' : 'Click to open full founder profile'}
              </p>
              <p className="mt-1 text-sm text-white/50">
                Experience narrative, key skills, career background, education, certifications, and how I work
              </p>
            </div>
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary-500/40 bg-primary-500/15 text-primary-300 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>
      </section>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="founder-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <section className="section-padding bg-black">
              <div className="container-custom max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-400">
                  Professional profile
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  Experience that shapes the work
                </h2>
                <div className="mt-8 space-y-6 text-base leading-relaxed text-white/65 md:text-lg">
                  <p>
                    Experienced Cyber Security Engineer with over 15 years of experience in Information Technology
                    and a proven track record in designing, implementing, and managing robust security solutions that
                    safeguard enterprise environments against evolving cyber threats. My expertise spans security risk
                    contextualization, tracking, and reporting, with a strong focus on scaling and automating security
                    processes to enhance operational efficiency and resilience.
                  </p>
                  <p>
                    With over 15 years of experience in Information Technology, I have developed various skills and
                    competencies, such as cloud infrastructure, identity management, incident response, vulnerability
                    management, and malware analysis. I have also worked across diverse sectors, including banking,
                    consulting, higher education, and research, where I have demonstrated my ability to adapt, collaborate,
                    and innovate.
                  </p>
                  <p>
                    In my enterprise role at General Motors, my mission is to leverage my cybersecurity skills and expertise
                    to protect GM&apos;s systems, networks, and information, and to support the company&apos;s strategic
                    goals and vision. Through DiTconsult, I bring that same discipline to organizations that need senior
                    security guidance without large-firm overhead.
                  </p>
                </div>
              </div>
            </section>

            <section className="section-padding border-y border-white/10 bg-gradient-to-b from-navy-950 to-black">
              <div className="container-custom">
                <div className="mx-auto max-w-2xl text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-400">Key skills</p>
                  <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                    Technical depth across cloud, infrastructure, and security
                  </h2>
                  <p className="mt-4 text-white/55">
                    Multi-cloud platforms, enterprise infrastructure, identity, endpoint security, and modern cloud
                    security tooling.
                  </p>
                </div>
                <ul className="mt-12 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                  {keySkills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2.5 border-t border-white/10 pt-3 text-sm text-white/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" aria-hidden="true" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="section-padding bg-black">
              <div className="container-custom max-w-3xl">
                <div className="mb-12 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-400">Career path</p>
                  <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                    Professional <span className="gradient-text">background</span>
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-white/55">
                    From IT operations and security administration to enterprise cloud security and founding DiTconsult —
                    spanning {FOUNDER.experienceYears} years across banking, consulting, higher education, research, and
                    enterprise.
                  </p>
                </div>
                <div className="relative">
                  <div
                    className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-primary-500/70 via-primary-500/25 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="space-y-10">
                    {timeline.map((item) => (
                      <div key={`${item.role}-${item.org}`} className="relative pl-12">
                        <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-primary-500/50 bg-primary-500/15">
                          <div className="h-2 w-2 rounded-full bg-primary-400" />
                        </div>
                        <h3 className="font-bold leading-tight text-white text-lg">{item.role}</h3>
                        <p className="mt-0.5 text-sm text-primary-300/75">{item.org}</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding border-y border-white/10 bg-gradient-to-b from-navy-950 via-black to-navy-950">
              <div className="container-custom max-w-4xl">
                <div className="mb-12 max-w-2xl">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-400">
                    Education
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                    From computer science to{' '}
                    <span className="gradient-text">cyber defense</span>
                  </h2>
                  <p className="mt-4 text-white/55 leading-relaxed">
                    Formal study building from computing fundamentals through enterprise IT into information assurance
                    and cybersecurity.
                  </p>
                </div>

                <ol className="relative space-y-0">
                  <div
                    className="absolute left-[1.65rem] top-4 bottom-4 w-px bg-gradient-to-b from-primary-400 via-cyan-500/50 to-white/10"
                    aria-hidden="true"
                  />
                  {education.map((item, index) => (
                    <li key={item.degree} className="relative pb-12 pl-16 last:pb-0">
                      <div
                        className="absolute left-3 top-1.5 z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-primary-400/50 bg-navy-950 font-mono text-xs font-bold text-primary-300 shadow-[0_0_20px_rgba(0,102,255,0.35)]"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                        {item.level}
                      </p>
                      <h3 className="mt-1.5 text-xl font-bold leading-snug text-white md:text-2xl">
                        {item.degree}
                      </h3>
                      <p className="mt-3 inline-block border border-primary-500/25 bg-primary-500/10 px-3 py-1.5 font-mono text-[11px] tracking-wide text-primary-200/90">
                        {item.focus}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section className="section-padding border-y border-white/10 bg-navy-950/60">
              <div className="container-custom">
                <div className="mx-auto max-w-2xl text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-400">Credentials</p>
                  <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                    Certifications that back the experience
                  </h2>
                  <p className="mt-4 text-white/55">
                    Professional credentials spanning security management, ethical hacking, Azure, and AWS.
                  </p>
                </div>
                <ul className="mx-auto mt-12 max-w-3xl divide-y divide-white/10 border-y border-white/10">
                  {credentials.map((cert) => (
                    <li
                      key={cert.name}
                      className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <span className="font-semibold text-white">{cert.name}</span>
                      <span className="shrink-0 text-sm text-white/45">{cert.org}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="section-padding bg-black">
              <div className="container-custom">
                <div className="mx-auto max-w-2xl text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-400">Engagement style</p>
                  <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">How I work with clients</h2>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  {principles.map((item, i) => (
                    <div key={item.title} className="flex gap-4">
                      <span className="mt-0.5 text-sm font-bold text-primary-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-primary-500/40 hover:text-white"
                  >
                    Collapse founder profile
                  </button>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
}
