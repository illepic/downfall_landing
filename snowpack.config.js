// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  root: "src/",
  mount: {
    /* ... */
  },
  plugins: ["@snowpack/plugin-babel", "@snowpack/plugin-postcss"],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: "dist/",
  },
};
