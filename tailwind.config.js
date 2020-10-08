module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    colors: {
      white: "#fff",
    },
    extend: {
      fontFamily: {
        sans: "Source Sans Pro",
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false,
  },
};
