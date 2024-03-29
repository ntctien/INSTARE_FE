import { HeartFilled } from "@ant-design/icons";

const PostLikeWrapper = ({ children, likeOpacity, handleReact }) => {
  return (
    <div onDoubleClick={handleReact} className="relative">
      {children}
      <HeartFilled
        style={{
          opacity: likeOpacity,
          transition: "opacity 0.5s ease-in-out",
        }}
        className="absolute-center text-[rgba(255,255,255,0.65)] text-[100px]"
      />
    </div>
  );
};

export default PostLikeWrapper;
