/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        solar: {
          yellow: '#FFD600',
          orange: '#FF9100',
          blue: '#003366',
          accent: '#FFB300',
        },
      },
      boxShadow: {
        bold: '0 4px 24px 0 rgba(255, 145, 0, 0.15)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      transitionProperty: {
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [],
};
