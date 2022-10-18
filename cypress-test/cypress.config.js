const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://google.com',
    specPattern: '*.cy.js'
  }
})