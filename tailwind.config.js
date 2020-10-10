module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
    },
    extend: {
      fontFamily: {
        sans: "Source Sans Pro",
      },
      transitionDuration: {
        3000: "3000ms",
      },
      maxHeight: {
        0: "0",
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false,
  },
};
