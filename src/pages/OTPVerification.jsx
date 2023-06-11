import { Spin, message } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import signUpAfterVerify from "~/api/services/auth/signUpAfterVerify";
import verifyEmailForSignUp from "~/api/services/auth/verifyEmailForSignUp";
import AuthInput from "~/components/auth/AuthInput";
import useSignIn from "~/hooks/useSignIn";

const OTPVerification = () => {
  const location = useLocation();
  const handleSignInSuccess = useSignIn();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { inputData, purpose } = location.state;

  const handleInputChange = (e) => {
    setOtp(e.target.value);

    if (error != null) {
      if (e.target.value !== "") setError(null);
    }
  };

  const handleSignUp = async () => {
    if (otp === "") setError("Please enter the OTP");
    else {
      setLoading(true);
      await signUpAfterVerify(inputData.email, parseInt(otp))
        .then(({ data }) => {
          if (data.access_token) {
            handleSignInSuccess(data.access_token);
          } else {
            if (data.message) setError(data.message);
          }
        })
        .catch(() => {
          setError("OTP is incorrect");
        });
      setLoading(false);
    }
  };

  const handleResendForSignUp = async () => {
    setLoading(true);
    await verifyEmailForSignUp(
      inputData.email,
      inputData.password,
      inputData.username
    )
      .then(() => {
        message.success("OTP resent!");
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (purpose) {
      case "sign-up":
        handleSignUp();
        break;

      default:
        break;
    }
  };

  const handleResend = () => {
    switch (purpose) {
      case "sign-up":
        handleResendForSignUp();
        break;

      default:
        break;
    }
  };

  return (
    <Spin spinning={loading}>
      <form onSubmit={handleSubmit}>
        <h1 className="title">OTP Verification</h1>
        <p className="subtitle">
          Enter the verification code sent to email {inputData.email}
        </p>
        <AuthInput
          placeholder={"Code"}
          value={otp}
          onChange={handleInputChange}
          error={error}
          custom={"mt-[25px]"}
        />
        <button type="submit" className="auth-btn mt-[21.3%]">
          Verify
        </button>
        <p className="text-16 md:text-14 text-grey-dark mt-2">
          Didn’t receive the OTP?{" "}
          <span
            onClick={handleResend}
            className="font-medium text-black cursor-pointer hover:text-blue-darker hover:animate-pulse"
          >
            RESEND OTP
          </span>
        </p>
      </form>
    </Spin>
  );
};

export default OTPVerification;
