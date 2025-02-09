'use client';
import * as React from 'react';
import Image from 'next/image';
import Default from '@/components/image/Default.png';
import { Button } from '@/components/ui/Button';
import NavBar from '@/components/layout/NavBar';
import SideBar from '@/components/layout/SideBar';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import CommentLists from '@/components/comment/CommentList';
import { redirect, useParams } from 'next/navigation';
import { fetchAllPost } from '@/lib/postActions';
import { fetchAllComment, postComment } from '@/lib/commentActions';
import { fetchAllUser } from '@/lib/userActions';

export default function PostDescription() {
  const params = useParams();
  const postId = params?.postId;
  const getCookie = (name: string) => {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((row) => row.startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : null;
  };
  const userId = getCookie('userId');
  const [clickAddComment, setClickAddComment] = React.useState(false);
  const handleAddCommentClick = () => {
    setClickAddComment(!clickAddComment);
  };

  const [post, setPost] = useState<any[]>([]);
  const [user, setUser] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  console.log(newComment);

  const handlePostComment = () => {
    postComment({
      comment: newComment,
      createdBy: userId,
      postId: postId,
    });
    window.location.reload();
  };

  useEffect(() => {
    fetchAllPost().then((posts) => {
      setPost(posts);
    });
    fetchAllComment().then((comments) => {
      setComments(comments);
    });
    fetchAllUser().then((users) => {
      setUser(users);
    });
  }, []);
  const comment = comments.map((p) => ({
    ...p,
    createdBy: user?.filter((u) => u.id === p.createdBy),
  }));
  const posts = post.map((p) => ({
    ...p,
    comments: comment.filter((c) => c.postId === p.id),
    createdBy: user?.filter((u) => u.id === p.createdBy),
  }));

  const postData = posts.find((p) => p.id == postId);

  return (
    <div className='h-screen overflow-hidden bg-red-300'>
      <NavBar />
      <div className='z-0 -mt-[60px] flex h-full pt-[60px]'>
        <SideBar />
        <div className='h-full w-full bg-white p-[30px]'>
          <div className='h-fit sm:w-[798]'>
            <Button
              onClick={() => redirect('/')}
              className='flex h-[44px] w-[44px] items-center justify-center rounded-[50%] bg-green100'
            >
              <ArrowLeft className='text-green500' />
            </Button>
          </div>
          <div className='mt-8 h-screen overflow-hidden overflow-y-auto pb-[200px] hide-scrollbar sm:w-[798]'>
            <div className='h-fit w-full'>
              <div className='flex h-[31px] w-full items-center'>
                <div className='mr-[8px] h-[30px] w-[30px] overflow-hidden rounded-[50%] bg-gray300'>
                  <Image
                    width={30}
                    height={30}
                    alt='avatar'
                    src={postData?.createdBy[0]?.avatarURL || Default.src}
                  />
                </div>
                <p>{postData?.createdBy[0]?.username}</p>
              </div>
              <div className='mt-[8px] h-[24px] w-full'>
                <div className='flex h-[24px] w-fit items-center rounded-[16px] bg-[#f3f3f3] px-2'>
                  <p className='text-[12px]'>{postData?.community}</p>
                </div>
              </div>
              <div className='mt-[8px] h-fit w-full'>
                <p className='text-[28px] font-semibold'>{postData?.topic}</p>
              </div>
              <div className='h-fit w-full overflow-hidden'>
                <p className='w-full text-ellipsis text-[12px] leading-[14px]'>
                  {postData?.content}
                </p>
              </div>
              <div className='mt-[10px] flex h-[24px] w-full text-gray300'>
                <MessageCircle className='mr-1 w-[16px]' />
                {postData?.comments.length} comments
              </div>
            </div>
            {!clickAddComment ? (
              <>
                <div className='mt-8'>
                  <Button
                    onClick={handleAddCommentClick}
                    className='border border-success text-success'
                  >
                    Add Comment
                  </Button>
                </div>
              </>
            ) : (
              <>
                {userId ? (
                  <>
                    <div>
                      <Textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className='mt-2 h-[100px]'
                        placeholder='What’s on your mind...'
                      />
                      <div className='mt-2 flex justify-end'>
                        <Button
                          onClick={handleAddCommentClick}
                          className='mr-2 h-[40px] w-[105px] border border-success text-success'
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={handlePostComment}
                          className='h-[40px] w-[105px] bg-success text-white'
                        >
                          Post
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='flex flex-col h-[100px] w-full items-center justify-center rounded-[8px] border border-success'>
                     <p>Please sign in to post a comment.</p>
                      <Button
                        onClick={() => redirect('/signIn')}
                        className='h-[40px] w-[105px] bg-success text-white sm:flex'
                      >
                        SignIn
                      </Button>
                    </div>
                  </>
                )}
              </>
            )}

            <div className='mt-8'>
              <CommentLists commentLists={postData?.comments} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
