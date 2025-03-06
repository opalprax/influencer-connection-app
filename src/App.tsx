import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
import SearchInfluencers from './components/SearchInfluencers';
import { GlobalStyle, theme } from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SearchInfluencers />} />
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App; 