'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import { SERVICES, COMPANY_EMAIL } from '@/lib/constants';
import { validateEmail } from '@/lib/utils';

interface FormInputs {
  fullName: string;
  businessEmail: string;
  company: string;
  phone: string;
  serviceNeeded: string;
  message: string;
  preferredDate?: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>({
    defaultValues: {
      serviceNeeded: '',
    },
  });

  const onSubmit = (data: FormInputs) => {
    const serviceLabel =
      SERVICES.find((s) => s.id === data.serviceNeeded)?.title ?? data.serviceNeeded;
    const body = [
      `Name: ${data.fullName}`,
      `Company: ${data.company}`,
      `Phone: ${data.phone}`,
      `Service: ${serviceLabel}`,
      data.preferredDate ? `Preferred date: ${data.preferredDate}` : null,
      '',
      data.message,
    ]
      .filter(Boolean)
      .join('\n');

    const mailto = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(
      `Security consultation — ${data.company}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 8000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-2xl p-8 md:p-12 text-center"
      >
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
        <p className="text-white/70">
          Your email client should open with your message ready to send. We typically respond within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-effect rounded-2xl p-8 md:p-12 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            {...register('fullName', { required: 'Full name is required' })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
          />
          {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>}
        </div>

        {/* Business Email */}
        <div>
          <label className="block text-sm font-semibold text-white mb-2">Business Email</label>
          <input
            type="email"
            placeholder="john@company.com"
            {...register('businessEmail', {
              required: 'Email is required',
              validate: (value) => validateEmail(value) || 'Invalid email',
            })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
          />
          {errors.businessEmail && <p className="text-red-400 text-sm mt-1">{errors.businessEmail.message}</p>}
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-semibold text-white mb-2">Company</label>
          <input
            type="text"
            placeholder="Your Company"
            {...register('company', { required: 'Company is required' })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
          />
          {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-white mb-2">Phone</label>
          <input
            type="tel"
            placeholder="(555) 123-4567"
            {...register('phone', { required: 'Phone is required' })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
          />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        {/* Service Needed */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-white mb-2">Service Needed</label>
          <select
            {...register('serviceNeeded', { required: 'Please select a service' })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary-500 transition-colors"
          >
            <option value="">Select a service...</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.id} className="bg-slate-900">
                {service.title}
              </option>
            ))}
          </select>
          {errors.serviceNeeded && <p className="text-red-400 text-sm mt-1">{errors.serviceNeeded.message}</p>}
        </div>

        {/* Preferred Date */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-white mb-2">Preferred Consultation Date (Optional)</label>
          <input
            type="date"
            {...register('preferredDate')}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary-500 transition-colors"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-white mb-2">Message</label>
          <textarea
            placeholder="Tell us about your security needs and challenges..."
            {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
            rows={5}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors resize-none"
          />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full md:w-auto md:mt-4"
      >
        Submit Inquiry
      </Button>
    </form>
  );
}
