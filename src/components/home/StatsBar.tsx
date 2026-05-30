'use client';

import { motion } from 'framer-motion';
import { COMPANY_STATS } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function StatsBar() {
  return (
    <section className="py-12 md:py-16 border-b border-white/10 bg-black">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {COMPANY_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center md:text-left border-white/10 md:border-r last:border-r-0 md:pr-8 last:md:pr-0"
            >
              <p className="text-4xl md:text-5xl font-black gradient-text">{stat.value}</p>
              <p className="text-white font-semibold mt-2">{stat.label}</p>
              <p className="text-white/50 text-sm mt-1">{stat.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
