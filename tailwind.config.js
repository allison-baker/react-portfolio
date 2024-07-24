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
  daisyui: {
    themes: [
      {
        custom: {
          "primary": "#791400",
          "primary-content": "#e7d0ca",
          "secondary": "#69a1dd",
          "secondary-content": "#040911",
          "accent": "#0d375e",
          "accent-content": "#f1f3f4",
          "neutral": "#5e6f78",
          "neutral-content": "#f1f3f4",
          "base-100": "#e2e6e9",
          "base-200": "#c8d0d5",
          "base-300": "#acb8be",
          "base-content": "#0d1011",
          "info": "#6a522f",
          "info-content": "#e0dad3",
          "success": "#26503b",
          "success-content": "#d1dad4",
          "warning": "#c2410c",
          "warning-content": "#f7dad1",
          "error": "#c087bd",
          "error-content": "#0e060d",
        },
      },
    ],
  },
}
