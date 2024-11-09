import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './componentsLibrary/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        sfpro: "var(--font-sfpro)",
      },
      boxShadow: {
        'custom-inset': '0px 0px 6.2px 0px #FFFFFF3D inset', // Custom shadow
      },
    },
  },
  plugins: [],
};
export default config;
