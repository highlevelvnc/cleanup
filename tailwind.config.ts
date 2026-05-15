import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          DEFAULT: "#00AEEF",
          50: "#E6F7FE",
          100: "#CCEFFD",
          200: "#99DFFB",
          300: "#66CFF8",
          400: "#33BFF6",
          500: "#00AEEF",
          600: "#008BBF",
          700: "#00688F",
          800: "#005F73",
          900: "#003B47",
        },
        mint: {
          DEFAULT: "#20C997",
          50: "#E8FAF4",
          100: "#D1F5E9",
          400: "#4AD3A8",
          500: "#20C997",
          600: "#1AA47C",
          700: "#147F60",
        },
        ink: {
          DEFAULT: "#333333",
          soft: "#4B5563",
          muted: "#6B7280",
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
        },
        deep: "#005F73",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #00AEEF 0%, #20C997 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(0,174,239,.08) 0%, rgba(32,201,151,.08) 100%)",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 95, 115, 0.08)",
        lift: "0 18px 40px rgba(0, 95, 115, 0.14)",
      },
      borderRadius: { xl: "0.875rem", "2xl": "1.25rem", "3xl": "1.75rem" },
      maxWidth: { container: "1240px" },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
