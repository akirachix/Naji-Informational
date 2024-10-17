import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        'is': {'min': '375px', 'max': '539px'},
        'sd': {'min': '540px', 'max': '767px'},
        'im': {'min': '768px', 'max': '999px'},
        'nh': {'min': '1000px', 'max': '1279px'},
        'nhm':{'min': '1280px'},
      },
    },
  },
  plugins: [],
};
export default config;
