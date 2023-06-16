import { LikeIcon, CommentIcon, ShareIcon } from "./icons";
import LikedIcon from "./icons/LikedIcon";

const InteractBar = ({
  likeCount,
  className,
  handleShare,
  onCommentClick,
  liked,
  onLikeClick
}) => {

  return (
    <div className={className}>
      {/* Interact */}
      <div className="row gap-x-[15px] interact-bar">
        <button onClick={onLikeClick}>
          {liked ? <LikedIcon /> : <LikeIcon />}
        </button>
        <button onClick={onCommentClick}>
          <CommentIcon />
        </button>
        <button onClick={handleShare}>
          <ShareIcon />
        </button>
      </div>
      {/* Like count */}
      <p className="font-semibold text-14 mt-[10px]">{`${likeCount ?? 0} like${
        likeCount > 1 ? "s" : ""
      }`}</p>
    </div>
  );
};

export default InteractBar;
