import React from "react";

const VideoSourceItem = ({ name, icon, selected, ...rest }) => {
  return (
    <button
      className={`col-center gap-y-2 bg-black50 rounded-10 border-2 ${
        selected ? "border-blue-darker" : "border-input-label"
      } hover:brightness-125 h-[120px] flex-1`}
      {...rest}
    >
      <div
        className={`w-[75px] aspect-square rounded-full center ${
          selected ? "bg-blue-darker" : "bg-input-label"
        }`}
      >
        <img src={icon} alt={name} />
      </div>
      <p className="font-inter font-semibold text-white text-16">{name}</p>
    </button>
  );
};

export default VideoSourceItem;
