import { Spin } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import signUpAfterVerify from "~/api/services/auth/signUpAfterVerify";
import AuthInput from "~/components/auth/AuthInput";

const OTPVerification = () => {
  const location = useLocation();
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
      // await signUpAfterVerify(inputData.email, otp)
      //   .then(() => {
      //     //onSuccess
      //   })
      //   .catch((err) => {
      //     //Catch err
      //   });
      setLoading(false);
    }
  };

  const handleVerify = () => {
    switch (purpose) {
      case "sign-up":
        handleSignUp();
        break;

      default:
        break;
    }
  };

  return (
    <Spin spinning={loading}>
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
      <button onClick={handleVerify} className="auth-btn mt-[21.3%]">
        Verify
      </button>
      <p className="text-16 md:text-14 text-grey-dark mt-2">
        Didn’t receive the OTP?{" "}
        <span className="font-medium text-black">RESEND OTP</span>
      </p>
    </Spin>
  );
};

export default OTPVerification;
