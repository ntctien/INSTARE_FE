import { Link, useLocation, useNavigate } from "react-router-dom";
import Avatar from "../Avatar";
import { optionIcon } from "~/assets/post_icons";
import { Dropdown, Modal, message } from "antd";
import ReportModal from "../../modal/ReportModal";
import { useState } from "react";
import WarningModal from "../../modal/WarningModal";
import deletePost from "~/api/services/post/deletePost";
import { useSelector } from "react-redux";
import getDateString from "~/utils/getDateString";
import CloseModal from "../../modal/CloseModal";
import TaggedUsersModal from "./TaggedUsersModal";

const PostInfo = ({ post, loading, className, updatePostFeed }) => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const [modal, setModal] = useState();
  const [deleting, setDeleting] = useState(false);

  const postOptions =
    currentUser?.username === post?.user.username
      ? [
          {
            key: "delete",
            label: <p className="px-2">Delete post</p>,
            danger: true,
          },
        ]
      : [
          {
            key: "report",
            label: <p className="px-2">Report this post</p>,
            danger: true,
          },
        ];

  const onOptionClick = ({ key }) => {
    switch (key) {
      case "report":
        setModal("report");
        break;
      case "delete":
        setModal("delete");
        break;
      default:
        break;
    }
  };

  const handleCancelModal = () => {
    setModal(null);
  };

  const handleDeletePost = async () => {
    setDeleting(true);
    try {
      await deletePost(currentUser.token, post?.id);
      updatePostFeed?.(post?.id);
      message.success("You have deleted post!");
      if (location.pathname !== "/") navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setDeleting(false);
      setModal(null);
    }
  };

  return (
    <>
      <div className={`row justify-between ${className}`}>
        <div className="row">
          <Link to={`/${post?.user.username}`}>
            <div className="row">
              <Avatar ava={post?.user.ava} loading={loading} />
              <h5
                className={`text-username ml-[18px] ${
                  loading && "loading-animation text-transparent"
                }`}
              >
                {loading ? "loading" : post?.user.username}
              </h5>
            </div>
          </Link>
          {post?.tags.length > 0 && (
            <p>
              &nbsp;is with&nbsp;
              <Link
                to={`/${post?.tags[0].user.username}`}
                className="text-username"
              >{`@${post?.tags[0].user.username}`}</Link>
              {post?.tags.length > 1 && (
                <>
                  &nbsp;and&nbsp;
                  <span
                    onClick={() => setModal("tagged")}
                    className="text-username"
                  >
                    {post.tags.length - 1} people
                  </span>
                </>
              )}
            </p>
          )}
          <p className="mx-[3px] mb-[3px] post-time">.</p>
          <p
            style={{ color: loading && "transparent" }}
            className={`post-time ${loading && "loading-animation"}`}
          >
            {loading
              ? "loading"
              : post?.createdAt && getDateString(post.createdAt)}
          </p>
        </div>
        <Dropdown
          placement={location.pathname.includes("post") ? "bottomRight" : "top"}
          arrow
          trigger={["click"]}
          menu={{
            items: postOptions,
            onClick: onOptionClick,
          }}
        >
          <button>
            <img src={optionIcon} alt="Other options" />
          </button>
        </Dropdown>
      </div>
      <ReportModal
        postId={post?.id}
        open={modal === "report"}
        onCancel={handleCancelModal}
      />
      <WarningModal
        title={"You want to delete this post?"}
        subtitle={"People won’t be able to see this post again"}
        open={modal === "delete"}
        loading={deleting}
        onCancel={handleCancelModal}
        onPrimaryBtnClick={handleDeletePost}
        primaryBtnLabel={"Confirm"}
        secondaryBtnLabel={"Cancel"}
      />
      <TaggedUsersModal
        users={post?.tags.map((tag) => ({
          id: tag.user.id,
          username: tag.user.username,
        }))}
        open={modal === "tagged"}
        onCancel={handleCancelModal}
      />
    </>
  );
};

export default PostInfo;
