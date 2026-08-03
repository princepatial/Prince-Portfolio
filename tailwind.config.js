/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0F1E',
        surface: '#111827',
        card: '#0F1627',
        border: '#1A2540',
        accent: '#4F6EF7',
        'accent-dim': '#3A57D8',
        text: '#F0EDE8',
        muted: '#7A8499',
        subtle: '#3A4560',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
