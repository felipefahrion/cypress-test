describe('Google test', () => {
    beforeEach(() => {
      cy.visit('https://google.com')
    })

    it('check if the search bar is working', () => {
      cy.get('.gLFyf.gsfi').type('google')
    })
})