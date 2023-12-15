import { useEffect, useState } from "react";
import { Divider } from "antd";
import { optionIcon } from "~/assets/post_icons";
import NotificationItem from "./notification/NotificationItem";
import { useNavigate } from "react-router-dom";

const SideBarDefaultFrame = ({
  tabs,
  data,
  loading,
  title,
  handleItemClick,
  handleTabChange,
  handleRead,
  onClose,
}) => {
  const navigate = useNavigate();
  const [currTab, setCurrTab] = useState(tabs[0].key);

  useEffect(() => {
    handleTabChange(currTab);
  }, [currTab]);

  const handleUserClick = (e, item) => {
    e.stopPropagation();
    handleRead?.(item.id);
    item?.username && navigate(`/${item.username}`);
    onClose();
  };

  const onItemClick = (item) => {
    handleItemClick(item);
    onClose();
  }

  return (
    <>
      <div className="between-row mt-[13px]">
        <h2 className="side-bar-title">{title}</h2>
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
            onClick={() => {
              setCurrTab(tab.key);
            }}
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
              onClick={() => onItemClick(item)}
              onUserClick={(e) => handleUserClick(e, item)}
            />
          ))
        ) : (
          <NotificationItem loading={true} />
        )}
      </div>
    </>
  );
};

export default SideBarDefaultFrame;
