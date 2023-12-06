import React from "react";

const SecondaryButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="px-10 py-1 rounded-5 font-medium text-base border-1 border-black hover:border-blue"
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
