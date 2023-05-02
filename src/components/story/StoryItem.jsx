import React from "react";

const StoryItem = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center mt-[2px] cursor-pointer"
    >
      <div className="w-[100px] h-[100px] bg-grey rounded-full border-3 border-white outline outline-2 outline-grey"></div>
      <p className="text-[16px] leading-[20px] mt-[8px]">username</p>
    </div>
  );
};

export default StoryItem;
