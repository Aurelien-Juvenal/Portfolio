import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A2540",
        "ink-2": "#0F335C",
        "ink-3": "#123A61",
        paper: "#E9EDF3",
        "paper-dim": "#93A9C7",
        "paper-faint": "#5C7699",
        stamp: "#E2572B",
        "stamp-dim": "#E2572B33",
        line: "rgba(233,237,243,0.14)",
        "line-strong": "rgba(233,237,243,0.28)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(233,237,243,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(233,237,243,0.06) 1px, transparent 1px)",
        "grid-major":
          "linear-gradient(rgba(233,237,243,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(233,237,243,0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "24px 24px",
        "grid-major": "120px 120px",
      },
    },
  },
  plugins: [],
};
export default config;
