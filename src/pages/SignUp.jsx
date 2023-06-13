import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import AuthWelcomeBoard from "../components/auth/AuthWelcomeBoard";
import AuthInput from "../components/auth/AuthInput";
import backgroundImg from "../assets/signup-bg.png";
import verifyEmailForSignUp from "~/api/services/auth/verifyEmailForSignUp";
import validateEmail from "~/utils/validateEmail";
import useForm from "~/hooks/useForm";
import passwordRule from "~/constants/passwordRule";
import usernameRule from "~/constants/usernameRule";

const valuesObj = {
  email: {
    require: true,
    validator: (value) => {
      if (!validateEmail(value)) return "Invalid email address";
    },
  },
  username: usernameRule,
  password: passwordRule,
  confirmPassword: {
    require: true,
  },
};

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { values, getInputProps, setFieldError, handleSubmit } =
    useForm(valuesObj);

  const handleVerifyEmail = async () => {
    await verifyEmailForSignUp(values.email, values.password, values.username)
      .then(() => {
        navigate("/otp", {
          state: { inputData: values, purpose: "sign-up" },
        });
      })
      .catch((err) => {
        const message = err.response.data.message;
        if (message === "This username was taken")
          setFieldError("username", message);
        else if (message === "Credential taken")
          setFieldError("email", "This email was taken");
      });
  };

  const onSubmitValid = async () => {
    if (values.confirmPassword !== values.password) {
      setFieldError("confirmPassword", "Password doesn't match");
    } else {
      setLoading(true);
      await handleVerifyEmail();
      setLoading(false);
    }
  };

  return (
    <>
      {/* Left Side */}
      <div className="pl-[10.8%] pr-[17%] col-center">
        <Spin spinning={loading}>
          <form
            onSubmit={(e) => handleSubmit(e, onSubmitValid)}
            className="col-center"
          >
            <h1 className="auth-title">Create an account</h1>
            <AuthInput
              {...getInputProps("email")}
              label="Email"
              placeholder={"example@email.com"}
              custom="mt-[27px]"
            />
            <AuthInput
              label="Username"
              placeholder={"Enter your username"}
              {...getInputProps("username")}
              custom="mt-[17px]"
            />
            <div className="flex items-start mt-[17px] gap-x-[6.5%]">
              <AuthInput
                label="Password"
                placeholder={"6+ character"}
                password
                {...getInputProps("password")}
                custom={"flex-1"}
              />
              <AuthInput
                label="Confirm password"
                placeholder={"6+ character"}
                password
                {...getInputProps("confirmPassword")}
                custom={"flex-1"}
              />
            </div>
            <p className="text-16 md:text-14 text-grey-dark mt-7">
              By signing up, you agree to our{" "}
              <span className="text-black">Terms and Conditions</span> and{" "}
              <span className="text-black">Privacy Policy</span>
            </p>
            <div className="auth-btn-container mt-[6px]">
              <button type="submit" className="auth-btn">
                Sign Up
              </button>
            </div>
          </form>
        </Spin>
      </div>
      {/* Right Side */}
      <AuthWelcomeBoard
        backgroundImg={backgroundImg}
        title="Welcome to InStare!"
        subtitle="We invite you to join our community"
        btnTitle="Already have an account?"
        btnLabel="Sign in here"
        btnPath={"/signin"}
        btnWidth={120}
      />
    </>
  );
};

export default SignUp;
