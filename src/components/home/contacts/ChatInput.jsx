import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Input } from "antd";
import EmojiPicker from "emoji-picker-react";
import useClickOutside from "~/hooks/useClickOutside";
import { emojiIcon } from "~/assets/message_icons";
import SendMediaButton from "./SendMediaButton";

const { TextArea } = Input;

const ChatInput = ({
  value,
  messages,
  onChange,
  sendMessage,
  userId,
  setMessages,
  setSendingQueue,
}) => {
  const [pickingEmoji, setPickingEmoji] = useState(false);
  const { clickOutsideRef } = useClickOutside(() => setPickingEmoji(false));
  const location = useLocation();

  const isInMessagePage = location.pathname.includes("message");

  return (
    <div className="row px-[8px] py-[10px] min-h-[50px] bg-[#D9D9D926] border-t-1 border-[#00000026]">
      <SendMediaButton
        userId={userId}
        messages={messages}
        setMessages={setMessages}
        setSendingQueue={setSendingQueue}
      />
      <div className="relative w-full mx-1">
        <form
          onKeyDown={(e) => {
            if (e.code === "Enter") sendMessage();
          }}
          onSubmit={sendMessage}
        >
          <TextArea
            autoSize
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === "Enter") e.preventDefault();
            }}
            className="chat-input"
          />
        </form>
        <div
          ref={clickOutsideRef}
          className="absolute top-1/2 right-1 -translate-y-1/2"
        >
          <button
            className="translate-y-1 hover:brightness-90"
            onClick={() => setPickingEmoji((prev) => !prev)}
          >
            <img src={emojiIcon} alt="Emoji" />
          </button>
          {pickingEmoji && (
            <div className="absolute top-0 right-0 -translate-y-full">
              <EmojiPicker
                emojiStyle="native"
                width={isInMessagePage ? 350 : 250}
                height={isInMessagePage ? 450 : 350}
                onEmojiClick={(emoji) => onChange(value + emoji.emoji)}
              />
            </div>
          )}
        </div>
      </div>
      <button onClick={sendMessage}>
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.26003 9H3.33336L1.68586 2.44584C1.67531 2.40775 1.66888 2.36863 1.66669 2.32917C1.64836 1.72834 2.31003 1.31167 2.88336 1.58667L18.3334 9L2.88336 16.4133C2.31669 16.6858 1.66336 16.2808 1.66669 15.6908C1.66838 15.6381 1.67764 15.5859 1.69419 15.5358L2.91669 11.5"
            stroke="#BFB2F3"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hover:stroke-[#947df1]"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChatInput;
