module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      current: "currentColor",
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
  corePlugins: {
    container: false,
  },
};
