import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './product/product-slice';

export const rootReducer = combineReducers({
  products: productsReducer,
});
