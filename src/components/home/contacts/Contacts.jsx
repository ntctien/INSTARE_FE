import { useContext, useState } from "react";
import { Divider } from "antd";
import ContactItem from "./ContactItem";
import Avatar from "../Avatar";
import { ReactComponent as ArrowIcon } from "../../../assets/arrow-back.svg";
import ChatBox from "./ChatBox";
import useContactList from "~/hooks/useContactList";
import { AppMenuContext } from "~/contexts/AppMenuContext";

const Contacts = () => {
  const { setNewMessage } = useContext(AppMenuContext);
  const { contactList, loading, userList, setContactList } = useContactList();
  const [currChat, setCurrChat] = useState(null);

  const handleEnterChat = (contact) => {
    setCurrChat(contact);
    setContactList((prev) =>
      prev.map((item) =>
        item.user.id === contact.user.id
          ? { ...item, message: { ...item.message, read: true } }
          : item
      )
    );
    setNewMessage(false);
  };

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
              <ArrowIcon className="arrow-icon" />
            </button>
            <div className="w-[15px] h-[15px] bg-grey rounded-full font-bold text-10 text-white flex items-center justify-center ml-[3px]">
              1
            </div>
            <Avatar width={30} ava={currChat?.user.ava} custom="ml-[10px]" />
            <h2 className="font-bold text-13 ml-[7px]">
              {currChat?.user.name ?? currChat?.user.username}
            </h2>
          </>
        ) : (
          <h2 className="font-bold text-20 ml-[23px] font-ubuntu">Contacts</h2>
        )}
      </div>
      <Divider className="my-0" />
      <div className="relative h-full flex flex-col flex-1 overflow-hidden">
        <ChatBox
          currChat={currChat}
          setContactList={setContactList}
          userList={userList}
        />
        {!currChat && (
          <div className="overflow-y-auto flex-1 pt-[8px] absolute top-0 left-0 bg-white w-full h-full">
            {loading
              ? Array.from({ length: 9 }).map((_, i) => (
                  <ContactItem key={i} loading />
                ))
              : contactList.map((c, i) => (
                  <ContactItem
                    key={i}
                    maxWidth={175}
                    item={c}
                    onClick={() => handleEnterChat(c)}
                  />
                ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
