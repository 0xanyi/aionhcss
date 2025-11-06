import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Aion Brand Colors - Based on Logo #61DAFB
        'aion-turquoise': {
          50: '#F0FDFF',
          100: '#E1F9FE',
          200: '#C8F7DC',
          300: '#9FEDD7',
          400: '#61DAFB', // PRIMARY - From Logo
          500: '#3FBFDF',
          600: '#247BA0',
          700: '#1A5F7D',
          800: '#114559',
          900: '#082C36',
        },
        'aion-navy': {
          50: '#E6EBF5',
          100: '#CBD7EB',
          200: '#97AFD7',
          300: '#6387C3',
          400: '#2F5FAF',
          500: '#0A2463', // Deep Navy
          600: '#081D4F',
          700: '#06163B',
          800: '#040F28',
          900: '#020814',
        },
        'aion-coral': {
          50: '#FFE5D9',
          100: '#FFCCB3',
          200: '#FFB088',
          300: '#FF8856',
          400: '#FF6B35', // Warm Coral
          500: '#E5522A',
          600: '#CC3E1F',
          700: '#B32B14',
          800: '#99180A',
          900: '#800500',
        },
        'aion-teal': {
          50: '#E8F6F9',
          100: '#D1EDF3',
          200: '#A3DBE7',
          300: '#75C9DB',
          400: '#3A9BC0',
          500: '#247BA0', // Accent Teal
          600: '#1D6280',
          700: '#164960',
          800: '#0F3140',
          900: '#081820',
        },
        'aion-mint': {
          50: '#F5FEFB',
          100: '#EBFDF7',
          200: '#D7FBEF',
          300: '#C8F7DC', // Soft Mint
          400: '#A0ECC0',
          500: '#78E1A4',
          600: '#50D688',
          700: '#28CB6C',
          800: '#1FAA57',
          900: '#178942',
        },
        // Additional brand colors
        'aion-gray': {
          50: '#F8FEFF',
          100: '#F3F7F9',
          200: '#E5EAED',
          300: '#D1D7DB',
          400: '#9CA5AF',
          500: '#6B7582',
          600: '#4B5563',
          700: '#374151',
          800: '#1A1A2E',
          900: '#111827',
        },
      },
      fontFamily: {
        // Inter font family for Aion brand
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Enhanced typography for modern design
        'heading-1': ['3rem', { lineHeight: '1.1', fontWeight: '700' }], // 48px
        'heading-2': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }], // 40px
        'heading-3': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }], // 30px
        'body-xl': ['1.25rem', { lineHeight: '1.7', fontWeight: '400' }], // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }], // 18px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],        // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
      },
      spacing: {
        // Enhanced spacing for modern design
        'aion-container': 'max(1.5rem, 6vw)',
        'aion-section': '8rem',
        'aion-section-sm': '6rem',
        'aion-section-xs': '4rem',
        'aion-content': '6rem', // Content spacing
        'aion-content-sm': '4rem',
      },
      borderRadius: {
        'aion': '0.5rem',
        'aion-lg': '1rem',
        'aion-full': '9999px',
      },
      boxShadow: {
        'aion': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'aion-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'aion-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
} satisfies Config