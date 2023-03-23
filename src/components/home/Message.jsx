import React from "react";

const Message = ({ fromSelf, content }) => {
  return (
    <div className={`row gap-x-[7px] ${fromSelf && "mr-0 ml-auto max-w-[72.5%]"}`}>
      {/* Avatar */}
      {fromSelf || (
        <div className="w-[25px] h-[25px] bg-grey rounded-full"></div>
      )}
      {/* Message content */}
      <div
        className={`px-[10px] py-[7px] rounded-lg border-1 border-grey text-13 ${
          fromSelf ? "bg-grey" : 'max-w-[72.5%]'
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default Message;