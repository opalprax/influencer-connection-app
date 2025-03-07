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
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react';

function Register() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Container maxW="container.sm" py={12}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Create Your Account
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
            <SimpleGrid columns={2} spacing={4} w="100%">
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input type="text" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" size="lg" />
              </FormControl>
            </SimpleGrid>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" size="lg" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" size="lg" />
            </FormControl>
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" size="lg" />
            </FormControl>
            <Button
              colorScheme="purple"
              size="lg"
              width="100%"
              mt={4}
            >
              Sign Up
            </Button>
            <Text pt={4}>
              Already have an account?{' '}
              <Link color="purple.500" href="/login">
                Sign in
              </Link>
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default Register; 