import { useState } from "react";
import { Divider } from "antd";
import ContactItem from "./ContactItem";
import Avatar from "./Avatar";
import arrowIcon from "../../assets/arrow-back.svg";
import ChatBox from "./ChatBox";

const contacts = [
  {
    name: "Phạm Thị Thu Trang",
  },
  {
    name: "Nguyễn Trần Cẩm Tiên",
  },
  {
    name: "Nguyễn Trần Cẩm Tiên",
  },
  {
    name: "Nguyễn Trần Cẩm Tiên",
  },
  {
    name: "Nguyễn Trần Cẩm Tiên",
  },
  {
    name: "Nguyễn Trần Cẩm Tiên",
  },
  {
    name: "Nguyễn Trần Cẩm Tiên",
  },
  {
    name: "Nguyễn Trần Cẩm Tiên",
  },
  {
    name: "Nguyễn Trần Cẩm Tiên",
  },
];

const Contacts = () => {
  const [currChat, setCurrChat] = useState(null);

  return (
    <div
      className="flex-1 flex flex-col bg-white overflow-hidden"
      style={{
        borderRadius: "10px 10px 0px 10px",
        boxShadow: " 0px -2px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="h-[54px] row items-center">
        {currChat ? (
          <>
            <button className="ml-[12px]" onClick={() => setCurrChat(null)}>
              <img src={arrowIcon} alt="Back" />
            </button>
            <div className="w-[15px] h-[15px] bg-grey rounded-full font-bold text-10 text-white flex items-center justify-center ml-[3px]">
              1
            </div>
            <Avatar width={30} custom="ml-[10px]" />
            <h2 className="font-bold text-13 ml-[7px]">{currChat}</h2>
          </>
        ) : (
          <h2 className="font-bold text-20 ml-[23px] font-ubuntu">Contacts</h2>
        )}
      </div>
      <Divider className="my-0 bg-[#00000026]" />
      {currChat ? (
        <ChatBox />
      ) : (
        <div className="overflow-y-auto flex-1 pt-[8px]">
          {contacts.map((c, i) => (
            <ContactItem key={i} name={c.name} setCurrChat={setCurrChat} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Contacts;
