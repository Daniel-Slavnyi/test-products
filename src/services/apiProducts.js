import axios from 'axios';
import { omit } from 'lodash';

export const backend = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const getProducts = async () => {
  try {
    const { data } = await backend.get('/products', {
      params: {
        skip: 0,
        limit: 100,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const getProductById = async id => {
  try {
    const { data } = await backend.get(`/products/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteProducts = async id => {
  try {
    const { data } = await backend.delete(`/products/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const changeProducts = async objProd => {
  try {
    const { data } = await backend.put(
      `/products/${objProd.id}`,
      omit(objProd, 'id')
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const createProducts = async objProd => {
  try {
    const { data } = await backend.post(`/products/add`, objProd);
    return data;
  } catch (error) {
    return error;
  }
};
