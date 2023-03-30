import { createSlice } from '@reduxjs/toolkit';
import { changePr, createPr, deletePr, products } from './product-oparation';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'createdProduct',
  whitelist: ['createItems'],
  storage,
};

const initialState = {
  items: [],
  createItems: [],
  itemsTotal: null,
  error: null,
  isLoading: false,
  directionSort: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getSort(state, action) {
      if (state.directionSort) {
        state.items = state.items.sort((a, b) =>
          a[action.payload] > b[action.payload] ? -1 : 1
        );
        state.directionSort = !state.directionSort;
        return;
      }
      state.items = state.items.sort((a, b) =>
        a[action.payload] > b[action.payload] ? 1 : -1
      );
      state.directionSort = !state.directionSort;
    },
    deleteCreatedPr(state, action) {
      state.createItems = state.createItems.filter(
        item => item.stock !== action.payload
      );
    },
  },
  extraReducers: builder => {
    builder
      // ---- GET
      .addCase(products.pending, state => {
        state.isLoading = true;
      })
      .addCase(products.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.products;
        state.itemsTotal = action.payload.total;
      })
      .addCase(products.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ---- DELETE
      .addCase(deletePr.pending, state => {
        state.isLoading = true;
      })
      .addCase(deletePr.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deletePr.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ---- UPDATE
      .addCase(changePr.pending, state => {
        state.isLoading = true;
      })
      .addCase(changePr.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              ...action.payload,
            };
          }
          return item;
        });
      })
      .addCase(changePr.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ---- CREATE
      .addCase(createPr.pending, state => {
        state.isLoading = true;
      })
      .addCase(createPr.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.createItems = [action.payload, ...state.createItems];
      })
      .addCase(createPr.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const { actions } = productSlice;

export const { getSort, deleteCreatedPr } = actions;

export const productsReducer = persistReducer(
  persistConfig,
  productSlice.reducer
);
