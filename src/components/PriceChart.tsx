// src/components/PriceChart.tsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import type { PricePoint } from '../types';

type PriceChartProps = {
  data: PricePoint[];
};

const PriceChart: React.FC<PriceChartProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <Box width="100%" height="250px" display="flex" alignItems="center" justifyContent="center">
        <Box>No price data available.</Box>
      </Box>
    );
  }
  const formattedData = data.map((d) => ({
    date: d.date instanceof Date ? d.date.toLocaleDateString() : String(d.date),
    close: d.close,
  }));

  return (
    <Box width="100%" height="250px">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis domain={['auto', 'auto']} tickFormatter={(val) => `$${val.toFixed(2)}`} />
          <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
          <Line type="monotone" dataKey="close" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PriceChart;
