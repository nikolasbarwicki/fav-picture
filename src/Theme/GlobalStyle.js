import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
  }
`;

export default GlobalStyle;
