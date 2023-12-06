import React from "react";

const WhiteTextButton = ({ children, ...rest }) => {
  return (
    <button
      className="w-[140px] rounded-10 font-medium text-base text-white hover:brightness-105"
      {...rest}
    >
      {children}
    </button>
  );
};

export default WhiteTextButton;
