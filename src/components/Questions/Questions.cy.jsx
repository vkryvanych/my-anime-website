import React from 'react';
import Questions from './Questions';

describe('Questions component', () => {
  it('рендерить всі опції жанрів', () => {
    const onGenreChange = cy.stub();
    cy.mount(<Questions selectedGenre={null} onGenreChange={onGenreChange} />);

    cy.get('.option-card').should('have.length', 4);
    cy.contains('Екшн').should('exist');
    cy.contains('Детектив').should('exist');
    cy.contains('Романтика').should('exist');
    cy.contains('Фентезі').should('exist');
  });

  it('показує обраний жанр', () => {
    const onGenreChange = cy.stub();
    cy.mount(<Questions selectedGenre="action" onGenreChange={onGenreChange} />);
    cy.get('input[value="action"]').should('be.checked');
  });

  it('викликає onGenreChange при виборі', () => {
    const onGenreChange = cy.stub().as('onGenreChange');
    cy.mount(<Questions selectedGenre={null} onGenreChange={onGenreChange} />);
    
    cy.contains('Романтика').click();
    cy.get('@onGenreChange').should('have.been.calledWith', 'romance');
  });
}); 