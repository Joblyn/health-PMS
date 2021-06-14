import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    fontFamily: 'Roboto, sans-serif';
    fontSize: 62.5%;
    backgroundColor: '#e2ecf3';
    height: 100%;
  }
`;