import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  fontFamily: {
    poppins: ['var(--font-poppins)'],
    pixeboy: ['Pixeboy', 'sans-serif'],
    pixelify: ['Pixelify Sans', 'sans-serif']
  },
  theme: {
    extend: {
      colors: {
       primaryButton: "#53CBC9"
      },
    },
  },
  plugins: [],
};
export default config;
