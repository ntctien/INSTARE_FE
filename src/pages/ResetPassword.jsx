import { Spin } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import verifyEmailForgotPassword from "~/api/services/auth/verifyEmailForgotPassword";
import AuthInput from "~/components/auth/AuthInput";
import useForm from "~/hooks/useForm";
import validateEmail from "~/utils/validateEmail";

const valuesObj = {
  email: {
    require: true,
    validator: (value) => {
      if (!validateEmail(value)) return "Invalid email address";
    },
  },
};

const ResetPassword = () => {
  const { values, getInputProps, setFieldError, handleSubmit } =
    useForm(valuesObj);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleVerifyEmail = async () => {
    setLoading(true);
    await verifyEmailForgotPassword(values.email)
      .then(() => {
        navigate("/otp", {
          state: { inputData: values, purpose: "reset-password" },
        });
      })
      .catch((err) => setFieldError("email", err.response.data.message));
    setLoading(false);
  };

  return (
    <Spin spinning={loading}>
      <h1 className="title">Reset password</h1>
      <p className="subtitle">
        Enter the email you used to sign up to InStare. We will send you a
        verification code to reset your password:
      </p>
      <form onSubmit={(e) => handleSubmit(e, handleVerifyEmail)}>
        <AuthInput
          {...getInputProps("email")}
          placeholder={"example@email.com"}
          custom={"mt-[7px]"}
        />
        <button type="submit" className="auth-btn mt-[19.8%]">
          Search for account
        </button>
      </form>
    </Spin>
  );
};

export default ResetPassword;
