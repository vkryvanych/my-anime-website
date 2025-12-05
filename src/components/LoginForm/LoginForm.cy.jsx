import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const mockHook = () => ({
    userLogin: cy.stub().as('userLogin'),
    authError: null,
    authSuccess: null,
  });

  it('renders login form', () => {
    cy.mount(
      <MemoryRouter>
        <LoginForm useUserSessionHook={mockHook} />
      </MemoryRouter>
    );

    cy.get('.login-form').should('exist');
    cy.get('h2').contains('Увійти');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('handles user input', () => {
    cy.mount(
      <MemoryRouter>
        <LoginForm useUserSessionHook={mockHook} />
      </MemoryRouter>
    );

    cy.get('input[name="email"]').type('user@test.com');
    cy.get('input[name="password"]').type('pass123');
    
    cy.get('input[name="email"]').should('have.value', 'user@test.com');
    cy.get('input[name="password"]').should('have.value', 'pass123');
  });

  it('calls userLogin on form submit', () => {
    cy.mount(
      <MemoryRouter>
        <LoginForm useUserSessionHook={mockHook} />
      </MemoryRouter>
    );

    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('password');
    cy.get('form').submit();
    
    cy.get('@userLogin').should('have.been.calledOnce');
  });

  it("shows auth error when authError is provided", () => {
    const errorHook = () => ({
      userLogin: cy.stub(),
      authError: "Неправильний email або пароль",
      authSuccess: null,
    });

    cy.mount(
      <MemoryRouter>
        <LoginForm useUserSessionHook={errorHook} />
      </MemoryRouter>
    );

    cy.get(".auth-error")
      .should("exist")
      .and("contain.text", "Неправильний email або пароль");
  });

  it("shows auth success when authSuccess is provided", () => {
    const successHook = () => ({
      userLogin: cy.stub(),
      authError: null,
      authSuccess: "Ви успішно увійшли!",
    });

    cy.mount(
      <MemoryRouter>
        <LoginForm useUserSessionHook={successHook} />
      </MemoryRouter>
    );

    cy.get(".auth-success")
      .should("exist")
      .and("contain.text", "Ви успішно увійшли!");
  });

});