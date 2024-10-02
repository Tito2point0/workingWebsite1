import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ darkMode }) => (darkMode ? '#121212' : '#ffffff')};
    color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#000000')};
    margin: 0;
    font-family: 'Arial', sans-serif;
  }

  .App-header {
    background-color: ${({ darkMode }) => (darkMode ? '#1e1e1e' : '#282c34')};
  }

  .App-link {
    color: ${({ darkMode }) => (darkMode ? '#bb86fc' : '#61dafb')};
  }
`;

export default GlobalStyle;
