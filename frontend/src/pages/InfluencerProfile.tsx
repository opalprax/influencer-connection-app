import React from 'react';
import { Box, Text, Container, VStack } from '@chakra-ui/react';

function InfluencerProfile() {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          Influencer Profile
        </Text>
        <Box>
          {/* Profile content will go here */}
        </Box>
      </VStack>
    </Container>
  );
}

export default InfluencerProfile; 