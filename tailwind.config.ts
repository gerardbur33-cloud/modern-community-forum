module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#d7f0ff',
          200: '#b5e3ff',
          300: '#7bcfff',
          400: '#42b4ff',
          500: '#1c94f2',
          600: '#1176d1',
          700: '#0f5ca9',
          800: '#114d87',
          900: '#123f6f',
        },
        ink: '#111827',
        panel: '#f8fafc',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(15, 23, 42, 0.10)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.2) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
