import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="flex-1 flex flex-col">
      <h1 className="font-ubuntu font-bold text-32 mt-5 text-center">
        Create your story
      </h1>
      <div className="flex-1 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
