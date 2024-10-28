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
        "pink-clr": "var(--pink-clr)",
        "orange-clr": "var(--orange-clr)",
        "yellow-clr": "var(--yellow-clr)",
        "gray-primary": "var(--gray-primary)",
        "gray-secondary": "var(--gray-secondary)"
      },
    },
  },
  plugins: [],
};
export default config;
