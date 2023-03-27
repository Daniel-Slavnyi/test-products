import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import style from './Header.module.css';

export default function Header({ className }) {
  return (
    <header className={cn(className, style.head)}>
      <nav>
        <ul>
          <li>
            <Link to="/">Table</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
