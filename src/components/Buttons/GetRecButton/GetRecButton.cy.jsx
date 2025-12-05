import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import GetRecButton from './GetRecButton';


function TestPage() {
    return(
        <div data-testid = "test-page">Test Page</div>
    )
}

describe('GetRecButton component', () => {
    it('navigates to /test when clicked', () => {
        cy.mount(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<GetRecButton />} />
                    <Route path="/test" element={<TestPage />} />
                </Routes>
            </MemoryRouter>
        );

        cy.get('a').should('exist');
        cy.get('a').should('have.attr', 'href', '/test');
        cy.get('a').click();
        cy.get('[data-testid="test-page"]').should('exist');;
})
})