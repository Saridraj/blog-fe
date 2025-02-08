'use server';
import api from '@/lib/api';

export async function fetchAllPost() {
  try {
    const response = await api.get('/post');
    return response.data;
  } catch (error) {
    console.error('Error fetching assignments:', error);
  }
}

export async function fetchPostOfUser(userId: string) {
  try {
    console.log('userId', userId);
    const response = await api.get(`/post/user/${userId}`);
    console.log('response', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching assignments:', error);
  }
}
