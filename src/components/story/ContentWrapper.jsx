import React from "react";

const ContentWrapper = ({ children, title, className }) => {
  return (
    <div className="flex-1 flex flex-col">
      <h1 className="font-ubuntu font-bold text-32 mt-5 text-center">
        {title || "Create your story"}
      </h1>
      <div
        className={`flex-1 flex flex-col justify-center items-center ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
