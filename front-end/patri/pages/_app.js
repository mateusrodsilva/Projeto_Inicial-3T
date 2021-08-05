import Head from 'next/head';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/theme/GlobalStyle';
import Layout from '../src/components/Layout';
import theme from '../src/theme';
import nookies from 'nookies';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PATRI</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
