import { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import ContactTabs from '@/components/forms/ContactTabs';
import { COMPANY_EMAIL, COMPANY_PHONE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact DITconsult | Get in Touch',
  description: 'Get in touch with DITconsult for a cybersecurity consultation. We\'re here to help strengthen your security posture.',
  keywords: ['contact', 'cybersecurity consultation', 'security assessment', 'inquiry'],
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-black via-slate-900/20 to-black flex items-center py-20">
        <div className="container-custom w-full">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Info */}
            <div className="flex flex-col justify-center">
              <SectionHeading
                title="Get in Touch"
                subtitle="Contact Us"
                description="Let's discuss how we can help strengthen your cybersecurity posture and protect your organization."
                centered={false}
                size="lg"
              />

              <div className="mt-12 space-y-8">
                {/* Email */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-primary-400 font-bold mb-2">Email</h3>
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="text-2xl font-semibold text-white hover:text-primary-400 transition-colors break-all"
                  >
                    {COMPANY_EMAIL}
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-primary-400 font-bold mb-2">Phone</h3>
                  <a
                    href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
                    className="text-2xl font-semibold text-white hover:text-primary-400 transition-colors"
                  >
                    {COMPANY_PHONE}
                  </a>
                </div>

                {/* Response Time */}
                <div className="mt-8 p-4 glass-effect rounded-lg">
                  <p className="text-white/70">
                    <span className="text-primary-400 font-bold">Average response time:</span> Within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Form + Calendly tabs */}
            <div>
              <ContactTabs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
