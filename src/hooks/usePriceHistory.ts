// src/hooks/usePriceHistory.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { PricePoint } from '../types';

const DEV_HISTORY: PricePoint[] = [
  { date: new Date('2025-01-01'), open: 170, high: 175, low: 169, close: 174.12, volume: 80_000_000 },
  { date: new Date('2025-01-02'), open: 174, high: 176, low: 173, close: 175.30, volume: 82_000_000 },
  { date: new Date('2025-01-03'), open: 175, high: 178, low: 174, close: 177.50, volume: 85_000_000 },
];

export function usePriceHistory(ticker: string) {
  return useQuery<PricePoint[], Error>({
    queryKey: ['priceHistory', ticker],
    queryFn: async () => {
      const { data } = await axios.get<PricePoint[]>(`/api/stock/${ticker}/history`);
      return data.map(pt => ({ ...pt, date: new Date(pt.date) }));
    },
    enabled: Boolean(ticker),
    initialData: import.meta.env.DEV ? DEV_HISTORY : undefined,
  });
}
