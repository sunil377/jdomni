const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue[500],
      },
      screens: {
        xs: "448px",
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        slide: "slide 0.5s linear 1",
      },
      keyframes: {
        slide: {
          "0%": { left: "100%" },
          "100%": { left: "0px" },
        },
      },
    },
  },
  plugins: [],
};
