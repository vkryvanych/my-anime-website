import React from 'react';
import ContactText from './ContactText';

describe('ContactText component', () => {
    it('should render without errors', () => {
        cy.mount(<ContactText />)

    cy.get('h1').should('contain.text', 'Ми тут, щоб допомогти!');
    cy.get('.contact-text').should('exist');
    });
});