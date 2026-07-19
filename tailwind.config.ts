import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E2A33',
          50: '#EEF4F6',
          100: '#D6E3E8',
          200: '#A9C2CC',
          300: '#749BA9',
          400: '#487685',
          500: '#25566A',
          600: '#1B4353',
          700: '#153743',
          800: '#0E2A33',
          900: '#061921',
        },
        secondary: {
          DEFAULT: '#2A8FB5',
          50: '#EEF7FB',
          100: '#D3EAF3',
          200: '#A6D4E7',
          300: '#7ABDDA',
          400: '#4EA6CB',
          500: '#2A8FB5',
          600: '#217591',
          700: '#1A5B71',
          800: '#134251',
          900: '#0B2833',
        },
        accent: {
          DEFAULT: '#B4863A',
          50: '#FAF3E1',
          100: '#F1E1B0',
          200: '#E5C87A',
          300: '#D8AF4A',
          400: '#C89A3B',
          500: '#B4863A',
          600: '#8F6B2E',
          700: '#6B5023',
          800: '#473617',
          900: '#241B0B',
        },
        clay: {
          DEFAULT: '#C6613D',
          50: '#FBEEE8',
          100: '#F4D3C4',
          200: '#E6A587',
          300: '#D8794F',
          400: '#C6613D',
          500: '#A24E30',
          600: '#7D3B24',
          700: '#582919',
          800: '#33170E',
          900: '#170805',
        },
        bg: {
          DEFAULT: '#FBF7EC',
          soft: '#F2ECD8',
          dark: '#08181D',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.75rem, 6vw + 1rem, 6.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-1': ['clamp(2.25rem, 4vw + 1rem, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-2': ['clamp(1.75rem, 2.5vw + 1rem, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgb(21 50 59 / 0.08), 0 8px 24px -4px rgb(21 50 59 / 0.08)',
        'card': '0 1px 3px 0 rgb(21 50 59 / 0.05), 0 20px 40px -10px rgb(21 50 59 / 0.10)',
        'glow': '0 0 40px -8px rgb(31 110 140 / 0.4)',
        'glow-accent': '0 0 40px -8px rgb(154 123 46 / 0.35)',
        'inner-glow': 'inset 0 1px 0 0 rgb(255 255 255 / 0.15)',
      },
      backgroundImage: {
        'grid': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath fill='none' stroke='%2315323B' stroke-opacity='0.06' stroke-width='1' d='M0 0h60v60H0z M0 20h60 M0 40h60 M20 0v60 M40 0v60'/%3E%3C/svg%3E\")",
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
        'gradient-hero': 'radial-gradient(ellipse at top, rgba(31,110,140,0.25) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(154,123,46,0.18) 0%, transparent 45%), linear-gradient(180deg, #0F2830 0%, #15323B 100%)',
        'gradient-brand': 'linear-gradient(135deg, #15323B 0%, #1F6E8C 100%)',
        'gradient-accent': 'linear-gradient(135deg, #9A7B2E 0%, #C89A3B 100%)',
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 8s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0) scaleY(1)' },
          '50%': { transform: 'translateX(-20px) scaleY(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px -8px rgba(31,110,140,0.5)' },
          '50%': { boxShadow: '0 0 40px -4px rgba(31,110,140,0.8)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
