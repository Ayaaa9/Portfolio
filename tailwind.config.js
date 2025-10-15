/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          'surface-hover': '#F1F5F9',
          border: '#E2E8F0',
          'border-hover': '#CBD5E1',
          text: {
            primary: '#1E293B',
            secondary: '#475569',
            tertiary: '#64748B',
          }
        }
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('light', '.light &'); 
    },
  ],
};
