import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import TaggedUsersModal from "./TaggedUsersModal";
import { Emoji } from "emoji-picker-react";

const PostInfo = ({ username, ava, tags, time, emotion, loading }) => {
  const [viewTaggedUsers, setViewTaggedUsers] = useState(false);

  return (
    <>
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
                    <span
                      onClick={() => setViewTaggedUsers(true)}
                      className="text-username"
                    >
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
          {emotion && (
            <div
              className={`row gap-x-1 mt-1 emotion-item ${
                loading && "loading-animation"
              }`}
            >
              <Emoji emojiStyle="native" unified={emotion.unified} size={20} />
              <p className={`text-14 ${loading && "text-transparent"}`}>
                {"Feeling " + emotion.name}
              </p>
            </div>
          )}
        </div>
      </div>
      <TaggedUsersModal
        users={tags?.map((tag) => ({
          ...tag.user,
        }))}
        open={viewTaggedUsers}
        onCancel={() => setViewTaggedUsers(false)}
      />
    </>
  );
};

export default PostInfo;
