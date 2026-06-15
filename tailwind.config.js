
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#FAFAFA",
        muted: "#1A1A1A",
        mutedForeground: "#737373",
        accent: "#FF3D00",
        accentForeground: "#0A0A0A",
        border: "#262626",
        input: "#1A1A1A",
        card: "#0F0F0F",
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'Inter', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      letterSpacing: {
        tighter: "-0.06em",
        tight: "-0.04em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [],
}