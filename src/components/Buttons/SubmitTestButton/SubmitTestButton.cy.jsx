import React from 'react';

import SubmitTestButton from './SubmitTestButton';

describe('SubmitTestButton component', () => {
    it('should render without errors', () => {
    cy.mount(<SubmitTestButton />)
    
    cy.get('button').should('exist')
    cy.get('button').should('contain.text', 'Отримати рекомендацію')
    });

    it('calls onClick when clicked', () => {
        const onClick = cy.stub().as('clickHandler');
        cy.mount(<SubmitTestButton onClick={onClick} />)

        cy.get('button').click();
        cy.get('@clickHandler').should('have.been.calledOnce');
    });
}) 