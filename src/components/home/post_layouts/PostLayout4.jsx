import PostLayout from "./PostLayout";

const PostLayout4 = ({ mediaList }) => {
  return (
    <PostLayout
      mediaList={mediaList}
      layout="grid grid-rows-2 grid-cols-3"
      getMediaContainerClassName={(i) =>
        i === 0 ? "col-span-3" : "overflow-hidden"
      }
    />
  );
};

export default PostLayout4;
