import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  changeProducts,
  deleteProducts,
  getProducts,
} from 'services/apiProducts';

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

export const deletePr = createAsyncThunk(
  'products/delete',
  async (id, thunkAPI) => {
    try {
      const res = await deleteProducts(id);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changePr = createAsyncThunk(
  'products/change',
  async (objProd, thunkAPI) => {
    try {
      const res = await changeProducts(objProd);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
