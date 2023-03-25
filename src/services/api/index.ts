import axios from 'axios';

export const useAxios = () =>
  axios.create({
    //baseURL: 'https://jsonplaceholder.typicode.com',
    baseURL: import.meta.env.VITE_API_HOST,
    headers: {
      'Content-Type': 'application/json',
    },
  });
