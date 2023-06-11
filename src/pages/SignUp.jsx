import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import AuthWelcomeBoard from "../components/auth/AuthWelcomeBoard";
import AuthInput from "../components/auth/AuthInput";
import backgroundImg from "../assets/signup-bg.png";
import verifyEmailForSignUp from "~/api/services/auth/verifyEmailForSignUp";
import validateEmail from "~/utils/validateEmail";
import containsUpperCase from "~/utils/containsUpperCase";

const SignUp = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: null,
    username: null,
    password: null,
    confirmPassword: null,
  });
  const [loading, setLoading] = useState(false);

  const validate = (name, value) => {
    if (value === "") {
      return "This field is required";
    }
    switch (name) {
      case "email":
        if (!validateEmail(value)) return "Invalid email address";
        break;
      case "username":
        if (containsUpperCase(value))
          return "Username can't contain uppercase letters";
        if (!/^[a-zA-Z0-9\-_.]+$/.test(value))
          return "Only contain letters, numbers, dashes, underscores and periods";
        break;
      case "password":
        if (value.length < 6) return "Must contains 6+ characters";
        break;
      default:
        break;
    }
    return null;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInputData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (errors[name] != null) {
      setErrors((prev) => {
        return { ...prev, [name]: validate(name, value) };
      });
    }
  };

  const validateForm = () => {
    let errorObj = {};
    let valid = true;
    for (const inputField in inputData) {
      const error = validate(`${inputField}`, inputData[inputField]);
      if (error != null) valid = false;
      Object.assign(errorObj, {
        [inputField]: error,
      });
    }
    return { errorObj, valid };
  };

  const handleVerifyEmail = async () => {
    await verifyEmailForSignUp(
      inputData.email,
      inputData.password,
      inputData.username
    )
      .then(() => {
        navigate("/otp", {
          state: { inputData: inputData, purpose: "sign-up" },
        });
      })
      .catch((err) => {
        const message = err.response.data.message;
        if (message === "This username was taken")
          setErrors((prev) => {
            return { ...prev, username: message };
          });
        else if (message === "Credential taken")
          setErrors((prev) => {
            return { ...prev, email: "This email was taken" };
          });
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errorObj, valid } = validateForm();
    if (valid) {
      if (inputData.confirmPassword !== inputData.password) {
        setErrors((prev) => {
          return {
            ...prev,
            confirmPassword: "Password doesn't match",
          };
        });
      } else {
        setLoading(true);
        await handleVerifyEmail();
        setLoading(false);
      }
    } else {
      setErrors(errorObj);
    }
  };

  return (
    <>
      {/* Left Side */}
      <div className="pl-[10.8%] pr-[17%] col-center">
        <Spin spinning={loading}>
          <form onSubmit={handleSubmit} className="col-center">
            <h1 className="auth-title">Create an account</h1>
            <AuthInput
              name={"email"}
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Invalid email" },
              ]}
              label="Email"
              placeholder={"example@email.com"}
              value={inputData.email}
              onChange={handleInputChange}
              validator={(value) => {
                if (value === "") return "Email is required";
                if (!validateEmail(value)) return "Invalid email address";
              }}
              error={errors.email}
              custom="mt-[27px]"
            />
            <AuthInput
              name={"username"}
              rules={[
                { required: true, message: "Username is required" },
                {
                  validator: (_, value) => {
                    if (
                      !value ||
                      value.includes(" ") ||
                      /[A-Z]/.test(value) === false
                    ) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject();
                    }
                  },
                  message:
                    "Username should contain no spaces and all letters must be lowercase",
                },
              ]}
              label="Username"
              placeholder={"Enter your username"}
              value={inputData.username}
              onChange={handleInputChange}
              error={errors.username}
              custom="mt-[17px]"
            />
            <div className="flex items-start mt-[17px] gap-x-[6.5%]">
              <AuthInput
                name={"password"}
                label="Password"
                placeholder={"6+ character"}
                password
                value={inputData.password}
                onChange={handleInputChange}
                error={errors.password}
                custom={"flex-1"}
              />
              <AuthInput
                name={"confirmPassword"}
                label="Confirm password"
                placeholder={"6+ character"}
                password
                value={inputData.confirmPassword}
                onChange={handleInputChange}
                error={errors.confirmPassword}
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
