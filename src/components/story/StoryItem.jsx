import React from "react";

const StoryItem = ({ onClick, className, textColor }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center mt-[2px] cursor-pointer ${className}`}
    >
      <div className="w-[100px] h-[100px] bg-grey rounded-full border-3 border-white outline outline-2 outline-grey"></div>
      <p
        style={{ color: textColor }}
        className="text-[16px] leading-[20px] mt-[8px]"
      >
        username
      </p>
    </div>
  );
};

export default StoryItem;
