import React from "react";
import Message from "./Message";
import plusIcon from "../../assets/plus.svg";

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
    <div className="flex flex-col flex-1">
      {/* Messages */}
      <div className="pl-2 pr-4 flex flex-col gap-y-[10px] flex-1">
        {/* Time */}
        <div className="row gap-x-[5px] my-[7px] ml-[15px] mr-[7px]">
          <div className="divider" />
          <p className="text-10 text-grey-dark">Monday 11:59 AM</p>
          <div className="divider" />
        </div>
        {messages.map((message, i) => (
          <Message
            key={i}
            content={message.content}
            fromSelf={message.fromSelf}
          />
        ))}
      </div>
      {/* Chat input */}
      <div className="row h-[50px] px-[8px] bg-[#D9D9D926] border-t-1 border-[#00000026]">
        <button className="w-[20px] h-[20px] bg-grey-dark rounded-full flex items-center justify-center">
          <img src={plusIcon} alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
