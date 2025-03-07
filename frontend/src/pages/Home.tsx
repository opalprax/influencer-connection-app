import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Card,
  CardBody,
  Stack,
  Image,
  useColorModeValue
} from '@chakra-ui/react';

const Home: React.FC = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  const features = [
    {
      title: 'Find Perfect Matches',
      description: 'Connect with influencers that align with your brand values and target audience.',
      image: '/assets/images/match.svg'
    },
    {
      title: 'Detailed Analytics',
      description: 'Get comprehensive insights into influencer performance and audience engagement.',
      image: '/assets/images/analytics.svg'
    },
    {
      title: 'Easy Collaboration',
      description: 'Streamline your influencer campaigns with our integrated management tools.',
      image: '/assets/images/collaboration.svg'
    }
  ];

  return (
    <Box>
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16}>
          {/* Hero Section */}
          <VStack spacing={8} textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              fontWeight="bold"
              color={textColor}
            >
              Connect with the Perfect Influencers for Your Brand
            </Heading>
            <Text fontSize="xl" color="gray.500" maxW="2xl">
              Find and collaborate with influencers who truly understand your brand and can create authentic connections with your target audience.
            </Text>
            <Button
              as={RouterLink}
              to="/search"
              size="lg"
              colorScheme="purple"
              px={8}
              fontSize="md"
              height="14"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Start Searching
            </Button>
          </VStack>

          {/* Features Section */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="100%">
            {features.map((feature, index) => (
              <Card
                key={index}
                bg={bgColor}
                boxShadow="lg"
                _hover={{
                  transform: 'translateY(-4px)',
                  transition: 'all 0.2s',
                }}
              >
                <CardBody>
                  <Stack spacing={4}>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      boxSize="100px"
                      mx="auto"
                    />
                    <Heading size="md" textAlign="center">
                      {feature.title}
                    </Heading>
                    <Text color="gray.500" textAlign="center">
                      {feature.description}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Home; 