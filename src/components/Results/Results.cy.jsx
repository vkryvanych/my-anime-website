import React from 'react';
import Results from './Results';

describe('Results', () => {
  it('показує рекомендоване аніме', () => {
    const onRestart = cy.stub();
    
    cy.mount(
      <Results 
        anime="One Piece"
        description="Пригоди Луффі"
        image="/onepiece.jpg"
        onRestart={onRestart}
      />
    );

    cy.get('.anime-title').should('contain.text', 'One Piece');
    cy.get('h2').should('contain.text', 'Ось що ми знайшли для вас');
    cy.get('.action-button').should('exist');
  });

  it('викликає onRestart при кліку', () => {
    const onRestart = cy.stub().as('restart');
    
    cy.mount(
      <Results 
        anime="Test"
        description="Test"
        image="/test.jpg"
        onRestart={onRestart}
      />
    );

    cy.get('.action-button').click();
    cy.get('@restart').should('have.been.calledOnce');
  });
  
  it('працює без зображення', () => {
    const onRestart = cy.stub();
    
    cy.mount(
      <Results 
        anime="Без картинки"
        description="Опис"
        image=""
        onRestart={onRestart}
      />
    );

    cy.get('.anime-title').should('exist');
    cy.get('.results-container').should('exist');
  });
}); 