context('Window', () => {

  it('cy.title() - get the title', () => {
    cy.visit('/')
    cy.title().should('include', 'Hotel Suites Brisas Carrizalillo')
  })

  it("Should switch to English", () => {
    // English
     cy.get('.rd-navbar-dropdown > :nth-child(1) > a').click({force: true})
     cy.get('[data-translate="inicio"]').contains("Home")
     cy.get('[data-translate="about"]').contains("About Us")
     cy.get('[data-translate="contact"]').contains("Contact Us")

     //Spanish
     cy.get('.rd-navbar-dropdown > :nth-child(2) > a').click({force: true})
     cy.get('[data-translate="inicio"]').contains("Inicio")
     cy.get('[data-translate="about"]').contains("Acerca de")
     cy.get('[data-translate="contact"]').contains("Contáctanos")
  
  })
})
