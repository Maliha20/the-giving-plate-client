/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#818cf8",
        
"secondary": "#7dd3fc",
        
"accent": "#95ade5",
        
"neutral": "#1c151e",
        
"base-100": "#e6e6eb",
        
"info": "#0ea5e9",
        
"success": "#3fd98f",
        
"warning": "#fde047",
        
"error": "#fb7185",
        },
      },
    ],
  },
};