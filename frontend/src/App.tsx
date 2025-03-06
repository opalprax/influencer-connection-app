import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Home from './pages/Home';
import Search from './pages/Search';
import InfluencerProfile from './pages/InfluencerProfile';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="fixed" color="default">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src="/assets/images/logo.svg"
                alt="Influencer Connection"
                sx={{ height: 40, mr: 2 }}
              />
              <Typography variant="h6" color="primary">
                Influencer Connection
              </Typography>
            </Link>
            <Box>
              <Button color="primary" component={Link} to="/search" sx={{ mr: 2 }}>
                Find Influencers
              </Button>
              <Button color="primary" component={Link} to="/login" sx={{ mr: 2 }}>
                Login
              </Button>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/register"
              >
                Get Started
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar /> {/* Spacer for fixed AppBar */}
        <Box component="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/influencer/:id" element={<InfluencerProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 