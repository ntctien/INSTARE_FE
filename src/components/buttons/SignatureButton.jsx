import React from "react";
import DefaultButton from "./DefaultButton";

const SignatureButton = ({ children, width, className, ...rest }) => {
  return (
    <DefaultButton
      style={{ fontWeight: 500 }}
      className={`primary-btn ${className}`}
      {...rest}
    >
      {children}
    </DefaultButton>
  );
};

export default SignatureButton;
