import { renderHook } from '@testing-library/react';
import { useContact } from './useContact';

describe('useContact hook', () => {
  it('has initial state', () => {
    
    const axiosMock = { post: () => Promise.resolve({ data: {} }) };

    const { result } = renderHook(() => useContact(axiosMock));

    expect(result.current.contactError).to.equal('');
    expect(result.current.contactSuccess).to.equal('');
    expect(result.current.sendMessage).to.be.a('function');
  });

});
