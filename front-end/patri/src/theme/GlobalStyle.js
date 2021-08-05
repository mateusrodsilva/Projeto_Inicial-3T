import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Quicksand", sans-serif;
  }

  html, body {
    min-height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  #__next {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
