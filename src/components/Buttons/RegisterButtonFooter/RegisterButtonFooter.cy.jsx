import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import RegisterButtonFooter from './RegisterButtonFooter';


function AuthRegisterPage() {
    return(
        <div data-testid = "auth-login-page">Auth Register Page</div>
    )
}

describe('RegisterButtonFooter component', () => {
    it('navigates to /auth/register when clicked', () => {
        cy.mount(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<RegisterButtonFooter />} />
                    <Route path="/auth/register" element={<AuthRegisterPage />} />
                </Routes>
            </MemoryRouter>
        );

        cy.get('a').should('exist');
        cy.get('a').should('contain.text', 'Зареєструватись')
        cy.get('a').should('have.attr', 'href', '/auth/register'); 
        cy.get('a').click();
        cy.get('[data-testid="auth-login-page"]').should('exist');;
})
})