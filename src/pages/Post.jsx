import { useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "antd";
import MediaSlider from "~/components/home/media_slider/MediaSlider";
import useComment from "~/hooks/useComment";
import useReact from "~/hooks/useReact";
import PostLikeWrapper from "~/components/home/post/PostLikeWrapper";
import ShareModal from "~/components/home/post/ShareModal";
import usePost from "~/hooks/usePost";
import PostDetail from "~/components/home/post/PostDetail";
import PostContainer from "~/components/home/post/PostContainer";
import NavigateButton from "~/components/buttons/NavigateButton";

const Post = () => {
  const { postId } = useParams();
  const { post: data, userLiked, updateComments } = usePost(postId);
  const { commentInputProps, handleComment } = useComment();
  const { liked, likeCount, likeOpacity, handleReact } = useReact(
    userLiked,
    data?._count.likes
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modal, setModal] = useState(null);

  return (
    <PostContainer>
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
        <NavigateButton />
      </div>
      {/* Right side */}
      <PostDetail
        postHeaderData={data}
        caption={data?.caption}
        interactBarProps={{
          liked,
          likeCount,
          likes: data?.likes,
          onReact: (react) => handleReact(postId, react),
          handleShare: () => {
            setModal("share");
          },
        }}
        comments={data?.comments.toReversed()}
        commentInputProps={commentInputProps}
        handleComment={(e) => handleComment(e, postId, updateComments)}
      />
      <ShareModal
        open={modal === "share"}
        handleCancel={() => setModal(null)}
        postId={data?.id}
      />
    </PostContainer>
  );
};

export default Post;
