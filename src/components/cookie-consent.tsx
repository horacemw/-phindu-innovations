'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const KEY = 'phindu-cookies';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const t = setTimeout(() => {
      if (!localStorage.getItem(KEY)) setShow(true);
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  const dismiss = (value: 'accepted' | 'declined') => {
    localStorage.setItem(KEY, value);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-40 max-w-md md:bottom-8 md:right-8"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="glass rounded-3xl p-5 shadow-card">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                <Cookie className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg text-primary dark:text-white">A quick cookie note</h3>
                <p className="mt-1 text-sm text-primary/70 dark:text-white/70">
                  We use essential cookies to run the site and optional analytics to improve it. You can change your mind
                  anytime in settings.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => dismiss('accepted')}
                    className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-bg hover:bg-primary-700 dark:bg-white dark:text-primary"
                  >
                    Accept all
                  </button>
                  <button
                    onClick={() => dismiss('declined')}
                    className="rounded-full border border-primary/10 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/5 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Only essential
                  </button>
                </div>
              </div>
              <button
                onClick={() => setShow(false)}
                aria-label="Dismiss"
                className="rounded-full p-1 text-primary/50 hover:bg-primary/5 hover:text-primary dark:text-white/50 dark:hover:bg-white/5"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
