/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: { DEFAULT: '#34231F', 900: '#251815' },
        coffee: { DEFAULT: '#5B392E', light: '#7A5244' },
        cream: { DEFAULT: '#F8F1E7', deep: '#EFE3D2' },
        ivory: '#FFFDF8',
        // DEFAULT is the brand terracotta (decorative); 600 meets AA with ivory text for buttons and small text.
        terracotta: { light: '#D9A58E', DEFAULT: '#B96548', 600: '#A4553A', 700: '#8E4630' },
        // DEFAULT is decorative sage; 600 is the AA-safe shade for text on cream.
        sage: { light: '#C9CFBC', DEFAULT: '#79866A', 600: '#5F6B52' },
        charcoal: '#292624',
        muted: '#6E625B',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        bangla: ['"Tiro Bangla"', '"Noto Serif Bengali"', 'serif'],
      },
      maxWidth: { prose: '62ch' },
      borderRadius: { arch: '999px 999px 0 0' },
      keyframes: {
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        'scroll-dot': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translateY(14px)', opacity: '0' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 28s linear infinite',
        'scroll-dot': 'scroll-dot 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
