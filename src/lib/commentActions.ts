'use server';
import api from '@/lib/api';
import { create } from 'domain';

export async function fetchAllComment() {
  try {
    const response = await api.get('/comment');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching assignments:', error);
  }
}

export async function postComment(commentData: any) {
  try {
    const response = await api.post('/comment/addComment', {
      comment: commentData.comment,
      createdBy: commentData.createdBy,
      postId: commentData.postId,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching assignments:', error);
  }
}
