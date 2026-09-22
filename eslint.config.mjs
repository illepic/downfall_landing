import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import cypress from "eslint-plugin-cypress";
import chaiFriendly from "eslint-plugin-chai-friendly";
import promise from "eslint-plugin-promise";

export default [
  { ignores: ["dist/", ".parcel-cache/"] },
  js.configs.recommended,
  promise.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
  },
  {
    files: ["*.config.js", "cypress/plugins/**"],
    languageOptions: { sourceType: "commonjs", globals: globals.node },
  },
  {
    files: ["cypress/**"],
    ...cypress.configs.recommended,
  },
  {
    files: ["cypress/**"],
    ...chaiFriendly.configs.recommendedFlat,
  },
  prettier,
];
