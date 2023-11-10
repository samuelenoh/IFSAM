// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
      
//     },baseUrl: 'https://ifsam.amalitech-dev.net',
//     // chromeWebSecurity: false,
//       "testIsolation": false,
//       "defaultCommandTimeout":1000,
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wmmb4s',
  env:{
    // baseUrl: 'https://ifsam.amalitech-dev.net'   ,
  },
  e2e: {
    setupNodeEvents(on, config) { 
      // implement node event listeners here
    },
    
    // testIsolation: false,
    baseUrl: 'https://ifsam.amalitech-dev.net',
  },
  defaultCommandTimeout: 10000, // Set the default command timeout to 5 seconds
  viewportWidth: 1200,         // Set the default viewport width to 1200 pixels
  viewportHeight: 800,      // Set the default viewport height to 800 pixels
  chromeWebSecurity: false,  
  screenshotOnRunFailure: true, 
  trashAssetsBeforeRuns: true, 
   
  on: {
    // Intercept uncaught exceptions and prevent Cypress from failing the test
    'uncaught:exception'(err, runnable) {
      console.error('Uncaught Exception:', err.message);
      return false;
    }
  },
});
