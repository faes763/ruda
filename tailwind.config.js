/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "2xl": "1556px",
      "xl": "1280px",
      "lg": "1124px",
      "md": "1098px",
      "base": "798px",
      "sm": "420px",
      "child": "350px"

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'beer' : "url('/back-beer.svg')"
      },
    },
    colors: {
      "main-black":"#1F1F1F",
      "main-purple": "#774299",
      "main-page": "#FAFAFA",
      "gray-text": "#9D9D9D",
      "link-text": "#7588B9",
      "black": "#000",
      "career-back" : "#EFEFEF",
      "white" : "#fff"
    }
  },
  plugins: [],
}
