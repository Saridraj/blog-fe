'use server';
import api from '@/lib/api';

export async function fetchAllComment() {
  try {
    const response = await api.get('/comment');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching assignments:', error);
  }
}