const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
module.exports = defineConfig({
e2e: {
  setupNodeEvents(on, config) {
  // Configura el preprocesador del bundle y el plugin Cucumber.
    on(
    'file:preprocessor',
    createBundler({
    plugins: [createEsbuildPlugin(config)],
    })
  );
  // Añade el preprocesador de Cucumber.
  addCucumberPreprocessorPlugin(on, config);
  // Asegúrate de devolver el objeto de configuración.
  return config;
  },
  specPattern: ['cypress/e2e/**/*.feature', 'cypress/e2e/basic-tests/*.js']
  /*
  Para encontrar los archivos de tests, si queremos que también encuentre
  archivos .js
  añade la ruta con la extensión separada con una , todo dentro de []
  */
  },
  numTestsKeptInMemory: 10,
  defaultCommandTimeout: 10000,
  experimentalStudio: true,
  failOnStatusCode: false,
  env: {
    snapshotOnly: true,
    requestMode: true,
  },
});
