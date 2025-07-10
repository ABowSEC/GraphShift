// src/components/BacktestChart.tsx
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

type DataPoint = {
  date: Date;
  value: number;
};

type BacktestChartProps = {
  data: DataPoint[];
};

export default function BacktestChart({ data }: BacktestChartProps) {
  // Map Date objects to formatted strings for the X-axis
  const formattedData = data.map((d) => ({
    date: d.date.toLocaleDateString(),
    value: d.value,
  }));

  return (
    <Box width="100%" height="300px">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(val) => val.toFixed(2)} />
          <Tooltip formatter={(value: number) => value.toFixed(2)} />
          <Line type="monotone" dataKey="value" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
