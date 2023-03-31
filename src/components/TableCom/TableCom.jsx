import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import Filter from 'components/Filter/Filter';
import ModalChange from 'components/ModalChange/ModalChange';

import { deletePr } from 'redux/product/product-oparation';
import { getItems, isArrowUp } from 'redux/product/product-selector';
import { getSort } from 'redux/product/product-slice';

import { CiSettings } from 'react-icons/ci';
import { AiOutlineDelete } from 'react-icons/ai';

import style from './TableCom.module.css';

export default function TableCom() {
  const [sortArr, setSortArr] = useState('');
  const [changedItem, setChangedItem] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [filterInp, setFilterInp] = useState('');

  const items = useSelector(getItems);
  const isArrowUpEl = useSelector(isArrowUp);
  const dispatch = useDispatch();

  const location = useLocation();

  const onSort = field => {
    dispatch(getSort(field));
  };

  const onDelete = id => {
    dispatch(deletePr(id));
  };

  const filteredItems = items.filter(
    item =>
      item.title
        .toLowerCase()
        .trim()
        .includes(filterInp.toLowerCase().trim()) ||
      item.category
        .toLowerCase()
        .trim()
        .includes(filterInp.toLowerCase().trim())
  );

  return (
    <>
      <Filter filterInp={filterInp} setFilterInp={setFilterInp} />
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
              <th></th>
            </tr>
          </thead>
          <tbody className={style.tbody}>
            {filteredItems?.map(row => (
              <tr key={row.id} className={style.trow}>
                <td>
                  <Link to={`${row.id}`} state={{ from: location }}>
                    {row.id}
                  </Link>
                </td>
                <td>
                  <Link to={`${row.id}`} state={{ from: location }}>
                    {row.title}
                  </Link>
                </td>
                <td>
                  <Link
                    style={{ height: '100%' }}
                    to={`${row.id}`}
                    state={{ from: location }}
                  >
                    {row.description}
                  </Link>
                </td>
                <td>
                  <Link to={`${row.id}`} state={{ from: location }}>
                    {row.price}
                  </Link>
                </td>
                <td>
                  <Link to={`${row.id}`} state={{ from: location }}>
                    <img
                      width="100"
                      height="70"
                      style={{ borderRadius: '5px' }}
                      src={row.thumbnail}
                      alt={row.name}
                    />
                  </Link>
                </td>
                <td>
                  <Link to={`${row.id}`} state={{ from: location }}>
                    {row.rating}
                  </Link>
                </td>
                <td>
                  <Link to={`${row.id}`} state={{ from: location }}>
                    {row.stock}
                  </Link>
                </td>
                <td>
                  <Link to={`${row.id}`} state={{ from: location }}>
                    {row.category}
                  </Link>
                </td>
                <td>
                  <div className={style.wrapbutton}>
                    <button
                      className={style.button}
                      onClick={() => {
                        setChangedItem(row);
                        setIsOpenModal(true);
                      }}
                    >
                      <CiSettings style={{ fontSize: '20px' }} />
                    </button>
                    <button
                      className={style.button}
                      onClick={() => {
                        onDelete(row.id);
                      }}
                    >
                      <AiOutlineDelete style={{ fontSize: '20px' }} />
                    </button>
                  </div>
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
    </>
  );
}
