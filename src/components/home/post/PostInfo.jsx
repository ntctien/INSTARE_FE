import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import { loveIcon } from "~/assets/react_icons";

const PostInfo = ({ username, ava, tags, time, loading, showTagList }) => {
  return (
    <div className="row">
      {/* Avatar */}
      <Link to={`/${username}`}>
        <Avatar ava={ava} loading={loading} />
      </Link>
      <div className="ml-[18px]">
        {/* Username with tags and time*/}
        <div className="row">
          <Link to={`/${username}`}>
            <h5
              className={`text-username ${
                loading && "loading-animation text-transparent"
              }`}
            >
              {loading ? "loading" : username}
            </h5>
          </Link>
          {tags?.length > 0 && (
            <p>
              &nbsp;is with&nbsp;
              <Link
                to={`/${tags[0].user.username}`}
                className="text-username"
              >{`@${tags[0].user.username}`}</Link>
              {tags?.length > 1 && (
                <>
                  &nbsp;and&nbsp;
                  <span onClick={showTagList} className="text-username">
                    {tags?.length - 1} people
                  </span>
                </>
              )}
            </p>
          )}
          {time && (
            <>
              <p className="mx-[3px] mb-[3px] post-time">.</p>
              <p
                style={{ color: loading && "transparent" }}
                className={`post-time ${loading && "loading-animation"}`}
              >
                {loading ? "loading" : time}
              </p>
            </>
          )}
        </div>
        {/* Emotion */}
        <div className={`row gap-x-1 mt-1 ${loading && "loading-animation"}`}>
          <div className="w-5 h-5">
            {!loading && <img src={loveIcon} alt="Emotion" />}
          </div>
          <p className={`text-14 ${loading && "text-transparent"}`}>
            Feeling cute
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
