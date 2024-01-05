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
  likes,
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
      <div className="row gap-x-2 mt-[10px]">
        {!!likes?.length && (
          <div className="row gap-x-[2px]">
            {Array.from(new Set(likes.map((reaction) => reaction.react)))?.map(
              (reaction, i) => (
                <img
                  key={i}
                  src={REACTION_MAP[reaction].icon}
                  alt={REACTION_MAP[reaction].name}
                  className="w-5"
                />
              )
            )}
          </div>
        )}
        {likeCount != null && (
          <p
            className={`font-semibold text-14 ${
              loading && "loading-animation text-transparent w-[10%]"
            }`}
          >{`${likeCount} like${likeCount > 1 ? "s" : ""}`}</p>
        )}
      </div>
    </div>
  );
};

export default InteractBar;
