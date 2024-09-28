import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
// 이름 global수정
const GlobalStyles = createGlobalStyle` 
  ${reset}
  @font-face {
    font-family: 'san';
    src: url('./assets/NotoSansKR-Thin.ttf') format('truetype');
    font-weight: 100;
  } 
  a{
      text-decoration: none;
      color: inherit;
  }
  *{
      box-sizing: border-box;
      font-family: 'san';
  }
  body, header, main, aside, input{
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }
  p{
    padding: 0;
    margin: 0;
    
  }
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
  
`;

export default GlobalStyles;
