import React from 'react';
import cn from 'classnames';
import style from './Tab.module.css';

export default function Tab({
  size = 'smt',
  color = 'ghost',
  href = false,
  children,
  target = '',
}) {
  return (
    <div
      className={cn(style.tab, {
        [style.smt]: size === 'smt',
        [style.mdt]: size === 'mdt',
        [style.grey]: color === 'grey',
        [style.green]: color === 'green',
        [style.red]: color === 'red',
        [style.ghost]: color === 'ghost',
        [style.primary]: color === 'primary',
      })}
    >
      {href ? (
        <a href={href} target={target}>
          {children}
        </a>
      ) : (
        children
      )}
    </div>
  );
}
