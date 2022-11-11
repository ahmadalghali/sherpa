/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
        secondary: colors.orange,
        accent: colors.zinc,
        // primary: colors.indigo,
      }
    }
  },
  plugins: [require('@tailwindcss/typography'),]
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: [ 

//       {
//           orangish: {
          
//   "primary": "#f97316",
          
//  "secondary": "#fdba74",
          
//  "accent": "#c2410c",
          
//  "neutral": "#fed7aa",
          
//  "base-100": "#e5e7eb",
          
//  "info": "#38bdf8",
          
//  "success": "#4ade80",
          
//  "warning": "#fbbf24",
          
//  "error": "#fb7185",
//           },
//         },

//       {
//           orangey: {
          
//  "primary": "#ea580c",
          
//  "secondary": "#fdba74",
          
//  "accent": "#92400e",
          
//  "neutral": "#111827",
          
//  "base-100": "#e5e7eb",
          
//  "info": "#22d3ee",
          
//  "success": "#4ade80",
          
//  "warning": "#fbbf24",
          
//  "error": "#fb7185",
//           },
//         },
//        {
//           blueish: {
          
//  "primary": "#033c82",
          
//  "secondary": "#4e79db",
          
//  "accent": "#9ff4cb",
          
//  "neutral": "#272A3A",
          
//  "base-100": "#e5e7eb",
          
//  "info": "#82D8ED",
          
//  "success": "#1FC176",
          
//  "warning": "#C59F07",
          
//  "error": "#EF6B91",
//           },
//         },

//        {
//           limey: {
          
//  "primary": "#69bd40",
          
//  "secondary": "#8eedaf",
          
//  "accent": "#bcf99d",
          
//  "neutral": "#201A23",
          
//  "base-100": "#FCFCFD",
          
//  "info": "#A9DBEA",
          
//  "success": "#17B57B",
          
//  "warning": "#F09028",
          
//  "error": "#F70844",
//           },
//         },

//       {
//           mytheme: {
          
//  "primary": "#c6f0ff",
          
//  "secondary": "#2473f2",
          
//  "accent": "#98f2e1",
          
//  "neutral": "#191622",
          
//  "base-100": "#F7F6F9",
          
//  "info": "#4E9ED0",
          
//  "success": "#13675C",
          
//  "warning": "#E0750B",
          
//  "error": "#DF3058",
//           },
//         },
      
//       {
//           anotherTheme: {
          
//   "primary": "#16a34a",
          
//  "secondary": "#86efac",
          
//  "accent": "#0284c7",
          
//  "neutral": "#211A23",
          
//  "base-100": "#F6F7F9",
          
//  "info": "#72CDE9",
          
//  "success": "#31C4AB",
          
//  "warning": "#FCA727",
          
//  "error": "#F75976",
//           },
//         },"autumn", "garden", "emerald", "lemonade",]
//   },
}