import ModalChange from 'components/ModalChange/ModalChange';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePr } from 'redux/product/product-oparation';
import { getItems, isArrowUp } from 'redux/product/product-selector';
import { getSort } from 'redux/product/product-slice';
import style from './TableCom.module.css';

export default function TableCom() {
  const [sortArr, setSortArr] = useState('');
  const [changedItem, setChangedItem] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const items = useSelector(getItems);
  const dispatch = useDispatch();
  const isArrowUpEl = useSelector(isArrowUp);
  

  const onSort = field => {
    dispatch(getSort(field));
  };

  const onDelete = id => {
    dispatch(deletePr(id));
  };

  return (
    <div className={style.wrapper}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th
              onClick={() => {
                onSort('id');
                setSortArr('id');
              }}
            >
              ID <br />{' '}
              {sortArr === 'id' ? (isArrowUpEl ? 'down' : 'up') : null}
            </th>
            <th
              onClick={() => {
                onSort('title');
                setSortArr('title');
              }}
            >
              Назва <br />{' '}
              {sortArr === 'title' ? (isArrowUpEl ? 'down' : 'up') : null}
            </th>
            <th>Опис</th>
            <th
              onClick={() => {
                onSort('price');
                setSortArr('price');
              }}
            >
              Ціна <br />{' '}
              {sortArr === 'price' ? (isArrowUpEl ? 'down' : 'up') : null}
            </th>
            <th>Фото</th>
            <th
              onClick={() => {
                onSort('rating');
                setSortArr('rating');
              }}
            >
              Рейтинг
              <br />{' '}
              {sortArr === 'rating' ? (isArrowUpEl ? 'down' : 'up') : null}
            </th>
            <th
              onClick={() => {
                onSort('stock');
                setSortArr('stock');
              }}
            >
              Сток <br />{' '}
              {sortArr === 'stock' ? (isArrowUpEl ? 'down' : 'up') : null}
            </th>
            <th
              onClick={() => {
                onSort('category');
                setSortArr('category');
              }}
            >
              Категорія
              <br />{' '}
              {sortArr === 'category' ? (isArrowUpEl ? 'down' : 'up') : null}
            </th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {items?.map(row => (
            <tr key={row.id} className={style.trow}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.description}</td>
              <td>{row.price}</td>
              <td>
                <img
                  width="100"
                  style={{ borderRadius: '5px' }}
                  src={row.thumbnail}
                  alt={row.name}
                />
              </td>
              <td>{row.rating}</td>
              <td>{row.stock}</td>
              <td>{row.category}</td>
              <td>
                <button
                  onClick={() => {
                    setChangedItem(row);
                    setIsOpenModal(true);
                  }}
                >
                  change
                </button>
                <button
                  onClick={() => {
                    onDelete(row.id);
                  }}
                >
                  deletet
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isOpenModal && (
        <ModalChange
          changedItem={changedItem}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </div>
  );
}
