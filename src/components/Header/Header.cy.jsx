import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  it('renders header with logo', () => {
    cy.mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    cy.get('header').should('exist');
    cy.get('.logo').contains('AnimeRec');
  });

  it('renders extra element when showBackButton is true', () => {
    cy.mount(
      <MemoryRouter>
        <Header showBackButton={true} />
      </MemoryRouter>
    );
    
    // В header-content має бути 2 елементи
    cy.get('.header-content').children().should('have.length', 2);
  });

  it('renders only logo when showBackButton is false', () => {
    cy.mount(
      <MemoryRouter>
        <Header showBackButton={false} />
      </MemoryRouter>
    );
    
    // В header-content має бути тільки 1 елемент
    cy.get('.header-content').children().should('have.length', 1);
    cy.get('.logo').should('exist');
  });
});