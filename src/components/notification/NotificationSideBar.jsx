import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Divider } from "antd";
import SideBar from "../SideBar";
import { optionIcon } from "~/assets/post_icons";
import NotificationItem from "./NotificationItem";
import getUserNotification from "~/api/services/interact/getUserNotification";
import readNoti from "~/api/services/interact/readNoti";

const tabs = [
  { key: 0, title: "All" },
  { key: 1, title: "Unread" },
];

const NotificationSideBar = ({ onClose }) => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [currTab, setCurrTab] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUser) return;
    const handleGetUserNotification = async () => {
      setLoading(true);
      await getUserNotification(currentUser.token)
        .then(({ data }) => setNotifications([...data]))
        .catch((err) => console.log(err));
      setLoading(false);
    };
    handleGetUserNotification();
  }, [currentUser]);

  useEffect(() => {
    if (currTab === 1) {
      setData(notifications.filter((item) => item.read === false));
    } else setData([...notifications]);
  }, [currTab, notifications]);

  const handleReadNoti = async (id) => {
    await readNoti(currentUser.token, id)
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const handleItemClick = (item) => {
    setData((prev) =>
      prev.map((d) => (d.id === item.id ? { ...d, read: true } : d))
    );
    handleReadNoti(item.id);
    if (item.postId) {
      navigate(`/post/${item.postId}`);
      onClose();
    }
  };

  const handleUserClick = (e, item) => {
    e.stopPropagation();
    setData((prev) =>
      prev.map((d) => (d.id === item.id ? { ...d, read: true } : d))
    );
    handleReadNoti(item.id);
    navigate(`/${item.interacted.username}`);
    onClose();
  };

  return (
    <SideBar onClose={onClose}>
      <div className="between-row mt-[13px]">
        <h2 className="side-bar-title">Notifications</h2>
        <button className="mr-[11px] hover-default">
          <img src={optionIcon} alt="Option" />
        </button>
      </div>
      <Divider className="mt-[11px] mb-[14px]" />
      {/* Tabs */}
      <div className="row ml-5">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            onClick={() => setCurrTab(tab.key)}
            className={`px-[10px] py-[5px] font-medium text-16 cursor-pointer hover:bg-[rgba(0,0,0,0.05)] rounded-t-5 ${
              currTab === tab.key ? "border-b-2 border-black" : "text-grey-dark"
            }`}
          >
            {tab.title}
          </div>
        ))}
      </div>
      {/* Notifications */}
      <div className="flex-1 overflow-y-auto mt-[17px]">
        {!loading ? (
          data.map((item, i) => (
            <NotificationItem
              key={i}
              item={item}
              onClick={() => handleItemClick(item)}
              onUserClick={(e) => handleUserClick(e, item)}
            />
          ))
        ) : (
          <NotificationItem loading={true} />
        )}
      </div>
    </SideBar>
  );
};

export default NotificationSideBar;
