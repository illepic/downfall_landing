const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "fh28pw",
    viewportWidth: 1024,
    viewportHeight: 768,
    baseUrl: "http://localhost:1234",
    defaultCommandTimeout: 7000,
  },
});
