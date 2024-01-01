import React from "react";
import DefaultButton from "./DefaultButton";

const SignatureButton = ({ children, width, disabled, className, ...rest }) => {
  return (
    <DefaultButton
      disabled={disabled}
      style={{ fontWeight: 500, background: disabled && "#777777" }}
      className={`${
        disabled && "cursor-not-allowed hover:brightness-100"
      } primary-btn ${className}`}
      {...rest}
    >
      {children}
    </DefaultButton>
  );
};

export default SignatureButton;
