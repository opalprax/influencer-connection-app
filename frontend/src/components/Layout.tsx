import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Button,
  useColorModeValue,
  HStack,
  Image,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box>
      <Box
        as="nav"
        position="fixed"
        w="100%"
        bg={bgColor}
        borderBottom="1px"
        borderColor={borderColor}
        zIndex="sticky"
      >
        <Container maxW="container.xl">
          <Flex h="16" alignItems="center" justify="space-between">
            <HStack spacing={8} alignItems="center">
              <RouterLink to="/">
                <Image
                  src="/assets/images/logo.svg"
                  alt="Influencer Connection"
                  h="40px"
                />
              </RouterLink>
              <Heading size="md" fontWeight="semibold">
                Influencer Connection
              </Heading>
            </HStack>

            <HStack spacing={4}>
              <Button
                as={RouterLink}
                to="/search"
                variant="ghost"
                colorScheme="purple"
              >
                Find Influencers
              </Button>
              <Button
                as={RouterLink}
                to="/login"
                variant="ghost"
                colorScheme="purple"
              >
                Login
              </Button>
              <Button
                as={RouterLink}
                to="/register"
                colorScheme="purple"
              >
                Get Started
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Box as="main" pt="16">
        {children}
      </Box>
    </Box>
  );
};

export default Layout; 