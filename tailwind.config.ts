import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Aion Brand Colors
        'aion-navy': {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c0d0ff',
          300: '#90b0ff',
          400: '#6080ff',
          500: '#002B7F', // Primary Navy
          600: '#001f5c',
          700: '#00153a',
          800: '#000f26',
          900: '#000814',
        },
        'aion-coral': {
          50: '#fff5f5',
          100: '#ffe5e5',
          200: '#ffcccc',
          300: '#ffb3b3',
          400: '#ff8080',
          500: '#FF6B6B', // Secondary Coral
          600: '#ff4d4d',
          700: '#cc0000',
          800: '#990000',
          900: '#660000',
        },
        'aion-blue': {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#c0dbff',
          300: '#90bfff',
          400: '#6099ff',
          500: '#1E40AF', // Accent Blue
          600: '#152f8f',
          700: '#0f1f6f',
          800: '#0a124f',
          900: '#05082f',
        },
        // Additional brand colors
        'aion-gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
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