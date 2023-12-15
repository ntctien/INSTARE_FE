import React, { useState } from "react";
import SideBar from "../SideBar";
import SideBarDefaultFrame from "../SideBarDefaultFrame";
import { useSelector } from "react-redux";
import getPostReports from "~/api/services/report/getPostReports";
import getUserReports from "~/api/services/report/getUserReports";
import { useNavigate } from "react-router-dom";

const tabs = [
  { key: "posts", title: "Posts" },
  { key: "users", title: "Users" },
];

const ReportsSideBar = ({ onClose }) => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ type: "post", items: [] });

  const handleTabChange = (key) => {
    switch (key) {
      case "posts":
        handleGetPostReports();
        break;
      case "users":
        handleGetUserReports();
        break;

      default:
        break;
    }
  };

  const handleGetPostReports = async () => {
    setLoading(true);
    await getPostReports(currentUser.token)
      .then(({ data }) => setData({ type: "post", items: [...data] }))
      .catch((err) => console.log(err));
    setLoading(false);
  };

  const handleGetUserReports = async () => {
    setLoading(true);
    await getUserReports(currentUser.token)
      .then(({ data }) => setData({ type: "profile", items: [...data] }))
      .catch((err) => console.log(err));
    setLoading(false);
  };

  const handleItemClick = (item) => {
    if (item.postId) {
      navigate(`/report/post/${item.id}`);
    } else {
      navigate(`/report/user/${item.username}/${item.id}`)
    }
  };

  return (
    <SideBar onClose={onClose}>
      <SideBarDefaultFrame
        title={"Reports"}
        tabs={tabs}
        data={data.items.map((item) => ({
          ...item,
          ava: item.reportedUser.ava,
          username: item.reportedUser.username,
          message: `'s ${data.type} was reported by ${item._count.reportReason} user(s)`,
          createdAt: item.updatedAt,
          read: item.resolved,
        }))}
        loading={loading}
        handleTabChange={handleTabChange}
        onClose={onClose}
        handleItemClick={handleItemClick}
      />
    </SideBar>
  );
};

export default ReportsSideBar;
