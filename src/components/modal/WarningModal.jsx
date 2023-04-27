import React from "react";
import ModalWrapper from "./ModalWrapper";

const WarningModal = ({
  title,
  subtitle,
  secondaryBtnLabel,
  primaryBtnLabel,
  open,
  onCancel,
}) => {
  return (
    <ModalWrapper open={open} onCancel={onCancel}>
      <div className="bg-white font-ubuntu px-[40px] pt-[40px] pb-6 rounded-10">
        <h2 className="font-medium text-[28px] leading-8 text-center">
          {title}
        </h2>
        <p className="text-16 mt-[9px] text-center">{subtitle}</p>
        <div className="between-row gap-x-5 mt-[26px]">
          <button className="warning-btn warning-btn-secondary">
            {secondaryBtnLabel}
          </button>
          <button className="warning-btn warning-btn-primary hover-btn-primary">
            {primaryBtnLabel}
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default WarningModal;
