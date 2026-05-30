import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/common/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Cybersecurity for Small Business | DITconsult',
  description: 'Practical, affordable cybersecurity for small businesses. MFA, EDR, backup, and compliance guidance without enterprise complexity or cost.',
};

export default function SmallBusinessPage() {
  return (
    <IndustryPageTemplate
      industry="Small Business"
      badge="SMB · Practical Security · No Fluff"
      headline="Practical Cybersecurity"
      headlineAccent="for Small Business"
      subheadline="Enterprise-grade security practices scaled to your size and budget. Protect your business without hiring a full security team."
      heroIcon="🏪"
      challenges={[
        { icon: '🎯', title: 'You Are a Target Too', desc: 'Over 43% of cyberattacks target small businesses. Attackers know SMBs often have weaker defenses and use them as pivot points to larger targets.' },
        { icon: '💸', title: 'Limited Budget & Staff', desc: 'Most SMBs cannot afford a full-time security professional, making it difficult to know where to start or what actually matters for your size.' },
        { icon: '☁️', title: 'Cloud Without Controls', desc: 'Microsoft 365, Google Workspace, QuickBooks Online, and cloud storage are convenient but introduce risk when not configured securely.' },
        { icon: '🔑', title: 'Credential & Email Attacks', desc: 'Business Email Compromise (BEC) and credential stuffing are the leading causes of SMB financial losses — often totaling tens of thousands of dollars.' },
      ]}
      services={[
        { title: 'Security Quick-Start Program', desc: 'A structured 30-day engagement that implements the most critical security controls for your business — MFA, EDR, backup, and email security.', link: '/services' },
        { title: 'Microsoft 365 Security Hardening', desc: 'Configuration review and hardening of your M365 tenant — Entra ID, Exchange, SharePoint, and Defender policies.', link: '/cloud-security' },
        { title: 'Small Business Risk Assessment', desc: 'A focused risk assessment that identifies your top exposures and gives you a prioritized, budget-conscious remediation plan.', link: '/services' },
        { title: 'Compliance for Small Business', desc: 'Practical guidance for SMBs facing SOC 2 requirements from customers, cyber insurance questionnaires, or basic regulatory requirements.', link: '/compliance' },
        { title: 'Cyber Insurance Readiness', desc: 'Help you meet cyber insurance questionnaire requirements and implement the controls that reduce your premium and improve coverage.', link: '/services' },
        { title: 'Security Awareness Training', desc: 'Short, effective training sessions for small teams — focused on phishing, password hygiene, and recognizing social engineering.', link: '/services' },
      ]}
      frameworks={['CIS Controls IG1 (Basic)', 'NIST CSF', 'Cyber Insurance Requirements', 'SOC 2 (Customer Demands)', 'CMMC Level 1 (if DoD contractor)']}
      stats={[
        { label: 'SMB attacks', value: '43%', sub: 'of all cyberattacks target SMBs' },
        { label: 'Recovery cost', value: '$200K', sub: 'average SMB breach cost' },
        { label: 'Go out of business', value: '60%', sub: 'of SMBs within 6 months of breach' },
      ]}
      cta="Get Your SMB Security Plan"
    />
  );
}
