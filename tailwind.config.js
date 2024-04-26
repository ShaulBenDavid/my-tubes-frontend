// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

// ! TEMP until tailwind will be release a new version
delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mb: "375px",
      xs: "412px",
      sm: "568px",
      tb: "768px",
      md: "1024px",
      lg: "1440px",
      xl: "1920px",
    },
    colors: {
      ...colors,
      primary: {
        50: "#fff0f0",
        100: "#ffdddd",
        200: "#ffc1c1",
        300: "#ff9797",
        400: "#ff5b5b",
        500: "#ff2828",
        600: "#f80505",
        700: "#d30202",
        800: "#ae0606",
        900: "#8f0d0d",
        950: "#4f0000",
      },
      "light-primary": "#C147E9",
      "light-purple": "#E5B8F4",
      secondary: {
        50: "#efe6ff",
        100: "#e4d2ff",
        200: "#d1aeff",
        300: "#b97dff",
        400: "#b14aff",
        500: "#b522ff",
        600: "#bd00ff",
        700: "#b900ff",
        800: "#9d00d8",
        900: "#7b08a7",
        950: "#2d033b",
      },
      "wizard-grey": "#736278",
      "primary-gray": "#6B6B6B",
      "dw-grey": "#E8E3EA",
      "bg-grey": "#282828",
      "wizard-black": "#1D0325",
      "wizard-white": "#FAF2FD",
      "spec-space-bg": "#0f0f0f",
      "spec-menu-bg": "#282828",
      "spec-text-secondary": "#606060",
      orange: "#EC5D0D",
      white: "#ffffff",
      black: "#222222",
    },
    extend: {
      height: {
        dvh: "100dvh",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      fontSize: {
        "h1-dynamic": "clamp(2rem, 5vw, 4rem)",
        "p-dynamic": "clamp(1.125rem, 2vw, 1.5rem)",
      },
      boxShadow: {
        dw: "2px 2px 4px rgba(45, 3, 59, 0.62)",
        button: "2px 2px 4px 0px rgba(45, 3, 59, 0.62)",
        container: " 0px 4px 22px 3px rgba(29, 3, 37, 0.25)",
        dropdown:
          "0 10px 15px -3px rgba(45, 3, 59, 0.1), 0 4px 6px -2px rgba(45, 3, 59, 0.05), 0 0 0 1px rgba(45, 3, 59, 0.1)",
      },
      gridTemplateColumns: {
        "groups-auto-fit": "repeat(auto-fill, minmax(400px, 1fr))",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        enterIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { translate: "translateX(100%)" },
        },
        enterInSideTabs: {
          "0%": { transform: "translateY(15px)", opacity: 0 },
          "100%": { translate: "translateY(0)", opacity: 1 },
        },
        "skeleton-loading": {
          "0%": {
            backgroundColor: "hsl(200, 20%, 70%)",
          },
          "100%": {
            backgroundColor: " hsl(200, 20%, 95%)",
          },
        },
      },
    },
  },
  plugins: [],
};
