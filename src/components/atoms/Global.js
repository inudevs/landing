import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  button:focus,
  input:focus {
    outline: none;
  }

  button {
    border: none;
  }
`;

export default Global;
