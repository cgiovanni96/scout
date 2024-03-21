import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./mdx-components.tsx",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#ECF5FE",
        "primary-500": "#22C4AF",
        "primary-700": "#137064",
        "primary-900": "#0A3932",
        "primary-dark": "#051A17",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
