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
        
"primary": "#b1c8ed",
        
"secondary": "#77ffa4",
        
"accent": "#6e66cc",
        
"neutral": "#151c23",
        
"base-100": "#efeaf6",
        
"info": "#8fbee5",
        
"success": "#47dca5",
        
"warning": "#f5c20a",
        
"error": "#e65437",
        },
      },
    ],
  },
};
