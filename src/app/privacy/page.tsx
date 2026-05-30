import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | DITconsult',
  description: 'Privacy policy for DITconsult website and services.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="section-padding bg-black">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-white/70">
            <p>
              At DITconsult, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your information.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p>
                We collect information you voluntarily provide through our contact forms and services, including your name, email, phone number, and company information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p>
                We use the information you provide to respond to your inquiries, schedule consultations, and provide our cybersecurity consulting services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at hello@ditconsult.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
