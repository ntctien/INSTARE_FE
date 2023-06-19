import MessageDetail from "~/components/message/MessageDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContactList from "~/components/message/ContactList";
import useContactList from "~/hooks/useContactList";

const Message = () => {
  const { userId } = useParams();
  const {
    contactList,
    loading,
    userList,
    setContactList,
  } = useContactList();
  const [currChat, setCurrChat] = useState(null);

  useEffect(() => {
    if (userId) {
      const contact = userList.find((item) => item.user.id === userId);
      if (!contact) return;
      setCurrChat(contact);
      setContactList((prev) =>
        prev.map((item) =>
          item.user.id === userId
            ? { ...item, message: { ...item.message, read: true } }
            : item
        )
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, userList]);

  return (
    <div className="bg-[#F4F4FD] h-screen flex">
      {/* Contacts */}
      <ContactList contactList={contactList} loading={loading} />
      {/* Message detail */}
      <MessageDetail
        currChat={currChat}
        setContactList={setContactList}
        userList={userList}
      />
    </div>
  );
};

export default Message;
