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
    const response = await api.get(`/post/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching assignments:', error);
  }
}

export async function editPost(postData: any) {
  try {
    const response = await api.put(`/post/${postData.postId}`,{
      community:  postData.community,
      topic:  postData.topic,
      content:  postData.content,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching assignments:', error);
  }
}

export async function createPost(postData: any) {
  try {
    const response = await api.post('/post/create', {
      community: postData.community,
      topic: postData.topic,
      content: postData.content,
      createdBy: postData.createdBy,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching assignments:', error);
  }
}

export async function deletePost(postId: string) {
  try {
    const response = await api.delete(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching assignments:', error);
  }
}
