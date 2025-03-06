import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import { Influencer } from '../types/types';

interface InfluencerCardProps {
  influencer: Influencer;
}

const InfluencerCard = ({ influencer }: InfluencerCardProps) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={influencer.profileImage}
        alt={influencer.name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {influencer.name}
        </Typography>
        <Box sx={{ mb: 1 }}>
          {influencer.categories.map((category) => (
            <Chip
              key={category}
              label={category}
              size="small"
              sx={{ mr: 0.5, mb: 0.5 }}
            />
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {influencer.metrics.followers.toLocaleString()} followers
        </Typography>
        <Typography variant="h6" color="primary">
          ${influencer.pricing.basePrice} {influencer.pricing.currency}
        </Typography>
        {influencer.aiMatchScore && (
          <Box sx={{ mt: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Match Score: {Math.round(influencer.aiMatchScore * 100)}%
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default InfluencerCard; 