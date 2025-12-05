import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Hero from './Hero';

describe('Hero component', () => {
  it('renders hero section with all elements', () => {
    cy.mount(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    
    cy.get('.getRec').should('exist');
    cy.get('.header-text').contains('Знайдіть ідеальне аніме для себе');
    cy.get('p').contains('Наша система рекомендацій');
    cy.get('a').should('exist');
  });

  it('has correct structure', () => {
    cy.mount(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    
    cy.get('.container').within(() => {
      cy.get('h1').should('exist');
      cy.get('p').should('exist');
      cy.get('a').should('exist');
    });
  });

  it('GetRecButton should be a link with correct attributes', () => {
    cy.mount(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    
    cy.get('a')
      .should('have.attr', 'href')
      .and('not.be.empty');
  });
});