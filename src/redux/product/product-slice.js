import { createSlice } from '@reduxjs/toolkit';
import { products } from './product-oparation';

const initialState = {
  items: [],
  itemsTotal: null,
  error: null,
  isLoading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
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

const { reducer } = productSlice;

export default reducer;
