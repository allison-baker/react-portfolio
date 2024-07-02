/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
    },
    colors: {
      "primary": {
        50: "#FFEAE5",
        100: "#FFD0C7",
        200: "#FFA28F",
        300: "#FF775C",
        400: "#FF4824",
        500: "#EB2700",
        600: "#B41E00",
        700: "#851600",
        800: "#5C0F00",
        900: "#2E0800",
        950: "#140300"
      },
      "secondary": {
        50: "#EAF4FA",
        100: "#D2E7F4",
        200: "#A4CFE9",
        300: "#7BB9E0",
        400: "#4EA1D5",
        500: "#2D86BE",
        600: "#226690",
        700: "#184765",
        800: "#102F42",
        900: "#081721",
        950: "#040C10"
      }
    },
    fontFamily: {
      sans: ['Titillium Web', 'sans-serif'],
      serif: ['Noto Serif', 'serif'],
    },
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

