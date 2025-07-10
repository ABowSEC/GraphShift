// src/pages/WatchlistPage.tsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Button,
  VStack,
  Center,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import StockCard from '../components/StockCard';
import type { StockSummary } from '../types';
import { useWatchlist } from '../hooks/useWatchlist';

export default function WatchlistPage() {
  // returns { data?: StockSummary[], isLoading, error }
  const { data, isLoading, error } = useWatchlist();
  const stocks: StockSummary[] = data ?? []; // default to empty array

  if (isLoading) {
    return (
      <Center minH="60vh">
        <Text>Loading your watchlist…</Text>
      </Center>
    );
  }

  if (error) {
    return (
      <Center minH="60vh">
        <Text color="red.500">Failed to load watchlist.</Text>
      </Center>
    );
  }

  return (
    <Box bg="bg" color="text" minH="100vh" py={8} px={{ base: 4, md: 8 }}>
      <VStack spacing={4} maxW="6xl" mx="auto" mb={6} align="stretch">
        <Heading size="2xl">My Watchlist</Heading>
        <Text color="brand.600">
          Track price moves, ML signals, and manage your tickers here.
        </Text>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="brand"
          alignSelf="flex-start"
          as="a"
          href="/backtest"
        >
          Add & Backtest New Ticker
        </Button>
      </VStack>

      {stocks.length === 0 ? (
        <Center minH="40vh" flexDirection="column">
          <Text fontSize="lg" mb={4}>
            You haven't added any tickers yet.
          </Text>
          <Button
            colorScheme="brand"
            leftIcon={<AddIcon />}
            as="a"
            href="/stock/AAPL"
          >
            Add your first ticker
          </Button>
        </Center>
      ) : (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={6}
          maxW="6xl"
          mx="auto"
        >
          {stocks.map((stock) => (
            <StockCard key={stock.ticker} stock={stock} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
