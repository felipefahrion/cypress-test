describe('Dafiti test', () => {
    beforeEach(() => {
      cy.visit('https://www.dafiti.com.br/')
    })

    it('create sample account', () => {
        cy.once('uncaught:exception', () => false);

        cy.get('.header-login-link').click();

        cy.get('.accordion-link').click();

        cy.get('#RegistrationForm_first_name').type('sample');
        cy.get('#RegistrationForm_last_name').type('cypress');
        cy.get('#RegistrationForm_email').type('sampletestcypressfelipe@gmail.com');
        cy.get('#RegistrationForm_gender').select('Feminino');
        
        cy.get('#RegistrationForm_first_name').type('06964592059');
        cy.get('#RegistrationForm_day').select('01');
        cy.get('#RegistrationForm_month').select('12');
        cy.get('#RegistrationForm_year').select('1990');


        cy.get('#form-customer-account-password').type('sample 6732 password cypress!');
        cy.get('#RegistrationForm_password2').type('sample 6732 password cypress!');

        cy.get('#customer-account-create').click();

        cy.wait(100);

        cy.url().should('eq', 'https://secure.dafiti.com.br/customer/account/home/') // => true
    })
})