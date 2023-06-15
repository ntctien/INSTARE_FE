import React from "react";
import ModalWrapper from "./ModalWrapper";

const WarningModal = ({
  title,
  subtitle,
  secondaryBtnLabel,
  primaryBtnLabel,
  open,
  onCancel,
  onPrimaryBtnClick,
  onSecondaryBtnClick,
}) => {
  return (
    <ModalWrapper open={open} onCancel={onCancel}>
      <div className="bg-white font-ubuntu px-[40px] pt-[40px] pb-6 rounded-10">
        <h2 className="font-medium text-[28px] leading-8 text-center">
          {title}
        </h2>
        <p className="text-16 mt-[9px] text-center">
          {subtitle ?? "You won’t be able to undo this. "}
        </p>
        <div className="between-row gap-x-5 mt-[26px]">
          <button
            onClick={
              onSecondaryBtnClick != null ? onSecondaryBtnClick : onCancel
            }
            className="warning-btn warning-btn-secondary hover:border-blue"
          >
            {secondaryBtnLabel ?? "Not now"}
          </button>
          <button
            onClick={onPrimaryBtnClick}
            className="warning-btn warning-btn-primary hover-btn-primary"
          >
            {primaryBtnLabel ?? "Yes"}
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default WarningModal;
