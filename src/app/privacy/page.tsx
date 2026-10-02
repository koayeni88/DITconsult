import { Metadata } from 'next';
import { COMPANY_EMAIL, COMPANY_NAME } from '@/lib/constants';

const LAST_UPDATED = 'October 1, 2026';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${COMPANY_NAME} collects, uses, shares, and retains information submitted through this website.`,
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="section-padding bg-black">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-sm text-white/45 mb-8">Last updated {LAST_UPDATED}</p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70">
            <p>
              {COMPANY_NAME} is committed to protecting your privacy. This policy explains what information this website
              collects, why we collect it, who processes it on our behalf, and how long we keep it. It applies to{' '}
              <span className="whitespace-nowrap">ditconsult.com</span> and to inquiries submitted through it.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information you give us</h2>
              <p>
                When you submit the inquiry form we collect the information you type into it: your name, business email,
                company, optional phone number, the service you are interested in, an optional preferred consultation
                date, your message, and — for training inquiries — optional details about topic, participant count,
                delivery format preference, timeframe, and learning goals.
              </p>
              <p className="mt-4">
                Please do not submit passwords, access keys, API tokens, protected health information, or incident
                evidence through the website form. If an engagement requires sensitive material, we will agree a secure
                channel with you first.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information collected automatically</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-white/90">Your IP address</strong> is used transiently to rate-limit form
                  submissions and block automated abuse. It is held in server memory only and is not written to a
                  database or included in the inquiry we receive.
                </li>
                <li>
                  <strong className="text-white/90">An approximate country lookup</strong> is performed by the contact
                  page so the phone field can default to the right international dialling code. This request is made to
                  the third-party service ipapi.co from your browser.
                </li>
                <li>
                  <strong className="text-white/90">Standard web server logs</strong> may be recorded by our hosting
                  provider as part of normal operation.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies, analytics, and advertising</h2>
              <p>
                This website does not run advertising networks, analytics trackers, or cross-site tracking pixels. Your
                light or dark theme preference is stored in your browser&apos;s local storage so the site remembers it
                between visits; it is never transmitted to us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How we use your information</h2>
              <p>
                We use the information you provide to respond to your inquiry, scope and schedule consulting or training
                work, and deliver the services you engage us for. We do not sell your personal information, and we do
                not use inquiry details for unrelated marketing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Service providers</h2>
              <p>
                We share information only with providers that help us operate the site and respond to you:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong className="text-white/90">Resend</strong> — delivers inquiry form submissions to our business
                  mailbox.
                </li>
                <li>
                  <strong className="text-white/90">ipapi.co</strong> — returns an approximate country for the dialling
                  code default described above.
                </li>
                <li>
                  <strong className="text-white/90">Our hosting provider</strong> — serves the website and maintains
                  operational logs.
                </li>
              </ul>
              <p className="mt-4">
                We may also disclose information where we are legally required to do so.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Retention</h2>
              <p>
                Inquiry emails are retained in our business mailbox for as long as needed to respond to you and to keep
                records of client and prospective-client correspondence. Rate-limiting data is discarded when the server
                process restarts or the limit window expires. You can ask us to delete your inquiry at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Your choices and rights</h2>
              <p>
                You can ask us to access, correct, or delete the information you submitted, or to stop contacting you.
                Email {COMPANY_EMAIL} and we will action the request. Depending on where you live, you may have
                additional rights under laws such as the GDPR or state privacy statutes; we will honour those requests
                where they apply.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your information against
                unauthorized access, alteration, disclosure, or destruction. The site is served over HTTPS with
                transport security and content security policies enabled. No method of transmission or storage is
                completely secure, so please follow the guidance above about sensitive material.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Children</h2>
              <p>
                This website is intended for business use and is not directed to children under 13. We do not knowingly
                collect information from children.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to this policy</h2>
              <p>
                If we change this policy we will update the &ldquo;last updated&rdquo; date above. Material changes will
                be described on this page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact us</h2>
              <p>
                Questions about this policy, or a request about your information? Email{' '}
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-primary-400 hover:underline">
                  {COMPANY_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
