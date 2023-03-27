import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import React from 'react';
import Footer from 'components/Footer/Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main>{<Outlet />}</main>
      <Footer />
    </>
  );
}
