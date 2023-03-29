import { createSlice } from '@reduxjs/toolkit';
import { changePr, deletePr, products } from './product-oparation';

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
      })
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
      });
  },
});

const { actions, reducer } = productSlice;

export const { getSort } = actions;

export default reducer;
