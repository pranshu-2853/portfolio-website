import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        panel: "#0f1c2e",
        mist: "#93adc7",
        accent: "#22d3ee",
        accentSoft: "#a5f3fc",
        emerald: "#34d399"
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"]
      },
      boxShadow: {
        glow: "0 10px 30px rgba(34, 211, 238, 0.18)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 25% 20%, rgba(52, 211, 153, 0.14), transparent 30%), radial-gradient(circle at 80% 0%, rgba(34, 211, 238, 0.2), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;
