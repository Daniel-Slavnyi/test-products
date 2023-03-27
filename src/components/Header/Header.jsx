import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Table</Link>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
