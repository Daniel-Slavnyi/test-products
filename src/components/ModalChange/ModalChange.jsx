import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePr } from 'redux/product/product-oparation';
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
        <form>
          <label>
            <input
              name="title"
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
              type="text"
            />
            <span>Назва</span>
          </label>
          <label>
            <input
              name="description"
              value={description}
              onChange={e => {
                setDescription(e.target.value);
              }}
              type="text"
            />
            <span>Опис</span>
          </label>
          <label>
            <input
              name="price"
              value={price}
              onChange={e => {
                setPrice(e.target.value);
              }}
              type="text"
            />
            <span>Ціна</span>
          </label>
          <label>
            <input
              name="rating"
              value={rating}
              onChange={e => {
                setRating(e.target.value);
              }}
              type="text"
            />
            <span>Рейтинг</span>
          </label>
          <label>
            <input
              name="stock"
              value={stock}
              onChange={e => {
                setStock(e.target.value);
              }}
              type="text"
            />
            <span>Сток</span>
          </label>
          <label>
            <input
              name="category"
              value={category}
              onChange={e => {
                setcategory(e.target.value);
              }}
              type="text"
            />
            <span>Категорія</span>
          </label>
          <button onClick={handleChange}>Change</button>
        </form>
        <button
          onClick={() => {
            setIsOpenModal(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
