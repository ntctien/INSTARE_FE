import React from "react";
import Avatar from "../Avatar";
import { Tooltip } from "antd";
import getMessageDateString from "~/utils/getMessageDateString";

const Message = ({
  fromSelf,
  ava,
  message,
  sameMoment,
  topOfMoment,
  sent,
  sending,
}) => {
  return (
    <>
      <div
        className={`flex items-start gap-x-[7px] ${
          topOfMoment ? "mt-[10px]" : "mt-[3px]"
        } ${fromSelf && "mr-0 ml-auto max-w-[72.5%]"}`}
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
            className={`px-[10px] py-[7px] rounded-lg border-1 border-pastel-purple-dark text-13 break-all ${
              fromSelf
                ? "bg-pastel-purple-dark text-white"
                : "max-w-[72.5%] text-black"
            }`}
          >
            {!message.message.includes("http://" || "https://") ? (
              <p>{message.message}</p>
            ) : message.message.includes(".jpg" || ".jpeg" || ".png") ||
              message.message.includes("blob") ? (
              <img src={message.message} alt="Message" className="w-[200px]" />
            ) : (
              <a
                style={{ display: "table-cell" }}
                href={message.message}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {message.message}
              </a>
            )}
          </div>
        </Tooltip>
      </div>
      {fromSelf && (sending || sent) && (
        <p className="text-right text-10 text-grey-dark mr-1 mt-1">
          {sending ? "Sending" : "Sent"}
        </p>
      )}
    </>
  );
};

export default Message;
