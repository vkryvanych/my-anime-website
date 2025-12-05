import React from 'react';
import AuthBackground from './AuthBackground';

describe('AuthBackground', () => {
  it('renders login images when isLogin is true', () => {
    cy.mount(<AuthBackground isLogin={true} />);
    
    cy.get('.auth-background').should('exist');
    
    cy.get('img.deco-1')
      .should('exist')
      .and('have.attr', 'src', '/photo_2025-10-07_23-11-17-removebg-preview.png')
      .and('have.attr', 'alt', 'Anime girl');
    
    cy.get('img.deco-2')
      .should('exist')
      .and('have.attr', 'src', '/429-4292752_tumblr-art-anime-neko-nekogirl-sticker-stickers-neko-removebg-preview.png')
      .and('have.attr', 'alt', 'Neko girl');
    
    
    cy.get('img.deco-3').should('not.exist');
    cy.get('img.deco-4').should('not.exist');
  });

  it('renders register images when isLogin is false', () => {
    cy.mount(<AuthBackground isLogin={false} />);
    
    cy.get('.auth-background').should('exist');
    

    cy.get('img.deco-3')
      .should('exist')
      .and('have.attr', 'src', '/kawaii-pixel-art-heart-cuteness-drawing-video-games-pixelation-pink-magenta-png-clipart-thumbnail-removebg-preview.png')
      .and('have.attr', 'alt', 'Cute Hearts');
    
    cy.get('img.deco-4')
      .should('exist')
      .and('have.attr', 'src', '/331-3316019_chibi-anime-santa-pink-red-sticker-cute-use-removebg-preview.png')
      .and('have.attr', 'alt', 'Santa girl');
    
   
    cy.get('img.deco-1').should('not.exist');
    cy.get('img.deco-2').should('not.exist');
  });

  it('renders register images when isLogin is undefined', () => {
    cy.mount(<AuthBackground isLogin={undefined} />);
    
    
    cy.get('img.deco-3').should('exist');
    cy.get('img.deco-4').should('exist');
    cy.get('img.deco-1').should('not.exist');
    cy.get('img.deco-2').should('not.exist');
  });

  it('renders register images when isLogin is null', () => {
    cy.mount(<AuthBackground isLogin={null} />);
    
  
    cy.get('img.deco-3').should('exist');
    cy.get('img.deco-4').should('exist');
    cy.get('img.deco-1').should('not.exist');
    cy.get('img.deco-2').should('not.exist');
  });
});