'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Fish } from 'lucide-react';
import { cn } from '@/lib/utils';

type Msg = { role: 'user' | 'assistant'; text: string };

const canned = [
  {
    q: 'How much does a fish pond cost?',
    a: 'A 10m × 20m earthen pond typically costs USD 1,800 – 3,500 depending on soil type, water source and lining. Use our Cost Estimator on the Contact page or request a free site assessment.',
  },
  {
    q: 'Do you sell fingerlings?',
    a: 'Yes — we supply certified Oreochromis shiranus (Chambo) and improved Nile Tilapia fingerlings, 3-5g and 10-15g grades. Delivery available across Malawi.',
  },
  {
    q: 'What is aquaponics?',
    a: 'Aquaponics combines fish farming and hydroponic vegetables in one closed system: fish waste feeds plants, plants clean the water. Great for schools, urban plots and controlled-environment farms.',
  },
  {
    q: 'Do you offer training?',
    a: 'We run Farmer Field Schools (5 days), Corporate Modules, Online Courses and 3-month Internships. Certification is recognised by leading NGOs.',
  },
  {
    q: 'How fast can you start a project?',
    a: 'Small ponds: 2-3 weeks. Compound systems: 8-14 weeks. Civil engineering works: quoted per scope after a site assessment.',
  },
];

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      text: "Hi, I'm Phindu — your engineering assistant. Ask me about ponds, feed, training or projects.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const respond = (question: string) => {
    const q = question.toLowerCase();
    const match = canned.find((c) => q.includes(c.q.split(' ')[2] ?? '') || c.q.toLowerCase().includes(q));
    return (
      match?.a ||
      "Great question — let me connect you with our team. Please share your name, location and what you're building at phinduinnovations26@gmail.com or WhatsApp +265 999 515 333."
    );
  };

  const send = (text?: string) => {
    const value = text ?? input.trim();
    if (!value) return;
    setMessages((m) => [...m, { role: 'user', text: value }]);
    setInput('');
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'assistant', text: respond(value) }]);
    }, 500);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 md:bottom-8 md:right-8"
        aria-label="Open AI assistant"
      >
        <Sparkles className="h-4 w-4 animate-pulse" />
        <span className="hidden sm:inline">Ask Phindu AI</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end justify-end bg-primary/40 p-4 backdrop-blur-sm md:p-8"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex h-[600px] max-h-[85vh] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-card dark:border-white/10 dark:bg-[#0F1E24]"
            >
              <div className="flex items-center gap-3 border-b border-primary/5 bg-gradient-brand p-4 text-white">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
                  <Fish className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold">Phindu AI Assistant</p>
                  <p className="text-xs text-white/70">Online · Powered by our engineering knowledge base</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="ml-auto rounded-full p-1 text-white/80 hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={cn('flex', m.role === 'user' ? 'justify-end' : 'justify-start')}
                  >
                    <div
                      className={cn(
                        'max-w-[85%] rounded-2xl px-4 py-2.5 text-sm',
                        m.role === 'user'
                          ? 'bg-primary text-white dark:bg-white dark:text-primary'
                          : 'bg-primary/5 text-primary dark:bg-white/5 dark:text-white/90',
                      )}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}

                <div className="pt-2">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary/50 dark:text-white/40">
                    Suggested
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {canned.slice(0, 4).map((c) => (
                      <button
                        key={c.q}
                        onClick={() => send(c.q)}
                        className="rounded-full border border-primary/10 bg-white px-3 py-1.5 text-xs text-primary transition hover:border-secondary/40 hover:bg-secondary/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                      >
                        {c.q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
                className="border-t border-primary/5 p-3 dark:border-white/10"
              >
                <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.02] pl-4 pr-1 dark:border-white/10 dark:bg-white/[0.02]">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about ponds, feed, training…"
                    className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-primary/40 dark:placeholder:text-white/40"
                  />
                  <button
                    type="submit"
                    aria-label="Send"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-700 dark:bg-white dark:text-primary"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
