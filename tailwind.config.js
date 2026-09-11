/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: '#171717', teal: '#0f766e', coral: '#f97360', paper: '#faf9f6', line: '#e5e1d8', muted: '#64748b' },
      boxShadow: { soft: '0 4px 16px rgba(30, 41, 59, .06)' },
      fontFamily: { sans: ['"Trebuchet MS"', 'ui-sans-serif', 'sans-serif'] }
    }
  },
  plugins: []
};
