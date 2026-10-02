'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import { SERVICES, COMPANY_NAME, COMPANY_EMAIL } from '@/lib/constants';
import { ENGAGEMENT_PACKAGES } from '@/lib/content';
import {
  TRAINING_TOPIC_OPTIONS,
  TRAINING_CATEGORIES,
  DELIVERY_FORMAT_OPTIONS,
  TIMEFRAME_OPTIONS,
} from '@/lib/training';
import { validateEmail } from '@/lib/utils';

const COUNTRY_CODES = [
  { code: '+93',   label: 'Afghanistan' },
  { code: '+355',  label: 'Albania' },
  { code: '+213',  label: 'Algeria' },
  { code: '+376',  label: 'Andorra' },
  { code: '+244',  label: 'Angola' },
  { code: '+1268', label: 'Antigua & Barbuda' },
  { code: '+54',   label: 'Argentina' },
  { code: '+374',  label: 'Armenia' },
  { code: '+61',   label: 'Australia' },
  { code: '+43',   label: 'Austria' },
  { code: '+994',  label: 'Azerbaijan' },
  { code: '+1242', label: 'Bahamas' },
  { code: '+973',  label: 'Bahrain' },
  { code: '+880',  label: 'Bangladesh' },
  { code: '+1246', label: 'Barbados' },
  { code: '+375',  label: 'Belarus' },
  { code: '+32',   label: 'Belgium' },
  { code: '+501',  label: 'Belize' },
  { code: '+229',  label: 'Benin' },
  { code: '+975',  label: 'Bhutan' },
  { code: '+591',  label: 'Bolivia' },
  { code: '+387',  label: 'Bosnia & Herzegovina' },
  { code: '+267',  label: 'Botswana' },
  { code: '+55',   label: 'Brazil' },
  { code: '+673',  label: 'Brunei' },
  { code: '+359',  label: 'Bulgaria' },
  { code: '+226',  label: 'Burkina Faso' },
  { code: '+257',  label: 'Burundi' },
  { code: '+238',  label: 'Cabo Verde' },
  { code: '+855',  label: 'Cambodia' },
  { code: '+237',  label: 'Cameroon' },
  { code: '+1',    label: 'Canada' },
  { code: '+236',  label: 'Central African Republic' },
  { code: '+235',  label: 'Chad' },
  { code: '+56',   label: 'Chile' },
  { code: '+86',   label: 'China' },
  { code: '+57',   label: 'Colombia' },
  { code: '+269',  label: 'Comoros' },
  { code: '+243',  label: 'Congo (DRC)' },
  { code: '+242',  label: 'Congo (Republic)' },
  { code: '+506',  label: 'Costa Rica' },
  { code: '+385',  label: 'Croatia' },
  { code: '+53',   label: 'Cuba' },
  { code: '+357',  label: 'Cyprus' },
  { code: '+420',  label: 'Czech Republic' },
  { code: '+45',   label: 'Denmark' },
  { code: '+253',  label: 'Djibouti' },
  { code: '+1767', label: 'Dominica' },
  { code: '+1809', label: 'Dominican Republic' },
  { code: '+593',  label: 'Ecuador' },
  { code: '+20',   label: 'Egypt' },
  { code: '+503',  label: 'El Salvador' },
  { code: '+240',  label: 'Equatorial Guinea' },
  { code: '+291',  label: 'Eritrea' },
  { code: '+372',  label: 'Estonia' },
  { code: '+268',  label: 'Eswatini' },
  { code: '+251',  label: 'Ethiopia' },
  { code: '+679',  label: 'Fiji' },
  { code: '+358',  label: 'Finland' },
  { code: '+33',   label: 'France' },
  { code: '+241',  label: 'Gabon' },
  { code: '+220',  label: 'Gambia' },
  { code: '+995',  label: 'Georgia' },
  { code: '+49',   label: 'Germany' },
  { code: '+233',  label: 'Ghana' },
  { code: '+30',   label: 'Greece' },
  { code: '+1473', label: 'Grenada' },
  { code: '+502',  label: 'Guatemala' },
  { code: '+224',  label: 'Guinea' },
  { code: '+245',  label: 'Guinea-Bissau' },
  { code: '+592',  label: 'Guyana' },
  { code: '+509',  label: 'Haiti' },
  { code: '+504',  label: 'Honduras' },
  { code: '+36',   label: 'Hungary' },
  { code: '+354',  label: 'Iceland' },
  { code: '+91',   label: 'India' },
  { code: '+62',   label: 'Indonesia' },
  { code: '+98',   label: 'Iran' },
  { code: '+964',  label: 'Iraq' },
  { code: '+353',  label: 'Ireland' },
  { code: '+972',  label: 'Israel' },
  { code: '+39',   label: 'Italy' },
  { code: '+1876', label: 'Jamaica' },
  { code: '+81',   label: 'Japan' },
  { code: '+962',  label: 'Jordan' },
  { code: '+7',    label: 'Kazakhstan' },
  { code: '+254',  label: 'Kenya' },
  { code: '+686',  label: 'Kiribati' },
  { code: '+965',  label: 'Kuwait' },
  { code: '+996',  label: 'Kyrgyzstan' },
  { code: '+856',  label: 'Laos' },
  { code: '+371',  label: 'Latvia' },
  { code: '+961',  label: 'Lebanon' },
  { code: '+266',  label: 'Lesotho' },
  { code: '+231',  label: 'Liberia' },
  { code: '+218',  label: 'Libya' },
  { code: '+423',  label: 'Liechtenstein' },
  { code: '+370',  label: 'Lithuania' },
  { code: '+352',  label: 'Luxembourg' },
  { code: '+261',  label: 'Madagascar' },
  { code: '+265',  label: 'Malawi' },
  { code: '+60',   label: 'Malaysia' },
  { code: '+960',  label: 'Maldives' },
  { code: '+223',  label: 'Mali' },
  { code: '+356',  label: 'Malta' },
  { code: '+692',  label: 'Marshall Islands' },
  { code: '+222',  label: 'Mauritania' },
  { code: '+230',  label: 'Mauritius' },
  { code: '+52',   label: 'Mexico' },
  { code: '+691',  label: 'Micronesia' },
  { code: '+373',  label: 'Moldova' },
  { code: '+377',  label: 'Monaco' },
  { code: '+976',  label: 'Mongolia' },
  { code: '+382',  label: 'Montenegro' },
  { code: '+212',  label: 'Morocco' },
  { code: '+258',  label: 'Mozambique' },
  { code: '+95',   label: 'Myanmar' },
  { code: '+264',  label: 'Namibia' },
  { code: '+674',  label: 'Nauru' },
  { code: '+977',  label: 'Nepal' },
  { code: '+31',   label: 'Netherlands' },
  { code: '+64',   label: 'New Zealand' },
  { code: '+505',  label: 'Nicaragua' },
  { code: '+227',  label: 'Niger' },
  { code: '+234',  label: 'Nigeria' },
  { code: '+850',  label: 'North Korea' },
  { code: '+389',  label: 'North Macedonia' },
  { code: '+47',   label: 'Norway' },
  { code: '+968',  label: 'Oman' },
  { code: '+92',   label: 'Pakistan' },
  { code: '+680',  label: 'Palau' },
  { code: '+970',  label: 'Palestine' },
  { code: '+507',  label: 'Panama' },
  { code: '+675',  label: 'Papua New Guinea' },
  { code: '+595',  label: 'Paraguay' },
  { code: '+51',   label: 'Peru' },
  { code: '+63',   label: 'Philippines' },
  { code: '+48',   label: 'Poland' },
  { code: '+351',  label: 'Portugal' },
  { code: '+974',  label: 'Qatar' },
  { code: '+40',   label: 'Romania' },
  { code: '+7',    label: 'Russia' },
  { code: '+250',  label: 'Rwanda' },
  { code: '+1869', label: 'Saint Kitts & Nevis' },
  { code: '+1758', label: 'Saint Lucia' },
  { code: '+1784', label: 'Saint Vincent' },
  { code: '+685',  label: 'Samoa' },
  { code: '+378',  label: 'San Marino' },
  { code: '+239',  label: 'São Tomé & Príncipe' },
  { code: '+966',  label: 'Saudi Arabia' },
  { code: '+221',  label: 'Senegal' },
  { code: '+381',  label: 'Serbia' },
  { code: '+248',  label: 'Seychelles' },
  { code: '+232',  label: 'Sierra Leone' },
  { code: '+65',   label: 'Singapore' },
  { code: '+421',  label: 'Slovakia' },
  { code: '+386',  label: 'Slovenia' },
  { code: '+677',  label: 'Solomon Islands' },
  { code: '+252',  label: 'Somalia' },
  { code: '+27',   label: 'South Africa' },
  { code: '+82',   label: 'South Korea' },
  { code: '+211',  label: 'South Sudan' },
  { code: '+34',   label: 'Spain' },
  { code: '+94',   label: 'Sri Lanka' },
  { code: '+249',  label: 'Sudan' },
  { code: '+597',  label: 'Suriname' },
  { code: '+46',   label: 'Sweden' },
  { code: '+41',   label: 'Switzerland' },
  { code: '+963',  label: 'Syria' },
  { code: '+886',  label: 'Taiwan' },
  { code: '+992',  label: 'Tajikistan' },
  { code: '+255',  label: 'Tanzania' },
  { code: '+66',   label: 'Thailand' },
  { code: '+670',  label: 'Timor-Leste' },
  { code: '+228',  label: 'Togo' },
  { code: '+676',  label: 'Tonga' },
  { code: '+1868', label: 'Trinidad & Tobago' },
  { code: '+216',  label: 'Tunisia' },
  { code: '+90',   label: 'Turkey' },
  { code: '+993',  label: 'Turkmenistan' },
  { code: '+688',  label: 'Tuvalu' },
  { code: '+256',  label: 'Uganda' },
  { code: '+380',  label: 'Ukraine' },
  { code: '+971',  label: 'United Arab Emirates' },
  { code: '+44',   label: 'United Kingdom' },
  { code: '+1',    label: 'United States' },
  { code: '+598',  label: 'Uruguay' },
  { code: '+998',  label: 'Uzbekistan' },
  { code: '+678',  label: 'Vanuatu' },
  { code: '+379',  label: 'Vatican City' },
  { code: '+58',   label: 'Venezuela' },
  { code: '+84',   label: 'Vietnam' },
  { code: '+967',  label: 'Yemen' },
  { code: '+260',  label: 'Zambia' },
  { code: '+263',  label: 'Zimbabwe' },
];

