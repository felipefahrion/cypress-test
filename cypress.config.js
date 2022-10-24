const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'tests/*.cy.js',
    defaultCommandTimeout: 25000,
  }
})