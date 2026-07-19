export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  client: string;
  category: string;
  cover: string;
  gallery: string[];
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  stats: { label: string; value: string }[];
  timeline: { phase: string; period: string; description: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: '12-pond-aquaculture-compound-liwonde',
    title: '12-Pond Aquaculture Compound',
    location: 'Liwonde, Malawi',
    year: '2024–2025',
    client: 'Private commercial farm',
    category: 'Aquaculture Engineering',
    cover: '/images/services/drone.svg',
    gallery: [
      '/images/services/pond.svg',
      '/images/services/farm-visit.svg',
      '/images/services/tanks.svg',
      '/images/services/drone.svg',
    ],
    summary:
      'A 12-pond commercial Tilapia grow-out compound on a 4-hectare parcel, complete with hatchery, feed store, staff housing and a solar-powered water supply.',
    challenge:
      'The site had highly variable soils with a perched water table on the eastern edge and a seasonal stream running its full length. Existing farmers in the area had lost stock twice to flooding.',
    solution:
      'We conducted soil investigations at 22 test pits, remodelled the topography, elevated pond bunds on the flood-prone edge and built a diversion drain into a lined attenuation pond that doubles as an emergency water source.',
    outcome:
      'Twelve ponds averaging 800m² each, targeting 42–48 tonnes of Tilapia per production cycle, with automated feeding, DO monitoring and a small hatchery producing 300,000 fingerlings annually.',
    stats: [
      { label: 'Ponds', value: '12' },
      { label: 'Total water surface', value: '9,600 m²' },
      { label: 'Annual production', value: '42–48 t' },
      { label: 'Direct jobs created', value: '38' },
    ],
    timeline: [
      { phase: 'Site & feasibility', period: 'Q1 2024', description: 'Soil, hydrology and market study.' },
      { phase: 'Design & permitting', period: 'Q2 2024', description: 'Detailed engineering drawings, environmental screening, permits.' },
      { phase: 'Earthworks', period: 'Q3 2024', description: 'Bulk earthworks, bund compaction, diversion drain.' },
      { phase: 'Structures & fit-out', period: 'Q4 2024', description: 'Inlets, outlets, hatchery, solar water supply.' },
      { phase: 'Commissioning', period: 'Q1 2025', description: 'Stocking, staff training, handover.' },
    ],
    featured: true,
  },
  {
    slug: 'community-aquaponics-lilongwe',
    title: 'Community Aquaponics Facility',
    location: 'Lilongwe, Malawi',
    year: '2024',
    client: 'NGO consortium',
    category: 'Aquaponics',
    cover: '/images/services/aquaponics.svg',
    gallery: ['/images/services/aquaponics.svg', '/images/services/training.svg'],
    summary:
      'A 3-tank + 200 m² media-bed aquaponics facility integrated with a training centre, feeding 40 households and running a monthly school programme.',
    challenge:
      'A dense urban site with unreliable power and municipal water pressures too low for gravity flow.',
    solution:
      'Solar-powered variable-speed pumps, a 6,000-litre elevated header tank, and passive biofilters sized for peak nutrient loading.',
    outcome:
      'Continuous production of Tilapia plus leafy greens year-round; the site now trains ~200 community members annually.',
    stats: [
      { label: 'Fish tanks', value: '3' },
      { label: 'Grow-bed area', value: '200 m²' },
      { label: 'Households fed', value: '40' },
      { label: 'Trainees / year', value: '200+' },
    ],
    timeline: [
      { phase: 'Design', period: 'Jan 2024', description: 'System sizing and community consultations.' },
      { phase: 'Construction', period: 'Feb–Apr 2024', description: 'Fabrication, plumbing, biofilters.' },
      { phase: 'Commissioning', period: 'May 2024', description: 'Stocking and training.' },
    ],
  },
  {
    slug: 'flood-protection-mzimba',
    title: 'Flood Protection Works',
    location: 'Mzimba, Malawi',
    year: '2023',
    client: 'District Council',
    category: 'Civil Engineering',
    cover: '/images/services/flood.svg',
    gallery: ['/images/services/flood.svg', '/images/gallery/river.svg'],
    summary:
      'Design and supervision of a 1.4 km levee, spillway and armoured river-bank protecting 320 households and 62 hectares of cropland.',
    challenge:
      'Two consecutive years of flooding had degraded existing informal defences and displaced families.',
    solution:
      'Engineered levee to 1-in-50-year design flood, riprap protection on the outer bend, and a controlled spillway with energy dissipator.',
    outcome:
      'Zero flood incidents in the 2024/25 wet season; farmers returned to previously abandoned plots.',
    stats: [
      { label: 'Levee length', value: '1,400 m' },
      { label: 'Design flood', value: '1:50 year' },
      { label: 'Households protected', value: '320' },
      { label: 'Cropland safeguarded', value: '62 ha' },
    ],
    timeline: [
      { phase: 'Hydrological study', period: 'Q1 2023', description: 'Modelling and design flood selection.' },
      { phase: 'Design', period: 'Q2 2023', description: 'Levee, spillway and riprap detailing.' },
      { phase: 'Supervision', period: 'Q3–Q4 2023', description: 'Construction supervision and QA.' },
    ],
  },
  {
    slug: 'hatchery-blantyre',
    title: 'Regional Hatchery Upgrade',
    location: 'Blantyre, Malawi',
    year: '2023',
    client: 'Commercial hatchery',
    category: 'Aquaculture Engineering',
    cover: '/images/services/hatchery.svg',
    gallery: ['/images/services/hatchery.svg', '/images/services/broodstock.svg'],
    summary:
      'Upgrade of a regional Tilapia hatchery from 120,000 to 1.2 million fingerlings per year through a full re-engineering of water and aeration.',
    challenge:
      'The hatchery was suffering unpredictable mortality events driven by unstable water chemistry.',
    solution:
      'Rebuilt intake, added mechanical + biological filtration, ring-blown aeration, tempered UV and a dedicated broodstock section.',
    outcome: '10× capacity increase and mortality reduced from 22% to 4% per cycle.',
    stats: [
      { label: 'Capacity', value: '1.2M / yr' },
      { label: 'Mortality reduction', value: '−82%' },
      { label: 'Cycles / year', value: '6' },
      { label: 'Payback', value: '14 mo' },
    ],
    timeline: [
      { phase: 'Diagnostic', period: 'Feb 2023', description: 'Water chemistry & flow assessment.' },
      { phase: 'Redesign', period: 'Mar 2023', description: 'Process and layout redesign.' },
      { phase: 'Retrofit', period: 'Apr–Jul 2023', description: 'Installation and commissioning.' },
    ],
  },
  {
    slug: 'gravity-water-scheme-zomba',
    title: 'Gravity Water Supply Scheme',
    location: 'Zomba, Malawi',
    year: '2022',
    client: 'Rural water board',
    category: 'Civil Engineering',
    cover: '/images/services/water-supply.svg',
    gallery: [],
    summary:
      'A 9 km gravity-fed water supply serving 2,400 people with four communal taps and household connections in the growth zone.',
    challenge: 'A steep escarpment with fragmented land ownership between source and beneficiaries.',
    solution:
      'Break-pressure tanks staggered along the alignment, negotiated wayleaves and community-led trenching.',
    outcome: 'A reliable, low-maintenance system with zero pumping cost and community ownership.',
    stats: [
      { label: 'Beneficiaries', value: '2,400' },
      { label: 'Pipeline', value: '9 km' },
      { label: 'Break-pressure tanks', value: '4' },
      { label: 'Pumping cost', value: 'Zero' },
    ],
    timeline: [
      { phase: 'Survey', period: 'Q1 2022', description: 'Topo & source assessment.' },
      { phase: 'Design', period: 'Q2 2022', description: 'Hydraulic design & drawings.' },
      { phase: 'Build', period: 'Q3–Q4 2022', description: 'Community-supported construction.' },
    ],
  },
  {
    slug: 'urban-drainage-lilongwe',
    title: 'Urban Drainage Master Plan',
    location: 'Lilongwe, Malawi',
    year: '2022',
    client: 'City authority',
    category: 'Civil Engineering',
    cover: '/images/services/drainage.svg',
    gallery: [],
    summary:
      'Storm-water master plan for a 42 km² sub-catchment, prioritising 18 investment packages worth USD 34M.',
    challenge:
      'Rapid urbanisation had overwhelmed a colonial-era drainage grid that no longer had reliable as-built records.',
    solution:
      'Drone-captured DEM, hydraulic modelling and community mapping to build a defensible investment plan.',
    outcome:
      'The plan is now guiding phased donor-funded interventions across the sub-catchment.',
    stats: [
      { label: 'Catchment', value: '42 km²' },
      { label: 'Packages', value: '18' },
      { label: 'Investment', value: 'USD 34M' },
      { label: 'Model runs', value: '1,200+' },
    ],
    timeline: [
      { phase: 'Data capture', period: 'Q1 2022', description: 'Drone survey, community mapping.' },
      { phase: 'Modelling', period: 'Q2 2022', description: 'Hydrologic & hydraulic modelling.' },
      { phase: 'Master plan', period: 'Q3 2022', description: 'Prioritised investment plan.' },
    ],
  },
];

export const projectCategories = [
  'All',
  'Aquaculture Engineering',
  'Aquaponics',
  'Civil Engineering',
] as const;
