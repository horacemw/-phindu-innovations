'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fish, Droplets, Wheat, DollarSign, Ruler, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';

type Tab = 'pond' | 'water' | 'feed' | 'roi' | 'cost';

const tabs: { id: Tab; label: string; icon: typeof Fish }[] = [
  { id: 'pond', label: 'Pond size', icon: Ruler },
  { id: 'water', label: 'Water volume', icon: Droplets },
  { id: 'feed', label: 'Fish feed', icon: Wheat },
  { id: 'roi', label: 'ROI', icon: DollarSign },
  { id: 'cost', label: 'Cost estimator', icon: Calculator },
];

export function Calculators() {
  const [active, setActive] = useState<Tab>('pond');

  return (
    <div id="calculators" className="overflow-hidden rounded-4xl border border-primary/[0.06] bg-white shadow-card dark:border-white/[0.06] dark:bg-white/[0.02]">
      <div className="flex flex-wrap gap-1 border-b border-primary/5 bg-primary/[0.02] p-2 dark:border-white/5 dark:bg-white/[0.02]">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition',
              active === t.id
                ? 'bg-primary text-bg dark:bg-white dark:text-primary'
                : 'text-primary/60 hover:bg-primary/5 hover:text-primary dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white',
            )}
          >
            <t.icon className="h-4 w-4" />
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-6 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {active === 'pond' && <PondCalc />}
            {active === 'water' && <WaterCalc />}
            {active === 'feed' && <FeedCalc />}
            {active === 'roi' && <RoiCalc />}
            {active === 'cost' && <CostCalc />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Result({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-3xl border border-primary/5 bg-bg p-6 dark:border-white/5 dark:bg-white/[0.02]">
      <p className="text-xs font-semibold uppercase tracking-widest text-secondary">{label}</p>
      <p className="mt-2 font-display text-3xl text-primary dark:text-white">{value}</p>
      {sub && <p className="mt-1 text-xs text-primary/50 dark:text-white/50">{sub}</p>}
    </div>
  );
}

function NumField({
  label,
  value,
  onChange,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-secondary">{label}</label>
      <div className="mt-2 flex items-center gap-2 rounded-2xl border border-primary/10 bg-transparent px-4 py-2 dark:border-white/10">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="w-full bg-transparent text-lg font-semibold text-primary outline-none dark:text-white"
        />
        {suffix && <span className="text-sm font-semibold text-primary/50 dark:text-white/50">{suffix}</span>}
      </div>
    </div>
  );
}

function PondCalc() {
  const [len, setLen] = useState(20);
  const [wid, setWid] = useState(10);
  const [dep, setDep] = useState(1.5);
  const [density, setDensity] = useState(4);

  const area = useMemo(() => len * wid, [len, wid]);
  const volume = useMemo(() => area * dep, [area, dep]);
  const stocking = useMemo(() => Math.round(area * density), [area, density]);
  const yieldKg = useMemo(() => Math.round((stocking * 0.32 * 0.9) / 1), [stocking]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-4">
        <NumField label="Length" value={len} onChange={setLen} suffix="m" />
        <NumField label="Width" value={wid} onChange={setWid} suffix="m" />
        <NumField label="Average depth" value={dep} onChange={setDep} suffix="m" />
        <NumField label="Stocking density" value={density} onChange={setDensity} suffix="fish/m²" />
        <p className="text-xs text-primary/60 dark:text-white/60">
          Default density 4 fish/m² assumes semi-intensive Tilapia farming with light aeration.
        </p>
      </div>
      <div className="grid gap-4">
        <Result label="Surface area" value={`${area.toLocaleString()} m²`} />
        <Result label="Water volume" value={`${volume.toLocaleString()} m³`} sub="(1 m³ = 1,000 litres)" />
        <Result label="Stocking (fingerlings)" value={stocking.toLocaleString()} />
        <Result label="Estimated yield" value={`${yieldKg.toLocaleString()} kg`} sub="Per production cycle at 300g finish weight" />
      </div>
    </div>
  );
}

function WaterCalc() {
  const [shape, setShape] = useState<'rect' | 'circle'>('rect');
  const [a, setA] = useState(20);
  const [b, setB] = useState(10);
  const [d, setD] = useState(1.5);
  const volume = useMemo(() => {
    if (shape === 'rect') return a * b * d;
    const r = a / 2;
    return Math.PI * r * r * d;
  }, [shape, a, b, d]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-widest text-secondary">Shape</label>
          <div className="mt-2 inline-flex rounded-full border border-primary/10 p-1 dark:border-white/10">
            {(['rect', 'circle'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setShape(s)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-xs font-semibold transition',
                  shape === s ? 'bg-primary text-bg dark:bg-white dark:text-primary' : 'text-primary/60 dark:text-white/60',
                )}
              >
                {s === 'rect' ? 'Rectangle' : 'Circle'}
              </button>
            ))}
          </div>
        </div>
        <NumField label={shape === 'rect' ? 'Length' : 'Diameter'} value={a} onChange={setA} suffix="m" />
        {shape === 'rect' && <NumField label="Width" value={b} onChange={setB} suffix="m" />}
        <NumField label="Average depth" value={d} onChange={setD} suffix="m" />
      </div>
      <div className="grid gap-4">
        <Result label="Water volume" value={`${volume.toFixed(1)} m³`} />
        <Result label="In litres" value={`${(volume * 1000).toLocaleString()} L`} />
        <Result
          label="Recommended DO monitoring"
          value={volume > 500 ? 'Every 4 hrs' : 'Twice daily'}
          sub="Use a calibrated DO meter, especially at dawn."
        />
      </div>
    </div>
  );
}

