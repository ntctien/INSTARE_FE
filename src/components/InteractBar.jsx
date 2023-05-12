import { LikeIcon, CommentIcon, ShareIcon } from './icons';

const InteractBar = ({ likeCount, className, handleShare }) => {
  return (
    <div className={className}>
      {/* Interact */}
      <div className="row gap-x-[15px] interact-bar">
        <button>
          <LikeIcon/>
        </button>
        <button>
          <CommentIcon/>
        </button>
        <button onClick={handleShare}>
          <ShareIcon/>
        </button>
      </div>
      {/* Like count */}
      <p className="font-semibold text-14 mt-[10px]">{likeCount} likes</p>
    </div>
  );
};

export default InteractBar;
