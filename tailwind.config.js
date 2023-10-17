/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "6px",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
      large: "12px",
    },
    extend: {
      colors: {
        primary: {
          50: "hsl(162, 82%, 90%)",
          100: "hsl(162, 78%, 85%)",
          200: "hsl(162, 74%, 75%)",
          300: "hsl(162, 70%, 65%)",
          400: "hsl(162, 62%, 55%)",
          500: "hsl(162, 62%, 45%)",
          600: "hsl(162, 58%, 35%)",
          700: "hsl(162, 54%, 25%)",
          800: "hsl(162, 50%, 15%)",
          900: "hsl(162, 46%, 10%)",
          950: "hsl(162, 46%, 5%)"
        },
        light: {
          50: "hsl(162, 100%, 99%)",
          100: "hsl(162, 97%, 98%)",
          200: "hsl(162, 94%, 97%)",
          300: "hsl(162, 91%, 96%)",
          400: "hsl(162, 88%, 95%)",
          500: "hsl(162, 85%, 94%)", // Base color
          600: "hsl(162, 82%, 93%)",
          700: "hsl(162, 79%, 92%)",
          800: "hsl(162, 76%, 91%)",
          900: "hsl(162, 73%, 90%)",
          950: "hsl(162, 70%, 89%)",
        },
        dark: {
          50: "hsl(171, 20%, 11%)",
          100: "hsl(171, 20%, 10%)",
          200: "hsl(171, 20%, 9%)",
          300: "hsl(171, 20%, 8%)",
          400: "hsl(171, 20%, 7%)",
          500: "hsl(171, 20%, 6%)",
          600: "hsl(171, 20%, 5%)",
          700: "hsl(171, 20%, 4%)",
          800: "hsl(171, 20%, 3%)",
          900: "hsl(171, 20%, 2%)",
          950: "hsl(171, 20%, 1%)",
        },
        error: {
          50: "hsl(0, 90%, 95%)",
          100: "hsl(0, 85%, 90%)",
          200: "hsl(0, 80%, 85%)",
          300: "hsl(0, 75%, 75%)",
          400: "hsl(0, 70%, 65%)",
          500: "hsl(0, 65%, 55%)",
          600: "hsl(0, 60%, 45%)",
          700: "hsl(0, 55%, 35%)",
          800: "hsl(0, 50%, 25%)",
          900: "hsl(0, 45%, 15%)",
          950: "hsl(0, 40%, 10%)",
        },
        alert: {
          50: "hsl(60, 90%, 95%)",
          100: "hsl(60, 85%, 90%)",
          200: "hsl(60, 80%, 85%)",
          300: "hsl(60, 75%, 75%)",
          400: "hsl(60, 70%, 65%)",
          500: "hsl(60, 65%, 55%)",
          600: "hsl(60, 60%, 45%)",
          700: "hsl(60, 55%, 35%)",
          800: "hsl(60, 50%, 25%)",
          900: "hsl(60, 45%, 15%)",
          950: "hsl(60, 40%, 10%)",
        },
        success: {
          50: "hsl(120, 90%, 95%)",
          100: "hsl(120, 85%, 90%)",
          200: "hsl(120, 80%, 85%)",
          300: "hsl(120, 75%, 75%)",
          400: "hsl(120, 70%, 65%)",
          500: "hsl(120, 65%, 55%)",
          600: "hsl(120, 60%, 45%)",
          700: "hsl(120, 55%, 35%)",
          800: "hsl(120, 50%, 25%)",
          900: "hsl(120, 45%, 15%)",
          950: "hsl(120, 40%, 10%)",
        },
        happy: {
          50: "hsl(240, 90%, 95%)",
          100: "hsl(240, 85%, 90%)",
          200: "hsl(240, 80%, 85%)",
          300: "hsl(240, 75%, 75%)",
          400: "hsl(240, 70%, 65%)",
          500: "hsl(240, 65%, 55%)",
          600: "hsl(240, 60%, 45%)",
          700: "hsl(240, 55%, 35%)",
          800: "hsl(240, 50%, 25%)",
          900: "hsl(240, 45%, 15%)",
          950: "hsl(240, 40%, 10%)",
        },
        info: {
          50: "hsl(210, 90%, 95%)",
          100: "hsl(210, 85%, 90%)",
          200: "hsl(210, 80%, 85%)",
          300: "hsl(210, 75%, 75%)",
          400: "hsl(210, 70%, 65%)",
          500: "hsl(210, 65%, 55%)",
          600: "hsl(210, 60%, 45%)",
          700: "hsl(210, 55%, 35%)",
          800: "hsl(210, 50%, 25%)",
          900: "hsl(210, 45%, 15%)",
          950: "hsl(210, 40%, 10%)",
        },
      },
      keyframes: {
        "slow": {
          "0%": { transform: 'rotate(0deg)' },
          "50%": { transform: 'rotate(360deg)' },
          "100%": { transform: 'rotate(0deg)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        'slow-spin': 'slow 10s alternate ease-out infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
