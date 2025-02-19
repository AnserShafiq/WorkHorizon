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
      },backgroundImage:{
        'transparent-bg-one': 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.35) 30%);'
      }
      ,fontSize:{
        '5xl': '2.5rem',
      }
    },
    container: {
      center:true,
      screens: {
        xl: '1350px',
        lg: '800px'
      }
    }
  },
  plugins: [],
} satisfies Config;
