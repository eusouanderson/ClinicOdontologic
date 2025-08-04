/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  content: ['./index.html', './src/**/*.{vue,js}'],

  theme: {
    extend: {
      colors: {
        'brand-primary': '#C78F9A',
        'accent-sage': '#100e07ff',
        'background-linen': '#2E2E2E',
        'text-graphite': '#414742',
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        7.5: '1.875rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        elegant: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(90deg, #B76E79 0%, #D8A7A7 25%, #EFD3D7 50%, #D8A7A7 75%, #B76E79 100%)',
      },
    },
  },

  darkMode: 'class',
  plugins: [],
};
