import Layout from 'pages/Layout';
import NotFound from 'pages/NotFound/NotFound';
import Product from 'pages/Product/Product';
import Table from 'pages/Table/Table';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Table />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
