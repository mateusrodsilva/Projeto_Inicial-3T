import { useState, useEffect } from 'react';
import nookies from 'nookies';

export function usePersistedState(key, initialState) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    nookies.set(null, key, state.title, {
      path: '/',
      maxAge: 86400 * 7,
    });
  }, [key, state]);

  return [state, setState];
}
