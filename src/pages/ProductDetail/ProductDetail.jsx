import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import Slider from 'react-slick';

import { productById } from 'redux/product/product-oparation';
import { getItem } from 'redux/product/product-selector';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import style from './ProductDetail.module.css';
import Ptag from 'components/Ptag/Ptag';
import Tab from 'components/Tab/Tab';

export default function ProductDetail() {
  const prevLocation = useLocation();
  const { id } = useParams();

  const getItemById = useSelector(getItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!getItemById.brand) {
    return;
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    images,
  } = getItemById;

  return (
    <div className={style.container}>
      <Link to={prevLocation.state.from} className={style.backLink}>
        До таблиці
      </Link>
      <div className={style.productCard}>
        <Slider {...settings}>
          {images.map((item, idx) => {
            return (
              <img src={item} key={idx} className={style.img} alt="smth" />
            );
          })}
        </Slider>

        <div className={style.productCardContent}>
          <h2 className={style.productCardTitle}>{title}</h2>
          <Ptag className={style.productCardDescription}>{description}</Ptag>
          <div className={style.productCardDetails}>
            <div className={style.productCardPrice}>
              ${price.toFixed(2)}
              {discountPercentage && (
                <Tab color="primary" className={style.productCardDiscount}>
                  -{discountPercentage}%
                </Tab>
              )}
            </div>
            <Tab color="red" size="mdt" className={style.productCardRating}>
              {rating}
            </Tab>
          </div>
          <Ptag size="lgp" className={style.productCardStock}>
            В наличии: {stock}
          </Ptag>
          <Ptag size="lgp" className={style.productCardBrand}>
            Бренд: {brand}
          </Ptag>
          <Ptag size="lgp" className={style.productCardCategory}>
            Категория: {category}
          </Ptag>
        </div>
      </div>
    </div>
  );
}
