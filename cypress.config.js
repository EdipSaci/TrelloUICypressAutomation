const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'reporters/custom.js',
  retries: {
    runMode: 1,
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
