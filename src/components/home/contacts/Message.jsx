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
        className={`px-[10px] py-[7px] rounded-lg border-1 border-pastel-purple-dark text-13 ${
          fromSelf ? "bg-pastel-purple-dark text-white" : 'max-w-[72.5%] text-black'
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default Message;
