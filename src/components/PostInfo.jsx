import { Link } from "react-router-dom";
import Avatar from "./home/Avatar";
import { optionIcon } from "~/assets/post_icons";

const PostInfo = ({ username, time, ava, className, loading }) => {
  return (
    <div className={`row justify-between ${className}`}>
      <div className="row">
        <Link to={`/${username}`}>
          <Avatar ava={ava} loading={loading} />
        </Link>
        <Link to={`/${username}`}>
          <h5
            className={`font-semibold text-14 ml-[18px] ${
              loading && "loading-animation text-transparent"
            }`}
          >
            {loading ? "loading" : username}
          </h5>
        </Link>
        <p className="mx-[3px] mb-[3px] post-time">.</p>
        <p
          style={{ color: loading && "transparent" }}
          className={`post-time ${loading && "loading-animation"}`}
        >
          {loading ? "loading" : time}
        </p>
      </div>
      <button>
        <img src={optionIcon} alt="Other options" />
      </button>
    </div>
  );
};

export default PostInfo;
