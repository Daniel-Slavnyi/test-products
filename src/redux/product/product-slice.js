import { createSlice } from '@reduxjs/toolkit';
import { products } from './product-oparation';

const initialState = {
  items: [],
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
  },
  extraReducers: builder => {
    builder
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
      });
  },
});

const { actions, reducer } = productSlice;

export const { getSort } = actions;

export default reducer;
