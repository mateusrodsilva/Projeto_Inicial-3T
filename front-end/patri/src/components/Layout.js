import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Sidebar } from './Sidebar';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/login' && <Header />}
      <Main>
        {router.pathname !== '/login' && <Sidebar />}
        {children}
      </Main>
    </>
  );
}
