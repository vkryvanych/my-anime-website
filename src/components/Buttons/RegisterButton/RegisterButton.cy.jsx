import React from 'react';

import RegisterButton from './RegisterButton';

describe('RegisterButton component', () => {
    it('should render without errors', () => {
        cy.mount(<RegisterButton />)
    
    cy.get('button').should('exist')
    cy.get('button').should('contain.text', 'Зареєструватись')
    cy.get('button').should('have.attr', 'type', 'submit')
    })   
}) 