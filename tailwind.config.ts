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
        "primary-purple": "#9747FF",

        "gray-900": "#515151",
        "gray-800": "#6A6A6A",

        "green-100": "#46855B",

        "error-100": "#E53E3E",
      },
    },
  },
  plugins: [],
};
export default config;
