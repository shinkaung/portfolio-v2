/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-blue': {
          DEFAULT: '#1a1b26',
          secondary: '#24283b',
          text: '#a9b1d6',
          accent: '#7aa2f7',
          muted: '#7982a9',
          border: '#292e42'
        }
      }
    },
  },
  plugins: [],
}