import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "blue-clr": "var(--blue-clr)",
        "dark-blue-clr": "var(--dark-blue-clr)",
        "red-clr": "var(--red-clr)",
        "gray-primary": "var(--gray-clr)",
        "gray-secondary": "var(--gray-text)"
      },
    },
  },
  plugins: [],
};
export default config;
