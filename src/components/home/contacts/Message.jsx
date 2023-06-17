import React from "react";
import Avatar from "../Avatar";
import { Tooltip } from "antd";
import getMessageDateString from "~/utils/getMessageDateString";

const Message = ({ fromSelf, ava, message, sameMoment, topOfMoment }) => {
  return (
    <div
      className={`row gap-x-[7px] ${topOfMoment ? "mt-[10px]" : "mt-[3px]"} ${
        fromSelf && "mr-0 ml-auto max-w-[72.5%]"
      }`}
    >
      {/* Avatar */}
      {fromSelf || (
        <Avatar
          width={"25px"}
          ava={!sameMoment && ava}
          backgroundColor={sameMoment && "transparent"}
        />
      )}
      {/* Message content */}
      <Tooltip
        placement="left"
        title={getMessageDateString(message.createdAt)}
        arrow={false}
        color="rgba(0,0,0,0.25)"
      >
        <div
          className={`px-[10px] py-[7px] rounded-lg border-1 border-pastel-purple-dark text-13 ${
            fromSelf
              ? "bg-pastel-purple-dark text-white"
              : "max-w-[72.5%] text-black"
          }`}
        >
          {message.message}
        </div>
      </Tooltip>
    </div>
  );
};

export default Message;
