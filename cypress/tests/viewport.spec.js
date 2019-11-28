/// <reference types="Cypress" />

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('cy.viewport() - set the viewport size and dimension', () => {
    // https://on.cypress.io/viewport

    // cy.get('#navbar').should('be.visible')
    cy.viewport(320, 480)

    // TODO: the navbar should have collapsed since our screen is smaller
    // cy.get('#navbar').should('not.be.visible')
    // cy.get('.navbar-toggle').should('be.visible').click()
    // cy.get('.nav').find('a').should('be.visible')

    cy.viewport(2999, 2999)
    cy.screenshot()
    cy.wait(200)

    cy.viewport('macbook-15')
    cy.screenshot()
    cy.wait(200)

    cy.viewport('ipad-2')
    cy.screenshot()
    cy.wait(200)

    cy.viewport('iphone-6')
    cy.screenshot()
    cy.wait(200)

    cy.viewport('iphone-5')
    cy.screenshot()
    cy.wait(200)

    cy.viewport('iphone-5', 'landscape')
    cy.wait(200)

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.json)
  })
})
