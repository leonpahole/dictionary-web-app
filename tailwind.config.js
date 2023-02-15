const { fontFamily } = require("tailwindcss/defaultTheme");

const pxToRem = (px) => {
  return `${px / 16}rem`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F4F4F4",
          200: "#E9E9E9",
          300: "#757575",
          400: "#3A3A3A",
          500: "#2D2D2D",
          600: "#1F1F1F",
          700: "#050505",
        },
        purple: {
          100: "#A445ED",
        },
        red: {
          100: "#FF5252",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        serif: ["var(--font-lora)", ...fontFamily.serif],
        mono: ["var(--font-inconsolata)", ...fontFamily.mono],
      },
      fontSize: {
        hl: [pxToRem(64), pxToRem(77)],
        hm: [pxToRem(24), pxToRem(29)],
        hs: [pxToRem(20), pxToRem(24)],
        bm: [pxToRem(18), pxToRem(24)],
        bs: [pxToRem(14), pxToRem(17)],
      },
    },
  },
  plugins: [],
};
