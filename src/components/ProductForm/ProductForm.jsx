import React from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { createPr } from 'redux/product/product-oparation';

import { IoMdAddCircleOutline } from 'react-icons/io';
import style from './ProductForm.module.css';

export default function ProductForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      brand: '',
      rating: '',
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required('поле має містити назву товара'),
      brand: Yup.string().required('поле має містити ім*я автора'),
      rating: Yup.string()
        .matches(/^\d+$/, 'поле може містити тільки цифри')
        .required('поле має містити рейтинг'),
    }),
    onSubmit: value => {
      dispatch(createPr({ ...value, stock: new Date() }));
    },
  });

  return (
    <div>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <label className={style.label}>
          <input
            className={style.input}
            name="title"
            type="title"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder=" "
          />
          <span className={style.span}>Name of product</span>
          {formik.touched.title && formik.errors.title ? (
            <div className={style.error}>{formik.errors.title}</div>
          ) : null}
        </label>

        <label className={style.label}>
          <input
            className={style.input}
            name="brand"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.brand}
            placeholder=" "
          />
          <span className={style.span}>Author</span>
          {formik.touched.brand && formik.errors.brand ? (
            <div className={style.error}>{formik.errors.brand}</div>
          ) : null}
        </label>

        <label className={style.label}>
          <input
            className={style.input}
            name="rating"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.raiting}
            placeholder=" "
          />
          <span className={style.span}>Rating</span>
          {formik.touched.rating && formik.errors.rating ? (
            <div className={style.error}>{formik.errors.rating}</div>
          ) : null}
        </label>

        <button type="submit" className={style.btn}>
          <IoMdAddCircleOutline />
        </button>
      </form>
    </div>
  );
}
