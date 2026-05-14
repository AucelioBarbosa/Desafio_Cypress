const { defineConfig } = require("cypress");
const { findDownloadedFile } = require('./cypress/plugins/file-task');

module.exports = defineConfig({

  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://www.automationexercise.com",
    downloadsFolder: "cypress/dowloads",

    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());

      on('task', {
        findDownloadedFile,
      });
      return config
    },
  },
});
