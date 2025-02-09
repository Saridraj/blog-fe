import OurBlogPostCard from './OurBlogPostCard';


const OurBlogPostLists = ({ postLists}: any) => {
 console.log(postLists.length);
  return (
    <div>
      <div className='flex w-full flex-wrap'>
        {postLists.map((postList: any) => (
          
          <OurBlogPostCard
            key={postList.id}
            postList={postList}
          />
        ))}
      </div>
    </div>
  );
};

export default OurBlogPostLists;
