import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: { DEFAULT: '#7F6FFF', light: '#EAE7FF', dark: '#18163A', mid: '#5B4FCC' },
        teal:   { DEFAULT: '#1D9E75', light: '#E1F5EE', dark: '#085041' },
        bg:     '#F8F7FC',
        surface:'#FFFFFF',
        border: '#E4E2F4',
        tx:     { DEFAULT: '#18163A', 2: '#8A87AA', 3: '#AEACC8' },
        warn:   { DEFAULT: '#925500', bg: '#FEF3E2' },
        error:  { DEFAULT: '#C62828', bg: '#FFEBEE' },
      },
      fontFamily: { sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'] },
      boxShadow: {
        card: '0 1px 3px rgba(127,111,255,0.08), 0 0 0 1px rgba(228,226,244,0.8)',
        hover: '0 4px 16px rgba(127,111,255,0.14)',
      },
      borderRadius: { xl2: '1rem', xl3: '1.25rem' },
    },
  },
  plugins: [],
}
export default config
