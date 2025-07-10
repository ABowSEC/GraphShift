// src/hooks/useStockDetail.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { StockDetail } from '../types';


const DEV_MOCK: StockDetail = {
  symbol:      'AAPL',
  name:        'Apple Inc.',
  currentPrice: 174.12,
  change:       1.23,
  mlSignal:     { label: 'Buy', confidence: 0.87 },
};


export function useStockDetail(ticker: string) {
  return useQuery<StockDetail, Error>({
    queryKey: ['stockDetail', ticker],
    queryFn: async () => {
      const { data } = await axios.get<StockDetail>(`/api/stock/${ticker}`);
      return data;
    },
    enabled: Boolean(ticker),
    // seeding with mock in dev
    initialData: import.meta.env.DEV ? { ...DEV_MOCK, symbol: ticker } : undefined,
  });
}
