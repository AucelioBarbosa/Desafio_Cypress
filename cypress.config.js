const { defineConfig } = require("cypress");
const { findDownloadedFile } = require('./cypress/plugins/file-task');

module.exports = defineConfig({

  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    video: true,
    videosFolder: 'cypress/evidencias/videos', // pasta onde os vídeos serão salvos
    screenshotOnRunFailure: true, // opcional: captura screenshot se falhar
    screenshotsFolder: 'cypress/evidencias/screenshots', // pasta onde as screenshots serão salvas
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
