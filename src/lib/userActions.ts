'use server';
import api from '@/lib/api';

export async function fetchAllUser() {
  try {
    const response = await api.get('/auth');
    return response.data;
  } catch (error) {
    console.error('Error fetching assignments:', error);
  }
}