'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';

const services = [
  'Aquaculture Engineering',
  'Aquaponics System',
  'Pond Construction',
  'Flood Protection',
  'Drainage',
  'Water Supply',
  'Fingerlings',
  'Fish Feed',
  'Training',
  'Feasibility Study',
  'Business Planning',
  'Emergency Support',
];

const budgets = ['< $5,000', '$5k – $25k', '$25k – $100k', '$100k – $500k', '$500k +'];
const timelines = ['Right away', '1–3 months', '3–6 months', '6–12 months', 'Just exploring'];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [selected, setSelected] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('');

  const toggle = (s: string) =>
    setSelected((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 800));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="grid place-items-center rounded-4xl border border-primary/[0.06] bg-white p-12 text-center shadow-card dark:border-white/[0.06] dark:bg-white/[0.02]"
      >
        <div className="grid h-14 w-14 place-items-center rounded-full bg-secondary/15 text-secondary">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-6 font-display text-3xl text-primary dark:text-white">Message received.</h3>
        <p className="mt-3 max-w-md text-primary/70 dark:text-white/70">
          Thank you. A member of our team will respond within one working day. For urgent matters, call our
          emergency hotline on +265 999 515 333.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setSelected([]);
            setBudget('');
            setTimeline('');
          }}
          className="btn-ghost mt-8"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-4xl border border-primary/[0.06] bg-white p-6 shadow-soft dark:border-white/[0.06] dark:bg-white/[0.02] md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" name="name" required placeholder="Your name" />
        <Field label="Organisation" name="org" placeholder="Company or NGO (optional)" />
        <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
        <Field label="Phone / WhatsApp" name="phone" required placeholder="+265 …" />
      </div>

      <fieldset className="mt-6">
        <legend className="text-xs font-semibold uppercase tracking-widest text-secondary">
          What can we help with?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggle(s)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                selected.includes(s)
                  ? 'border-primary bg-primary text-bg dark:border-white dark:bg-white dark:text-primary'
                  : 'border-primary/10 text-primary/70 hover:border-primary/20 hover:text-primary dark:border-white/10 dark:text-white/70 dark:hover:border-white/20 dark:hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <legend className="text-xs font-semibold uppercase tracking-widest text-secondary">Estimated budget</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {budgets.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBudget(b)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  budget === b
                    ? 'border-secondary bg-secondary/10 text-secondary'
                    : 'border-primary/10 text-primary/70 hover:border-primary/20 dark:border-white/10 dark:text-white/70'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
        <div>
          <legend className="text-xs font-semibold uppercase tracking-widest text-secondary">Timeline</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {timelines.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTimeline(t)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  timeline === t
                    ? 'border-secondary bg-secondary/10 text-secondary'
                    : 'border-primary/10 text-primary/70 hover:border-primary/20 dark:border-white/10 dark:text-white/70'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label className="text-xs font-semibold uppercase tracking-widest text-secondary" htmlFor="message">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-2xl border border-primary/10 bg-transparent px-4 py-3 text-sm text-primary outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20 dark:border-white/10 dark:text-white"
          placeholder="Location, site conditions, goals, anything you would like us to know…"
        />
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 border-t border-primary/5 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
        <p className="text-xs text-primary/60 dark:text-white/60">
          We reply within 1 working day. Your details are kept private.
        </p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary group"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
          <Send className="h-4 w-4 transition-transform group-hover:-rotate-45" />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-widest text-secondary">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-primary/10 bg-transparent px-4 py-3 text-sm text-primary outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20 dark:border-white/10 dark:text-white"
      />
    </div>
  );
}
