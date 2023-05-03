import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import Avatar from "../home/Avatar";
import infoIcon from "~/assets/info.svg";
import ChatBox from "../home/contacts/ChatBox";
import WarningModal from "../modal/WarningModal";

const MessageDetail = () => {
  const [warning, setWarning] = useState(null);

  const userOptions = [
    {
      key: "profile",
      label: (
        <Link to={"/username"}>
          <p className="user-option-default">View profile</p>
        </Link>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "delete",
      label: (
        <p
          onClick={() =>
            setWarning({ title: "You want to delete chat history?" })
          }
          className="user-option-danger"
        >
          Delete chat
        </p>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "block",
      label: (
        <p
          onClick={() =>
            setWarning({
              title: "You want to block this user?",
              subtitle:
                "This user still can view your profile. You can unblock anytime.",
            })
          }
          className="user-option-danger"
        >
          Block
        </p>
      ),
    },
  ];

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
      {/* Warning modal */}
      <WarningModal
        open={warning != null}
        onCancel={() => setWarning(null)}
        {...warning}
      />
    </div>
  );
};

export default MessageDetail;
