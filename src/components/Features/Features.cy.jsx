import React from 'react';
import Features from './Features';

describe('Features component', () => {
    it('renders features section with correct content', () => {
        cy.mount(<Features />);
    
    cy.get('.features').should('exist');
    cy.get('.section-title').should('contain.text', 'Чому обирають AnimeRec');
    cy.get('.feature-card').should('have.length', 3);
    cy.get('.feature-card').first().should('contain.text', 'Персоналізовані рекомендації'); 
    cy.get('.feature-card').last().should('contain.text', 'Велика база аніме');
    })
})