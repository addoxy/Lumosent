import type { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        tremor: {
          brand: {
            faint: colors.zinc[50],
            muted: colors.zinc[200],
            subtle: colors.zinc[400],
            DEFAULT: colors.zinc[500],
            emphasis: colors.zinc[900],
            inverted: colors.white,
          },
          background: {
            muted: colors.zinc[50],
            subtle: colors.zinc[400],
            DEFAULT: colors.white,
            emphasis: colors.zinc[700],
          },
          border: {
            DEFAULT: colors.zinc[800],
          },
          ring: {
            DEFAULT: colors.zinc[200],
          },
          content: {
            subtle: colors.zinc[400],
            DEFAULT: colors.zinc[500],
            emphasis: colors.zinc[700],
            strong: colors.zinc[950],
            inverted: colors.white,
          },
        },
        // dark mode
        'dark-tremor': {
          brand: {
            faint: '#0B1229',
            muted: colors.zinc[950],
            subtle: colors.zinc[800],
            DEFAULT: colors.zinc[500],
            emphasis: colors.zinc[400],
            inverted: colors.zinc[950],
          },
          background: {
            muted: '#131A2B',
            subtle: colors.zinc[800],
            DEFAULT: colors.zinc[900],
            emphasis: colors.zinc[300],
          },
          border: {
            DEFAULT: colors.zinc[800],
          },
          ring: {
            DEFAULT: colors.zinc[800],
          },
          content: {
            subtle: colors.zinc[600],
            DEFAULT: colors.zinc[500],
            emphasis: colors.zinc[200],
            strong: colors.zinc[50],
            inverted: colors.zinc[950],
          },
        },
      },
      boxShadow: {
        // light
        'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'tremor-card':
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'tremor-dropdown':
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        // dark
        'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'dark-tremor-card':
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'dark-tremor-dropdown':
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
        'tremor-full': '9999px',
      },
      fontSize: {
        'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
        'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
        'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
        'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },

  plugins: [
    require('tailwindcss-debug-screens'),
    require('tailwindcss-animate'),
  ],
};
export default config;
