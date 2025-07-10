import React from 'react';
import {
  Box,
  Text,
  Badge,
  HStack,
  VStack,
  Link,
  useColorModeValue,
  Flex,
  Tag,
  TagLabel,
  Icon,
} from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon, TimeIcon } from '@chakra-ui/icons';
import { type Article } from '../types';

interface ArticleCardProps {
  article: Article;
}
/**
 * displays the article's title, summary, tags, and
 * sources, as well as a verification level and category.
 */
const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  //Background color for the card
  const bg = useColorModeValue('white', 'gray.800');


  const borderColor = useColorModeValue('gray.200', 'gray.700');


  //Returns Icon for verification LVL
  /**
   * Returns an icon for the given verification level.
   * @param level Verification level
   * @returns ReactNode
   */

  
  const getVerificationIcon = (level: string) => {
    switch (level) {
      case 'verified':
        return <CheckCircleIcon color="green.500" />;
      case 'pending':
        return <TimeIcon color="yellow.500" />;
      case 'disputed':
        return <WarningIcon color="red.500" />;
      default:
        return null;
    }
  };


  //Returns color for the given category
  /**
   * Returns color for the given category.
   * @param category Category
   * @returns string
   */
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'government':
        return 'blue';
      case 'law-enforcement':
        return 'red';
      case 'industry':
        return 'purple';
      case 'transparency':
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    //Layout
    <Box
      bg={bg}
      border="1px"
      borderColor={borderColor}
      borderRadius="md"
      p={6}
      _hover={{ shadow: 'md' }}
      transition="all 0.2s"
    >
      <VStack align="start" spacing={4}>
        <Flex justify="space-between" w="full" align="start">
          <VStack align="start" spacing={2} flex={1}>
            <HStack>
              <Badge colorScheme={getCategoryColor(article.category)}>
                {article.category.replace('-', ' ').toUpperCase()}
              </Badge>
              <HStack>
                {getVerificationIcon(article.verificationLevel)}
                <Text fontSize="sm" color={useColorModeValue("gray.500","gray")}>
                  {article.verificationLevel}
                </Text>
              </HStack>
            </HStack>
            <Link href={`/article/${article.slug}`} _hover={{ textDecoration: 'none' }}>
              <Text fontSize="lg" fontWeight="semibold" lineHeight="short">
                {article.title}
              </Text>
            </Link>
          </VStack>
        </Flex>

        <Text color={useColorModeValue("gray.500","gray")} fontSize="sm" noOfLines={3}>
          {article.summary}
        </Text>

        <HStack wrap="wrap" spacing={2}>
          {article.tags.slice(0, 3).map((tag) => (
            <Tag key={tag} size="sm" variant="subtle">
              <TagLabel>{tag}</TagLabel>
            </Tag>
          ))}
          {article.tags.length > 3 && (
            <Text fontSize="xs" color="gray.500">
              +{article.tags.length - 3} more
            </Text>
          )}
        </HStack>

        <Flex justify="space-between" w="full" align="center" fontSize="xs" color="gray.500">
          <Text>
            {article.sources.length} source{article.sources.length !== 1 ? 's' : ''}
          </Text>
          <Text>{new Date(article.publishedAt).toLocaleDateString()}</Text>
        </Flex>
      </VStack>
    </Box>
  );
};
export default ArticleCard;
