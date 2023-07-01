/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#753aaf',
          secondary: '#97a1ed',
          accent: '#ff0f93',
          neutral: '#2e1c30',
          'base-100': '#2e3647',
          info: '#436edb',
          success: '#197161',
          warning: '#f5c20a',
          error: '#e56c74',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
