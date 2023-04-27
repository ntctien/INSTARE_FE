import { useState } from "react";
import { Divider } from "antd";
import SideBar from "../SideBar";
import { optionIcon } from "~/assets/post_icons";
import NotificationItem from "./NotificationItem";

const tabs = [
  { key: 0, title: "All" },
  { key: 1, title: "Unread" },
];

const notifications = [
  {
    username: "_ptt.chang",
    content: "commented on your post.",
    time: "Friday 11:59 AM",
    read: false
  },
  {
    username: "_ptt.chang",
    content: "liked your post.",
    time: "Friday 11:59 AM",
    read: false
  },
  {
    username: "_ptt.chang",
    content: "started following you.",
    time: "Friday 11:59 AM",
    read: false
  },
  {
    username: "_ptt.chang",
    content: "commented on your post.",
    time: "Friday 11:59 AM",
    read: true
  },
  {
    username: "_ptt.chang",
    content: "liked your post.",
    time: "Friday 11:59 AM",
    read: true
  },
  {
    username: "_ptt.chang",
    content: "started following you.",
    time: "Friday 11:59 AM",
    read: true
  },
  {
    username: "_ptt.chang",
    content: "commented on your post.",
    time: "Friday 11:59 AM",
    read: true
  },
  {
    username: "_ptt.chang",
    content: "liked your post.",
    time: "Friday 11:59 AM",
    read: true
  },
  {
    username: "_ptt.chang",
    content: "started following you.",
    time: "Friday 11:59 AM",
    read: true
  },
];

const NotificationSideBar = ({ onClose }) => {
  const [currTab, setCurrTab] = useState(0);

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
        {notifications.map((item, i) => (
          <NotificationItem key={i} {...item} />
        ))}
      </div>
    </SideBar>
  );
};

export default NotificationSideBar;
