import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import getUserNotification from "~/api/services/interact/getUserNotification";
import readNoti from "~/api/services/interact/readNoti";
import SideBarDefaultFrame from "../SideBarDefaultFrame";

const tabs = [
  { key: 0, title: "All" },
  { key: 1, title: "Unread" },
];

const NotificationSideBar = ({ onClose }) => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
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

  useEffect(()=>{
    if (notifications.length) {
      handleTabChange(0);
    }
  },[notifications])

  const handleTabChange = (key) => {
    switch (key) {
      case 1:
        setData(notifications.filter((item) => item.read === false));
        break;
      case 0:
        setData([...notifications]);
        break;
      default:
        break;
    }
  };

  const handleReadNoti = async (id) => {
    setData((prev) =>
      prev.map((d) => (d.id === id ? { ...d, read: true } : d))
    );
    await readNoti(currentUser.token, id)
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const handleItemClick = (item) => {
    handleReadNoti(item.id);
    if (item.postId) {
      navigate(`/post/${item.postId}`);
    }
    else {
      navigate(`/${item.interacted.username}`)
    }
  };

  return (
    <SideBar onClose={onClose}>
      <SideBarDefaultFrame
        title={"Notifications"}
        tabs={tabs}
        data={data.map((item) => ({
          ...item,
          ava: item.interacted.ava,
          username: item.interacted.username,
        }))}
        loading={loading}
        handleTabChange={handleTabChange}
        onClose={onClose}
        handleItemClick={handleItemClick}
        handleRead={handleReadNoti}
      />
    </SideBar>
  );
};

export default NotificationSideBar;
