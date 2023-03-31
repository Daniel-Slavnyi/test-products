import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  changeProducts,
  createProducts,
  deleteProducts,
  getProductById,
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

export const productById = createAsyncThunk(
  'products/getId',
  async (id, thunkAPI) => {
    try {
      const res = await getProductById(id);
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

export const createPr = createAsyncThunk(
  'products/create',
  async (objProd, thunkAPI) => {
    try {
      const res = await createProducts(objProd);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
