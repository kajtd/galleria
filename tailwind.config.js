/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#7D7D7D',
        'light-gray': '#E5E5E5',
        'very-light-gray': '#F3F3F3',
      },
      backgroundImage: {
        'image-art-background':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.841672) 100%)',
      },
    },
  },
  plugins: [],
};
