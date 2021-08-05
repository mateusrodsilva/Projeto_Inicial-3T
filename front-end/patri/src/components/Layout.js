import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Sidebar } from './Sidebar';
import { useRouter } from 'next/router';

import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-areas: 'header header' 'main aside' 'footer footer';

  header {
    background-color: blue;
    grid-area: header;
  }

  main {
    background-color: yellow;
    grid-area: main;
    padding: 24px 12px 24px 24px;

    div {
      width: 100%;
      height: 100%;
      background-color: white;
    }
  }

  aside {
    width: 100%;
    background-color: green;
    grid-area: aside;
    padding: 24px;

    div {
      width: 100%;
      height: 100%;
      background-color: white;
    }
  }

  footer {
    width: 100%;

    background-color: red;
    grid-area: footer;
  }
`;

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      {router.pathname === '/login' || router.pathname === '/register' ? (
        children
      ) : (
        <Main>
          {router.pathname !== '/login' && <Header />}
          {router.pathname !== '/login' && <Sidebar />}
          {children}
        </Main>
      )}
    </>
  );
}
