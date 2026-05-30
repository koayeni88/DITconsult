'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

// ── Mini chart helpers ──────────────────────────────────────────────────────

function MiniBarChart({ data, colors }: { data: { label: string; value: number; max?: number }[]; colors: string[] }) {
  return (
    <div className="space-y-2">
      {data.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-xs text-white/50 w-20 shrink-0 truncate">{item.label}</span>
          <div className="flex-1 h-2 bg-white/10 rounded-full">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: colors[i % colors.length] }}
              initial={{ width: 0 }}
              animate={{ width: `${((item.value) / (item.max ?? 100)) * 100}%` }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          </div>
          <span className="text-xs font-bold text-white/60 w-8 text-right">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

function RiskGauge({ score }: { score: number }) {
  const color = score >= 80 ? '#ef4444' : score >= 60 ? '#f97316' : score >= 40 ? '#eab308' : '#22c55e';
  const label = score >= 80 ? 'Critical' : score >= 60 ? 'High' : score >= 40 ? 'Moderate' : 'Low';
  const rotate = -90 + (score / 100) * 180;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-36 h-20 overflow-hidden">
        <svg viewBox="0 0 140 75" className="w-full h-full">
          <path d="M 10 70 A 60 60 0 0 1 130 70" stroke="#1e293b" strokeWidth="12" fill="none" strokeLinecap="round" />
          <motion.path
            d="M 10 70 A 60 60 0 0 1 130 70"
            stroke={color}
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="188"
            initial={{ strokeDashoffset: 188 }}
            animate={{ strokeDashoffset: 188 - (score / 100) * 188 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          <motion.line
            x1="70" y1="70" x2="70" y2="18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ transformOrigin: '70px 70px' }}
            initial={{ rotate: -90 }}
            animate={{ rotate }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          <circle cx="70" cy="70" r="4" fill="white" />
        </svg>
      </div>
      <div className="text-3xl font-extrabold" style={{ color }}>{score}</div>
      <div className="text-xs font-bold uppercase tracking-widest mt-1" style={{ color }}>{label} Risk</div>
    </div>
  );
}

// ── Dashboard data ──────────────────────────────────────────────────────────

const RISK_SCORE = 67;

const COMPLIANCE_DATA = [
  { framework: 'NIST CSF', score: 72, gap: 28, color: '#3b82f6' },
  { framework: 'SOC 2', score: 55, gap: 45, color: '#a855f7' },
  { framework: 'ISO 27001', score: 40, gap: 60, color: '#06b6d4' },
  { framework: 'HIPAA', score: 83, gap: 17, color: '#22c55e' },
  { framework: 'PCI DSS', score: 61, gap: 39, color: '#f97316' },
];

const REMEDIATION_ITEMS = [
  { label: 'MFA enforcement', priority: 'Critical', status: 'In Progress', owner: 'IT Ops', daysLeft: 5 },
  { label: 'S3 Public Access Block', priority: 'Critical', status: 'Complete', owner: 'Cloud Team', daysLeft: 0 },
  { label: 'Patch Windows Servers', priority: 'High', status: 'In Progress', owner: 'IT Ops', daysLeft: 12 },
  { label: 'EDR Deployment (Phase 2)', priority: 'High', status: 'Not Started', owner: 'Security', daysLeft: 30 },
  { label: 'SOC 2 Evidence Collection', priority: 'High', status: 'In Progress', owner: 'Compliance', daysLeft: 45 },
  { label: 'IR Plan Annual Test', priority: 'Medium', status: 'Not Started', owner: 'Security', daysLeft: 60 },
  { label: 'Vendor Risk Assessments', priority: 'Medium', status: 'In Progress', owner: 'Compliance', daysLeft: 30 },
];

const CLOUD_FINDINGS = [
  { cloud: 'AWS', critical: 3, high: 7, medium: 12, color: '#f97316' },
  { cloud: 'Azure', critical: 1, high: 4, medium: 8, color: '#3b82f6' },
  { cloud: 'GCP', critical: 0, high: 2, medium: 5, color: '#22c55e' },
  { cloud: 'K8s', critical: 2, high: 5, medium: 9, color: '#06b6d4' },
];

const VULN_TREND = [
  { month: 'Jan', count: 47 },
  { month: 'Feb', count: 42 },
  { month: 'Mar', count: 38 },
  { month: 'Apr', count: 51 },
  { month: 'May', count: 35 },
  { month: 'Jun', count: 29 },
];

const statusColors: Record<string, string> = {
  'Complete': 'text-green-400',
  'In Progress': 'text-yellow-400',
  'Not Started': 'text-red-400',
};

const priorityColors: Record<string, string> = {
  'Critical': 'text-red-400 border-red-500/30 bg-red-500/10',
  'High': 'text-orange-400 border-orange-500/30 bg-orange-500/10',
  'Medium': 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10',
};

// ── Sparkline for trend ──────────────────────────────────────────────────────
function Sparkline({ data }: { data: { month: string; count: number }[] }) {
  const max = Math.max(...data.map(d => d.count));
  const min = Math.min(...data.map(d => d.count));
  const w = 180, h = 50;
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((d.count - min) / (max - min)) * h;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-12">
      <motion.polyline
        points={points}
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      {data.map((d, i) => {
        const x = (i / (data.length - 1)) * w;
        const y = h - ((d.count - min) / (max - min)) * h;
        return <circle key={i} cx={x} cy={y} r="3" fill="#3b82f6" />;
      })}
    </svg>
  );
}

// ── Main component ──────────────────────────────────────────────────────────

export default function ExecutiveDashboard() {
  const [activeTab, setActiveTab] = useState<'risk' | 'compliance' | 'remediation' | 'cloud'>('risk');

  const totalFindings = CLOUD_FINDINGS.reduce((a, f) => a + f.critical + f.high + f.medium, 0);
  const criticalFindings = CLOUD_FINDINGS.reduce((a, f) => a + f.critical, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950/40 to-black py-20">
      <div className="container-custom max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-primary-400 font-semibold text-xs uppercase tracking-widest mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
            Sample Preview
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Executive Cyber Dashboard</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            This is a preview of the executive-level reporting DITconsult delivers to clients — risk metrics, compliance posture, remediation tracking, and cloud exposure in one view.
          </p>
        </motion.div>

        {/* Dashboard header bar */}
        <div className="glass-effect-lg rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-white/10">
          <div>
            <h2 className="font-bold text-white text-base">Acme Corp — Cybersecurity Dashboard</h2>
            <p className="text-white/40 text-xs">Sample Data · Q2 2026 · Prepared by DITconsult</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-yellow-400 border border-yellow-500/30 bg-yellow-500/10 px-3 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
            6 Active Findings Require Attention
          </div>
        </div>

        {/* Top KPI cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="glass-effect-lg rounded-xl p-4 border border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Overall Risk Score</p>
            <div className="text-3xl font-extrabold text-orange-400">67<span className="text-base text-white/30">/100</span></div>
            <div className="text-xs text-orange-400 mt-1 font-semibold">High Risk</div>
          </div>
          <div className="glass-effect-lg rounded-xl p-4 border border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Cloud Findings</p>
            <div className="text-3xl font-extrabold text-red-400">{criticalFindings}<span className="text-base text-white/30"> critical</span></div>
            <div className="text-xs text-white/40 mt-1">{totalFindings} total across 4 platforms</div>
          </div>
          <div className="glass-effect-lg rounded-xl p-4 border border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Compliance Avg</p>
            <div className="text-3xl font-extrabold text-yellow-400">62<span className="text-base text-white/30">%</span></div>
            <div className="text-xs text-white/40 mt-1">Across 5 frameworks</div>
          </div>
          <div className="glass-effect-lg rounded-xl p-4 border border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Open Remediation</p>
            <div className="text-3xl font-extrabold text-blue-400">6<span className="text-base text-white/30">/7</span></div>
            <div className="text-xs text-white/40 mt-1">1 complete this cycle</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {(['risk', 'compliance', 'remediation', 'cloud'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border capitalize transition-all whitespace-nowrap
                ${activeTab === tab ? 'bg-primary-500 border-primary-500 text-white' : 'border-white/20 text-white/60 hover:text-white'}`}
            >
              {tab === 'risk' ? 'Risk Overview' : tab === 'compliance' ? 'Compliance' : tab === 'remediation' ? 'Remediation Tracker' : 'Cloud Exposure'}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>

          {/* Risk Overview */}
          {activeTab === 'risk' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-effect-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-sm font-bold text-white/70 uppercase tracking-widest mb-6">Risk Score Gauge</h3>
                <RiskGauge score={RISK_SCORE} />
                <div className="mt-4 grid grid-cols-4 gap-2 text-center">
                  {['Low', 'Moderate', 'High', 'Critical'].map((l, i) => {
                    const colors = ['#22c55e', '#eab308', '#f97316', '#ef4444'];
                    return (
                      <div key={l} className="text-xs" style={{ color: colors[i] }}>{l}</div>
                    );
                  })}
                </div>
              </div>
              <div className="glass-effect-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-sm font-bold text-white/70 uppercase tracking-widest mb-4">Risk by Domain</h3>
                <MiniBarChart
                  data={[
                    { label: 'Access Control', value: 45, max: 100 },
                    { label: 'Cloud Security', value: 58, max: 100 },
                    { label: 'Data Protection', value: 72, max: 100 },
                    { label: 'Endpoint', value: 61, max: 100 },
                    { label: 'Incident Resp.', value: 35, max: 100 },
                    { label: 'Vendor Risk', value: 28, max: 100 },
                  ]}
                  colors={['#ef4444', '#f97316', '#eab308', '#f97316', '#ef4444', '#ef4444']}
                />
              </div>
              <div className="glass-effect-lg rounded-2xl p-6 border border-white/10 md:col-span-2">
                <h3 className="text-sm font-bold text-white/70 uppercase tracking-widest mb-4">Vulnerability Trend (Last 6 Months)</h3>
                <div className="flex items-end gap-6">
                  <div className="flex-1">
                    <Sparkline data={VULN_TREND} />
                    <div className="flex justify-between text-xs text-white/30 mt-1">
                      {VULN_TREND.map(d => <span key={d.month}>{d.month}</span>)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-extrabold text-green-400">-38%</div>
                    <div className="text-xs text-white/40">vs. 6 months ago</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Compliance */}
          {activeTab === 'compliance' && (
            <div className="glass-effect-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-sm font-bold text-white/70 uppercase tracking-widest mb-6">Compliance Posture by Framework</h3>
              <div className="space-y-5">
                {COMPLIANCE_DATA.map(f => (
                  <div key={f.framework}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white text-sm">{f.framework}</span>
                      <div className="flex items-center gap-4 text-xs">
                        <span style={{ color: f.color }} className="font-bold">{f.score}% compliant</span>
                        <span className="text-red-400">{f.gap}% gap</span>
                      </div>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden flex">
                      <motion.div
                        className="h-full rounded-l-full"
                        style={{ backgroundColor: f.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${f.score}%` }}
                        transition={{ duration: 1 }}
                      />
                      <motion.div
                        className="h-full bg-red-500/40 rounded-r-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${f.gap}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-sm text-yellow-300">
                ⚠ <strong>SOC 2 and ISO 27001 have significant gaps.</strong> A structured readiness program is recommended before pursuing certification.
              </div>
            </div>
          )}

          {/* Remediation Tracker */}
          {activeTab === 'remediation' && (
            <div className="glass-effect-lg rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-4 border-b border-white/10">
                <h3 className="text-sm font-bold text-white/70 uppercase tracking-widest">Active Remediation Items</h3>
              </div>
              <div className="divide-y divide-white/5">
                {REMEDIATION_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-4">
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{item.label}</p>
                      <p className="text-white/40 text-xs">Owner: {item.owner}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold border ${priorityColors[item.priority]}`}>{item.priority}</span>
                    <span className={`text-xs font-semibold ${statusColors[item.status]}`}>{item.status}</span>
                    <span className="text-white/30 text-xs w-16 text-right">
                      {item.daysLeft === 0 ? '✓ Done' : `${item.daysLeft}d left`}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-white/10 text-xs text-white/40">
                1 of 7 items complete this cycle · Next review: 30 days
              </div>
            </div>
          )}

          {/* Cloud Exposure */}
          {activeTab === 'cloud' && (
            <div className="grid md:grid-cols-2 gap-6">
              {CLOUD_FINDINGS.map(f => (
                <div key={f.cloud} className="glass-effect-lg rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: f.color }} />
                    <h3 className="font-bold text-white">{f.cloud}</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-red-500/10 rounded-xl p-3">
                      <div className="text-2xl font-extrabold text-red-400">{f.critical}</div>
                      <div className="text-xs text-white/40 mt-1">Critical</div>
                    </div>
                    <div className="bg-orange-500/10 rounded-xl p-3">
                      <div className="text-2xl font-extrabold text-orange-400">{f.high}</div>
                      <div className="text-xs text-white/40 mt-1">High</div>
                    </div>
                    <div className="bg-yellow-500/10 rounded-xl p-3">
                      <div className="text-2xl font-extrabold text-yellow-400">{f.medium}</div>
                      <div className="text-xs text-white/40 mt-1">Medium</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <div className="mt-10 glass-effect-lg rounded-2xl p-8 text-center border border-primary-500/20">
          <h3 className="text-2xl font-bold text-white mb-3">Want This Dashboard For Your Organization?</h3>
          <p className="text-white/60 mb-6">DITconsult delivers executive-level cybersecurity reporting tailored to your environment, compliance requirements, and business objectives.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors">
              Schedule a Dashboard Demo
            </a>
            <a href="/cyber-risk-score" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-colors">
              Get Your Free Risk Score
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
