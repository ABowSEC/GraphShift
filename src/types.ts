// src/types.ts
export interface StockDetail {
  symbol: string;
  name: string;
  currentPrice: number;
  change: number; // percent change
  mlSignal: {
    label: 'Buy' | 'Hold' | 'Sell';
    confidence: number; // 0–1
  };
}

export interface PricePoint {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface StockSummary {
  ticker: string;
  name: string;
  price: number;
  change: number; // percent change
}

export interface BacktestResult {
  stats: {
    annualReturn: number;   // e.g. 0.12 = 12%
    maxDrawdown: number;    // e.g. 0.08 = 8%
    sharpeRatio: number;
  };
  equityCurve: Array<{
    date: Date;
    value: number;         // portfolio value or normalized index
  }>;
}
