import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Divider } from "antd";
import MediaSlider from "../media_slider/MediaSlider";
import PostInfo from "~/components/PostInfo";
import InteractBar from "~/components/InteractBar";
import CommentInput from "~/components/CommentInput";
import getDateString from "~/utils/getDateString";
import useComment from "~/hooks/useComment";
import useLike from "~/hooks/useLike";
import PostLikeWrapper from "./PostLikeWrapper";

const PostItem = ({ handleShare, post }) => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { commentInputProps, handleComment } = useComment();
  const { liked, likes, likeOpacity, handleLikeClick } = useLike(
    post.liked,
    post._count.likes
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [comments, setCommments] = useState([]);

  const updateComments = (commentValue) => {
    setCommments((prev) => [...prev, commentValue]);
  };

  return (
    <div className="w-[800px] bg-[#D9D9D926] rounded-10 pb-[9px] post">
      {/* User */}
      <PostInfo
        username={post?.user.username}
        time={post?.createdAt && getDateString(post.createdAt)}
        ava={post?.user.ava}
        className={"p-[20px]"}
      />
      {/* Image or video */}
      <PostLikeWrapper
        likeOpacity={likeOpacity}
        handleLikeClick={() => handleLikeClick(post.id)}
      >
        <MediaSlider
          mediaList={post.mediaList}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          dots
        />
      </PostLikeWrapper>
      <div className="px-[20px] mt-[10px]">
        <InteractBar
          likeCount={likes}
          handleShare={handleShare}
          onCommentClick={() => navigate(`/post/${post.id}`)}
          liked={liked}
          onLikeClick={() => handleLikeClick(post.id)}
        />
        {/* Content */}
        <p className="mt-[7px] text-14">
          <Link to={`/${post?.user.username}`}>
            <span className="font-semibold">{post?.user.username}</span>
          </Link>
          {" " + post.caption}
        </p>
        {/* Comments */}
        <Link to={`/post/${post.id}`}>
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
        <form onSubmit={(e) => handleComment(e, post.id, updateComments)}>
          <CommentInput {...commentInputProps} />
        </form>
      </div>
    </div>
  );
};

export default PostItem;
