import { useState } from "react";
import MessageDetail from "~/components/message/MessageDetail";
import ContactList from "~/components/message/ContactList";

const Message = () => {
  const [currChat, setCurrChat] = useState(null);

  return (
    <div className="bg-[#F4F4FD] h-screen flex">
      {/* Contacts */}
      <ContactList currChat={currChat} setCurrChat={setCurrChat} />
      {/* Message detail */}
      {currChat && <MessageDetail currChat={currChat} />}
    </div>
  );
};

export default Message;
