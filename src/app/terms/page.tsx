import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | DITconsult',
  description: 'Terms of Service for DITconsult website and services.',
};

export default function TermsPage() {
  return (
    <>
      <section className="section-padding bg-black">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-white/70">
            <p>
              These Terms of Service govern your use of the DITconsult website and services. By accessing our website, you agree to be bound by these terms.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on DITconsult's website for personal, non-commercial transitory viewing only.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p>
                The materials on DITconsult's website are provided on an 'as is' basis. DITconsult makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Limitations</h2>
              <p>
                In no event shall DITconsult or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DITconsult's website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Accuracy of Materials</h2>
              <p>
                The materials appearing on DITconsult's website could include technical, typographical, or photographic errors. DITconsult does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p>
                If you have questions about these Terms of Service, please contact us at support@ditconsult.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
