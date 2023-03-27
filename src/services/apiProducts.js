import axios from 'axios';

export const backend = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const getProducts = async () => {
  try {
    const { data } = await backend.get('/products', {
      params: {
        skip: 0,
        limit: 10,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};
