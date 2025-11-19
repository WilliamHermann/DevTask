import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1e1f24;
    color: #e2e2e2;
    font-family: 'Inter', sans-serif;
    height: 100vh;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2d2e33;
    border-radius: 4px;
  }
`;
