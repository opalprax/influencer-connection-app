import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#2196f3',
    secondary: '#1976d2',
    background: '#f5f5f5',
    text: '#333333',
    white: '#ffffff'
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
  }
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
  }

  button {
    font-family: inherit;
  }
`; 