import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
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
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Influencer Connection
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/influencer/:id" element={<InfluencerProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App; 