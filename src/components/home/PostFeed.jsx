import Post from "./Post";

const PostFeed = () => {
  return (
    <div className="mt-[33px] h-full flex flex-col gap-y-[15px]">
      <Post/>
      <Post/>
    </div>
  );
};

export default PostFeed;
