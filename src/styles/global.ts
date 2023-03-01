import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    body {
      background: #1A1A1A;
      -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, form, ul, button{
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }
  }
`