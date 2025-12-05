import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import RegisterForm from './RegisterForm';

describe('RegisterForm', () => {
  it('renders register form', () => {
    const mockHook = () => ({
      userRegister: cy.stub(),
      authError: null,
      authSuccess: null,
    });

    cy.mount(
      <MemoryRouter>
        <RegisterForm useUserSessionHook={mockHook} />
      </MemoryRouter>
    );

    cy.get('.register-form').should('exist');
    cy.get('h2').contains('Зареєструватися');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
  });

  it('handles user input', () => {
    const mockHook = () => ({
      userRegister: cy.stub().as('register'),
      authError: null,
      authSuccess: null,
    });

    cy.mount(
      <MemoryRouter>
        <RegisterForm useUserSessionHook={mockHook} />
      </MemoryRouter>
    );

    cy.get('input[name="name"]').type('John');
    cy.get('input[name="email"]').type('john@test.com');
    cy.get('input[name="password"]').type('pass123');
    cy.get('form').submit();
    
    cy.get('@register').should('have.been.calledOnce');
  });

  it('calls userLogin on form submit', () => {
    const mockHook = () => ({
      userRegister: cy.stub(),
      authError: null,
      authSuccess: null,
    });

    cy.mount(
      <MemoryRouter>
        <RegisterForm useUserSessionHook={mockHook} />
      </MemoryRouter>
    );

    cy.get('.switch-link')
      .should('have.attr', 'href', '/auth/login')
      .and('contain.text', 'Увійти');
  });

   it('shows auth error', () => {
    const errorHook = () => ({
      userRegister: cy.stub(),
      authError: 'Помилка реєстрації',
      authSuccess: null,
    });

    cy.mount(
      <MemoryRouter>
        <RegisterForm useUserSessionHook={errorHook} />
      </MemoryRouter>
    );

    cy.get('.auth-error').should('exist');
  });

    it('shows success message', () => {
    const successHook = () => ({
      userRegister: cy.stub(),
      authError: null,
      authSuccess: 'Успішно зареєстровано',
    });

  });
});