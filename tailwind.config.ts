import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBackground: "var(--header-bg)",
        'sidemenu-bg': 'var(--sidemenu-bg)',
        'transparent-one': 'var(--transparent-one)',
        'transparent-two':'var(--transparent-two)',
        'transparent-three':'var(--transparent-three)',
        dullWhite: '#FFFBF6',
        'special-blue': '#072c43',

      },backgroundImage:{
        'transparent-bg-one': 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.35) 30%);',
        'blue-white': 'linear-gradient(to right,rgb(7, 44, 67) 43.5%, #ffffff 43.5% );',
        'blue-white-two': 'linear-gradient(to bottom, #072c43 25%, #ffffff 25% );',
        'blue-white-three': 'linear-gradient(to bottom, #072c43 25%, #ffffff 25% );',
        'half-light-blue': 'linear-gradient(to bottom,rgb(7, 44, 67) 50%, #ffffff 50% );',
      }
      ,fontSize:{
        '5xl': '2.5rem',
      },
    },
    container:{
      center:true,
    }
    
  },
  plugins: [],
} satisfies Config;
