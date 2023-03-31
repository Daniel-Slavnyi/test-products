import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changePr } from 'redux/product/product-oparation';

import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';

import style from './ModalChange.module.css';

export default function ModalChange({ changedItem, setIsOpenModal }) {
  const [title, setTitle] = useState(changedItem.title || '');
  const [description, setDescription] = useState(changedItem.description || '');
  const [price, setPrice] = useState(changedItem.price || '');
  const [rating, setRating] = useState(changedItem.rating || '');
  const [stock, setStock] = useState(changedItem.stock || '');
  const [category, setcategory] = useState(changedItem.category || '');

  const dispatch = useDispatch();

  const handleChange = () => {
    const objProd = {
      id: changedItem.id,
      title,
      description,
      price,
      rating,
      stock,
      category,
    };

    dispatch(changePr(objProd));
  };
  return (
    <div className={style.backdrop}>
      <div className={style.modal}>
        <form className={style.form}>
          <label className={style.label}>
            <input
              className={style.input}
              name="title"
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder=" "
            />
            <span className={style.span}>Назва</span>
          </label>
          <label className={style.label}>
            <input
              className={style.input}
              name="description"
              value={description}
              onChange={e => {
                setDescription(e.target.value);
              }}
              type="text"
              placeholder=" "
            />
            <span className={style.span}>Опис</span>
          </label>
          <label className={style.label}>
            <input
              className={style.input}
              name="price"
              value={price}
              onChange={e => {
                setPrice(e.target.value);
              }}
              type="text"
              placeholder=" "
            />
            <span className={style.span}>Ціна</span>
          </label>
          <label className={style.label}>
            <input
              className={style.input}
              name="rating"
              value={rating}
              onChange={e => {
                setRating(e.target.value);
              }}
              type="text"
              placeholder=" "
            />
            <span className={style.span}>Рейтинг</span>
          </label>
          <label className={style.label}>
            <input
              className={style.input}
              name="stock"
              value={stock}
              onChange={e => {
                setStock(e.target.value);
              }}
              type="text"
              placeholder=" "
            />
            <span className={style.span}>Сток</span>
          </label>
          <label className={style.label}>
            <input
              className={style.input}
              name="category"
              value={category}
              onChange={e => {
                setcategory(e.target.value);
              }}
              type="text"
              placeholder=" "
            />
            <span className={style.span}>Категорія</span>
          </label>
          <button onClick={handleChange} className={style.changebtn}>
            <MdOutlinePublishedWithChanges />
          </button>
        </form>
        <button
          className={style.closebtn}
          onClick={() => {
            setIsOpenModal(false);
          }}
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}
