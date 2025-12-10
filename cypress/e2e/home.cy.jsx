describe('Home page test', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    
    it('should render all the components', () => {
      cy.get('.home-page').within(() => {
        cy.get('[data-testid="hero-component"]').should('be.visible')
        cy.get('[data-testid="feature-component"]').should('be.visible')   
        cy.get('[data-testid="intro-component"]').should('be.visible') 
    })
    })
}) 