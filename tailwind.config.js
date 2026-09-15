/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:           '#F7F5F0',
        surface:      '#EFECE5',
        card:         '#EAE7E0',
        border:       '#DDD9D0',
        'border-dark':'#C9C5BB',
        text:         '#171717',
        muted:        '#66645F',
        subtle:       '#85827B',
        accent:       '#4057C8',
        'accent-dim': '#3349A8',
        warm:         '#B86B4B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'heading':  ['clamp(1.75rem, 4vw, 2.75rem)',  { lineHeight: '1.08', letterSpacing: '-0.02em' }],
      },
      spacing: {
        section: '8.5rem',
      },
    },
  },
  plugins: [],
}
