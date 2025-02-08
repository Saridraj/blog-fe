'use client';
import { MessageCircle } from 'lucide-react';
import { redirect } from 'next/navigation';
import Image from 'next/image';
const PostCard = ({ postList }: any) => {
  console.log(postList);
  return (
    <div
      onClick={() => redirect(`/postDetail/${postList.id}`)}
      className='h-[200px] w-full cursor-pointer p-[20px]'
    >
      <div className='flex'>
        <div className='mr-[8px] h-[30px] w-[30px] rounded-[50%] bg-gray300'>
          <Image
            className='rounded-[50%]'
            width={30}
            height={30}
            alt='avatar'
            src={postList.createdBy[0]?.avatarURL}
          />
        </div>
        <p>{postList.createdBy[0]?.username}</p>
      </div>
      <div className='mt-[8px] h-[24px] w-full'>
        <div className='flex h-[24px] w-fit items-center rounded-[16px] bg-[#f3f3f3] px-2'>
          <p className='text-[12px]'>{postList.community}</p>
        </div>
      </div>
      <div className='mt-[8px] h-[24px] w-full'>
        <p className='truncate text-[16px] font-semibold'>{postList.topic}</p>
      </div>
      <div className='h-[30px] w-full overflow-hidden'>
        <p className='h-[30px] w-full text-ellipsis text-[12px] leading-[14px] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]'>
          {postList.content}
        </p>
      </div>
      <div className='mt-[10px] flex h-[24px] w-full text-gray300'>
        <MessageCircle className='w-[16px]' /> {postList.comments.length}{' '}
        comments
      </div>
    </div>
  );
};

export default PostCard;
