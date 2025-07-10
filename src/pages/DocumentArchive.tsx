import React from 'react';
import { Box, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import DocumentCard from '../components/DocumentCard';
import type { Document } from '../types';

// mock documents
const mockDocs: Document[] = [
  {
    id: 'doc1', title: 'Police Use of Force Report', url: '/docs/force-report.pdf',
    tags: ['police', 'force'], accessDate: new Date('2024-06-01'), archived: true
  },
  {
    id: 'doc2', title: 'Lobbying Expenditure 2023', url: '/docs/lobby-2023.pdf',
    tags: ['lobbying', 'finance'], accessDate: new Date('2024-05-15'), archived: true
  }
];

const DocumentArchive: React.FC = () => (
  <Box p={8}>
    <VStack spacing={4} align="start">
      <Heading>Document Archive</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
        {mockDocs.map(doc => <DocumentCard key={doc.id} doc={doc} />)}
      </SimpleGrid>
    </VStack>
  </Box>
);

export default DocumentArchive;