function FeedCalc() {
  const [biomass, setBiomass] = useState(500);
  const [rate, setRate] = useState(3);
  const [days, setDays] = useState(30);
  const dailyKg = useMemo(() => (biomass * rate) / 100, [biomass, rate]);
  const totalKg = useMemo(() => dailyKg * days, [dailyKg, days]);
  const bags = useMemo(() => Math.ceil(totalKg / 25), [totalKg]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-4">
        <NumField label="Total fish biomass" value={biomass} onChange={setBiomass} suffix="kg" />
        <NumField label="Feeding rate" value={rate} onChange={setRate} suffix="% of biomass" />
        <NumField label="Days" value={days} onChange={setDays} suffix="days" />
        <p className="text-xs text-primary/60 dark:text-white/60">
          Typical rates: 5% for fry, 3% for grower, 2% for finisher.
        </p>
      </div>
      <div className="grid gap-4">
        <Result label="Daily feed" value={`${dailyKg.toFixed(2)} kg`} />
        <Result label="Total feed" value={`${totalKg.toFixed(0)} kg`} sub={`≈ ${bags} × 25 kg bags`} />
        <Result label="Bags needed" value={`${bags} bags`} />
      </div>
    </div>
  );
}

function RoiCalc() {
  const [investment, setInvestment] = useState(15000);
  const [yieldKg, setYield] = useState(4800);
  const [price, setPrice] = useState(3.5);
  const [opex, setOpex] = useState(6000);
  const revenue = yieldKg * price;
  const profit = revenue - opex;
  const roi = investment > 0 ? (profit / investment) * 100 : 0;
  const payback = profit > 0 ? investment / profit : 0;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-4">
        <NumField label="Initial investment" value={investment} onChange={setInvestment} suffix="USD" />
        <NumField label="Annual yield" value={yieldKg} onChange={setYield} suffix="kg" />
        <NumField label="Farmgate price" value={price} onChange={setPrice} suffix="USD/kg" />
        <NumField label="Annual OPEX" value={opex} onChange={setOpex} suffix="USD" />
      </div>
      <div className="grid gap-4">
        <Result label="Annual revenue" value={`$${revenue.toLocaleString()}`} />
        <Result label="Annual profit" value={`$${profit.toLocaleString()}`} />
        <Result label="ROI" value={`${roi.toFixed(1)}%`} />
        <Result label="Payback period" value={payback ? `${payback.toFixed(1)} yrs` : '—'} />
      </div>
    </div>
  );
}

function CostCalc() {
  const [type, setType] = useState<'earthen' | 'lined' | 'concrete' | 'aquaponics'>('earthen');
  const [size, setSize] = useState(200);
  const rates: Record<typeof type, number> = { earthen: 12, lined: 22, concrete: 40, aquaponics: 65 };
  const soft = size * rates[type];
  const engineering = soft * 0.12;
  const contingency = soft * 0.1;
  const total = soft + engineering + contingency;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-widest text-secondary">Project type</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(['earthen', 'lined', 'concrete', 'aquaponics'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={cn(
                  'rounded-full border px-3 py-1.5 text-xs font-semibold capitalize transition',
                  type === t
                    ? 'border-primary bg-primary text-bg dark:border-white dark:bg-white dark:text-primary'
                    : 'border-primary/10 text-primary/70 hover:border-primary/20 dark:border-white/10 dark:text-white/70',
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <NumField label="Total surface area" value={size} onChange={setSize} suffix="m²" />
        <p className="text-xs text-primary/60 dark:text-white/60">
          Rough order-of-magnitude estimates only. A site visit gives you a fixed-price quote.
        </p>
      </div>
      <div className="grid gap-4">
        <Result label="Construction" value={`$${soft.toLocaleString()}`} />
        <Result label="Engineering & permits" value={`$${engineering.toLocaleString()}`} />
        <Result label="Contingency" value={`$${contingency.toLocaleString()}`} />
        <div className="rounded-3xl border border-secondary/40 bg-secondary/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">All-in estimate</p>
          <p className="mt-2 font-display text-4xl text-primary dark:text-white">${total.toLocaleString()}</p>
          <p className="mt-1 text-xs text-primary/60 dark:text-white/60">
            Excludes water source, roads and hatchery unless specified.
          </p>
        </div>
      </div>
    </div>
  );
}
