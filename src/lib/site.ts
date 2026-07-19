export const site = {
  name: 'Phindu Innovations',
  tagline: 'Engineering Sustainable Aquaculture for Africa',
  description:
    'Aquaculture, aquaponics and civil engineering solutions for farmers, NGOs, government and commercial enterprises across Malawi and beyond.',
  url: 'https://phinduinnovations.com',
  email: 'phinduinnovations26@gmail.com',
  phone: '+265 999 515 333',
  phoneRaw: '+265999515333',
  whatsapp: '265999515333',
  emergency: '24/7 Emergency Hotline',
  location: 'Lilongwe, Malawi',
  hours: {
    weekdays: 'Monday – Friday · 7:30 AM – 5:00 PM',
    saturday: 'Saturday · 8:00 AM – 12:00 PM',
    sunday: 'Sunday · Emergency support only',
  },
  socials: {
    facebook: 'https://facebook.com/phinduinnovations',
    twitter: 'https://twitter.com/phinduinnovations',
    linkedin: 'https://linkedin.com/company/phindu-innovations',
    instagram: 'https://instagram.com/phinduinnovations',
    youtube: 'https://youtube.com/@phinduinnovations',
  },
} as const;

export const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Products', href: '#products' },
  { name: 'Training', href: '#training' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
] as const;
