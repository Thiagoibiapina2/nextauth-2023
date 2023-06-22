/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        '41rem': '41rem',
        '38rem': '38rem',
      },
      width: {
        '32rem': '32rem',
      },
      fontSize: {
        '1.4rem': '1.4rem',
      },
    },
  },
  plugins: [],
}
