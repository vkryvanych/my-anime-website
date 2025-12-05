import React from 'react';
import Intro from './Intro';

describe('Intro component', () => {
  it('renders intro section with welcome text', () => {
    cy.mount(<Intro />);
    
    cy.get('.intro-text').should('exist');
    cy.get('p').contains('Ласкаво просимо до Anime Recommendation Engine!');
  });

  it('has correct nesting structure', () => {
    cy.mount(<Intro />);
    
    cy.get('.intro-text')
      .find('.container')
      .find('p')
      .should('exist');
  });
});