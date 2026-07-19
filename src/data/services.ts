import {
  Fish,
  Sprout,
  Waves,
  Layers,
  Shield,
  Droplets,
  Truck,
  Package,
  Egg,
  BookOpen,
  Users,
  FileText,
  Beaker,
  Compass,
  Phone,
  Plane,
  BarChart3,
  TrendingUp,
  ClipboardCheck,
  HardHat,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  category: 'Aquaculture' | 'Engineering' | 'Advisory' | 'Products';
  icon: LucideIcon;
  short: string;
  description: string;
  bullets: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: 'aquaculture-engineering',
    title: 'Aquaculture Engineering',
    category: 'Engineering',
    icon: Fish,
    short: 'End-to-end design of ponds, tanks and recirculating systems.',
    description:
      'Integrated engineering for productive, low-maintenance fish farms — from soil investigation and hydrology to inlet/outlet structures, monitoring and grow-out planning.',
    bullets: ['Site & soil assessment', 'Hydrological modelling', 'Pond layout & levels', 'Inlet/outlet works'],
    image: '/images/services/aquaculture.svg',
  },
  {
    slug: 'aquaponics-systems',
    title: 'Aquaponics Systems',
    category: 'Aquaculture',
    icon: Sprout,
    short: 'Closed-loop fish + vegetable systems for schools, urban and commercial farms.',
    description:
      'Nutrient-rich water grows fish and vegetables side by side. We design, install, commission and train operators on media-bed, NFT and deep-water culture aquaponics.',
    bullets: ['Media-bed / NFT / DWC', 'Solar-powered pumps', 'Biofilter sizing', 'Nutrient balancing'],
    image: '/images/services/aquaponics.svg',
  },
  {
    slug: 'fish-pond-construction',
    title: 'Fish Pond Construction',
    category: 'Engineering',
    icon: HardHat,
    short: 'Earthen, lined and concrete ponds built to engineering standards.',
    description:
      'From smallholder ponds to multi-compound commercial farms, our field crews build with the levels, compaction and finishing that make ponds last decades.',
    bullets: ['Earthen & concrete ponds', 'HDPE lining installations', 'Access roads & bunds', 'As-built drawings'],
    image: '/images/services/pond.svg',
  },
  {
    slug: 'fish-tanks',
    title: 'Fish Tanks',
    category: 'Products',
    icon: Layers,
    short: 'Fibreglass and concrete tanks for hatcheries and intensive systems.',
    description:
      'Circular and rectangular tanks with self-cleaning bases, engineered aeration and modular plumbing for hatcheries, nurseries and RAS units.',
    bullets: ['Fibreglass, HDPE, concrete', 'Central drains & standpipes', 'Aeration & degassing', 'Hatchery packages'],
    image: '/images/services/tanks.svg',
  },
  {
    slug: 'flood-protection',
    title: 'Flood Protection Engineering',
    category: 'Engineering',
    icon: Shield,
    short: 'Levees, spillways and river training to protect farms and communities.',
    description:
      'Hydrological studies, flood modelling and engineered protection works that safeguard crops, ponds, infrastructure and settlements from seasonal flooding.',
    bullets: ['Flood risk modelling', 'Levees & floodwalls', 'Spillways & culverts', 'Emergency response planning'],
    image: '/images/services/flood.svg',
  },
  {
    slug: 'drainage-systems',
    title: 'Drainage Systems',
    category: 'Engineering',
    icon: Waves,
    short: 'Storm and agricultural drainage that keeps land productive.',
    description:
      'From urban storm-water master plans to farm drainage networks — designed with modern hydraulic tools and constructed for long-term performance.',
    bullets: ['Storm-water master plans', 'Farm drainage design', 'Culvert sizing', 'Erosion control'],
    image: '/images/services/drainage.svg',
  },
  {
    slug: 'water-supply-systems',
    title: 'Water Supply Systems',
    category: 'Engineering',
    icon: Droplets,
    short: 'Boreholes, gravity-fed and solar-pumped water supply.',
    description:
      'Reliable water for ponds, homes and farms — from source assessment and drilling to reticulation, elevated tanks and solar pumping.',
    bullets: ['Borehole siting & drilling', 'Solar & hybrid pumping', 'Reticulation networks', 'Elevated storage'],
    image: '/images/services/water-supply.svg',
  },
  {
    slug: 'fish-feed',
    title: 'Fish Feed',
    category: 'Products',
    icon: Package,
    short: 'Balanced floating and sinking feeds for every growth stage.',
    description:
      'Extruded floating pellets and sinking feeds formulated for Tilapia, Catfish and Chambo — from starter crumble to grower and finisher grades.',
    bullets: ['Starter, grower, finisher', 'Floating & sinking', 'On-farm delivery', 'Custom formulations'],
    image: '/images/services/feed.svg',
  },
  {
    slug: 'fingerlings',
    title: 'Fingerlings',
    category: 'Products',
    icon: Fish,
    short: 'Certified Tilapia and Chambo fingerlings from disease-free lines.',
    description:
      'Uniform, healthy fingerlings hatched from monitored broodstock. Grades from 3–5g up to 10–15g with survival guarantee on scheduled deliveries.',
    bullets: ['3-5g and 10-15g grades', 'Health-certified stock', 'Nationwide delivery', 'Stocking advisory'],
    image: '/images/products/fingerlings.svg',
  },
  {
    slug: 'broodstock',
    title: 'Broodstock',
    category: 'Products',
    icon: Egg,
    short: 'Selected broodstock to seed your own hatchery.',
    description:
      'Genetically-monitored broodstock with growth performance records to help hatcheries and multiplication centres scale reliably.',
    bullets: ['Performance-recorded lines', 'Health certification', 'Delivery in aerated tanks', 'Hatchery setup support'],
    image: '/images/services/broodstock.svg',
  },
  {
    slug: 'technical-advisory',
    title: 'Technical Advisory',
    category: 'Advisory',
    icon: Compass,
    short: 'Independent engineering & aquaculture advisory for investors and NGOs.',
    description:
      'Feasibility reviews, technical due diligence, expert witness and turnaround support for farms and infrastructure projects.',
    bullets: ['Independent reviews', 'Due diligence', 'Turnaround plans', 'Expert reports'],
    image: '/images/services/consulting.svg',
  },
  {
    slug: 'training',
    title: 'Training',
    category: 'Advisory',
    icon: BookOpen,
    short: 'Farmer field schools, online courses and corporate modules.',
    description:
      'Hands-on training designed with farmers in mind — practical, evidence-based and certifiable. Delivered in-person, online and on your farm.',
    bullets: ['Farmer field schools', 'Corporate modules', 'Online courses', 'Certification'],
    image: '/images/services/training.svg',
  },
  {
    slug: 'business-planning',
    title: 'Business Planning',
    category: 'Advisory',
    icon: FileText,
    short: 'Investor-ready business plans for aquaculture and agri-engineering ventures.',
    description:
      'Bankable business plans grounded in real yield data, market benchmarks and honest financial modelling.',
    bullets: ['Bankable plans', 'Financial modelling', 'Market analysis', 'Risk register'],
    image: '/images/services/business.svg',
  },
  {
    slug: 'feasibility-studies',
    title: 'Feasibility Studies',
    category: 'Advisory',
    icon: ClipboardCheck,
    short: 'Full technical, environmental and financial feasibility.',
    description:
      'Rigorous studies that answer "should we build this, where and how" — with clear go/no-go recommendations.',
    bullets: ['Technical feasibility', 'Environmental screening', 'Financial modelling', 'Site comparison'],
    image: '/images/services/consulting.svg',
  },
  {
    slug: 'grant-proposal-support',
    title: 'Grant Proposal Support',
    category: 'Advisory',
    icon: FileText,
    short: 'Winning proposals for donors and development finance.',
    description:
      'From logframes and results chains to full budgets and technical annexes — we help NGOs and enterprises secure funding.',
    bullets: ['Logframes & ToC', 'Budgets & workplans', 'Technical annexes', 'Donor liaison'],
    image: '/images/services/business.svg',
  },
  {
    slug: 'water-quality-testing',
    title: 'Water Quality Testing',
    category: 'Aquaculture',
    icon: Beaker,
    short: 'Lab and on-farm testing that keeps fish healthy.',
    description:
      'Full-suite water testing — dissolved oxygen, ammonia, nitrite, alkalinity, hardness, pH and microbial screens — with actionable recommendations.',
    bullets: ['DO, pH, ammonia, nitrite', 'Hardness & alkalinity', 'Microbial screens', 'Written recommendations'],
    image: '/images/services/lab.svg',
  },
  {
    slug: 'farm-visits',
    title: 'Farm Visits',
    category: 'Advisory',
    icon: Truck,
    short: 'On-site inspections, coaching and problem-solving.',
    description:
      'Routine or emergency farm visits from our engineers and aquaculture specialists — with photo reports and clear next steps.',
    bullets: ['Routine coaching', 'Emergency response', 'Photo reports', 'Next-step action plans'],
    image: '/images/services/farm-visit.svg',
  },
  {
    slug: 'emergency-hotline',
    title: 'Emergency Hotline',
    category: 'Advisory',
    icon: Phone,
    short: '24/7 hotline for fish mortalities, floods and infrastructure failures.',
    description:
      'When something goes wrong, minutes matter. Call our hotline for triage, remote guidance and rapid dispatch.',
    bullets: ['Fish mortality events', 'Flood emergencies', 'Infrastructure failures', 'Remote triage'],
    image: '/images/services/emergency.svg',
  },
  {
    slug: 'drone-monitoring',
    title: 'Drone Monitoring',
    category: 'Engineering',
    icon: Plane,
    short: 'Aerial imagery, mapping and progress tracking.',
    description:
      'Orthomosaics, digital elevation models and construction progress footage using RTK drones — accurate to centimetres.',
    bullets: ['Orthomosaics & DEMs', 'Volumetric surveys', 'Progress footage', 'Compliance imagery'],
    image: '/images/services/drone.svg',
  },
  {
    slug: 'market-linkages',
    title: 'Market Linkages',
    category: 'Advisory',
    icon: TrendingUp,
    short: 'Connecting farmers to buyers, processors and cold-chain partners.',
    description:
      'We open commercial routes for farms — from restaurant contracts and supermarket listings to bulk processor supply agreements.',
    bullets: ['Buyer introductions', 'Cold chain partners', 'Grading & QA', 'Contract templates'],
    image: '/images/services/harvest.svg',
  },
  {
    slug: 'productivity-improvement',
    title: 'Productivity Improvement',
    category: 'Advisory',
    icon: BarChart3,
    short: 'Diagnose bottlenecks and unlock higher yields.',
    description:
      'A structured programme that measures where losses happen — feed, oxygen, mortality, harvest — and closes each gap.',
    bullets: ['Feed conversion audits', 'Oxygen budgeting', 'Mortality analysis', 'Harvest planning'],
    image: '/images/services/business.svg',
  },
  {
    slug: 'fish-nets',
    title: 'Fish Nets & Farm Equipment',
    category: 'Products',
    icon: Wrench,
    short: 'Seines, hapa nets, buckets, aerators and hatchery kits.',
    description:
      'The tools you actually need on a working fish farm, sourced from tested suppliers and delivered ready to use.',
    bullets: ['Seine & hapa nets', 'Aerators & pumps', 'Weighing scales', 'Sampling kits'],
    image: '/images/services/net.svg',
  },
];

export const serviceCategories = ['Aquaculture', 'Engineering', 'Advisory', 'Products'] as const;
