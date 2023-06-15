import { Link } from "react-router-dom";
import Avatar from "./home/Avatar";
import { optionIcon } from "~/assets/post_icons";

const PostInfo = ({ username, time, ava, className }) => {
  return (
    <div className={`row justify-between ${className}`}>
      <div className="row">
        <Link to={`/${username}`}>
          <Avatar ava={ava}/>
        </Link>
        <Link to={`/${username}`}>
          <h5 className="font-semibold text-14 ml-[18px]">{username}</h5>
        </Link>
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
