import CommentCard from './CommentCard';

const CommentLists = ({ commentLists }: any) => {
  console.log(commentLists);
  return (
    <div>
      <div className='flex w-full flex-wrap'>
        {commentLists?.map((comments: any) => (
          <CommentCard key={comments.id} comments={comments} />
        ))}
      </div>
    </div>
  );
};

export default CommentLists;
