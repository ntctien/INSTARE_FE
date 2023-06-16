import React from "react";

const ChatTime = ({ time }) => {
  return (
    <div className="row justify-center gap-x-[5px] my-[7px] ml-[15px] mr-[7px]">
      <div className="divider" />
      <p className="text-10 text-grey-dark">{time}</p>
      <div className="divider" />
    </div>
  );
};

export default ChatTime;
