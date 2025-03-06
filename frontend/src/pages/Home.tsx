import React from 'react';
import { Box, Button, Container, Grid, Typography, Card, CardContent, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SecurityIcon from '@mui/icons-material/Security';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2D3436 0%, #1E272E 100%)',
  color: '#fff',
  padding: theme.spacing(12, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url(/assets/images/hero-pattern.svg)',
    opacity: 0.1,
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const StatBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  background: theme.palette.background.paper,
}));

function Home() {
  const navigate = useNavigate();

  return (
    <Box>
      <HeroSection>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h1" gutterBottom>
                Connect with Top Influencers
              </Typography>
              <Typography variant="h4" sx={{ mb: 4, opacity: 0.9 }}>
                Transform your brand's reach with authentic partnerships
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate('/register')}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  onClick={() => navigate('/search')}
                >
                  Browse Influencers
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/assets/images/hero-illustration.svg"
                alt="Platform illustration"
                sx={{ width: '100%', maxWidth: 600 }}
              />
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      <Container sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Why Choose Us
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 8 }}>
          The most trusted platform for influencer partnerships
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard>
              <TrendingUpIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Data-Driven Matches
                </Typography>
                <Typography color="text.secondary">
                  AI-powered algorithm for perfect brand-influencer partnerships
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard>
              <GroupIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Verified Influencers
                </Typography>
                <Typography color="text.secondary">
                  Quality-checked profiles with real engagement metrics
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard>
              <MonetizationOnIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Secure Payments
                </Typography>
                <Typography color="text.secondary">
                  Protected transactions with escrow service
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard>
              <SecurityIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Contract Protection
                </Typography>
                <Typography color="text.secondary">
                  Legal templates and agreement management
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <StatBox>
                <Typography variant="h3" color="secondary.main" gutterBottom>
                  50K+
                </Typography>
                <Typography variant="h6">Active Influencers</Typography>
              </StatBox>
            </Grid>
            <Grid item xs={12} md={3}>
              <StatBox>
                <Typography variant="h3" color="secondary.main" gutterBottom>
                  10K+
                </Typography>
                <Typography variant="h6">Brands</Typography>
              </StatBox>
            </Grid>
            <Grid item xs={12} md={3}>
              <StatBox>
                <Typography variant="h3" color="secondary.main" gutterBottom>
                  100M+
                </Typography>
                <Typography variant="h6">Audience Reach</Typography>
              </StatBox>
            </Grid>
            <Grid item xs={12} md={3}>
              <StatBox>
                <Typography variant="h3" color="secondary.main" gutterBottom>
                  95%
                </Typography>
                <Typography variant="h6">Success Rate</Typography>
              </StatBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 