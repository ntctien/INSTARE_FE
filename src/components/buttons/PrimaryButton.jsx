import React from "react";

const PrimaryButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="px-10 py-1 rounded-5 font-medium text-base bg-red text-white hover:brightness-125"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
