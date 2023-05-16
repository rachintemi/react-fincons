import { Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import React = require('react');

const HomePage = React.lazy(() => import('../src/pages/HomePage'));

const AppRouter = () => {
  return (
    <React.Suspense fallback={<CircularProgress color="primary" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRouter;
