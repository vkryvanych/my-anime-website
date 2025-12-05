import React from 'react';

import LoginButton from './LoginButton';

describe('LoginButton component', () => {
    it('should render without errors', () => {
        cy.mount(<LoginButton />)
    
    cy.get('button').should('exist')
    cy.get('button').should('contain.text', 'Увійти')
    cy.get('button').should('have.attr', 'type', 'submit')
    })   
}) 