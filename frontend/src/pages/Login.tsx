import React from 'react';
import {
  Box,
  Container,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Link,
  useColorModeValue
} from '@chakra-ui/react';

function Login() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Container maxW="container.sm" py={12}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Welcome Back
        </Heading>
        <Box
          w="100%"
          p={8}
          bg={bgColor}
          borderRadius="xl"
          boxShadow="xl"
          border="1px"
          borderColor={borderColor}
        >
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" size="lg" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" size="lg" />
            </FormControl>
            <Button
              colorScheme="purple"
              size="lg"
              width="100%"
              mt={4}
            >
              Sign In
            </Button>
            <Text pt={4}>
              Don't have an account?{' '}
              <Link color="purple.500" href="/register">
                Sign up
              </Link>
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default Login; 