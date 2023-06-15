/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "c-text": "#040307",
        "c-background": "#e6e3f2",
        "c-primary": "#7565b8",
        "c-secondary": "#fcfcfd",
        "c-accent": "#6554b0"
      }
    },
  },
  plugins: [],
}

