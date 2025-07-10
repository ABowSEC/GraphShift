// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Header        from './components/Header';
import PrivacyNotice from './components/PrivacyNotice';
import Home          from './pages/Home';
import SubmitPage     from './pages/SubmitPage';
import ArticleDetail from './pages/ArticleDetail';
import NotFound      from './pages/NotFound';
import DocumentArchive from './pages/DocumentArchive';
const App = () => (
  <Box minH="100vh">
    <Header />
    <PrivacyNotice />

    <Routes>
      <Route path="/"                    element={<Home />} />
      <Route path="/government"          element={<Government />} />
      <Route path="/law-enforcement"     element={<LawEnforcement />} />
      <Route path="/industry"            element={<Industry />} />
      <Route path="/foia"                element={<FoiaRequests />} />
      <Route path="/documents"           element={<DocumentArchive />} />
      <Route path="/submit"              element={<SubmitPage />} />
      <Route path="/article/:slug"       element={<ArticleDetail />} />
      <Route path="*"                    element={<NotFound />} />
    </Routes>
  </Box>
);

export default App;
