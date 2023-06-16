import React from "react";
import Avatar from "../Avatar";

const Message = ({ fromSelf, ava, message }) => {
  return (
    <div
      className={`row gap-x-[7px] ${fromSelf && "mr-0 ml-auto max-w-[72.5%]"}`}
    >
      {/* Avatar */}
      {fromSelf || <Avatar width={"25px"} ava={ava} />}
      {/* Message content */}
      <div
        className={`px-[10px] py-[7px] rounded-lg border-1 border-pastel-purple-dark text-13 ${
          fromSelf
            ? "bg-pastel-purple-dark text-white"
            : "max-w-[72.5%] text-black"
        }`}
      >
        {message.message}
      </div>
    </div>
  );
};

export default Message;
