import React from "react";

const ModalWrapper = ({ children, open, onCancel }) => {
  if (open)
    return (
      <>
        <div
          className="w-screen h-screen bg-black50 fixed  top-0 left-0 z-10"
          onClick={onCancel}
        ></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 z-20">{children}</div>
      </>
    );
};

export default ModalWrapper;
