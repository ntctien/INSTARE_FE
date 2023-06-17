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

const ChatBox = ({ currChat }) => {
  const { currentUser } = useSelector((state) => state.user);
  const socket = useContext(WebsocketContext);
  const msgContainerRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    socket.on("connect");
    socket.on("onMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("onMessage");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    if (!currChat.message) return;

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
    socket.emit("message", {
      userId: currChat.user.id,
      message: message,
    });
    setMessage("");
    setMessages((prev) => [
      ...prev,
      {
        createdAt: Date(),
        message: message,
        senderId: currentUser.id,
      },
    ]);
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
                ava={currChat.user.ava}
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
                  ) > 10 ||
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
      <form
        onKeyDown={(e) => {
          if (e.code === "Enter") handleSendMessage();
        }}
        onSubmit={handleSendMessage}
      >
        <ChatInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatBox;
