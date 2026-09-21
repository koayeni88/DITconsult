import { Metadata } from 'next';
import { Suspense } from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/forms/ContactForm';
import { COMPANY_EMAIL, COMPANY_PHONE, COMPANY_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${COMPANY_NAME} for a cybersecurity consultation or corporate training inquiry—cloud security, compliance readiness, remediation, or team training. Messages are delivered to ${COMPANY_EMAIL}.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding-sm bg-gradient-to-b from-navy-900 to-navy-950">
        <div className="container-custom w-full">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <div className="grid lg:grid-cols-2 gap-12 mt-8">
            <div>
              <SectionHeading
                title="Tell us what you need help with"
                subtitle={`Contact ${COMPANY_NAME}`}
                description="Choose a clear reason to reach out—cloud risk, compliance readiness, a remediation backlog, or corporate cybersecurity and IT training—and we’ll recommend the right next step."
                centered={false}
                size="lg"
                as="h1"
              />

              <div className="mt-10 space-y-8">
                <div className="glass-effect rounded-xl p-6 space-y-4 text-sm text-white/70 leading-relaxed">
                  <h2 className="text-white font-semibold text-base">What happens after you submit</h2>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li>Your message is emailed to {COMPANY_EMAIL}.</li>
                    <li>We confirm receipt of your inquiry.</li>
                    <li>We review your risks, objectives, and constraints.</li>
                    <li>We recommend a packaged next step.</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-sm uppercase tracking-widest text-primary-400 font-bold mb-2">Email</h2>
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="text-xl font-semibold text-white hover:text-primary-400 transition-colors break-all"
                  >
                    {COMPANY_EMAIL}
                  </a>
                </div>
                <div>
                  <h2 className="text-sm uppercase tracking-widest text-primary-400 font-bold mb-2">Phone</h2>
                  <a
                    href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
                    className="text-xl font-semibold text-white hover:text-primary-400 transition-colors"
                  >
                    {COMPANY_PHONE}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Suspense fallback={<div className="glass-effect rounded-2xl p-8 text-white/50">Loading form…</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
