'use client';

import { motion } from 'framer-motion';
import GlassmorphismCard from '@/components/common/GlassmorphismCard';
import SectionHeading from '@/components/common/SectionHeading';
import { INDUSTRIES } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function IndustriesServed() {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Industries We Serve"
            subtitle="Vertical Expertise"
            description="Deep experience across regulated and high-risk industries"
            centered
            size="lg"
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {INDUSTRIES.map((industry) => (
            <motion.div key={industry.id} variants={itemVariants}>
              <GlassmorphismCard
                icon={industry.icon}
                title={industry.name}
                description={industry.description}
                size="md"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
