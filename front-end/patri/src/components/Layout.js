import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../theme/GlobalStyle';
import { Header } from './Header';
import { Main } from './Main';
import { Sidebar } from './Sidebar';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import theme from '../theme';

export default function Layout({ children, toggleTheme }) {
  const router = useRouter();
  const [userTheme, setUserTheme] = useState(nookies.get().theme);
  const activeTheme = theme[userTheme];

  function toggleTheme() {
    if (userTheme === 'light') {
      nookies.set(null, 'theme', 'dark', {
        path: '/',
        maxAge: 86400 * 7,
      });

      setUserTheme('dark');
    }

    if (userTheme === 'dark') {
      nookies.set(null, 'theme', 'light', {
        path: '/',
        maxAge: 86400 * 7,
      });
      setUserTheme('light');
    }
  }

  return (
    <ThemeProvider theme={activeTheme ? activeTheme : theme.light}>
      <GlobalStyle />
      {router.pathname === '/login' || router.pathname === '/register' ? (
        children
      ) : (
        <Main>
          {router.pathname !== '/login' && <Header toggleTheme={toggleTheme} />}
          {router.pathname !== '/login' && <Sidebar />}
          {children}
        </Main>
      )}
    </ThemeProvider>
  );
}
