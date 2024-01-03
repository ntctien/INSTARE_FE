import React from "react";

const PostContainer = ({ children }) => {
  return (
    <div
      className="flex h-screen post-detail overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0%, rgba(150, 202, 247, 0.15) 0.01%, rgba(191, 178, 243, 0.15) 100%), #FFFFFF",
      }}
    >
      {children}
    </div>
  );
};

export default PostContainer;
