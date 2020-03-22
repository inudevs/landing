import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family:
      'Poppins', 'Noto Sans KR',
      -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif;
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

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Global;
