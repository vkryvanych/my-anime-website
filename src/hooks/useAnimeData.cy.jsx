import { renderHook, act } from '@testing-library/react';
import { useAnimeData } from './useAnimeData';

describe('useAnimeData hook', () => {
  it('returns anime list', () => {
    const { result } = renderHook(() => useAnimeData());
    
    expect(result.current.animeList).to.be.an('array');
    expect(result.current.animeList.length).to.be.greaterThan(0);
  });

  it('filters anime by action genre', () => {
    const { result } = renderHook(() => useAnimeData());
    
    let recommendations;
    act(() => {
      recommendations = result.current.getAnimeByGenre('action');
    });
    
    expect(recommendations.length).to.be.greaterThan(0);
  });
});