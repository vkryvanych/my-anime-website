describe('Anime Test Page', () => {
  beforeEach(() => {
    cy.visit('/test');
  });

  it('should show results after getting recommendation', () => {
    cy.contains('.option-text', 'Екшн').click();
    cy.get('button.get-rec-button').click();
    cy.get('.questions-container').should('not.exist');
    cy.get('button.get-rec-button').should('not.exist');
    
    
    cy.get('.results-container').should('be.visible');
    cy.get('.anime-title').should('be.visible');
    cy.get('.anime-description').should('be.visible');
    cy.contains('button', 'Пройти тест знову').should('be.visible'); 
  });

 
  it('should restart test when clicking restart button', () => {

    cy.contains('.option-text', 'Детектив').click();
    cy.get('button.get-rec-button').click();
    cy.get('.results-container').should('be.visible');
    cy.contains('button', 'Пройти тест знову').click();
    
    cy.get('.questions-container').should('be.visible');
    cy.get('button.get-rec-button').should('be.visible');
    cy.get('.results-container').should('not.exist');
  });
});

