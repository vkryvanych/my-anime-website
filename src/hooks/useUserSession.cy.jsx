import { renderHook } from '@testing-library/react';
import { useUserSession } from './useUserSession';

describe('useUserSession hook', () => {
  beforeEach(() => {
    cy.stub(window, 'localStorage', {
      getItem: cy.stub(),
      setItem: cy.stub(),
      removeItem: cy.stub(),
    });
  });

  it('has initial state', () => {
    const { result } = renderHook(() => useUserSession());
    
    expect(result.current.currentUser).to.equal(null);
    expect(result.current.authError).to.equal('');
    expect(result.current.authSuccess).to.equal('');
    expect(result.current.isUserLoggedIn).to.equal(false);
  });
});
