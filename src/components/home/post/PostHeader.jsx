import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Dropdown, message } from "antd";
import ReportModal from "../../modal/ReportModal";
import WarningModal from "../../modal/WarningModal";
import deletePost from "~/api/services/post/deletePost";
import getDateString from "~/utils/getDateString";
import { optionIcon } from "~/assets/post_icons";
import PostInfo from "./PostInfo";

const PostHeader = ({ post, loading, className, updatePostFeed }) => {
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
        <PostInfo
          username={post?.user.username}
          ava={post?.user.ava}
          tags={post?.tags}
          time={post?.createdAt && getDateString(post.createdAt)}
          loading={loading}
        />
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
    </>
  );
};

export default PostHeader;
