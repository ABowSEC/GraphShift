// src/hooks/useBacktest.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { BacktestResult } from '../types';

export function useBacktest(ticker: string, start: string, end: string) {
  return useQuery<BacktestResult, Error>({
    queryKey: ['backtest', ticker, start, end],
    queryFn: async () => {
      const { data } = await axios.get<BacktestResult>(
        `/api/backtest?ticker=${ticker}&start=${start}&end=${end}`
      );
      data.equityCurve = data.equityCurve.map(pt => ({
        ...pt,
        date: new Date(pt.date),
      }));
      return data;
    },
    enabled: Boolean(ticker && start && end),
  });
}
