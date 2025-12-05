import React from 'react';

import ContactButton from './ContactButton';

describe('Contact Button component', () => {
    it('should render without errors', () => {
        cy.mount(<ContactButton />)
    
    cy.get('button').should('exist')
    cy.get('button').should('contain.text', 'Надіслати')
    cy.get('button').should('have.attr', 'type', 'submit')
    })   
}) 