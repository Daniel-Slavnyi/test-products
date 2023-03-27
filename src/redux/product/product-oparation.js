import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from 'services/apiProducts';

export const products = createAsyncThunk(
  'products/get',
  async (_, thunkAPI) => {
    try {
      const res = await getProducts();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
