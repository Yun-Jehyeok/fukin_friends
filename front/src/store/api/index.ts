import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.PUBLIC_SERVER_URL + '/api',
  withCredentials: true,
  timeout: 10000,
});

export { apiLoadPosts } from './postApi';
