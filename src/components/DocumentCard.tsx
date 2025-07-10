import React from 'react';
import { Box, Heading, Text, Badge, HStack, useColorModeValue, VStack, Link } from '@chakra-ui/react';
import { type Document } from '../types';

interface DocumentCardProps {
  doc: Document;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ doc }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const border = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box bg={bg} border="1px" borderColor={border} borderRadius="md" p={4} shadow="sm" _hover={{ shadow: 'md' }}>
      <VStack align="start" spacing={2}>
        <Heading size="md">
          <Link href={doc.url} isExternal color="blue.500">
            {doc.title}
          </Link>
        </Heading>
        {doc.description && <Text fontSize="sm" noOfLines={2}>{doc.description}</Text>}
        <HStack spacing={2}>
          {doc.tags.map(tag => (
            <Badge key={tag} colorScheme="purple" fontSize="xs">{tag}</Badge>
          ))}
        </HStack>
        <Text fontSize="xs" color="gray.500">Accessed: {doc.accessDate.toLocaleDateString()}</Text>
      </VStack>
    </Box>
  );
};

export default DocumentCard;
