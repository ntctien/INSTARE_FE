import PostItem from "./PostItem";

const PostFeed = () => {
  return (
    <div className="mt-[33px] flex flex-col gap-y-[15px]">
      <PostItem />
      <PostItem />
    </div>
  );
};

export default PostFeed;
