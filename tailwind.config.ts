import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Aion Brand Colors - Primary Blue, Secondary Red
        'aion-primary': {
          50: '#E8E8FF',
          100: '#D0D0FF',
          200: '#A0A0FF',
          300: '#7070FF',
          400: '#3333CC',
          500: '#000071', // PRIMARY BLUE
          600: '#000052',
          700: '#00003A',
          800: '#000028',
          900: '#000014',
        },
        'aion-secondary': {
          50: '#FFE8E8',
          100: '#FFD0D0',
          200: '#FFA0A0',
          300: '#FF7070',
          400: '#FF6B6B',
          500: '#ff5b5c', // SECONDARY RED
          600: '#ff3d3e',
          700: '#ff1f20',
          800: '#E50000',
          900: '#CC0000',
        },
        'aion-navy': {
          50: '#E8E8FF',
          100: '#D0D0FF',
          200: '#A0A0FF',
          300: '#7070FF',
          400: '#3333CC',
          500: '#000071', // Primary Blue
          600: '#000052',
          700: '#00003A',
          800: '#000028',
          900: '#000014',
        },
        'aion-coral': {
          50: '#FFE8E8',
          100: '#FFD0D0',
          200: '#FFA0A0',
          300: '#FF7070',
          400: '#FF6B6B',
          500: '#ff5b5c', // Secondary Red
          600: '#ff3d3e',
          700: '#ff1f20',
          800: '#E50000',
          900: '#CC0000',
        },
        'aion-dark': {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D0D0D0',
          300: '#B0B0B0',
          400: '#808080',
          500: '#404040',
          600: '#303030',
          700: '#222222',
          800: '#161616', // Dark Neutral
          900: '#0A0A0A',
        },
        // Additional brand colors
        'aion-gray': {
          50: '#F8F9FA',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
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