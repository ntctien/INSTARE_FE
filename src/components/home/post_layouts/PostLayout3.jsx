import PostLayout from "./PostLayout";

const PostLayout3 = ({ mediaList }) => {
  return (
    <PostLayout
      mediaList={mediaList}
      layout="grid grid-cols-2 grid-rows-2"
      imageClassName="aspect-[4/3]"
    />
  );
};

export default PostLayout3;
