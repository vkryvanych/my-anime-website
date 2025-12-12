describe('Main Navigation Tests', () => {
  it('should navigate between all pages', () => {
    // 1. Home - Test 
    cy.visit('/');
    cy.get('a.get-rec-button').click();
    cy.url().should('include', '/test');
    
    // 2. Test - Home 
    cy.get('a.back-button').click();
    cy.url().should('eq', 'http://localhost:5173/home');
    cy.get('.home-page').should('be.visible');
    
    // 3. Home - Login 
    cy.visit('/');
    cy.get('[data-testid="footer-login-button"]').click();
    cy.url().should('include', '/auth/login');

    //4. Home - Register 
    cy.visit('/');
    cy.get('[data-testid="footer-register-button"]').click();
    cy.url().should('include', '/auth/register'); 
    
    // 4. Auth - Home 
    cy.get('a.back-button').click();
    cy.url().should('include', '/home');
    
    // 5. Home - Contact 
    cy.visit('/');
    cy.get('[data-testid="footer-contact-link"]').click();
    cy.url().should('include', '/contact');
    
    // 6. Contact - Home 
    cy.get('a.back-button').click();
    cy.url().should('include', '/home');
  });

  it('should navigate within auth pages', () => {
    cy.visit('/auth');
    
    // Login - Register
    cy.get('a[href="/auth/register"]').click();
    cy.url().should('include', '/auth/register');
    
    // Register - Login
    cy.get('a[href="/auth/login"]').click();
    cy.url().should('include', '/auth/login');
  });
}); 