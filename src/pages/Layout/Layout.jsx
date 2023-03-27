import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import React from 'react';
import Footer from 'components/Footer/Footer';
import SideBar from 'components/SideBar/SideBar';

import style from './Layout.module.css';

export default function Layout() {
  return (
    <div className={style.wrapper}>
      <Header className={style.header} />
      <SideBar className={style.sidebar} />
      <main className={style.outlet}>{<Outlet />}</main>
      <Footer className={style.footer} />
    </div>
  );
}
