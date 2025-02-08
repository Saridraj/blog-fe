'use server';
import axios, { AxiosInstance } from 'axios';
import { cookies } from 'next/headers';

// Create an Axios instance
const api: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

// Axios interceptor to add Authorization header dynamically
api.interceptors.request.use(async (config) => {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});


export default api;
