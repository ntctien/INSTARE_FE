import React from "react";
import AuthInput from "~/components/auth/AuthInput";

const NewPassword = () => {
  return (
    <>
      <h1 className="title">New password</h1>
      <AuthInput
        password
        label={"New password"}
        placeholder={"6+ character"}
        custom={"mt-[28px]"}
      />
      <AuthInput
        password
        label={"Confirm your password"}
        placeholder={"6+ character"}
        custom={"mt-[20px]"}
      />
      <button className="auth-btn mt-[27px]">Confirm</button>
    </>
  );
};

export default NewPassword;
