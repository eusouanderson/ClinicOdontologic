/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        'brand-primary': 'var(--brand-primary)',
        'accent-sage': 'var(--accent-sage)',
        'background-linen': 'var(--background-linen)',
        'text-graphite': 'var(--text-graphite)',
      },
    },
  },

  darkMode: 'class',

  plugins: [],
};
