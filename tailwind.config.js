/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#334155', // slate-700
            a: {
              color: '#2563eb', // blue-600
              '&:hover': {
                color: '#1d4ed8', // blue-700
              },
            },
            h1: {
              color: '#0f172a', // slate-900
            },
            h2: {
              color: '#0f172a', // slate-900
            },
            h3: {
              color: '#0f172a', // slate-900
            },
            strong: {
              color: '#0f172a', // slate-900
            },
            code: {
              color: '#0f172a', // slate-900
              backgroundColor: '#f1f5f9', // slate-100
              padding: '0.25rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '600',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}