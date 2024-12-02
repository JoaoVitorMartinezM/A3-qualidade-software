import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --dark-blue: #163B84;
    --light-blue: #C0E1ED;
    --orange: #E9494B;
    --green: #A0C7A0;

  }
  * {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Ubuntu;
  }

  body, html {
    height: 100%;
  }
`;