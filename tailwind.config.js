const customForms = require("@tailwindcss/custom-forms");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      "grey-dark": "#1b1f22",
      "grey-darker": "#131519",
    },
    extend: {
      fontFamily: {
        sans: "Source Sans Pro",
      },
      transitionDuration: {
        3000: "3000ms",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
      maxHeight: {
        0: "0",
      },
      inset: {
        1: "1rem",
      },
      letterSpacing: {
        "stupid-huge": ".5rem",
      },
      zIndex: {
        "-10": "-10",
      },
    },
    customForms: (theme) => ({
      default: {
        input: {
          backgroundColor: theme("colors.transparent"),
        },
        textarea: {
          backgroundColor: theme("colors.transparent"),
        },
      },
    }),
  },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
  },
  plugins: [customForms],
  corePlugins: {
    container: false,
  },
};
