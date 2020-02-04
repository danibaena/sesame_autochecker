describe('Sesame AutoChecker', function() {
 it('It checks out', function() {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    cy.viewport(1920, 949)

    cy.visit('https://panel.sesametime.com/')

    cy.get('.ssm-content-box-primary > #UserLoginForm > .form-group > .input > #UserEmail').click()

    cy.get('.ssm-content-box-primary > #UserLoginForm > .form-group > .input > #UserEmail').type(Cypress.env('SESAME_USERNAME'))

    cy.get('.ssm-content-box-primary > #UserLoginForm > .form-group > .input > #UserPassword').type(Cypress.env('SESAME_PASSWORD'))

    cy.get('#UserLoginForm > .form-group > .col-sm-6 > .submit > .btn').click()

    cy.url().should('include', 'https://panel.sesametime.com/admin/users/checks')

    cy.on('window:confirm', (str) => {
        expect(str === '¿Seguro que deseas salir?').to.be.true;
        return false;
    })
    // This line actually make the checkin effective, be aware
    // cy.get('#check_button.checkout').contains('Check OUT').click()
 })
})
