import { Box, AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
          >
            Influence Match
          </Typography>
          <Button color="inherit" component={RouterLink} to="/search">
            Find Influencers
          </Button>
          <Button color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout; 