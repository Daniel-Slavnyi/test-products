import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import style from './Header.module.css';

export default function Header({ className }) {
  return (
    <header className={cn(className, style.head)}>
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
    </header>
  );
}
