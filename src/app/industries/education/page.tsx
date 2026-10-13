import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/common/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Educational and Institutional Consulting',
  alternates: { canonical: '/industries/education' },
  description:
    'Institutional cybersecurity, campus IT governance, FERPA-aware data protection, digital-learning advisory, and faculty development for schools, universities, and EdTech teams. Distinct from corporate training.',
};

export default function EducationPage() {
  return (
    <IndustryPageTemplate
      industry="Education"
      badge="Institutional Consulting · FERPA · Faculty Development"
      headline="Educational and institutional consulting for"
      headlineAccent="Schools, universities, and education technology"
      subheadline="Advise campus and institutional leaders on technology strategy, student-data protection, IT governance, digital-learning infrastructure, and faculty development. This is institutional consulting—not corporate workforce training and not a degree program. DiTconsult does not grant qualifications or affiliate with any university."
      heroIcon="🎓"
      cta="Discuss Educational Consulting"
      ctaHref="/contact?service=educational-consulting"
      distinction={{
        title: 'How this differs from corporate training',
        description:
          'Corporate training develops employee, engineer, and leadership skills inside a company. Educational consulting supports universities, colleges, school systems, and education technology organizations on institutional security, campus IT, curriculum advisory, and faculty capacity. Many institutions use both.',
        links: [
          { label: 'Educational and institutional consulting division', href: '/services/education-consulting' },
          { label: 'Corporate cybersecurity and IT training', href: '/corporate-training' },
        ],
      }}
      deliverables={[
        'Institutional security and technology-risk summary',
        'Identity, access, and student-data handling recommendations',
        'IT governance and evidence-planning guidance',
        'Faculty and staff development outline when training is also in scope',
      ]}
      benefits={[
        'Clearer ownership of campus identity and student-record access',
        'Governance language suitable for administrators and procurement',
        'Training that can be scoped separately from institutional advisory',
      ]}
      challenges={[
        {
          icon: '🎒',
          title: 'Student records and FERPA',
          desc: 'Education records require controlled access and documented handling. Overshared cloud folders, weak identity practices, and unclear retention create privacy and regulatory risk.',
        },
        {
          icon: '🏛️',
          title: 'Institutional IT governance',
          desc: 'Universities and districts often operate distributed technology decisions across academic, administrative, and research units. Security ownership and evidence collection lag that complexity.',
        },
        {
          icon: '🔓',
          title: 'Ransomware and instructional disruption',
          desc: 'Schools often run mixed legacy and cloud systems with limited security staff. Interruptions affect instruction, payroll, and family communication.',
        },
        {
          icon: '📱',
          title: 'Open campus and BYOD networks',
          desc: 'Student, faculty, guest, and IoT traffic often share infrastructure. Weak segmentation and unmanaged devices expand the path an attacker can take.',
        },
        {
          icon: '🤖',
          title: 'EdTech and digital-learning vendors',
          desc: 'Learning management systems, student information systems, and third-party tools frequently hold student PII. Contract and technical review often lag adoption.',
        },
        {
          icon: '👩‍🏫',
          title: 'Faculty and staff capability',
          desc: 'Institutional security depends on faculty, staff, and administrators who handle records and research data. Development programs should be designed for education roles, not copied from a corporate catalog.',
        },
      ]}
      services={[
        {
          title: 'Campus IT security and identity review',
          desc: 'Segmentation, wireless, and access-control review across student, staff, research, and administrative environments.',
          link: '/cloud-security',
        },
        {
          title: 'FERPA-aware data protection advisory',
          desc: 'Access, sharing, and retention review aligned to FERPA, COPPA where applicable, and relevant state student-privacy laws.',
          link: '/compliance',
        },
        {
          title: 'Institutional technology and governance planning',
          desc: 'IT governance, control ownership, and evidence planning for administrators and campus technology leaders.',
          link: '/security-risk-assessment',
        },
        {
          title: 'Digital learning and EdTech vendor review',
          desc: 'Security review of learning platforms and vendors with access to student or staff data.',
          link: '/services',
        },
        {
          title: 'Faculty and staff cybersecurity development',
          desc: 'Role-specific awareness and professional development for educators and administrators. Training and advisory only—not a degree program.',
          link: '/corporate-training',
        },
        {
          title: 'Virtual CISO for education',
          desc: 'Fractional security leadership for districts, campuses, and EdTech teams that need program direction without a full-time hire.',
          link: '/virtual-ciso',
        },
      ]}
      frameworks={['FERPA', 'COPPA', 'CIPA', 'NIST CSF', 'CIS Controls']}
      stats={[
        { label: 'Student records', value: 'FERPA', sub: 'Access control and data-handling review' },
        { label: 'Institutional risk', value: 'Governance', sub: 'Campus IT and technology planning advisory' },
        { label: 'Faculty capability', value: 'Development', sub: 'Distinct from corporate workforce training' },
      ]}
    />
  );
}
