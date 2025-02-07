'use client';
import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import NavBar from '@/components/layout/NavBar';
import SideBar from '@/components/layout/SideBar';
import { Input } from '@/components/ui/Input';
import { ArrowLeft } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import CommentLists from '@/components/comment/CommentList';
import { redirect } from 'next/navigation';
export default function PostDescription({
  params,
}: {
  params: { postId: number };
}) {
  const post = [
    {
      id: 1,
      topic: '1 The Beginning of the End of the World',
      content:
        'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer sadsadsd sdasdssadsadsd',
      community: 'History',
    },
    {
      id: 2,
      topic: '2 The Beginning of the End of the World',
      content:
        'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer sadsadsd sdasdssadsadsd',
      community: 'Food',
    },
    {
      id: 3,
      topic: '3 The Beginning of the End of the World',
      content:
        'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer sadsadsd sdasdssadsadsd',
      community: 'History',
    },
    {
      id: 4,
      topic: '4 The Beginning of the End of the World',
      content:
        'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer sadsadsd sdasdssadsadsd',
      community: 'Pets',
    },
  ];

  const comments = [
    {
      id: 1,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username',
      postId: 1,
    },
    {
      id: 2,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username',
      postId: 1,
    },
    {
      id: 3,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username',
      postId: 2,
    },
    {
      id: 4,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username',
      postId: 3,
    },
    {
      id: 5,
      comment:
        'tis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
      createdBy: 'username',
      postId: 2,
    },
  ];

  const posts = post.map((p) => ({
    ...p,
    comments: comments.filter((c) => c.postId === p.id), // Attach matching comments
  }));

  const postData = posts.find((p) => p.id == Number(params.postId));

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
                <div className='mr-[8px] h-[30px] w-[30px] rounded-[50%] bg-gray300'></div>
                <p>username</p>
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
                <MessageCircle className='w-[16px] mr-1' />
                {postData?.comments.length} comments
              </div>
            </div>
            <div className='mt-8'>
              <Button className='border border-success text-success'>
                Add Comments
              </Button>
            </div>
            <div className='mt-8'>
              <CommentLists commentLists={postData?.comments} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
