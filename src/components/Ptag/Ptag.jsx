import React from 'react';
import cn from 'classnames';
import style from './Ptag.module.css';

export default function Ptag({ size = 'mdp', children }) {
  return (
    <p
      className={cn(style.text, {
        [style.smp]: size === 'smp',
        [style.mdp]: size === 'mdp',
        [style.lgp]: size === 'lgp',
      })}
    >
      {children}
    </p>
  );
}
