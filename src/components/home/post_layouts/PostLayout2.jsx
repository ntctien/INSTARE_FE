import PostLayout from "./PostLayout";

const PostLayout2 = ({ mediaList }) => {
  return (
    <PostLayout
      mediaList={mediaList}
      layout="grid grid-cols-2 grid-rows-3"
      getMediaContainerClassName={(i) =>
        i === 0 ? "row-span-3" : "overflow-hidden"
      }
    />
  );
};

export default PostLayout2;
