import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        rift: {
          950: "#06080f",
          900: "#0b1020",
          800: "#10182b",
          700: "#17213a",
          600: "#25365d"
        },
        hex: {
          cyan: "#20e6ff",
          gold: "#f7c948",
          pink: "#ff3d81",
          lime: "#9cff57"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(32, 230, 255, 0.16)",
        gold: "0 0 22px rgba(247, 201, 72, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
