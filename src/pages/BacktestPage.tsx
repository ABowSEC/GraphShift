// src/pages/BacktestPage.tsx
import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  SimpleGrid,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  Spinner,
  Center,
  VStack,
} from '@chakra-ui/react';
import BacktestChart from '../components/BacktestChart';  // build this with Recharts/Chart.js
import type { BacktestResult } from '../types';
import { useBacktest } from '../hooks/useBacktest';

export default function BacktestPage() {
  const [ticker, setTicker] = useState('');
  const [startDate, setStartDate] = useState('');  // YYYY-MM-DD
  const [endDate, setEndDate] = useState('');      // YYYY-MM-DD

  const {
    data,
    isLoading,
    error,
    refetch,
  } = useBacktest(ticker, startDate, endDate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ticker && startDate && endDate) {
      refetch();
    }
  };

  return (
    <Box bg="bg" color="text" minH="100vh" py={8} px={{ base: 4, md: 8 }}>
      <Heading mb={6}>Backtest Strategy</Heading>

      <Box
        as="form"
        mb={8}
        onSubmit={handleSubmit}
        maxW="600px"
        mx="auto"
        bg="brand.50"
        _dark={{ bg: 'brand.800' }}
        p={6}
        borderRadius="lg"
        shadow="md"
      >
        <FormControl id="ticker" mb={4} isRequired>
          <FormLabel>Ticker Symbol</FormLabel>
          <Input
            value={ticker}
            onChange={(e) => setTicker(e.target.value.toUpperCase())}
            placeholder="e.g. AAPL"
          />
        </FormControl>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
          <FormControl id="start" isRequired>
            <FormLabel>Start Date</FormLabel>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </FormControl>
          <FormControl id="end" isRequired>
            <FormLabel>End Date</FormLabel>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </FormControl>
        </SimpleGrid>

        <Button
          type="submit"
          colorScheme="brand"
          width="full" //FORMAT
          isDisabled={!ticker || !startDate || !endDate}
        >
          Run Backtest
        </Button>
      </Box>

      {isLoading && (
        <Center>
          <Spinner size="xl" />
        </Center>
      )}

      {error && (
        <Center>
          <Text color="red.500">Error running backtest.</Text>
        </Center>
      )}

      {data && (
        <VStack spacing={8}>
          {/* Summary Stats */}
          <StatGroup
            bg="brand.50"
            _dark={{ bg: 'brand.800' }}
            p={6}
            borderRadius="lg"
            shadow="md"
            maxW="6xl"
            w="full"
          >
            <Stat>
              <StatLabel>Annualized Return</StatLabel>
              <StatNumber>{(data.stats.annualReturn * 100).toFixed(2)}%</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Max Drawdown</StatLabel>
              <StatNumber>{(data.stats.maxDrawdown * 100).toFixed(2)}%</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Sharpe Ratio</StatLabel>
              <StatNumber>{data.stats.sharpeRatio.toFixed(2)}</StatNumber>
            </Stat>
          </StatGroup>

          {/* Equity Curve Chart */}
          <Box
            bg="brand.50"
            _dark={{ bg: 'brand.800' }}
            p={4}
            borderRadius="lg"
            shadow="md"
            maxW="6xl"
            w="full"
          >
            <Heading size="md" mb={4}>
              Equity Curve
            </Heading>
            <BacktestChart data={data.equityCurve} />
          </Box>
        </VStack>
      )}
    </Box>
  );
}
