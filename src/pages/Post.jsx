import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Divider, Skeleton } from "antd";
import MediaSlider from "~/components/home/media_slider/MediaSlider";
import PostInfo from "~/components/PostInfo";
import InteractBar from "~/components/InteractBar";
import Avatar from "~/components/home/Avatar";
import backIcon from "~/assets/back.svg";
import logoIcon from "~/assets/logo.png";
import CommentInput from "~/components/CommentInput";
import viewPost from "~/api/services/no-auth/viewPost";
import getDateString from "~/utils/getDateString";
import useComment from "~/hooks/useComment";
import useLike from "~/hooks/useLike";
import checkIfUserLikePost from "~/api/services/post/checkIfUserLikePost";
import PostLikeWrapper from "~/components/home/post/PostLikeWrapper";
import ShareModal from "~/components/home/post/ShareModal";

const Post = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState();
  const [userLiked, setUserLiked] = useState(false);
  const [modal, setModal] = useState(null);
  const navigate = useNavigate();
  const { postId } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const { commentInputProps, handleComment } = useComment();
  const { liked, likes, likeOpacity, handleLikeClick } = useLike(
    userLiked,
    data?._count.likes
  );
  const commentInputRef = useRef(null);

  const handleCheckIfUserLikedPost = async (postId) => {
    await checkIfUserLikePost(currentUser.token, postId)
      .then(({ data }) => setUserLiked(data))
      .catch((err) => console.log(err));
  };

  const handleViewPost = async (postId) => {
    await viewPost(postId)
      .then(({ data }) => {
        setData({
          ...data,
          mediaList: data.mediaList.map((item) => {
            return {
              url: item,
              type: item.includes("/video/") ? "video" : "image",
            };
          }),
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleCheckIfUserLikedPost(postId);
    handleViewPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  const updateComments = (commentValue) => {
    let temp = data;
    temp.comments.push({
      comment: commentValue,
      user: {
        ava: currentUser.ava,
        id: currentUser.id,
        username: currentUser.username,
      },
    });
    setData(temp);
  };

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
            handleLikeClick={() => handleLikeClick(postId)}
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
          <PostInfo
            username={data?.user.username}
            time={data?.createdAt && getDateString(data.createdAt)}
            ava={data?.user.ava}
          />
          <p className="ml-[68px] pr-[12%] text-14 w-[87%] h-[40vh]">
            {data?.caption}
          </p>
        </div>
        <Divider className="default-divider" />
        <InteractBar
          liked={liked}
          likeCount={likes}
          onCommentClick={() => commentInputRef.current?.focus()}
          onLikeClick={() => handleLikeClick(postId)}
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
