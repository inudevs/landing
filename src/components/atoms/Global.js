import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:600,700&display=swap');

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
