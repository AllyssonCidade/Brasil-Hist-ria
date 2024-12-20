import type { Config } from "tailwindcss";

export default {
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
      letterSpacing: {
        "25p": "0.25em",
      },
      screens: {
        sm400: { max: "400px" },
      },
      height: {
        lg440: "440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
