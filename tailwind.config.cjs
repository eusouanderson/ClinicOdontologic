/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  content: ['./index.html', './src/**/*.{vue,js}'],

  theme: {
    extend: {
      colors: {
        'brand-primary': '#C78F9A',
        'accent-sage': '#D4AF37',
        'background-linen': '#F3E5AB',
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
      },
    },
  },

  darkMode: 'class',
  plugins: [],
};
