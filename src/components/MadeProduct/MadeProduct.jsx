import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import img from './img.png';
import Ptag from 'components/Ptag/Ptag';
import Tab from 'components/Tab/Tab';

import { getCreatedItems } from 'redux/product/product-selector';
import { deleteCreatedPr } from 'redux/product/product-slice';

import { AiOutlineDelete } from 'react-icons/ai';
import style from './MadeProduct.module.css';

export default function MadeProduct() {
  const createdProduct = useSelector(getCreatedItems);
  const dispatch = useDispatch();

  const onDelate = id => {
    dispatch(deleteCreatedPr(id));
  };
  return (
    <>
      <ul className={style.list}>
        {createdProduct.map(item => (
          <li key={item.id + item.stock} className={style.item}>
            <img src={img} className={style.img} alt="default img" />
            <div className={style.wraptag}>
              <div>
                <Ptag>Title: {item.title}</Ptag>
                <Ptag>Brand: {item.brand}</Ptag>
              </div>
              <div>
                <button
                  type="button"
                  className={style.btndelate}
                  onClick={() => {
                    onDelate(item.stock);
                  }}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
            <div className={style.wraptab}>
              <Tab color={'primary'}>Raiting: {item.rating}</Tab>
              <Tab color={'red'}>
                Year: {new Date(item.stock).getFullYear()}
              </Tab>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
