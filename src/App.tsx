// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Header          from "./components/Header";
import NotFound        from "./pages/NotFound";

// Stock-centric pages you’ll build next
import Dashboard       from "./pages/Dashboard.tsx";       // portfolio & watchlist overview
import WatchlistPage   from "./pages/WatchlistPage.tsx";   // list of tracked tickers
import StockDetail     from "./pages/StockDetail.tsx";     // detail view for a single ticker
import BacktestPage    from "./pages/BacktestPage.tsx";    // run & view ML strategy backtests

const App = () => (
  <Box 
    minH="100vh" 
    bg="bg"           // semantic token from your theme
    color="text"      // semantic token from your theme
  >
    <Header />

    <Routes>
      <Route path="/"                  element={<Dashboard />} />
      <Route path="/watchlist"         element={<WatchlistPage />} />
      <Route path="/stock/:ticker"     element={<StockDetail />} />
      <Route path="/backtest"          element={<BacktestPage />} />
      <Route path="*"                  element={<NotFound />} />
    </Routes>
  </Box>
);

export default App;
