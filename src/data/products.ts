export type Product = {
  slug: string;
  name: string;
  category: 'Fingerlings' | 'Fish Feed' | 'Broodstock' | 'Fish Nets' | 'Farm Equipment' | 'Water Testing Equipment';
  price: string;
  unit: string;
  image: string;
  description: string;
  features: string[];
  spec?: Record<string, string>;
};

export const products: Product[] = [
  {
    slug: 'tilapia-fingerlings-3-5g',
    name: 'Tilapia Fingerlings · 3–5g',
    category: 'Fingerlings',
    price: 'MWK 80',
    unit: 'per fingerling',
    image: '/images/products/fingerlings.svg',
    description:
      'Health-certified Nile Tilapia fingerlings from monitored broodstock. Delivered in aerated transport tanks with survival guarantee.',
    features: ['Certified disease-free', 'Uniform grading', 'Aerated delivery', 'Stocking advisory included'],
    spec: { Species: 'Oreochromis niloticus', Weight: '3–5g', 'Minimum order': '500' },
  },
  {
    slug: 'tilapia-fingerlings-10-15g',
    name: 'Tilapia Fingerlings · 10–15g',
    category: 'Fingerlings',
    price: 'MWK 140',
    unit: 'per fingerling',
    image: '/images/products/fingerlings.svg',
    description:
      'Advanced-stage fingerlings for faster grow-out cycles. Ideal for producers targeting shorter production windows.',
    features: ['Faster time-to-market', 'Robust survivability', 'Health certified', 'Nationwide delivery'],
    spec: { Species: 'Oreochromis niloticus', Weight: '10–15g', 'Minimum order': '300' },
  },
  {
    slug: 'chambo-fingerlings',
    name: 'Chambo Fingerlings',
    category: 'Fingerlings',
    price: 'MWK 120',
    unit: 'per fingerling',
    image: '/images/services/broodstock.svg',
    description:
      'Indigenous Oreochromis shiranus (Chambo) fingerlings for cultural preference and stronger premium market positioning.',
    features: ['Indigenous species', 'Premium market demand', 'Health certified', 'Selected broodstock'],
    spec: { Species: 'Oreochromis shiranus', Weight: '5–8g', 'Minimum order': '500' },
  },
  {
    slug: 'starter-crumble',
    name: 'Starter Crumble Feed',
    category: 'Fish Feed',
    price: 'MWK 3,200',
    unit: 'per 25 kg bag',
    image: '/images/services/feed.svg',
    description:
      'High-protein starter feed formulated for fry and early fingerling stages. Uniform crumble with high water stability.',
    features: ['42% crude protein', 'Micro-nutrient fortified', '25 kg bag', 'Batch traceability'],
    spec: { Protein: '42%', 'Pellet size': '0.5–1.2 mm', 'Bag weight': '25 kg' },
  },
  {
    slug: 'grower-pellet-3mm',
    name: 'Grower Pellet · 3mm Floating',
    category: 'Fish Feed',
    price: 'MWK 2,800',
    unit: 'per 25 kg bag',
    image: '/images/services/feed.svg',
    description:
      'Extruded floating pellet designed for the grow-out phase. Optimised FCR when fed on schedule.',
    features: ['32% crude protein', 'Floating pellet', 'FCR 1.6 target', 'Bulk discounts'],
    spec: { Protein: '32%', 'Pellet size': '3 mm', 'Bag weight': '25 kg' },
  },
  {
    slug: 'finisher-pellet',
    name: 'Finisher Pellet · 4.5mm',
    category: 'Fish Feed',
    price: 'MWK 2,600',
    unit: 'per 25 kg bag',
    image: '/images/services/feed.svg',
    description:
      'Cost-optimised finisher formulation for the last stage of grow-out. Sinks slowly for controlled ration delivery.',
    features: ['28% crude protein', 'Slow-sinking', 'Cost-optimised', 'Trace-mineral blend'],
    spec: { Protein: '28%', 'Pellet size': '4.5 mm', 'Bag weight': '25 kg' },
  },
  {
    slug: 'broodstock-tilapia',
    name: 'Tilapia Broodstock',
    category: 'Broodstock',
    price: 'MWK 8,500',
    unit: 'per fish',
    image: '/images/services/broodstock.svg',
    description:
      'Performance-recorded broodstock for hatchery multiplication. Delivered with pedigree records and health certificate.',
    features: ['Pedigree records', 'Health certified', 'Aerated transport', 'Hatchery setup support'],
  },
  {
    slug: 'seine-net',
    name: 'Seine Net · 30m',
    category: 'Fish Nets',
    price: 'MWK 185,000',
    unit: 'per net',
    image: '/images/services/net.svg',
    description:
      'Reinforced 30m seine with lead line and float line — ready for harvest of standard pond widths.',
    features: ['30m x 3m', 'Reinforced lead line', 'Repair kit included', 'UV-treated mesh'],
  },
  {
    slug: 'hapa-net',
    name: 'Hapa Net',
    category: 'Fish Nets',
    price: 'MWK 42,000',
    unit: 'per unit',
    image: '/images/services/net.svg',
    description:
      'Fry-holding hapa nets for hatcheries and nursery ponds. Available in standard and custom sizes.',
    features: ['Custom sizes', 'Fine mesh', 'Reinforced corners', 'Suspension ropes included'],
  },
  {
    slug: 'aerator-1hp',
    name: 'Pond Aerator · 1 HP',
    category: 'Farm Equipment',
    price: 'MWK 620,000',
    unit: 'per aerator',
    image: '/images/products/aerator.svg',
    description:
      'Paddlewheel surface aerator for grow-out ponds. Increases dissolved oxygen and mixes the water column.',
    features: ['1 HP motor', 'Weatherised finish', 'Solar upgrade option', '12-month warranty'],
  },
  {
    slug: 'do-meter',
    name: 'Dissolved Oxygen Meter',
    category: 'Water Testing Equipment',
    price: 'MWK 320,000',
    unit: 'per unit',
    image: '/images/products/do-meter.svg',
    description:
      'Professional-grade portable DO meter with temperature compensation and IP67-rated probe.',
    features: ['0–20 mg/L range', 'IP67 probe', 'Calibration solution', 'Field carry case'],
  },
  {
    slug: 'water-test-kit',
    name: 'Complete Water Test Kit',
    category: 'Water Testing Equipment',
    price: 'MWK 145,000',
    unit: 'per kit',
    image: '/images/services/lab.svg',
    description:
      'On-farm test kit covering pH, ammonia, nitrite, alkalinity and hardness. Refill reagents available.',
    features: ['5-parameter kit', 'Reagent refills', 'Farmer training card', 'Rugged carry case'],
  },
];

export const productCategories = [
  'All',
  'Fingerlings',
  'Fish Feed',
  'Broodstock',
  'Fish Nets',
  'Farm Equipment',
  'Water Testing Equipment',
] as const;
