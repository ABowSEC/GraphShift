import { useParams } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';

const ArticleDetail = () => {
  const { slug } = useParams();  // later fetch article by slug
  return (
    <Box p={8}>
      <Heading>Article: {slug}</Heading>
      <Text mt={4}>Full article content will be loaded here.</Text>
    </Box>
  );
};

export default ArticleDetail;
