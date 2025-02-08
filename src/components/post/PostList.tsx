import PostCard from './PostCard';


const PostLists = ({ postLists}: any) => {
 
  return (
    <div>
      <div className='flex w-full flex-wrap'>
        {postLists?.map((postList: any) => (
          
          <PostCard
            key={postList.id}
            postList={postList}
            ourBlogList={true}
          />
        ))}
      </div>
    </div>
  );
};

export default PostLists;
