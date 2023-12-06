import { Link } from "react-router-dom";
import Avatar from "./home/Avatar";
import { optionIcon } from "~/assets/post_icons";
import { Dropdown } from "antd";
import ReportModal from "./modal/ReportModal";
import { useState } from "react";

const postOptions = [
  {
    key: "report",
    label: <p className="px-2">Report this post</p>,
    danger: true,
  },
];

const PostInfo = ({ postId, username, time, ava, className, loading }) => {
  const [modal, setModal] = useState();

  const onOptionClick = ({ key }) => {
    switch (key) {
      case "report":
        setModal("report");
        break;

      default:
        break;
    }
  };

  const handleCancelModal = () => {
    setModal(null);
  };

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
      <Dropdown
        placement="top"
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
      <ReportModal
        postId={postId}
        open={modal === "report"}
        onCancel={handleCancelModal}
      />
    </div>
  );
};

export default PostInfo;
