import { Checkbox } from "antd";
import AuthInput from "../components/auth/AuthInput";
import AuthWelcomeBoard from "../components/auth/AuthWelcomeBoard";
import backgroundImg from "../assets/login-bg.png";

const SignIn = () => {
  return (
    <>
      {/* Left Side */}
      <AuthWelcomeBoard
        backgroundImg={backgroundImg}
        title='Welcome back!'
        subtitle='It’s great to have you here'
        btnTitle='Don’t have an account?'
        btnLabel='Register here'
        btnPath={'/signup'}
        btnWidth={140}
      />
      {/* Right Side */}
      <div className="pl-[102px] pr-[118px] col-center">
        <h1 className="auth-title">Sign In</h1>
        <AuthInput
          label="Username/Email address"
          placeholder={"Enter your username/email"}
          custom="mt-[46px]"
        />
        <AuthInput
          label="Password"
          placeholder={"Enter your password"}
          custom="mt-[20px]"
          password={true}
        />
        <div className="mt-[15px] row justify-between">
          <div className="row gap-x-[11px]">
            <Checkbox />
            <p className="text-16 text-input-label">Remember me</p>
          </div>
          <button className="text-16">Forgot password</button>
        </div>
        <div className="auth-btn-container mt-[46px]">
          <button className="auth-btn">Sign In</button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
