// src/pages/Dashboard.tsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Divider,
  Button,
  Flex,
  Spacer,
  Badge,
  StatGroup,
  Stat,
  StatNumber,
  StatLabel,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import StockCard from '../components/StockCard';        // your new stock card component
import type { StockSummary } from '../types';

// ─── Mock data (replace with real API later) ────────────────────────────────
const mockStocks: StockSummary[] = [
  { ticker: 'AAPL', name: 'Apple Inc.', price: 174.12, change: +1.23 },
  { ticker: 'MSFT', name: 'Microsoft Corp.', price: 331.45, change: -0.56 },
  { ticker: 'GOOGL', name: 'Alphabet Inc.', price: 134.67, change: +2.34 },
];
// ────────────────────────────────────────────────────────────────────────────

export default function Dashboard() {
  return (
    <Box bg="bg" color="text" minH="100vh">
      {/* ─── Hero Section ───────────────────────────────────────────────── */}
      <Box
        bg="brand.500"
        color="white"
        py={{ base: 16, md: 24 }}
        textAlign="center"
      >
        <VStack spacing={4}>
          <Heading size="3xl" fontWeight="bold">
            GraphShift Dashboard
          </Heading>
          <Text fontSize="lg" opacity={0.85}>
            Track your portfolio, watchlists, and get ML-driven signals in one place.
          </Text>
          <HStack spacing={4} pt={4}>
            <Button
              size="lg"
              rightIcon={<ArrowForwardIcon />}
              as="a"
              href="/watchlist"
            >
              My Watchlist
            </Button>
            <Button
              variant="outline"
              size="lg"
              as="a"
              href="/backtest"
            >
              Run Backtest
            </Button>
          </HStack>
        </VStack>
      </Box>

      {/* ─── Key Stats ─────────────────────────────────────────────────────── */}
      <Box px={{ base: 4, md: 8 }} py={8}>
        <StatGroup
          bg="brand.50"
          _dark={{ bg: 'brand.800' }}
          p={8}
          borderRadius="lg"
          shadow="md"
          maxW="6xl"
          mx="auto"
        >
          <Stat textAlign="center">
            <StatNumber fontSize="3xl" color="brand.600">
              +3.2%
            </StatNumber>
            <StatLabel>Avg Daily Return</StatLabel>
          </Stat>
          <Stat textAlign="center">
            <StatNumber fontSize="3xl" color="brand.600">
              +5.8%
            </StatNumber>
            <StatLabel>Weekly Change</StatLabel>
          </Stat>
          <Stat textAlign="center">
            <StatNumber fontSize="3xl" color="brand.600">
              +22.4%
            </StatNumber>
            <StatLabel>Year-to-Date</StatLabel>
          </Stat>
          <Stat textAlign="center">
            <StatNumber fontSize="3xl" color="brand.600">
              Bullish
            </StatNumber>
            <StatLabel>Market Outlook</StatLabel>
          </Stat>
        </StatGroup>
      </Box>

      {/* ─── Watchlist Preview ─────────────────────────────────────────────── */}
      <Box px={{ base: 4, md: 8 }} py={8}>
        <Flex align="end" mb={6} maxW="6xl" mx="auto">
          <VStack align="start" spacing={1}>
            <Heading size="xl">Watchlist</Heading>
            <Text fontSize="md" color="brand.600">
              Your tracked tickers
            </Text>
          </VStack>
          <Spacer />
          <Button variant="link" colorScheme="brand" as="a" href="/watchlist">
            View All
          </Button>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} maxW="6xl" mx="auto">
          {mockStocks.map(stock => (
            <StockCard key={stock.ticker} stock={stock} />
          ))}
        </SimpleGrid>
      </Box>

      {/* ─── Sector Overview ──────────────────────────────────────────────── */}
      <Box px={{ base: 4, md: 8 }} py={8}>
        <VStack spacing={6} maxW="6xl" mx="auto">
          <Heading size="lg" textAlign="center">
            Sector Highlights
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
            {[
              { label: 'Technology', color: 'brand' },
              { label: 'Healthcare', color: 'brand' },
              { label: 'Finance', color: 'brand' },
            ].map(({ label, color }) => (
              <Box
                key={label}
                bg="brand.50"
                _dark={{ bg: 'brand.800' }}
                p={6}
                borderRadius="lg"
                shadow="sm"
                textAlign="center"
                _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
                cursor="pointer"
              >
                <Badge colorScheme={color} mb={2}>
                  {label}
                </Badge>
                <Text fontWeight="semibold" mb={1}>
                  Top Movers
                </Text>
                <Text fontSize="sm" color="brand.600">
                  Sector performance & news
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </Box>
  );
};
