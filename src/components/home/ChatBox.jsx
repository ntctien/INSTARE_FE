import React from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";
import ChatTime from "./ChatTime";

const messages = [
  { content: "Hello dear", fromSelf: false },
  { content: "Hi", fromSelf: true },
  { content: "My name is Tiên", fromSelf: false },
  { content: "What’s your name?", fromSelf: false },
  { content: "My name is Trang", fromSelf: true },
  {
    content: "I’m studying at University of Technology, how about you?",
    fromSelf: true,
  },
  { content: "Me too!!!", fromSelf: false },
  { content: "I think we should hang out some day", fromSelf: false },
];

const ChatBox = () => {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Messages */}
      <div className="px-2 flex flex-col gap-y-[10px] overflow-y-auto flex-1">
        <ChatTime />
        {messages.map((message, i) => (
          <Message
            key={i}
            content={message.content}
            fromSelf={message.fromSelf}
          />
        ))}
        <ChatTime />
        {messages.map((message, i) => (
          <Message
            key={i}
            content={message.content}
            fromSelf={message.fromSelf}
          />
        ))}
      </div>
      {/* Chat input */}
      <ChatInput />
    </div>
  );
};

export default ChatBox;
