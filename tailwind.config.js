/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#4a3b44',
        mint: '#54c5b3',
        'mint-dark': '#3a9e8e',
        'mint-soft': '#eaf7f4',
        muted: '#7d6e77',
        line: '#ebe7ef',
        rose: '#f06c9b',
        paper: '#fafaff',
        cream: '#fff8f0',
      },
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
