// src/pages/StockDetail.tsx
import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  Badge,
  Spinner,
  Center,
  VStack,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Button,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import PriceChart from '../components/PriceChart';
import type { StockDetail as StockDetailType } from '../types';
import type { PricePoint } from '../types';
import { useStockDetail } from '../hooks/useStockDetail';
import { usePriceHistory } from '../hooks/usePriceHistory';

export default function StockDetail() {
  const { ticker } = useParams<{ ticker: string }>();
  if (!ticker) return null;

  // Fetch metadata & ML signal
  const {
    data: stock,
    isLoading: stockLoading,
    error: stockError,
  } = useStockDetail(ticker);

  // Fetch price history
  const {
    data: history,
    isLoading: histLoading,
    error: histError,
  } = usePriceHistory(ticker);

  // Loading
  if (stockLoading || histLoading) {
    return (
      <Center minH="60vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  // Error states
  if (stockError) {
    return (
      <Center minH="60vh">
        <Text color="red.500">Failed to load stock details.</Text>
      </Center>
    );
  }
  if (histError) {
    return (
      <Center minH="60vh">
        <Text color="red.500">Failed to load price history.</Text>
      </Center>
    );
  }

  // Assert data exists
  if (!stock || !history) {
    return null;
  }

  return (
    <Box bg="bg" color="text" minH="100vh" py={8} px={{ base: 4, md: 8 }}>
      <Link as={RouterLink} to="/watchlist">
        <Button leftIcon={<ArrowBackIcon />} variant="link" mb={4}>
          Back to Watchlist
        </Button>
      </Link>

      {/* Header */}
      <VStack spacing={2} align="start" mb={6}>
        <Heading size="2xl">{stock.symbol}</Heading>
        <Text fontSize="lg" color="brand.600">
          {stock.name}
        </Text>
        <HStack spacing={4}>
          <Stat>
            <StatNumber fontSize="2xl">
              ${stock.currentPrice.toFixed(2)}
            </StatNumber>
            <StatHelpText color={stock.change >= 0 ? 'green.500' : 'red.500'}>
              {stock.change >= 0 ? '+' : ''}
              {stock.change.toFixed(2)}%
            </StatHelpText>
          </Stat>
          <Badge colorScheme={stock.change >= 0 ? 'green' : 'red'}>
            {stock.change >= 0 ? 'Up' : 'Down'}
          </Badge>
        </HStack>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
        {/* ML Signal Card */}
        <Box
          bg="brand.50"
          _dark={{ bg: 'brand.800' }}
          p={6}
          borderRadius="lg"
          shadow="md"
        >
          <Heading size="md" mb={2}>
            ML Signal
          </Heading>
          <Text fontSize="lg" fontWeight="semibold" color="brand.600">
            {stock.mlSignal.label}
          </Text>
          <Text fontSize="sm" mt={2}>
            Confidence: {Math.round(stock.mlSignal.confidence * 100)}%
          </Text>
        </Box>

        {/* Price Chart */}
        <Box
          bg="brand.50"
          _dark={{ bg: 'brand.800' }}
          p={4}
          borderRadius="lg"
          shadow="md"
        >
          <Heading size="md" mb={2}>
            Price History
          </Heading>
          <PriceChart data={history as PricePoint[]} />
        </Box>
      </SimpleGrid>

      {/* Recent Prices Table */}
      <Box maxW="6xl" mx="auto" overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th isNumeric>Open</Th>
              <Th isNumeric>High</Th>
              <Th isNumeric>Low</Th>
              <Th isNumeric>Close</Th>
              <Th isNumeric>Volume</Th>
            </Tr>
          </Thead>
          <Tbody>
            {history.slice(-10).reverse().map(point => (
              <Tr key={point.date.toISOString()}>
                <Td>{point.date.toLocaleDateString()}</Td>
                <Td isNumeric>${point.open.toFixed(2)}</Td>
                <Td isNumeric>${point.high.toFixed(2)}</Td>
                <Td isNumeric>${point.low.toFixed(2)}</Td>
                <Td isNumeric>${point.close.toFixed(2)}</Td>
                <Td isNumeric>{point.volume.toLocaleString()}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
