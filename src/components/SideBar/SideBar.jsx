import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './SideBar.module.css';

export default function SideBar({ className }) {
  return (
    <div className={className}>
      <nav>
        <ul className={style.list}>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? style.active : style.link}`
              }
              to="/"
            >
              Table
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? style.active : style.link}`
              }
              to="/product"
            >
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
