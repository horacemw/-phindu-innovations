export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Chikondi Banda',
    role: 'Programme Manager, Concern Universal',
    quote:
      'Phindu delivered our 8-pond community farm on time, on budget and with training that stuck. Our beneficiaries now run it independently.',
    rating: 5,
  },
  {
    name: 'Thoko Msukwa',
    role: 'Commercial Farmer, Salima',
    quote:
      'Their engineering advice fixed a persistent oxygen problem that no one else had diagnosed. Harvest weights are up 22% this cycle.',
    rating: 5,
  },
  {
    name: 'Grace Phiri',
    role: 'District Fisheries Officer',
    quote:
      "We refer smallholder farmers to Phindu for training and pond construction. The quality is consistently better than what we've seen from other firms.",
    rating: 5,
  },
  {
    name: 'Dr. Isaac Kaunda',
    role: 'Researcher, LUANAR',
    quote:
      'They built and commissioned our hatchery aquaponics research unit. Documentation and calibration were textbook — a genuinely engineered installation.',
    rating: 5,
  },
  {
    name: 'Mercy Chirwa',
    role: 'Founder, GreenGrow Farms',
    quote:
      'The business plan Phindu prepared was accepted by our lender without a single revision. Their financial modelling is meticulous.',
    rating: 5,
  },
  {
    name: 'Peter Nyirenda',
    role: 'Chief, Traditional Authority Liwonde',
    quote:
      'The compound they built brought jobs and food security to our community. We consider them partners, not just contractors.',
    rating: 5,
  },
];
