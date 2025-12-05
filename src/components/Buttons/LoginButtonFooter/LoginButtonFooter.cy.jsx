import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import LoginButtonFooter from './LoginButtonFooter';


function AuthLoginPage() {
    return(
        <div data-testid = "auth-login-page">Auth Login Page</div>
    )
}

describe('LoginButtonFooter component', () => {
    it('navigates to /auth/login when clicked', () => {
        cy.mount(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<LoginButtonFooter />} />
                    <Route path="/auth/login" element={<AuthLoginPage />} />
                </Routes>
            </MemoryRouter>
        );

        cy.get('a').should('exist');
        cy.get('a').should('contain.text', 'Увійти')
        cy.get('a').should('have.attr', 'href', '/auth/login');
        cy.get('a').click();
        cy.get('[data-testid="auth-login-page"]').should('exist');;
})
})