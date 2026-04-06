import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F1",
        "cream-dark": "#F5EFE6",
        espresso: "#2C1810",
        sienna: "#A0522D",
        copper: "#C67B4E",
        amber: "#E8B86D",
        "warm-border": "#E8DDD0",
      },
      fontFamily: {
        serif: ['"Palatino Linotype"', '"EB Garamond"', '"Yu Mincho"', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
      },
    },
  },
  plugins: [],
};
export default config;
