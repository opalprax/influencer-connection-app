import React from 'react';
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  HStack,
  Tag,
  VStack,
  useColorModeValue,
  Badge,
  Tooltip,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { StarIcon, CheckCircleIcon } from '@chakra-ui/icons';
// import { IconType } from 'react-icons';
// import { FaInstagram, FaYoutube, FaTiktok, FaTwitter } from 'react-icons/fa';
import { Influencer } from '../types/influencer';

interface InfluencerListProps {
  influencers: Influencer[];
}

// Temporarily commented out icon implementation
/*
const platformIcons: Record<string, IconType> = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  twitter: FaTwitter,
};

function getIconForPlatform(platform: string): JSX.Element | null {
  const Icon = platformIcons[platform.toLowerCase()];
  return Icon ? <Box as={Icon} boxSize="16px" /> : null;
}
*/

function InfluencerList({ influencers }: InfluencerListProps) {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
      {influencers.map((influencer) => (
        <LinkBox
          key={influencer.id}
          as="article"
          p={4}
          borderRadius="xl"
          bg={cardBg}
          boxShadow="lg"
          border="1px"
          borderColor={borderColor}
          transition="all 0.2s"
          _hover={{
            transform: 'translateY(-4px)',
            boxShadow: '2xl',
          }}
        >
          <VStack align="stretch" spacing={4}>
            <Box position="relative">
              <Image
                src={influencer.imageUrl}
                alt={influencer.name}
                borderRadius="lg"
                objectFit="cover"
                height="200px"
                width="100%"
              />
              <HStack
                position="absolute"
                bottom={2}
                right={2}
                spacing={1}
              >
                {influencer.platforms.map(({ platform }) => (
                  // Temporarily displaying platform name instead of icon
                  <Tooltip key={platform} label={`View on ${platform}`}>
                    <Box
                      as="span"
                      p={2}
                      bg="blackAlpha.700"
                      color="white"
                      borderRadius="full"
                      fontSize="xs"
                    >
                      {platform}
                    </Box>
                  </Tooltip>
                ))}
              </HStack>
            </Box>

            <VStack align="stretch" spacing={2}>
              <HStack justify="space-between">
                <LinkOverlay href={`/influencer/${influencer.id}`}>
                  <Text fontSize="xl" fontWeight="bold" noOfLines={1}>
                    {influencer.name}
                    {influencer.rating >= 4.5 && (
                      <CheckCircleIcon ml={2} color="brand.500" />
                    )}
                  </Text>
                </LinkOverlay>
                <HStack>
                  <StarIcon color="yellow.400" />
                  <Text fontWeight="semibold">{influencer.rating.toFixed(1)}</Text>
                </HStack>
              </HStack>

              <Text color={textColor} noOfLines={2}>
                {influencer.bio}
              </Text>

              <HStack spacing={2} flexWrap="wrap">
                {influencer.categories.map((category) => (
                  <Tag
                    key={category.name}
                    size="sm"
                    variant="subtle"
                    colorScheme={category.color.split('.')[0]}
                  >
                    {category.name}
                  </Tag>
                ))}
              </HStack>

              <HStack justify="space-between" pt={2}>
                <Badge
                  colorScheme="purple"
                  fontSize="sm"
                  px={2}
                  py={1}
                  borderRadius="full"
                >
                  {influencer.followers.toLocaleString()} followers
                </Badge>
                <Badge
                  colorScheme="green"
                  fontSize="sm"
                  px={2}
                  py={1}
                  borderRadius="full"
                >
                  {influencer.engagementRate.toFixed(1)}% engagement
                </Badge>
              </HStack>

              {influencer.recentPosts && (
                <SimpleGrid columns={3} spacing={2} pt={2}>
                  {influencer.recentPosts.slice(0, 3).map((post, index) => (
                    <Box
                      key={index}
                      position="relative"
                      borderRadius="md"
                      overflow="hidden"
                    >
                      <Image
                        src={post.thumbnail}
                        alt={`Recent post ${index + 1}`}
                        objectFit="cover"
                        height="60px"
                      />
                      <Box
                        position="absolute"
                        bottom={0}
                        left={0}
                        right={0}
                        bg="blackAlpha.600"
                        px={1}
                        py={0.5}
                      >
                        <Text
                          fontSize="xs"
                          color="white"
                          textAlign="center"
                        >
                          {post.likes.toLocaleString()}❤️
                        </Text>
                      </Box>
                    </Box>
                  ))}
                </SimpleGrid>
              )}
            </VStack>
          </VStack>
        </LinkBox>
      ))}
    </SimpleGrid>
  );
}

export default InfluencerList; 