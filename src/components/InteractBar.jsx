import { LikeIcon, CommentIcon, ShareIcon } from "./icons";
import LikedIcon from "./icons/LikedIcon";
import ReactionBar from "./home/post/ReactionBar";

const InteractBar = ({
  likeCount,
  className,
  handleShare,
  onCommentClick,
  liked,
  onReact,
  loading,
}) => {
  return (
    <div className={className}>
      {/* Interact */}
      <div className="row gap-x-[15px] interact-bar">
        <ReactionBar onReact={onReact}>
          <button onClick={() => onReact("LOVE")}>
            {liked ? <LikedIcon /> : <LikeIcon />}
          </button>
        </ReactionBar>
        <button onClick={onCommentClick}>
          <CommentIcon />
        </button>
        <button onClick={handleShare}>
          <ShareIcon />
        </button>
      </div>
      {/* Like count */}
      <p
        className={`font-semibold text-14 mt-[10px] ${
          loading && "loading-animation text-transparent w-[10%]"
        }`}
      >{`${likeCount ?? 0} like${likeCount > 1 ? "s" : ""}`}</p>
    </div>
  );
};

export default InteractBar;
