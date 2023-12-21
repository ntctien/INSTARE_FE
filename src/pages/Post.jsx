import { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Divider, Skeleton } from "antd";
import MediaSlider from "~/components/home/media_slider/MediaSlider";
import PostHeader from "~/components/home/post/PostHeader";
import InteractBar from "~/components/InteractBar";
import Avatar from "~/components/home/Avatar";
import backIcon from "~/assets/back.svg";
import logoIcon from "~/assets/logo.png";
import CommentInput from "~/components/CommentInput";
import useComment from "~/hooks/useComment";
import useReact from "~/hooks/useReact";
import PostLikeWrapper from "~/components/home/post/PostLikeWrapper";
import ShareModal from "~/components/home/post/ShareModal";
import usePost from "~/hooks/usePost";

const Post = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { post: data, userLiked, updateComments } = usePost(postId);
  const { commentInputProps, handleComment } = useComment();
  const { liked, likes, likeOpacity, handleReact } = useReact(
    userLiked,
    data?._count.likes
  );
  const commentInputRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modal, setModal] = useState(null);

  return (
    <div
      className="flex h-screen post-detail overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0%, rgba(150, 202, 247, 0.15) 0.01%, rgba(191, 178, 243, 0.15) 100%), #FFFFFF",
      }}
    >
      {/* Left side */}
      <div className="w-[66vw] relative">
        {/* Image or video */}
        {data?.mediaList ? (
          <PostLikeWrapper
            likeOpacity={likeOpacity}
            handleReact={() => handleReact(postId)}
          >
            <MediaSlider
              mediaList={data.mediaList}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
            />
          </PostLikeWrapper>
        ) : (
          <Skeleton.Image
            style={{ width: "100%", height: "100%" }}
            className="bg-[#D9D9D933] animate-pulse"
          />
        )}
        {/* Navigate */}
        <div className="absolute top-[17px] left-[15px] row gap-x-[15px]">
          <button onClick={() => navigate(-1)} className="hover-default">
            <img src={backIcon} alt="Back" />
          </button>
          <Link to={"/"}>
            <img src={logoIcon} alt="Logo" className="w-[50px]" />
          </Link>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1 bg-[#F4F4FD] flex flex-col">
        {/* Content */}
        <div className="p-5">
          <PostHeader post={data} />
          <p className="ml-[68px] pr-[12%] text-14 w-[87%] h-[40vh] mt-2">
            {data?.caption}
          </p>
        </div>
        <Divider className="default-divider" />
        <InteractBar
          liked={liked}
          likeCount={likes}
          onCommentClick={() => commentInputRef.current?.focus()}
          onReact={(react) => handleReact(postId, react)}
          handleShare={() => {
            setModal("share");
          }}
          className={"p-[17px]"}
        />
        {/* Comment section */}
        <div className="flex flex-col flex-1 gap-y-5 px-[17px] overflow-y-auto">
          {data?.comments.toReversed().map((comment, i) => (
            <div key={i} className="row gap-x-[18px]">
              <Link to={`/${comment.user.username}`}>
                <Avatar ava={comment.user.ava} />
              </Link>
              <p className="text-14 flex-1">
                <Link to={`/${comment.user.username}`}>
                  <span className="font-semibold">{comment.user.username}</span>
                </Link>{" "}
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
        <Divider className="default-divider" />
        <form
          onSubmit={(e) => handleComment(e, postId, updateComments)}
          className="px-[17px] pt-[6px] pb-[9px] bg-[#EDF1F8]"
        >
          <CommentInput inputRef={commentInputRef} {...commentInputProps} />
        </form>
      </div>
      <ShareModal
        open={modal === "share"}
        handleCancel={() => setModal(null)}
        postId={data?.id}
      />
    </div>
  );
};

export default Post;
