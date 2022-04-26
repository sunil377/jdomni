const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        skin: {
          blue: {500: "#0086ff"},
          gray: "#3f4755",
        },
      },
      animation: {
        slide: "slide 0.5s linear 1",
      },
      keyframes: {
        slide: {
          "0%": {left: "100%"},
          "100%": {left: "0px"},
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
