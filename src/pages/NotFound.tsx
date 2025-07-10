import { Box, Heading, Text } from '@chakra-ui/react';

const NotFound = () => (
  <Box p={8} textAlign="center">
    <Heading>404_Page Not Found</Heading>
    <Text mt={4}>The page you're looking for doesn't exist.</Text>
  </Box>
);

export default NotFound;
