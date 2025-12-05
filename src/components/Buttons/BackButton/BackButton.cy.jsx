import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import BackButton from './BackButton';

function HomePage() {
  return (
  <div data-testid="home-page">Home page</div>
)}

describe('BackButton Component', () => {
  it('navigates to /home when clicked', () => {
    cy.mount(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<BackButton />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    );

    cy.get('a').should('exist');
    cy.get('a').should('contain.text', '← Назад')
    cy.get('a').should('have.attr', 'href', '/home');
    cy.get('a').click();

    // Перевірка, чи компонент /home відрендерився
    cy.get('[data-testid="home-page"]').should('exist');
  });
});
