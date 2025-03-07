import React from 'react';
import {
  Box,
  Image,
  Text,
  HStack,
  VStack,
  Badge,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { Influencer } from '../types/influencer';

interface InfluencerCardProps {
  influencer: Influencer;
  onContactInfluencer: (influencer: Influencer) => void;
}

function InfluencerCard({ influencer, onContactInfluencer }: InfluencerCardProps) {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bgColor}
      p={6}
      borderRadius="xl"
      boxShadow="md"
      border="1px"
      borderColor={borderColor}
      transition="transform 0.2s"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
      }}
    >
      <VStack spacing={4} align="stretch">
        <Image
          src={influencer.imageUrl}
          alt={influencer.name}
          borderRadius="lg"
          objectFit="cover"
          height="200px"
          width="100%"
        />
        <VStack align="stretch" spacing={2}>
          <Text fontSize="xl" fontWeight="bold">
            {influencer.name}
          </Text>
          <HStack>
            {influencer.categories.map((category) => (
              <Badge
                key={category.name}
                colorScheme={category.color.split('.')[0]}
              >
                {category.name}
              </Badge>
            ))}
          </HStack>
          <HStack justify="space-between">
            <Text color="gray.500">
              {influencer.followers.toLocaleString()} followers
            </Text>
            <Text color="gray.500">
              {influencer.engagementRate.toFixed(1)}% engagement
            </Text>
          </HStack>
          <Button
            colorScheme="brand"
            size="md"
            onClick={() => onContactInfluencer(influencer)}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'sm',
            }}
          >
            Contact
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}

export default InfluencerCard; 