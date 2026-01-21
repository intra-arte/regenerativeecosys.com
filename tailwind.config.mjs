/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gray-primary': '#A8B5B8',
        'gray-dark': '#4A5759',
        'gray-light': '#E8ECED',
        'natural': '#5A8F7B',
        'social': '#7B9DAA',
        'ancestral': '#A8B5B8',
        'economico': '#D4A574',
        'comunitario': '#B5766A',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'avenir': ['Avenir Next', 'sans-serif'],
      },
    },
  },
  plugins: [],
}