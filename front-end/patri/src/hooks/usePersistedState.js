import { useState, useEffect } from 'react';
import nookies, {parseCookies} from 'nookies';
import { light, dark } from '../theme';

export function usePersistedState(key, initialState) {
  const themeValue = parseCookies().theme

  const [state, setState] = useState(() => {
    if(themeValue) {
      return light.title === themeValue ? light : dark
    }
    return initialState;
  });

  useEffect(() => {
    nookies.set(null, key, state.title.toString(), {
      path: '/',
      maxAge: 86400 * 7,
    });
  }, [key, state]);

  return [state, setState];
}