function CountryCodePicker({ value, onChange }: { value: string; onChange: (code: string) => void }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = COUNTRY_CODES.filter(
    ({ code, label }) =>
      label.toLowerCase().includes(search.toLowerCase()) ||
      code.includes(search)
  );

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => { setOpen((o) => !o); setSearch(''); }}
        className="flex items-center gap-1 h-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm font-medium hover:bg-white/15 focus:outline-none focus:border-primary-500 transition-colors whitespace-nowrap"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Country calling code, currently ${value}`}
      >
        {value}
        <svg className={`w-3 h-3 text-white/50 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-slate-900 border border-white/15 rounded-xl shadow-2xl shadow-black/60 z-50 overflow-hidden">
          <div className="p-2 border-b border-white/10">
            <input
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
              className="w-full bg-white/10 rounded-lg px-3 py-1.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
          <ul role="listbox" className="max-h-52 overflow-y-auto">
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-sm text-white/40">No results</li>
            )}
            {filtered.map(({ code, label }) => (
              <li
                key={`${code}-${label}`}
                role="option"
                aria-selected={value === code}
                onClick={() => { onChange(code); setOpen(false); }}
                className={`flex items-center justify-between px-4 py-2 text-sm cursor-pointer transition-colors ${
                  value === code
                    ? 'bg-primary-500/20 text-primary-400'
                    : 'text-white/80 hover:bg-white/8 hover:text-white'
                }`}
              >
                <span>{label}</span>
                <span className="text-white/40 text-xs font-mono">{code}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

interface FormInputs {
  fullName: string;
  businessEmail: string;
  company: string;
  phone?: string;
  serviceNeeded: string;
  otherService?: string;
  message: string;
  preferredDate?: string;
  consent: boolean;
  website?: string;
  trainingTopic?: string;
  otherTrainingTopic?: string;
  participantCount?: string;
  deliveryFormat?: string;
  timeframe?: string;
  learningGoals?: string;
}

/** Fields surfaced in the accessible error summary, in visual order */
const SUMMARY_FIELDS: { field: keyof FormInputs; label: string }[] = [
  { field: 'fullName', label: 'Full name' },
  { field: 'businessEmail', label: 'Business email' },
  { field: 'company', label: 'Company' },
  { field: 'serviceNeeded', label: 'Service needed' },
  { field: 'otherService', label: 'Inquiry details' },
  { field: 'message', label: 'Message' },
  { field: 'consent', label: 'Privacy policy consent' },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState('+1');
  const [invalidSubmits, setInvalidSubmits] = useState(0);

  // Auto-detect country code from IP on mount
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((data) => {
        const calling = data?.country_calling_code as string | undefined;
        if (calling && COUNTRY_CODES.some((c) => c.code === calling)) {
          setCountryCode(calling);
        }
      })
      .catch(() => {}); // silently fall back to +1
  }, []);

  const searchParams = useSearchParams();
  const packageParam = searchParams.get('service') ?? '';
  const topicParam = searchParams.get('topic') ?? '';
  const typeParam = searchParams.get('type') ?? '';
  const resourceParam = (searchParams.get('resource') ?? '').slice(0, 120);

  const contactServiceOptions = [
    ...SERVICES.map((service) => ({ id: service.id, title: service.title })),
    { id: 'educational-training', title: 'Educational Training' },
  ];

  const packageToService: Record<string, string> = {
    'cloud-posture-review': 'cloud-security',
    'compliance-readiness-sprint': 'compliance',
    'remediation-acceleration': 'ai-remediation',
    training: 'corporate-training',
    educational: 'educational-training',
  };

  const initialService =
    packageToService[packageParam] ||
    packageToService[typeParam] ||
    (contactServiceOptions.some((s) => s.id === packageParam) ? packageParam : '');

  const initialTopic = TRAINING_TOPIC_OPTIONS.some((o) => o.id === topicParam) ? topicParam : '';

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<FormInputs>({
    defaultValues: {
      serviceNeeded: initialService,
      trainingTopic: initialTopic,
      consent: false,
      website: '',
      otherService: '',
      otherTrainingTopic: '',
      deliveryFormat: '',
      timeframe: '',
      message: resourceParam ? `Please send me the "${resourceParam}" download.` : '',
    },
  });

  const selectedService = watch('serviceNeeded');
  const selectedTopic = watch('trainingTopic');
  const isOtherService = selectedService === 'other';
  const isEducationalTraining = selectedService === 'educational-training';
  const isTrainingInquiry =
    selectedService === 'corporate-training' || isEducationalTraining;
  const showOtherTrainingTopic =
    isEducationalTraining && (selectedTopic === 'others' || selectedTopic === 'other');

  const summaryErrors = SUMMARY_FIELDS.filter(({ field }) => errors[field]).map(({ field, label }) => ({
    field,
    label,
    message: errors[field]?.message as string | undefined,
  }));

  const onSubmit = async (data: FormInputs) => {
    setSubmitting(true);
    setSubmitError(null);
    setInvalidSubmits(0);

    const packageLabel = ENGAGEMENT_PACKAGES.find((p) => p.id === packageParam)?.name;
    const otherDetail = data.otherService?.trim() ?? '';
    const serviceLabel =
      packageLabel ||
      (data.serviceNeeded === 'other'
        ? `Other: ${otherDetail}`
        : contactServiceOptions.find((s) => s.id === data.serviceNeeded)?.title || data.serviceNeeded);

    const trainingTopicLabel =
      data.trainingTopic === 'others' || data.trainingTopic === 'other'
        ? 'Others'
        : data.trainingTopic
          ? TRAINING_TOPIC_OPTIONS.find((o) => o.id === data.trainingTopic)?.label || data.trainingTopic
          : '';
    const deliveryFormatLabel =
      data.deliveryFormat
        ? DELIVERY_FORMAT_OPTIONS.find((o) => o.id === data.deliveryFormat)?.label || data.deliveryFormat
        : '';
    const timeframeLabel =
      data.timeframe
        ? TIMEFRAME_OPTIONS.find((o) => o.id === data.timeframe)?.label || data.timeframe
        : '';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: data.fullName,
          businessEmail: data.businessEmail,
          company: data.company,
          phone: data.phone ? `${countryCode} ${data.phone}` : '',
          serviceNeeded: serviceLabel,
          preferredDate: data.preferredDate || '',
          message: data.message,
          consent: data.consent === true,
          website: data.website || '',
          trainingTopic: trainingTopicLabel,
          otherTrainingTopic: data.otherTrainingTopic?.trim() || '',
          participantCount: data.participantCount || '',
          deliveryFormat: deliveryFormatLabel,
          timeframe: timeframeLabel,
          learningGoals: data.learningGoals || '',
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        const serverMessage = (json as { error?: string }).error;
        // Prefer the server's user-facing message; never surface stack traces or secrets.
        throw new Error(
          serverMessage ||
            `We couldn't send your message right now. Please try again shortly or email ${COMPANY_EMAIL} directly.`
        );
      }

      setSubmitted(true);
      reset();
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : `We couldn't send your message right now. Please try again shortly or email ${COMPANY_EMAIL} directly.`
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-2xl p-8 md:p-12 text-center"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary-500/40 bg-primary-500/15 text-2xl font-bold text-primary-400">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
        <p className="text-white/70">
          Your message has been sent to {COMPANY_NAME}. We typically confirm within one business day, then schedule a
          short discovery call and recommend a packaged next step.
        </p>
      </motion.div>
    );
  }

  const inputClass =
    'w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors';

  return (
    <form
      onSubmit={handleSubmit(onSubmit, () => setInvalidSubmits((n) => n + 1))}
      className="glass-effect rounded-2xl p-6 md:p-8 space-y-5 w-full"
      aria-describedby="form-sensitive-notice"
      noValidate
    >
      {/* Honeypot — hidden from users */}
      <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      {/* Persistent live region: react-hook-form moves focus to the first invalid
          field, so this announces the full list without competing for focus. */}
      <div aria-live="assertive">
        {invalidSubmits > 0 && summaryErrors.length > 0 && (
          <div
            id="form-error-summary"
            tabIndex={-1}
            className="rounded-lg border border-red-400 bg-red-50 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 dark:border-red-500/40 dark:bg-red-500/10"
          >
            <h2 className="text-sm font-semibold text-red-800 dark:text-red-200">
              {summaryErrors.length === 1
                ? 'There is 1 problem with your submission'
                : `There are ${summaryErrors.length} problems with your submission`}
            </h2>
            <ul className="mt-2 space-y-1 text-sm text-red-700 list-disc list-inside dark:text-red-200/90">
              {summaryErrors.map(({ field, label, message }) => (
                <li key={field}>
                  <a href={`#${field}`} className="underline hover:no-underline">
                    {label}: {message}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <p id="form-sensitive-notice" className="text-xs text-white/55 leading-relaxed">
        Please do not include passwords, access keys, API tokens, protected health information, or incident evidence in
        this form. We will arrange a secure channel for sensitive material. Fields marked{' '}
        <span className="text-red-600 dark:text-red-400">*</span> are required.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-white mb-1.5">
            Full Name <span className="text-red-600 dark:text-red-400">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            required
            aria-invalid={errors.fullName ? true : undefined}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            {...register('fullName', { required: 'Full name is required' })}
            className={inputClass}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-red-600 dark:text-red-400 text-xs mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Business Email */}
        <div>
          <label htmlFor="businessEmail" className="block text-sm font-semibold text-white mb-1.5">
            Business Email <span className="text-red-600 dark:text-red-400">*</span>
          </label>
          <input
            id="businessEmail"
            type="email"
            autoComplete="email"
            placeholder="john@company.com"
            required
            aria-invalid={errors.businessEmail ? true : undefined}
            aria-describedby={errors.businessEmail ? 'businessEmail-error' : undefined}
            {...register('businessEmail', {
              required: 'Email is required',
              validate: (value) => validateEmail(value) || 'Invalid email',
            })}
            className={inputClass}
          />
          {errors.businessEmail && (
            <p id="businessEmail-error" className="text-red-600 dark:text-red-400 text-xs mt-1">
              {errors.businessEmail.message}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-white mb-1.5">
            Company <span className="text-red-600 dark:text-red-400">*</span>
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            placeholder="Your Company"
            required
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={errors.company ? 'company-error' : undefined}
            {...register('company', { required: 'Company is required' })}
            className={inputClass}
          />
          {errors.company && (
            <p id="company-error" className="text-red-600 dark:text-red-400 text-xs mt-1">
              {errors.company.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-white mb-1.5">
            Phone <span className="text-white/40 font-normal">(optional)</span>
          </label>
          <div className="flex gap-2">
            <CountryCodePicker value={countryCode} onChange={setCountryCode} />
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="555 123-4567"
              {...register('phone')}
              className="flex-1 min-w-0 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>
        </div>

        {/* Service Needed */}
        <div className="sm:col-span-2">
          <label htmlFor="serviceNeeded" className="block text-sm font-semibold text-white mb-1.5">
            Service Needed <span className="text-red-600 dark:text-red-400">*</span>
          </label>
          <select
            id="serviceNeeded"
            required
            aria-invalid={errors.serviceNeeded ? true : undefined}
            aria-describedby={errors.serviceNeeded ? 'serviceNeeded-error' : undefined}
            {...register('serviceNeeded', { required: 'Please select a service' })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary-500 transition-colors"
          >
            <option value="">Select a service...</option>
            {contactServiceOptions.map((service) => (
              <option key={service.id} value={service.id} className="bg-slate-900">
                {service.title}
              </option>
            ))}
            <option value="other" className="bg-slate-900">Other</option>
          </select>
          {errors.serviceNeeded && (
            <p id="serviceNeeded-error" className="text-red-600 dark:text-red-400 text-xs mt-1">
              {errors.serviceNeeded.message}
            </p>
          )}

          {isOtherService && (
            <div className="mt-3">
              <label htmlFor="otherService" className="block text-sm font-semibold text-white mb-1.5">
                What are you enquiring about?
              </label>
              <input
                id="otherService"
                type="text"
                placeholder="Describe the service or topic you need help with..."
                aria-invalid={errors.otherService ? true : undefined}
                aria-describedby={errors.otherService ? 'otherService-error' : undefined}
                {...register('otherService', {
                  validate: (value, formValues) =>
                    formValues.serviceNeeded !== 'other' ||
                    (typeof value === 'string' && value.trim().length >= 3) ||
                    'Please describe what you are enquiring about',
                })}
                className={inputClass}
              />
              {errors.otherService && (
                <p id="otherService-error" className="text-red-600 dark:text-red-400 text-xs mt-1">
                  {errors.otherService.message}
                </p>
              )}
            </div>
          )}

          {isTrainingInquiry && (
            <div className="mt-5 space-y-5 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 sm:p-5">
              <p className="text-sm text-white/70">
                Optional details help us understand your training preferences. Format and timeframe are preferences,
                not commitments.
              </p>

              <div>
                <label htmlFor="trainingTopic" className="block text-sm font-semibold text-white mb-1.5">
                  Training topic{' '}
                  <span className="text-white/40 font-normal">(optional)</span>
                </label>
                <select
                  id="trainingTopic"
                  {...register('trainingTopic')}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary-500 transition-colors"
                >
                  <option value="" className="bg-slate-900">
                    Select a topic area...
                  </option>
                  {TRAINING_CATEGORIES.map((category) => (
                    <optgroup key={category.id} label={category.title} className="bg-slate-900">
                      {TRAINING_TOPIC_OPTIONS.filter((o) => o.categoryId === category.id).map((option) => (
                        <option key={option.id} value={option.id} className="bg-slate-900">
                          {option.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  {isEducationalTraining ? (
                    <option value="others" className="bg-slate-900">
                      Others
                    </option>
                  ) : (
                    <option value="other" className="bg-slate-900">
                      Other / multiple areas
                    </option>
                  )}
                </select>
              </div>

              {showOtherTrainingTopic && (
                <div>
                  <label htmlFor="otherTrainingTopic" className="block text-sm font-semibold text-white mb-1.5">
                    Other topic details{' '}
                    <span className="text-white/40 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="otherTrainingTopic"
                    rows={3}
                    placeholder="Type any additional information about the topic you need"
                    aria-describedby="otherTrainingTopic-hint"
                    {...register('otherTrainingTopic')}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  />
                  <p id="otherTrainingTopic-hint" className="text-white/45 text-xs mt-1.5">
                    Use this field for any topic or details that are not listed above.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="participantCount" className="block text-sm font-semibold text-white mb-1.5">
                    Approximate participant count{' '}
                    <span className="text-white/40 font-normal">(optional)</span>
                  </label>
                  <input
                    id="participantCount"
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 25"
                    {...register('participantCount')}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="deliveryFormat" className="block text-sm font-semibold text-white mb-1.5">
                    Preferred delivery format{' '}
                    <span className="text-white/40 font-normal">(optional)</span>
                  </label>
                  <select
                    id="deliveryFormat"
                    {...register('deliveryFormat')}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  >
                    {DELIVERY_FORMAT_OPTIONS.map((option) => (
                      <option key={option.id || 'empty'} value={option.id} className="bg-slate-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeframe" className="block text-sm font-semibold text-white mb-1.5">
                  Preferred timeframe{' '}
                  <span className="text-white/40 font-normal">(optional)</span>
                </label>
                <select
                  id="timeframe"
                  {...register('timeframe')}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary-500 transition-colors"
                >
                  {TIMEFRAME_OPTIONS.map((option) => (
                    <option key={option.id || 'empty'} value={option.id} className="bg-slate-900">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="learningGoals" className="block text-sm font-semibold text-white mb-1.5">
                  Learning goals{' '}
                  <span className="text-white/40 font-normal">(optional)</span>
                </label>
                <textarea
                  id="learningGoals"
                  rows={3}
                  placeholder="What should participants be able to do or understand afterward?"
                  {...register('learningGoals')}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Preferred Date */}
        <div className="sm:col-span-2">
          <label htmlFor="preferredDate" className="block text-sm font-semibold text-white mb-1.5">
            Preferred Consultation Date{' '}
            <span className="text-white/40 font-normal">(Optional)</span>
          </label>
          <input id="preferredDate" type="date" {...register('preferredDate')} className={inputClass} />
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-white mb-1.5">
            Message <span className="text-red-600 dark:text-red-400">*</span>
          </label>
          <textarea
            id="message"
            placeholder="Tell us about your security needs and challenges..."
            required
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? 'message-error' : undefined}
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' },
            })}
            rows={4}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors resize-none"
          />
          {errors.message && (
            <p id="message-error" className="text-red-600 dark:text-red-400 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          required
          aria-invalid={errors.consent ? true : undefined}
          aria-describedby={errors.consent ? 'consent-error' : undefined}
          {...register('consent', { required: 'You must agree to the privacy policy' })}
          className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10 text-primary-500 focus:ring-primary-400"
        />
        <label htmlFor="consent" className="text-sm text-white/70 leading-relaxed">
          I agree to the{' '}
          <a href="/privacy" className="text-primary-400 hover:underline" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{' '}
          and consent to {COMPANY_NAME} contacting me about my inquiry. <span className="text-red-600 dark:text-red-400">*</span>
        </label>
      </div>
      {errors.consent && (
        <p id="consent-error" className="text-red-600 dark:text-red-400 text-xs">
          {errors.consent.message}
        </p>
      )}

      {submitError && <p className="text-red-600 dark:text-red-400 text-sm" role="alert">{submitError}</p>}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
        {submitting ? 'Sending...' : 'Submit Inquiry'}
      </Button>
    </form>
  );
}
