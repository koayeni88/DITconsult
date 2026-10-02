import { Metadata } from 'next';
import { COMPANY_EMAIL, COMPANY_NAME } from '@/lib/constants';

const LAST_UPDATED = 'October 1, 2026';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms governing use of the ${COMPANY_NAME} website, free security tools, downloadable resources, and consulting engagements.`,
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <section className="section-padding bg-black">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Terms of Service</h1>
          <p className="text-sm text-white/45 mb-8">Last updated {LAST_UPDATED}</p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70">
            <p>
              These terms govern your use of the {COMPANY_NAME} website at{' '}
              <span className="whitespace-nowrap">ditconsult.com</span>, including its free assessment tools and
              downloadable resources. By accessing the website you agree to be bound by these terms. Paid consulting and
              training work is governed by a separate signed agreement, which takes precedence over this page.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Use license</h2>
              <p>
                You may view, download, and print materials from this website for your own internal business use. You may
                not resell, republish, or redistribute them as your own product, remove attribution, or use them to build
                a competing service. All content, including templates and checklists, remains the property of{' '}
                {COMPANY_NAME} or its licensors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Free tools and resources are not a security assessment</h2>
              <p>
                The risk score, maturity model, compliance calculator, roadmap generator, dashboard preview, and
                misconfiguration demo on this website are self-service educational aids. Their output is generated from
                the answers you supply, is illustrative only, and is not a vulnerability assessment, penetration test,
                audit opinion, certification, or legal or regulatory determination. Do not rely on them as evidence of
                compliance or as a substitute for a scoped professional engagement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">No professional or legal advice</h2>
              <p>
                Content on this website is general information, not tailored advice for your environment. Nothing here
                creates a consultant–client relationship. Compliance obligations under frameworks such as HIPAA, SOC 2,
                ISO 27001, PCI DSS, CMMC, or NIST SP 800-171 depend on facts specific to your organization; consult
                qualified counsel or an authorized assessor before relying on any interpretation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Submitting an inquiry</h2>
              <p>
                Submitting the inquiry form does not create an engagement, reserve capacity, or obligate either party. We
                will respond to discuss scope. Do not include passwords, access keys, API tokens, protected health
                information, or incident evidence in the form; see our{' '}
                <a href="/privacy" className="text-primary-400 hover:underline">
                  Privacy Policy
                </a>{' '}
                for how submissions are handled.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptable use</h2>
              <p>
                You agree not to attempt to disrupt, scan, overload, or gain unauthorized access to this website or its
                infrastructure, to submit automated or fraudulent inquiries, or to use the site in violation of
                applicable law. If you believe you have found a security issue, please report it using the contact
                details in our{' '}
                <a href="/.well-known/security.txt" className="text-primary-400 hover:underline">
                  security.txt
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Third-party references</h2>
              <p>
                Standards bodies, cloud providers, certification authorities, and vendor products referenced on this site
                are named for descriptive purposes. Their trademarks belong to their respective owners, and a reference
                does not imply partnership, endorsement, accreditation, or authorization unless explicitly stated.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p>
                The materials on this website are provided on an &ldquo;as is&rdquo; basis. {COMPANY_NAME} makes no
                warranties, express or implied, and disclaims all other warranties including implied warranties of
                merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, {COMPANY_NAME} and its suppliers shall not be liable for any
                indirect, incidental, special, or consequential damages, including loss of data, loss of profit, or
                business interruption, arising from your use of or inability to use this website or its materials.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Accuracy of materials</h2>
              <p>
                Materials on this website may contain technical or typographical errors, and security guidance changes as
                standards and threats evolve. {COMPANY_NAME} does not warrant that any material is accurate, complete, or
                current, and may change content at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Availability and changes to these terms</h2>
              <p>
                We may modify, suspend, or discontinue any part of the website, including the free tools, at any time. We
                may also update these terms; the &ldquo;last updated&rdquo; date above reflects the current version, and
                continued use after a change constitutes acceptance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Governing law</h2>
              <p>
                These terms are governed by the laws of the State of Texas, United States, without regard to conflict of
                law principles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p>
                Questions about these terms? Email{' '}
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
