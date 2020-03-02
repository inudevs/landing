import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  button {
    border: none;
  }

  button:focus,
  input:focus {
    outline: none;
  }
`;

export default Global;
