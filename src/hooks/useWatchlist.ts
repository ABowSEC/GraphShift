// src/hooks/useWatchlist.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { StockSummary } from '../types';


const DEV_MOCK: StockSummary[] = [
  { ticker: 'AAPL', name: 'Apple Inc.', price: 174.12, change:  1.23 },
  { ticker: 'MSFT', name: 'Microsoft Corp.', price: 331.45, change: -0.56 },
  { ticker: 'GOOGL', name: 'Alphabet Inc.', price: 134.67, change:  2.34 },
];

export function useWatchlist() {
  return useQuery<StockSummary[], Error>({
    queryKey: ['watchlist'],
    queryFn: async () => {
      const { data } = await axios.get<StockSummary[]>('/api/watchlist');
      return data;
    },
    
    initialData: import.meta.env.DEV ? DEV_MOCK : undefined,

    staleTime: 5 * 60_000,
  });
}
