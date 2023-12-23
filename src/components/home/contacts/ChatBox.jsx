import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import ChatInput from "./ChatInput";
import ChatTime from "./ChatTime";
import enterConversation from "~/api/services/chat/enterConversation";
import { WebsocketContext } from "~/contexts/WebsocketContext";
import dayjs from "dayjs";
import getMessageDateString from "~/utils/getMessageDateString";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { AppMenuContext } from "~/contexts/AppMenuContext";
import { useLocation } from "react-router-dom";

const ChatBox = ({ currChat, setContactList, userList }) => {
  const { currentUser } = useSelector((state) => state.user);
  const msgContainerRef = useRef(null);
  const { socket, emit } = useContext(WebsocketContext);
  const { setNewMessage } = useContext(AppMenuContext);
  const location = useLocation();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateContactList = (result) => {
    setContactList((prev) => [
      {
        ...userList.find((item) => item.user.id === result.senderId),
        message: {
          message: result.message,
          createdAt: result.createdAt,
          read: !currChat
            ? false
            : currChat.user.id === result.senderId
            ? true
            : false,
        },
      },
      ...prev.filter((item) => item.user.id !== result.senderId),
    ]);
  };

  const updateAppMenu = () => {
    if (!location.pathname.includes("/message")) {
      setNewMessage(true);
    }
  };

  useEffect(() => {
    if (!socket) return;
    socket.on("onMessage", (data) => {
      if (currChat && data.senderId === currChat.user.id) {
        setMessages((prev) => [...prev, data]);
      }
      updateContactList(data);
      updateAppMenu();
    });

    return () => {
      socket.off("onMessage");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, userList, currChat]);

  useEffect(() => {
    if (!currentUser) return;
    if (!currChat?.message) return;

    const handleEnterConversation = async () => {
      setLoading(true);
      await enterConversation(currentUser.token, currChat.user.id)
        .then(({ data }) => {
          setMessages([...data.toReversed()]);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    };

    handleEnterConversation();
  }, [currChat, currentUser]);

  useEffect(() => {
    const msgContainer = msgContainerRef.current;
    if (!msgContainer) return;
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }, [msgContainerRef, messages]);

  const handleSendMessage = () => {
    if (!message) return;
    emit("message", {
      userId: currChat.user.id,
      message: message,
    });
    setMessage("");
    const newMessage = {
      createdAt: Date(),
      message: message,
      senderId: currentUser.id,
    };
    setMessages((prev) => [...prev, newMessage]);
    updateContactList({ ...newMessage, senderId: currChat.user.id });
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Messages */}
      {!loading ? (
        <div
          ref={msgContainerRef}
          className="px-2 pb-[12px] flex flex-col overflow-y-auto flex-1"
        >
          {messages.map((message, i) => (
            <Fragment key={i}>
              {(i === 0 ||
                dayjs(message.createdAt).diff(
                  dayjs(messages[i - 1].createdAt),
                  "minute"
                ) > 10) && (
                <ChatTime time={getMessageDateString(message.createdAt)} />
              )}
              <Message
                fromSelf={message.senderId === currentUser?.id}
                ava={currChat?.user.ava}
                message={message}
                sameMoment={
                  i !== messages.length - 1 &&
                  messages[i + 1].senderId === message.senderId &&
                  dayjs(messages[i + 1].createdAt).diff(
                    dayjs(message.createdAt),
                    "minute"
                  ) < 5
                }
                topOfMoment={
                  i === 0 ||
                  dayjs(message.createdAt).diff(
                    dayjs(messages[i - 1].createdAt),
                    "minute"
                  ) >= 5 ||
                  messages[i - 1].senderId !== message.senderId
                }
              />
            </Fragment>
          ))}
        </div>
      ) : (
        <div className="flex-1 center">
          <Spin
            indicator={
              <LoadingOutlined
                style={{ color: "#BFB2F3", fontSize: 35 }}
                spin
              />
            }
          />
        </div>
      )}
      {/* Chat input */}
      <ChatInput
        value={message}
        onChange={setMessage}
        sendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatBox;
