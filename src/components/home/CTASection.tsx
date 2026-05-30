'use client';

import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import SectionHeading from '@/components/common/SectionHeading';
import { CTA_FINAL_HEADLINE, CTA_FINAL_DESCRIPTION } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-b from-black via-primary-500/10 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <SectionHeading
            title={CTA_FINAL_HEADLINE}
            description={CTA_FINAL_DESCRIPTION}
            centered
            size="lg"
          />

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-12"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Button
                asLink
                href="/contact"
                variant="primary"
                size="lg"
              >
                Schedule a Consultation
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Button
                asLink
                href="/services"
                variant="secondary"
                size="lg"
              >
                Request Security Assessment
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
