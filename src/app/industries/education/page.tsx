import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/common/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Cybersecurity for Education | DITconsult',
  description: 'Cybersecurity for K-12 schools, universities, and EdTech companies. Protect student data, meet FERPA requirements, and defend against ransomware.',
};

export default function EducationPage() {
  return (
    <IndustryPageTemplate
      industry="Education"
      badge="FERPA · K-12 · Higher Education · EdTech"
      headline="Cybersecurity Built for"
      headlineAccent="Education Organizations"
      subheadline="Protect student records, defend against ransomware, and meet FERPA and CIPA requirements across K-12 and higher education."
      heroIcon="🎓"
      challenges={[
        { icon: '🎒', title: 'Student Data & FERPA', desc: 'Education institutions handle sensitive student records covered by FERPA. Data breaches expose institutions to regulatory risk and erode community trust.' },
        { icon: '🔓', title: 'Ransomware Epidemic', desc: 'K-12 and higher education are the most targeted sectors for ransomware, often due to limited security staff and legacy systems.' },
        { icon: '📱', title: 'BYOD & Open Networks', desc: 'Campus networks must balance openness with security — a challenge that creates significant exposure when student and staff devices are unmanaged.' },
        { icon: '🤖', title: 'EdTech Vendor Risk', desc: 'Learning management systems, SIS platforms, and third-party EdTech vendors often have access to student PII with minimal security oversight.' },
      ]}
      services={[
        { title: 'FERPA & COPPA Compliance Assessment', desc: 'Identify gaps in student data protection and develop a compliance roadmap aligned with FERPA, COPPA, and state privacy laws.', link: '/compliance' },
        { title: 'Ransomware Preparedness Program', desc: 'Backup strategy, endpoint protection, and IR plan designed for the operational constraints of educational institutions.', link: '/incident-response' },
        { title: 'Network Security Assessment', desc: 'Assessment of campus network segmentation, wireless security, and access controls across student, staff, and IoT networks.', link: '/services' },
        { title: 'EdTech Vendor Risk Assessments', desc: 'Security evaluation of learning management systems and third-party vendors with access to student data.', link: '/services' },
        { title: 'Security Awareness Training', desc: 'Faculty, staff, and student-targeted security awareness and phishing simulation programs.', link: '/services' },
        { title: 'Virtual CISO for Schools', desc: 'Fractional CISO services for districts and universities that need security leadership without a full-time hire.', link: '/virtual-ciso' },
      ]}
      frameworks={['FERPA', 'COPPA', 'NIST CSF', 'CIS Controls v8', 'CIPA', 'EDUCAUSE Cybersecurity Program']}
      stats={[
        { label: 'Ransomware attacks', value: '#1', sub: 'most targeted sector' },
        { label: 'K-12 incidents (2023)', value: '1,600+', sub: 'reported breaches & incidents' },
        { label: 'Student records at risk', value: 'Millions', sub: 'per major district breach' },
      ]}
      cta="Get a School Security Assessment"
    />
  );
}
