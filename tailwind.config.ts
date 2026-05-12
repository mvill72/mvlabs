import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0A",
        ember: "#FF4D00",
        cyan: "#00E5FF",
      },
    },
  },
  plugins: [],
};
export default config;
