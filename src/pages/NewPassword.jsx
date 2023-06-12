import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Spin, message } from "antd";
import newPasswordAfterVerify from "~/api/services/auth/newPasswordAfterVerify";
import AuthInput from "~/components/auth/AuthInput";
import passwordRule from "~/constants/passwordRule";
import useForm from "~/hooks/useForm";

const valuesObj = {
  password: passwordRule,
  confirmPassword: {
    require: true,
  },
};

const NewPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { values, getInputProps, setFieldError, handleSubmit } =
    useForm(valuesObj);
  const [loading, setLoading] = useState(false);

  const email = location.state;

  const handleNewPassword = async () => {
    setLoading(true);
    await newPasswordAfterVerify(email, values.password)
      .then(() => {
        navigate('/signin');
        message.success('Password changed successfully!')
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  const handleConfirm = async () => {
    if (values.confirmPassword !== values.password) {
      setFieldError("confirmPassword", "Password doesn't match");
    } else {
      await handleNewPassword();
    }
  };

  return (
    <Spin spinning={loading}>
      <form onSubmit={(e) => handleSubmit(e, handleConfirm)}>
        <h1 className="title">New password</h1>
        <AuthInput
          {...getInputProps("password")}
          password
          label={"New password"}
          placeholder={"6+ character"}
          custom={"mt-[28px]"}
        />
        <AuthInput
          {...getInputProps("confirmPassword")}
          password
          label={"Confirm your password"}
          placeholder={"6+ character"}
          custom={"mt-[20px]"}
        />
        <button type="submit" className="auth-btn mt-[27px]">
          Confirm
        </button>
      </form>
    </Spin>
  );
};

export default NewPassword;
