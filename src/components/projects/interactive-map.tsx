'use client';

import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const pins = [
  { name: 'Liwonde (Featured)', top: '58%', left: '54%', highlight: true },
  { name: 'Lilongwe', top: '42%', left: '46%' },
  { name: 'Blantyre', top: '72%', left: '52%' },
  { name: 'Mzimba', top: '20%', left: '40%' },
  { name: 'Zomba', top: '65%', left: '55%' },
  { name: 'Salima', top: '48%', left: '52%' },
];

export function InteractiveMap() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-primary/[0.06] bg-gradient-to-br from-primary via-primary-700 to-secondary shadow-card">
      <div className="absolute inset-0 opacity-30 grid-bg" />
      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full opacity-70" aria-hidden>
        <defs>
          <linearGradient id="malawi-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F0E5C2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1F6E8C" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Stylised Malawi outline */}
        <path
          d="M180 40 C 195 55, 205 75, 200 95 C 210 105, 220 125, 215 140 C 225 155, 220 175, 230 195 C 245 210, 240 230, 220 245 C 210 265, 220 285, 235 300 C 250 320, 245 345, 220 370 C 205 395, 215 420, 195 450 C 175 465, 165 445, 170 425 C 155 405, 165 380, 155 360 C 140 340, 150 315, 165 295 C 155 275, 145 255, 160 235 C 150 215, 155 190, 170 175 C 160 155, 165 130, 175 115 C 170 95, 175 65, 180 40 Z"
          fill="url(#malawi-gradient)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
        />
      </svg>

      {pins.map((p, i) => (
        <motion.button
          key={p.name}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`group absolute -translate-x-1/2 -translate-y-full ${p.highlight ? 'z-10' : ''}`}
          style={{ top: p.top, left: p.left }}
        >
          <div className="relative flex flex-col items-center">
            {p.highlight && (
              <span className="absolute -inset-2 animate-ping rounded-full bg-accent/60" />
            )}
            <span
              className={`relative grid h-8 w-8 place-items-center rounded-full text-white shadow-glow ${
                p.highlight ? 'bg-accent' : 'bg-secondary'
              }`}
            >
              <MapPin className="h-4 w-4" />
            </span>
            <span
              className={`mt-1 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                p.highlight
                  ? 'bg-accent text-white'
                  : 'bg-white/90 text-primary'
              }`}
            >
              {p.name}
            </span>
          </div>
        </motion.button>
      ))}

      <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-black/30 p-4 text-white backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-300">Coverage</p>
        <p className="mt-1 font-display text-lg leading-tight">
          Projects delivered across 12+ districts in Malawi
        </p>
      </div>
    </div>
  );
}
