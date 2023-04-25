import { Dropdown } from "antd";
import Avatar from "../home/Avatar";
import infoIcon from "~/assets/info.svg";
import ChatBox from "../home/contacts/ChatBox";

const userOptions = [
  {
    key: "profile",
    label: (
      <p className="user-option-default">
        View profile
      </p>
    ),
  },
  {
    type: 'divider',
  },
  {
    key: "delete",
    label: (
      <p className="user-option-danger">
        Delete chat
      </p>
    ),
  },
  {
    type: 'divider',
  },
  {
    key: "block",
    label: (
      <p className="user-option-danger">
        Block
      </p>
    ),
  },
];

const MessageDetail = () => {
  return (
    <div className="flex-1 flex flex-col">
      {/* User info */}
      <div className="bg-[#F9F7FE] w-full h-[70px] between-row pl-[25px] pr-[15px] border-b-1 border-black15">
        <div className="row gap-x-5">
          <Avatar />
          <div>
            <h2 className="font-bold text-16">Họ Và Tên</h2>
            <h3 className="text-13 mt-[5px]">username</h3>
          </div>
        </div>
        <Dropdown arrow menu={{ items: userOptions }}>
          <button>
            <img src={infoIcon} alt="Info" />
          </button>
        </Dropdown>
      </div>
      {/* Chat */}
      <ChatBox />
    </div>
  );
};

export default MessageDetail;
