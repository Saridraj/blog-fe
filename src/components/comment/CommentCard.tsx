import Image from 'next/image';
import Default from '@/components/image/Default.png';
const CommentCard = ({ comments }: any) => {
  return (
    <div className='mt-4 h-fit w-full'>
      <div className='mb-2 flex items-center'>
        <div className='flex'>
          <div className='mr-[8px] h-[30px] w-[30px] overflow-hidden rounded-[50%] bg-gray300'>
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
