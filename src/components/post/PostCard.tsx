'use client';
import { MessageCircle} from 'lucide-react';
import { redirect } from 'next/navigation';
const PostCard = ({ postList}: any) => {
    //const commentOfPost = comments.filter((comment: any) => comment.postId === postList.id).length;
    
    return (
        <div  onClick={() => redirect(`/postDetail/${postList.id}`)} className='h-[200px] w-full p-[20px] cursor-pointer'>
            <div className='flex h-[31px] w-full items-center'>
                <div className='mr-[8px] h-[30px] w-[30px] rounded-[50%] bg-gray300'></div>
                <p>username</p>
            </div>
            <div className='mt-[8px] h-[24px] w-full'>
                <div className='flex h-[24px] w-fit items-center rounded-[16px] bg-[#f3f3f3] px-2'>
                    <p className='text-[12px]'>{postList.community}</p>
                </div>
            </div>
            <div className='mt-[8px] h-[24px] w-full'>
                <p className='text-[16px] truncate font-semibold'>
                {postList.topic}
                </p>
            </div>
            <div className='h-[30px] w-full overflow-hidden'>
                <p className='h-[30px] w-full text-ellipsis text-[12px] leading-[14px] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]'>
                {postList.content}
                </p>
            </div>
            <div className='mt-[10px] flex h-[24px] w-full text-gray300'>
                <MessageCircle className='w-[16px]' />  {postList.comments.length} comments
            </div>
        </div>
    );
};

export default PostCard;
