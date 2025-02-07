import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green500: '#243831',
        green300: '#2B5F44',
        green100: '#D8E9E4',
        golden: '#C5A365',
        black: '#000000',
        white: '#FFFFFF',
        text: '#191919',
        gray100: '#BBC2C0',
        gray300: '#939494',
        success: '#49A569',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none' /* Chrome, Safari */,
        },
      });
    },
  ],
} satisfies Config;
