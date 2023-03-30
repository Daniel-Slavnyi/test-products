import React from 'react';
import style from './Filter.module.css';

export default function Filter({ filterInp, setFilterInp }) {
  return (
    <label className={style.label}>
      <input
        className={style.input}
        type="text"
        value={filterInp}
        placeholder=" "
        onChange={e => {
          setFilterInp(e.target.value);
        }}
      />
      <span className={style.span}>Ім*я або категорія товару</span>
    </label>
  );
}
