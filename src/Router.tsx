import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './RootLayout';
import MainListPage from './pages/MainListPage';
import DetailPage from './pages/DetailPage';
import Error404Page from './pages/Error404Page';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<MainListPage />} />
          <Route path="/detail/:indexId" element={<DetailPage />} />
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;