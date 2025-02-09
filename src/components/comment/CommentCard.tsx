import { MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Default from '@/components/image/Default.png';
const CommentCard = ({ comments }: any) => {
  //const commentOfPost = comments.filter((comment: any) => comment.postId === postList.id).length;
  console.log(comments);
  return (
    <div className='h-fit w-full'>
      <div className='flex items-center mb-2'>
      <div className='flex'>
        <div className='mr-[8px] h-[30px] w-[30px] rounded-[50%] bg-gray300 overflow-hidden'>
          <Image
            className='rounded-[50%]'
            width={30}
            height={30}
            alt='avatar'
            src={comments.createdBy[0]?.avatarURL || Default.src}
          />
        </div>
        <p>{comments.createdBy[0]?.username}</p>
      </div>
      </div>
      <div className='pl-[38px]'>{comments.comment}</div>
    </div>
  );
};

export default CommentCard;
