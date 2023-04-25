import { likeIcon, commentIcon, shareIcon } from "~/assets/post_icons";

const InteractBar = ({ likeCount, className }) => {
  return (
    <div className={className}>
      {/* Interact */}
      <div className="row gap-x-[15px]">
        <button>
          <img src={likeIcon} alt="Like" />
        </button>
        <button>
          <img src={commentIcon} alt="Comment" />
        </button>
        <button>
          <img src={shareIcon} alt="Share" />
        </button>
      </div>
      {/* Like count */}
      <p className="font-semibold text-14 mt-[10px]">{likeCount} likes</p>
    </div>
  );
};

export default InteractBar;
