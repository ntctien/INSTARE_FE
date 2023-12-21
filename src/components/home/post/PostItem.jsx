import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Divider } from "antd";
import MediaSlider from "../media_slider/MediaSlider";
import PostHeader from "~/components/home/post/PostHeader";
import InteractBar from "~/components/InteractBar";
import CommentInput from "~/components/CommentInput";
import useComment from "~/hooks/useComment";
import useReact from "~/hooks/useReact";
import PostLikeWrapper from "./PostLikeWrapper";

const PostItem = ({ post, loading, handleShare, updatePostFeed }) => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { commentInputProps, handleComment } = useComment();
  const { liked, likes, likeOpacity, handleReact } = useReact(
    post?.liked,
    post?._count.likes
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [comments, setCommments] = useState([]);

  const updateComments = (commentValue) => {
    setCommments((prev) => [...prev, commentValue]);
  };

  return (
    <div className="w-[800px] bg-[#D9D9D926] rounded-10 pb-[9px] post">
      {/* User */}
      <PostHeader
        post={post}
        loading={loading}
        className={"p-[20px]"}
        updatePostFeed={updatePostFeed}
      />
      {/* Image or video */}
      <PostLikeWrapper
        likeOpacity={likeOpacity}
        handleReact={() => handleReact(post.id, "LOVE")}
      >
        <div onClick={() => navigate(`/post/${post.id}`)}>
          <MediaSlider
            mediaList={post?.mediaList}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            dots
            loading={loading}
            autoPlay={false}
          />
        </div>
      </PostLikeWrapper>
      <div className="px-[20px] mt-[10px]">
        <InteractBar
          likeCount={likes}
          loading={loading}
          handleShare={handleShare}
          onCommentClick={() => navigate(`/post/${post?.id}`)}
          liked={liked}
          onReact={(react) => handleReact(post?.id, react)}
        />
        {/* Content */}
        <p
          className={`mt-[7px] text-14 ${
            loading && "loading-animation text-transparent"
          }`}
        >
          <Link to={`/${post?.user.username}`}>
            <span className="font-semibold">
              {loading ? "loading" : post?.user.username}
            </span>
          </Link>
          {loading ? "loading" : " " + (post?.caption || "")}
        </p>
        {/* Comments */}
        <Link to={`/post/${post?.id}`}>
          <p className="text-14 text-black50 mt-[7px] hover:brightness-125">
            View all comments
          </p>
        </Link>
        {/* Own comment */}
        {comments.map((comment, i) => (
          <p key={i} className="mt-[7px] text-14">
            <Link to={`/${currentUser.username}`}>
              <span className="font-semibold">{currentUser.username}</span>
            </Link>
            {" " + comment}
          </p>
        ))}
        <Divider className="mt-[10px] mb-[6px]" />
        <form onSubmit={(e) => handleComment(e, post?.id, updateComments)}>
          <CommentInput {...commentInputProps} />
        </form>
      </div>
    </div>
  );
};

export default PostItem;
