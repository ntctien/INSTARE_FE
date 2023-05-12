import React from "react";
import CloseButton from "../buttons/CloseButton";

const CloseModalContainer = ({ children, onCancel }) => {
  return (
    <>
      {children}
      {/* Close button */}
      <CloseButton
        onClick={onCancel}
        className="absolute top-[11.5px] right-[13.5px]"
      />
    </>
  );
};

export default CloseModalContainer;
