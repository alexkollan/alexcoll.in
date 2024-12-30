/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        background: '#fffff', // Dark gray
        foreground: '#1a202c', // Lighter gray
        primary: '#4fd1c5',   // Teal
        text: '#e2e8f0',      // Light text color
      },
    },
  },
  plugins: [],
};