import { LikeIcon, CommentIcon, ShareIcon } from "./icons";

const InteractBar = ({ likeCount, className, handleShare, onCommentClick }) => {
  return (
    <div className={className}>
      {/* Interact */}
      <div className="row gap-x-[15px] interact-bar">
        <button>
          <LikeIcon />
        </button>
        <button onClick={onCommentClick}>
          <CommentIcon />
        </button>
        <button onClick={handleShare}>
          <ShareIcon />
        </button>
      </div>
      {/* Like count */}
      <p className="font-semibold text-14 mt-[10px]">{`${likeCount} like${
        likeCount > 1 ? "s" : ""
      }`}</p>
    </div>
  );
};

export default InteractBar;
