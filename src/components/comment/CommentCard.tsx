import { MessageCircle } from 'lucide-react';
const CommentCard = ({ comments }: any) => {
  //const commentOfPost = comments.filter((comment: any) => comment.postId === postList.id).length;
  console.log(comments);
  return (
    <div className='h-fit w-full'>
      <div className='flex items-center mb-2'>
        <div className='mr-[8px] h-[30px] w-[30px] rounded-[50%] bg-gray300'></div>
        {comments.createdBy}
      </div>
      <div className='pl-[38px]'>{comments.comment}</div>
    </div>
  );
};

export default CommentCard;
