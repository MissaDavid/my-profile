import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--space-grotesk)"],
        serif: ["var(--syne)"],
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      colors: {
        workshop: {
          green: "var(--workshop-green)",
          olive: "var(--olive-dark)",
          moss: "var(--moss)",
        },
        earth: {
          rust: "var(--rust-red)",
          brown: "var(--rust-brown)",
          clay: "var(--clay)",
          tan: "var(--tan-light)",
          canvas: "var(--worn-canvas)",
        },
        neutral: {
          steel: "var(--steel-gray)",
          warm: "var(--warm-white)",
          charcoal: "var(--charcoal)",
          dust: "var(--dust)",
        },
        signal: "var(--signal-orange)",
      },
      spacing: {
        '10': '10px',
        '20': '20px',
        '30': '30px',
        '40': '40px',
        '60': '60px',
        '80': '80px',
      },
    },
  },
  plugins: [],
};
export default config;
