import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });

  it('should render footer with all main sections', () => {
    cy.get('footer').should('exist');
    cy.get('.footerContainer').should('exist');
  });

  it('should render all social media icons', () => {
    cy.get('.socialIcons').should('exist');
    cy.get('.socialIcons a').should('have.length', 5);
    
    cy.get('.socialIcons a').eq(0).find('.fa-facebook').should('exist');
    cy.get('.socialIcons a').eq(1).find('.fa-instagram').should('exist');
    cy.get('.socialIcons a').eq(2).find('.fa-twitter').should('exist');
    cy.get('.socialIcons a').eq(3).find('.fa-tiktok').should('exist');
    cy.get('.socialIcons a').eq(4).find('.fa-youtube').should('exist');
  });

  it('should have correct social media links', () => {
    cy.get('.socialIcons a[href*="instagram.com"]').should('exist');
    cy.get('.socialIcons a[href*="tiktok.com"]').should('exist');
  });

  it('should render authentication buttons by default', () => {
    cy.get('.footerLinks').should('exist');
  });

  it('should render contact us link by default', () => {
    cy.get('.footer-contact-section').should('exist');
    cy.get('.footer-contact-link')
      .should('exist')
      .and('have.attr', 'href', '/contact')
      .and('contain.text', 'Contact us');
  });

  it('should render copyright information', () => {
    cy.get('.footerBottom p')
      .should('exist')
      .and('contain.text', '© 2025 Anime Recommendation Engine');
    
    cy.get('.designer')
      .should('exist')
      .and('contain.text', 'Victoria Kryvanych');
  });
});
