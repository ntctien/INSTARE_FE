import { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox, Spin } from "antd";
import AuthInput from "../components/auth/AuthInput";
import AuthWelcomeBoard from "../components/auth/AuthWelcomeBoard";
import backgroundImg from "../assets/login-bg.png";
import signIn from "~/api/services/auth/signIn";
import capitalizeFirstLetter from "~/utils/capitalizeFirstLetter";
import useSignIn from "~/hooks/useSignIn";

const SignIn = () => {
  const handleSignInSuccess = useSignIn();
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: null,
    password: null,
  });
  const [loading, setLoading] = useState(false);

  const validate = (name, value) => {
    if (value === "") {
      return "This field is required";
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

  const handleSignIn = async () => {
    await signIn(inputData.username, inputData.password)
      .then(({ data }) => {
        if (data.access_token) {
          handleSignInSuccess(data.access_token);
        }
      })
      .catch((err) => {
        const message = err.response.data.message;
        console.log(message);
        if (message === "Password incorrect")
          setErrors((prev) => {
            return { ...prev, password: message };
          });
        else if (message === "user's not exist")
          setErrors((prev) => {
            return { ...prev, username: capitalizeFirstLetter(message) };
          });
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errorObj, valid } = validateForm();
    if (valid) {
      setLoading(true);
      await handleSignIn();
      setLoading(false);
    } else {
      setErrors(errorObj);
    }
  };

  return (
    <>
      {/* Left Side */}
      <AuthWelcomeBoard
        backgroundImg={backgroundImg}
        title="Welcome back!"
        subtitle="It’s great to have you here"
        btnTitle="Don’t have an account?"
        btnLabel="Register here"
        btnPath={"/signup"}
        btnWidth={140}
      />
      {/* Right Side */}
      <div className="pl-[16%] pr-[18%] col-center">
        <Spin spinning={loading}>
          <form onSubmit={handleSubmit} className="col-center">
            <h1 className="auth-title">Sign In</h1>
            <AuthInput
              name={"username"}
              value={inputData.username}
              onChange={handleInputChange}
              error={errors.username}
              label="Username/Email address"
              placeholder={"Enter your username/email"}
              custom="mt-[46px]"
            />
            <AuthInput
              name={"password"}
              value={inputData.password}
              onChange={handleInputChange}
              error={errors.password}
              label="Password"
              placeholder={"Enter your password"}
              custom="mt-[20px]"
              password={true}
            />
            <div className="mt-[15px] row justify-between">
              <div className="row gap-x-[11px]">
                <Checkbox />
                <p className="text-16 md:text-14 text-input-label">
                  Remember me
                </p>
              </div>
              <Link to={"/reset-password"} className="text-16 md:text-14">
                Forgot password
              </Link>
            </div>
            <div className="auth-btn-container mt-[46px]">
              <button type="submit" className="auth-btn">
                Sign In
              </button>
            </div>
          </form>
        </Spin>
      </div>
    </>
  );
};

export default SignIn;
