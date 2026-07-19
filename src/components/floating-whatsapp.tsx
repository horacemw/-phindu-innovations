'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { site } from '@/lib/site';

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Phindu Innovations, I'd like to learn more about your services.",
  )}`;

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed bottom-5 left-5 z-40 md:bottom-8 md:left-8">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mb-3 w-[300px] overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-card dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="flex items-center gap-3 bg-[#25D366] p-4 text-white">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-white/20 backdrop-blur">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">Phindu Support</p>
                <p className="text-xs text-white/85">Typically replies in a few minutes</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="ml-auto rounded-full p-1 text-white/80 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4">
              <div className="rounded-2xl bg-primary/5 p-3 text-sm text-primary/85 dark:bg-white/5 dark:text-white/80">
                Hi there 👋 — how can we help you today? Ask us about pond design, feed, training or a project quote.
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1EBE58]"
              >
                <MessageCircle className="h-4 w-4" />
                Start chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-card"
        aria-label="Open WhatsApp chat"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60" />
        <MessageCircle className="h-6 w-6 transition-transform group-hover:scale-110" />
      </motion.button>
    </div>
  );
}
