import { LikeIcon, CommentIcon, ShareIcon } from "./icons";
import ReactionBar from "./home/post/ReactionBar";
import { REACTION_MAP } from "~/constants/reactions";

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
          <button
            onClick={liked ? () => onReact(liked) : () => onReact("LOVE")}
          >
            {liked ? (
              <img
                src={REACTION_MAP[liked].icon}
                alt={REACTION_MAP[liked].name}
              />
            ) : (
              <LikeIcon />
            )}
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
