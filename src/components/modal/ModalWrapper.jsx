import React from "react";

const ModalWrapper = ({ children, open, onCancel }) => {
  if (open)
    return (
      <>
        <div
          className="w-screen h-screen bg-black50 absolute top-0 left-0"
          onClick={onCancel}
        ></div>
        <div className="absolute-center z-10">{children}</div>
      </>
    );
};

export default ModalWrapper;
