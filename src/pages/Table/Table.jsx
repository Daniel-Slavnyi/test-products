import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { products } from 'redux/product/product-oparation';

export default function Table() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(products());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Table</div>;
}
