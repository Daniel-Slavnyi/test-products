import { Routes, Route } from 'react-router-dom';
import Layout from 'pages/Layout/Layout';
import NotFound from 'pages/NotFound/NotFound';
import Product from 'pages/Product/Product';
import Table from 'pages/Table/Table';
import ProductDetail from 'pages/ProductDetail/ProductDetail';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Table />} />
          <Route path="/:id" element={<ProductDetail />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
