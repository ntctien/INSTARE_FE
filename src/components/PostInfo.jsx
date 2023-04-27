import Avatar from "./home/Avatar";
import { optionIcon } from "~/assets/post_icons";

const PostInfo = ({ username, time, className }) => {
  return (
    <div className={`row justify-between ${className}`}>
      <div className="row">
        <Avatar />
        <h5 className="font-semibold text-14 ml-[18px]">{username}</h5>
        <p className="mx-[3px] mb-[3px] post-time">.</p>
        <p className="post-time">{time}</p>
      </div>
      <button>
        <img src={optionIcon} alt="Other options" />
      </button>
    </div>
  );
};

export default PostInfo;
