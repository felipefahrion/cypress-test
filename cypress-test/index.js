const cy = require('cypress');

describe('todolist app', () => {
    beforeEach(() => {
      cy.visit('google.com')
    })


    it('Page Should Containt The Following Strings', () => {
        cy.get('#heading').contains('todolist').should('be.visible')
        cy.get('#subHeading').contains('What needs to be done?').should('be.visible')
        cy.get('#todoText').should('be.empty').and('be.visible')
        cy.get('#addBtn').contains('Add').should('be.visible')
        cy.contains('There\'s nothing to do today.').should('be.visible')
    })
  })