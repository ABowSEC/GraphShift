import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Spacer,
  Badge,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import type { StockSummary } from '../types';

type StockCardProps = {
  stock: StockSummary;
  /**
   * Optional remove handler, receives ticker symbol when user clicks remove
   */
  onRemove?: (ticker: string) => void;
};

const StockCard: React.FC<StockCardProps> = ({ stock, onRemove }) => {
  const { ticker, name, price, change } = stock;
  const bg = useColorModeValue('brand.50', 'brand.800');

  return (
    <Box bg={bg} p={4} borderRadius="lg" shadow="sm">
      <Flex align="center" mb={2}>
        <Heading size="md">{ticker}</Heading>
        <Spacer />
        {onRemove && (
          <IconButton
            aria-label="Remove from watchlist"
            icon={<CloseIcon />}
            size="sm"
            variant="ghost"
            onClick={() => onRemove(ticker)}
          />
        )}
      </Flex>

      <Text fontSize="sm" color="gray.500" mb={2} noOfLines={1}>
        {name}
      </Text>

      <Flex align="baseline">
        <Heading size="lg" mr={2}>
          ${price.toFixed(2)}
        </Heading>
        <Badge colorScheme={change >= 0 ? 'green' : 'red'}>
          {change >= 0 ? '+' : ''}{change.toFixed(2)}%
        </Badge>
      </Flex>
    </Box>
  );
};

export default StockCard;
