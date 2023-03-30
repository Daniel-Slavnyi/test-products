import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import React from 'react';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';
import { products } from 'redux/product/product-oparation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import style from './Layout.module.css';

export default function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(products());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={style.wrapper}>
      <Header className={style.header} />
      <SideBar className={style.sidebar} />
      <main className={style.outlet}>{<Outlet />}</main>
      <Footer className={style.footer} />
    </div>
  );
}
