import React from 'react';
import { Box, Typography } from '@mui/material';

function Home() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Influencer Connection
      </Typography>
      <Typography variant="body1" gutterBottom>
        Connect with top social media influencers or showcase your influence
      </Typography>
    </Box>
  );
}

export default Home; 