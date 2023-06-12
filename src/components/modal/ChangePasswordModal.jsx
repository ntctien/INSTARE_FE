import passwordRule from "~/constants/passwordRule";
import AuthInput from "../auth/AuthInput";
import CloseModal from "./CloseModal";
import useForm from "~/hooks/useForm";
import changePassword from "~/api/services/user/changePassword";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Spin, message } from "antd";

const valuesObj = {
  oldPass: {
    require: true,
  },
  newPass: passwordRule,
  confirmPass: {
    require: true,
  },
};

const ChangePasswordModal = ({ open, onCancel }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { values, getInputProps, setFieldError, handleSubmit, clearForm } =
    useForm(valuesObj);
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async () => {
    setLoading(true);
    await changePassword(
      currentUser.token,
      values.oldPass,
      values.newPass,
      values.confirmPass
    )
      .then(() => {
        onCancel();
        clearForm();
        message.success("Password changed successfully!");
      })
      .catch((err) => {
        const message = err.response.data.message;
        if (message === "Old password incorrect")
          setFieldError("oldPass", "Incorrect old password");
      });
    setLoading(false);
  };

  const handleConfirmChange = async () => {
    if (values.confirmPass !== values.newPass) {
      setFieldError("confirmPass", "Password doesn't match");
    } else {
      setLoading(true);
      await handleChangePassword();
      setLoading(false);
    }
  };

  return (
    <CloseModal open={open} onCancel={onCancel} title={"Change password"}>
      <Spin spinning={loading}>
        <form
          onSubmit={(e) => handleSubmit(e, handleConfirmChange)}
          className="w-[480px] px-[20px] py-[25px]"
        >
          <div className="mx-[10px]">
            <AuthInput
              {...getInputProps("oldPass")}
              password
              label={"Old password"}
              placeholder={"Enter your password"}
            />
            <AuthInput
              {...getInputProps("newPass")}
              password
              label={"New password"}
              placeholder={"6+ character"}
              custom={"mt-5"}
            />
            <AuthInput
              {...getInputProps("confirmPass")}
              password
              label={"Confirm your password"}
              placeholder={"6+ character"}
              custom={"mt-5"}
            />
          </div>
          <button type="submit" className="primary-btn mt-[34px]">
            CONFIRM CHANGE
          </button>
        </form>
      </Spin>
    </CloseModal>
  );
};

export default ChangePasswordModal;
