import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Sidebar } from './Sidebar';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        {children}
      </Main>
    </>
  );
}
