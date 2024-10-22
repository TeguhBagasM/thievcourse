/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      fontSize: {
        h1: [
          "clamp(2.25rem, 4vw, 3.375rem)",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        h2: [
          "clamp(2rem, 4vw, 2.75rem)",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        h3: [
          "clamp(1.75rem, 4vw, 2.25rem)",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
      },
      colors: {
        primary: {
          10: "#003f5c",
          20: "#005b96",
          30: "#0074c4",
          40: "#0096ff",
          50: "#33aaff",
          60: "#66c2ff",
          70: "#99d3ff",
          80: "#cce4ff",
          90: "#e5f2ff",
        },
        gray: {
          10: "#292c32",
          20: "#393e45",
          30: "#4a4f59",
          40: "#5a616c",
          50: "#6a7280",
          60: "#7d8491",
          70: "#9096a1",
          80: "#a4a9b2",
          90: "#b7bbc2",
        },
      },

      borderRadius: {
        "4xl": "32px",
      },
      keyframes: {
        "shadow-animate": {
          "0%": { boxShadow: "0 0 8px 4px rgba(59, 130, 246, 0.7)" }, // Initial shadow
          "25%": { boxShadow: "0 0 8px 4px rgba(236, 72, 153, 0.7)" }, // Intermediate shadow
          "50%": { boxShadow: "0 0 8px 4px rgba(168, 85, 247, 0.7)" }, // Middle shadow
          "75%": { boxShadow: "0 0 8px 4px rgba(236, 72, 153, 0.7)" }, // Intermediate shadow
          "100%": { boxShadow: "0 0 8px 4px rgba(59, 130, 246, 0.7)" }, // Final shadow
        },
        "border-animate": {
          "0%": { borderColor: "#3b82f6" }, // Initial border color
          "25%": { borderColor: "#ec4899" }, // Intermediate border color
          "50%": { borderColor: "#06b6d4" }, // Middle border color
          "75%": { borderColor: "#ec4899" }, // Intermediate border color
          "100%": { borderColor: "#3b82f6" }, // Final border color
        },
      },
      animation: {
        "shadow-animate": "shadow-animate 4s linear infinite",
        "border-animate": "border-animate 2s linear infinite",
      },
    },
  },
  plugins: [],
};
