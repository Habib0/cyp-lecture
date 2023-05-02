const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    "baseUrl": 'https://opensource-demo.orangehrmlive.com/web/index.php/auth',
    "specPattern":[
      "cypress/e2e/myFirstApi.cy.js",
      "cypress/e2e/loginTest.cy.js",
      "cypress/e2e/assertion.cy.js",
      "cypress/e2e/elementAccess.cy.js",
      "cypress/e2e/uploadKey.cy.js",
      "cypress/e2e/iframeTest.cy.js",
      "cypress/e2e/hooks.cy.js",
      "cypress/e2e/plugin-api.cy.js"
    ],
    "env":{
      "userName":"student23",
      "password":"Password123"
    },
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        /* ... */
      })
    },
   "video":true,
   "viewportWidth": 1920,
   "viewportHeight":960

  },
})



