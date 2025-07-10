import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Badge,
  Link,
  Icon,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon, CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import { type Source } from '../types';

interface SourceVerificationProps {
  sources: Source[];
}

/**
 * A component that displays a list of sources used in an article.
 * @param {SourceVerificationProps} props
 */
const SourceVerification: React.FC<SourceVerificationProps> = ({ sources }) => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  /**
   * Returns the color for a given reliability level.
   * @param {string} reliability
   */
  const getReliabilityColor = (reliability: string) => {
    switch (reliability) {
      case 'primary':
        return 'green';
      case 'secondary':
        return 'yellow';
      case 'tertiary':
        return 'orange';
      default:
        return 'gray';
    }
  };

  /**
   * Returns the color for a given source type.
   * @param {string} type
   */
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'official-document':
      case 'court-filing':
        return 'blue';
      case 'foia-request':
      case 'public-record':
        return 'purple';
      default:
        return 'gray';
    }
  };

  return (
    <Box bg={bg} border="1px" borderColor={borderColor} borderRadius="md" p={4}>
      <VStack align="start" spacing={4}>
        <HStack>
          <CheckCircleIcon color="green.500" />
          <Text fontWeight="semibold">Source Verification</Text>
        </HStack>
        
        <VStack align="start" spacing={3} w="full">
          {sources.map((source, index) => (
            <Box key={source.id} w="full">
              <VStack align="start" spacing={2}>
                <HStack justify="space-between" w="full">
                  <Text fontSize="sm" fontWeight="medium" flex={1}>
                    {source.title}
                  </Text>
                  <HStack>
                    <Badge colorScheme={getReliabilityColor(source.reliability)} size="sm">
                      {source.reliability}
                    </Badge>
                    <Badge colorScheme={getTypeColor(source.type)} size="sm">
                      {source.type.replace('-', ' ')}
                    </Badge>
                  </HStack>
                </HStack>
                
                <HStack spacing={4} fontSize="xs" color="gray.500">
                  <Link href={source.url} isExternal>
                    View Source <ExternalLinkIcon mx="2px" />
                  </Link>
                  {source.archived && source.archiveUrl && (
                    <Link href={source.archiveUrl} isExternal>
                      Archive <ExternalLinkIcon mx="2px" />
                    </Link>
                  )}
                  <Text>Accessed: {new Date(source.accessDate).toLocaleDateString()}</Text>
                </HStack>
              </VStack>
              {index < sources.length - 1 && <Divider mt={3} />}
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default SourceVerification;